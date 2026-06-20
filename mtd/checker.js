/* ============================================================
   ReadyForMTD.co.uk - checker.js
   Client-side MTD for Income Tax readiness checker.
   No data leaves the browser. No localStorage of personal data.
   All threshold logic and result states in one config block.
   ============================================================ */

/* ============================================================
   CONFIG BLOCK - HMRC rule table + result-state definitions.
   This is the single source of truth for the tax logic.
   When HMRC updates thresholds, edit this block and update
   HMRC_LAST_CHECKED below.
   ============================================================ */

const HMRC_LAST_CHECKED = '2026-06-20'; // date this logic was last checked against GOV.UK guidance

const HMRC_SOURCES = {
  eligibility:   'https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax',
  qualifying:    'https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax',
  useMtd:        'https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax',
  useMtdBefore:  'https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/before-you-use-this-guide',
  quarterly:    'https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates',
  signup:        'https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax',
  chooseSoftware:'https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax',
  findSoftware:  'https://www.gov.uk/guidance/find-software-that-works-with-making-tax-digital-for-income-tax',
  exemption:     'https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax',
  penalty:       'https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax',
  policy:        'https://www.gov.uk/government/publications/extension-of-making-tax-digital-for-income-tax-self-assessment-to-sole-traders-and-landlords/making-tax-digital-for-income-tax-self-assessment-for-sole-traders-and-landlords',
  threshold20k:  'https://www.gov.uk/government/publications/making-tax-digital-for-income-tax-self-assessment-reducing-the-mandation-threshold-from-30000-to-20000-from-april-2028/reduction-of-the-mandation-threshold-from-30000-to-20000-from-april-2028',
  hmrcChecker:   'https://www.tax.service.gov.uk/guidance/check-if-you-need-to-use-making-tax-digital-for-income-tax/start/about-this-guidance'
};

// Phased rollout. "more than £X" wording per HMRC.
const THRESHOLD_TABLE = [
  { year: '2024/25', threshold: 50000, startDate: '6 April 2026', wave: 'April 2026', cohort: 'first' },
  { year: '2025/26', threshold: 30000, startDate: '6 April 2027', wave: 'April 2027', cohort: 'second' },
  { year: '2026/27', threshold: 20000, startDate: '6 April 2028', wave: 'April 2028', cohort: 'third' }
];

// Today's date for post-start-date logic. Uses real current date.
const TODAY = new Date();
const FIRST_WAVE_START = new Date('2026-04-06');
const FIRST_Q_DEADLINE = new Date('2026-08-07');

// Quarterly deadlines (standard update periods).
const QUARTERLY_DEADLINES = [
  { period: '6 April to 5 July',      deadline: '7 August' },
  { period: '6 April to 5 October',   deadline: '7 November' },
  { period: '6 April to 5 January',   deadline: '7 February' },
  { period: '6 April to 5 April',     deadline: '7 May (following the tax year)' }
];

// Income bands. banded buttons with optional exact.
const INCOME_BANDS = [
  { id: 'zero',      label: '£0',                      min: 0,     max: 0,      flag: 'none' },
  { id: '1-20',      label: '£1 to £20,000',           min: 1,     max: 20000,  flag: 'band' },
  { id: '20-30',     label: 'Over £20,000 to £30,000', min: 20001, max: 30000,  flag: 'band' },
  { id: '30-50',     label: 'Over £30,000 to £50,000', min: 30001, max: 50000,  flag: 'band' },
  { id: 'over50',    label: 'Over £50,000',            min: 50001, max: Infinity, flag: 'band' },
  { id: 'notsure',   label: 'Not sure',               min: null,  max: null,    flag: 'unsure' }
];

/* ============================================================
   STATE - collected answers. Stored in memory only, never persisted.
   ============================================================ */

const state = {
  scope: null,                // 'self' | 'client' | 'vat' | 'unsure'
  roles: [],                  // multi-select of income roles
  selfAssessment: null,       // 'filed' | 'registered' | 'new' | 'no' | 'unsure'
  figuresBasis: null,         // '2024/25' | '2025/26' | '2026/27' | 'estimate' | 'unsure'
  seIncomeBand: null,          // band id
  seIncomeExact: null,         // optional exact number
  propIncomeBand: null,        // band id
  propIncomeExact: null,
  jointProperty: false,
  propShareUnsure: false,
  ukResident: null,            // 'yes' | 'no' | 'unsure' (only if foreign property)
  accountingPeriod: null,      // 'full12' | 'shorter' | 'longer' | 'unsure'
  sourcesOngoing: null,        // 'all' | 'some' | 'none' | 'unsure'
  amendedReturn: null,         // 'no' | 'yes' | 'maybe' | 'unsure'
  hmrcLetter: null,             // 'yes' | 'no' | 'unsure'
  exemptionFlags: [],          // ['digital', 'no-ni', 'other', 'none', 'unsure']
  recordKeeping: null,         // 'paper' | 'spreadsheet' | 'software' | 'landlord-sw' | 'accountant' | 'mixed' | 'none'
  softwareReadiness: null,     // 'yes' | 'unsure-sw' | 'spreadsheet-bridge' | 'accountant' | 'no' | 'unsure'
  screenIndex: 0
};

/* ============================================================
   SCREEN DEFINITIONS - order + conditional display.
   Each screen has an id, and a `showIf` predicate.
   ============================================================ */

const SCREENS = [
  { id: 's0',  label: 'Scope',                 showIf: () => true },
  { id: 's1',  label: 'Your income',          showIf: () => state.scope === 'self' || state.scope === 'client' || state.scope === 'unsure' },
  { id: 's1b', label: 'UK tax residence',     showIf: () => state.roles.includes('foreign-property') },
  { id: 's2',  label: 'Self Assessment',      showIf: () => true },
  { id: 's3',  label: 'Tax year',              showIf: () => true },
  { id: 's3b', label: 'Trading period',        showIf: () => hasSEOrProperty() },
  { id: 's4',  label: 'Self-employment income', showIf: () => state.roles.includes('sole-trader') },
  { id: 's5',  label: 'Property income',       showIf: () => state.roles.includes('uk-property') || state.roles.includes('foreign-property') },
  { id: 's5b', label: 'Amended return',        showIf: () => hasSEOrProperty() && (state.figuresBasis === '2024/25' || state.figuresBasis === '2025/26' || state.figuresBasis === '2026/27') },
  { id: 's5c', label: 'HMRC letter',            showIf: () => hasSEOrProperty() },
  { id: 's6',  label: 'Ongoing sources',       showIf: () => hasSEOrProperty() },
  { id: 's7',  label: 'Exemptions',             showIf: () => true },
  { id: 's8',  label: 'Record keeping',        showIf: () => true },
  { id: 's9',  label: 'Software readiness',     showIf: () => true }
];

function hasSEOrProperty() {
  return state.roles.includes('sole-trader') || state.roles.includes('uk-property') || state.roles.includes('foreign-property');
}

/* ============================================================
   QUALIFYING INCOME CALCULATION
   qualifying = gross_self_employment + gross_property_share
   Excluded: PAYE, dividends, pensions, partnership share, ltd company.
   ============================================================ */

function getIncomeValue(bandId, exact) {
  if (exact !== null && exact !== undefined && exact !== '' && !isNaN(exact)) {
    return Number(exact);
  }
  const band = INCOME_BANDS.find(b => b.id === bandId);
  if (!band || band.flag === 'unsure' || band.min === null) return null;
  // use band midpoint as a conservative estimate for display
  if (band.max === Infinity) return band.min; // "over £50k" returns 50001 as floor
  if (band.min === 0 && band.max === 0) return 0;
  return Math.round((band.min + band.max) / 2);
}

function computeQualifyingIncome() {
  const se = (state.roles.includes('sole-trader'))
    ? getIncomeValue(state.seIncomeBand, state.seIncomeExact)
    : 0;
  const prop = (state.roles.includes('uk-property') || state.roles.includes('foreign-property'))
    ? getIncomeValue(state.propIncomeBand, state.propIncomeExact)
    : 0;
  if (se === null || prop === null) return null;
  return se + prop;
}

/* ============================================================
   RESULT STATE LOGIC (A-G)
   Order matters: check F (out of scope) and E (no SA history)
   before income-based A/B/C, then G (edge case) overlays.
   ============================================================ */

function determineResult() {
  const qi = computeQualifyingIncome();
  const hasQualifyingSource = hasSEOrProperty();
  const edgeFlags = collectEdgeFlags();

  // State F: probably out of scope for this checker.
  if (!hasQualifyingSource) {
    return buildResult('F', qi, edgeFlags);
  }
  // If only "none of these / not sure" selected with no qualifying source.
  if (state.roles.length === 0 || state.roles.every(r => ['paye','dividends','pension','partnership','ltd-only','none'].includes(r))) {
    return buildResult('F', qi, edgeFlags);
  }

  // State E: not enough Self Assessment history yet.
  if (state.selfAssessment === 'new' || state.selfAssessment === 'registered' || state.selfAssessment === 'no') {
    // Has relevant income but no submitted return yet.
    if (hasQualifyingSource) {
      return buildResult('E', qi, edgeFlags);
    }
  }

  // State D: not currently in scope based on income entered.
  // But we must check the relevant year's threshold first for A/B/C.
  const yearBasis = state.figuresBasis;
  const thresholdRow = THRESHOLD_TABLE.find(t => t.year === yearBasis);

  // If figures basis is estimate or unsure, we use the most recent entered year
  // but flag confidence lower.
  let provisionalResult = null;

  if (thresholdRow && qi !== null) {
    if (qi > thresholdRow.threshold) {
      // Check earlier waves first: a user could be caught by an earlier year
      // but we only asked for one year. We check the entered year.
      // If 2024/25 over 50k => State A. If 2025/26 over 30k => State B. If 2026/27 over 20k => State C.
      if (yearBasis === '2024/25') provisionalResult = 'A';
      else if (yearBasis === '2025/26') provisionalResult = 'B';
      else if (yearBasis === '2026/27') provisionalResult = 'C';
    } else {
      // Income at or below threshold for this year.
      // Could still be in a later wave. We return D with a caveat.
      provisionalResult = 'D';
    }
  }

  // If exact income equals threshold exactly, treat as boundary => G.
  if (qi !== null && thresholdRow && qi === thresholdRow.threshold) {
    return buildResult('G', qi, edgeFlags, { boundary: true, thresholdRow });
  }

  // If figures basis is estimate/unsure, we still produce a provisional
  // but mark confidence as "indicative".
  if (yearBasis === 'estimate' || yearBasis === 'unsure') {
    // Use 2025/26 as a reasonable default for indicative, but flag.
    // Actually, we cannot route without a year. Return G with an indicative flag.
    if (provisionalResult === null) {
      return buildResult('G', qi, edgeFlags, { indicativeNoYear: true });
    }
  }

  // If no income entered (not sure bands), route to G.
  if (qi === null && hasQualifyingSource) {
    return buildResult('G', qi, edgeFlags, { incomeUnknown: true });
  }

  // If all sources ceased => D/G.
  if (state.sourcesOngoing === 'none') {
    return buildResult('D', qi, edgeFlags, { allCeased: true });
  }

  // If hard edge flags exist, overlay G.
  if (edgeFlags.length > 0 && provisionalResult && (provisionalResult === 'A' || provisionalResult === 'B' || provisionalResult === 'C')) {
    // Keep the A/B/C but add edge warning panel. We return the primary
    // state but mark confidence as "needs HMRC check".
    return buildResult(provisionalResult, qi, edgeFlags, { edgeOverlay: true });
  }
  if (edgeFlags.length > 0 && !provisionalResult) {
    return buildResult('G', qi, edgeFlags);
  }

  if (provisionalResult) {
    return buildResult(provisionalResult, qi, edgeFlags);
  }

  // Fallback: not enough info.
  return buildResult('G', qi, edgeFlags, { fallback: true });
}

function collectEdgeFlags() {
  const flags = [];
  if (state.exemptionFlags.includes('digital')) flags.push({ key: 'digital', label: 'Possible digital exclusion', source: HMRC_SOURCES.exemption });
  if (state.exemptionFlags.includes('no-ni')) flags.push({ key: 'no-ni', label: 'No National Insurance number', source: HMRC_SOURCES.exemption });
  if (state.exemptionFlags.includes('other')) flags.push({ key: 'other', label: 'Possible exemption for another reason', source: HMRC_SOURCES.exemption });
  if (state.jointProperty) flags.push({ key: 'joint', label: 'Jointly owned property', source: HMRC_SOURCES.qualifying });
  if (state.propShareUnsure) flags.push({ key: 'share-unsure', label: 'Property share not known', source: HMRC_SOURCES.qualifying });
  if (state.roles.includes('foreign-property')) flags.push({ key: 'foreign', label: 'Foreign property income', source: HMRC_SOURCES.qualifying });
  if (state.roles.includes('partnership')) flags.push({ key: 'partnership', label: 'Partnership income (individual share does not count the same way)', source: HMRC_SOURCES.qualifying });
  if (state.sourcesOngoing === 'some') flags.push({ key: 'some-ceased', label: 'One or more sources ceased', source: HMRC_SOURCES.qualifying });
  if (state.sourcesOngoing === 'unsure') flags.push({ key: 'ongoing-unsure', label: 'Not sure whether sources are ongoing', source: HMRC_SOURCES.qualifying });
  if (state.ukResident === 'no' || state.ukResident === 'unsure') flags.push({ key: 'residence', label: 'UK tax residence uncertain', source: HMRC_SOURCES.qualifying });
  if (state.accountingPeriod && state.accountingPeriod !== 'full12') flags.push({ key: 'period', label: 'Accounting period not a full 12 months', source: HMRC_SOURCES.qualifying });
  if (state.amendedReturn === 'yes' || state.amendedReturn === 'maybe') flags.push({ key: 'amended', label: 'Amended return may affect qualifying income', source: HMRC_SOURCES.qualifying });
  if (state.hmrcLetter === 'yes') flags.push({ key: 'letter', label: 'You have had an MTD letter from HMRC', source: HMRC_SOURCES.eligibility });
  return flags;
}

/* ============================================================
   BUILD RESULT OBJECT
   Returns a structured result the renderer uses.
   ============================================================ */

function buildResult(stateKey, qi, edgeFlags, extra = {}) {
  const meta = RESULT_META[stateKey];
  let confidence = meta.confidence;
  let startDate = null;
  let wave = null;

  if (stateKey === 'A' || stateKey === 'B' || stateKey === 'C') {
    const row = THRESHOLD_TABLE.find(t => {
      if (stateKey === 'A') return t.year === '2024/25';
      if (stateKey === 'B') return t.year === '2025/26';
      if (stateKey === 'C') return t.year === '2026/27';
      return false;
    });
    startDate = row.startDate;
    wave = row.wave;

    // Post-start-date logic for State A (today is past 6 April 2026).
    if (stateKey === 'A' && TODAY >= FIRST_WAVE_START) {
      // Already in the April 2026 wave.
      confidence = 'medium';
      // Check if first quarterly deadline has passed too.
      if (TODAY >= FIRST_Q_DEADLINE) {
        extra.postFirstQ = true;
      }
      extra.alreadyStarted = true;
    }

    if (extra.edgeOverlay) confidence = 'needs HMRC check';
    if (state.figuresBasis === 'estimate' || state.figuresBasis === 'unsure') confidence = 'indicative only';
  }

  if (stateKey === 'G') confidence = 'needs HMRC check';
  if (stateKey === 'D') confidence = 'medium';
  if (stateKey === 'E') confidence = 'high';
  if (stateKey === 'F') confidence = 'high';

  return {
    stateKey,
    meta,
    qi,
    edgeFlags,
    extra,
    confidence,
    startDate,
    wave,
    today: TODAY,
    lastChecked: HMRC_LAST_CHECKED
  };
}

const RESULT_META = {
  A: {
    headline: 'You are likely in the April 2026 MTD for Income Tax wave.',
    status: 'likely in scope',
    colour: 'teal',
    confidence: 'high',
    blurb: 'Based on your answers, your qualifying income is more than £50,000 on 2024/25 figures. HMRC says the first MTD for Income Tax wave starts from 6 April 2026 for sole traders and landlords above this threshold.'
  },
  B: {
    headline: 'You are likely in the April 2027 MTD for Income Tax wave.',
    status: 'likely in scope',
    colour: 'teal',
    confidence: 'high',
    blurb: 'Based on your answers, your qualifying income is more than £30,000 on 2025/26 figures. HMRC says the second wave starts from 6 April 2027 for sole traders and landlords above this threshold.'
  },
  C: {
    headline: 'You are likely in the April 2028 MTD for Income Tax wave.',
    status: 'likely in scope',
    colour: 'teal',
    confidence: 'high',
    blurb: 'Based on your answers, your qualifying income is more than £20,000 on 2026/27 figures. The April 2028 wave is announced, but not yet fully legislated. HMRC says the threshold will drop to over £20,000 from 6 April 2028.'
  },
  D: {
    headline: 'Based on your answers, you do not appear to be in the current MTD for Income Tax rollout yet.',
    status: 'likely not in scope',
    colour: 'amber',
    confidence: 'medium',
    blurb: 'Your qualifying income is at or below the relevant threshold for the tax year you selected. This could change if your gross self-employment or property income rises above a future threshold.'
  },
  E: {
    headline: 'MTD for Income Tax usually starts after you have submitted a Self Assessment tax return.',
    status: 'not yet',
    colour: 'amber',
    confidence: 'high',
    blurb: 'You have relevant self-employment or property income, but HMRC says you do not need to start MTD for Income Tax until after your first Self Assessment tax return. Your future MTD position will depend on your qualifying income on the relevant return.'
  },
  F: {
    headline: 'This checker may not apply to your situation.',
    status: 'probably out of scope',
    colour: 'amber',
    confidence: 'high',
    blurb: 'Based on your answers, you do not have self-employment or property income that counts toward the MTD for Income Tax qualifying-income threshold. MTD for Income Tax applies to sole traders and landlords with self-employment or property income.'
  },
  G: {
    headline: 'Your answer includes something that may need a HMRC or adviser check.',
    status: 'edge case',
    colour: 'amber',
    confidence: 'needs HMRC check',
    blurb: 'We can show a provisional indication, but one or more of your answers falls into an area where HMRC guidance or a qualified adviser should confirm your position. This checker cannot decide edge cases for you.'
  }
};

/* ============================================================
   RENDERING - builds the DOM for each screen and the result.
   The checker is a single card with animated screen swaps.
   ============================================================ */

let currentScreenIdx = 0;
let visibleScreens = [];

function computeVisibleScreens() {
  visibleScreens = SCREENS.filter(s => s.showIf());
  return visibleScreens;
}

function renderProgress() {
  const total = visibleScreens.length;
  const done = currentScreenIdx;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const bar = document.getElementById('progress-bar');
  const txt = document.getElementById('progress-text');
  if (bar) bar.style.width = pct + '%';
  if (txt) txt.textContent = 'Step ' + (done + 1) + ' of ' + total;
}

function showScreen(idx) {
  // idx is within visibleScreens
  currentScreenIdx = idx;
  const screen = visibleScreens[idx];
  const body = document.getElementById('checker-body');
  // hide all
  body.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  // build screen content if not already
  let el = document.getElementById(screen.id);
  if (!el) {
    el = buildScreen(screen);
    body.appendChild(el);
  }
  el.classList.add('active');
  // focus management: move focus to the screen question
  setTimeout(() => {
    const q = el.querySelector('.screen-q');
    if (q) q.setAttribute('tabindex', '-1'), q.focus();
  }, 50);
  renderProgress();
  updateNav();
  // fire analytics
  trackEvent('checker_step', { step: screen.id, label: screen.label });
  if (idx === 0) trackEvent('checker_start');
  // scroll into view on mobile
  if (window.innerWidth < 760) {
    const card = document.querySelector('.checker-card');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateNav() {
  const back = document.getElementById('btn-back');
  const next = document.getElementById('btn-next');
  if (!back || !next) return;
  const isLast = currentScreenIdx === visibleScreens.length - 1;
  const isFirst = currentScreenIdx === 0;
  back.style.visibility = isFirst ? 'hidden' : 'visible';
  if (isLast) {
    next.textContent = 'See my result';
    next.classList.remove('btn-secondary');
    next.classList.add('btn-clay');
    next.setAttribute('aria-label', 'Show my MTD readiness result');
  } else {
    next.textContent = 'Continue';
    next.classList.remove('btn-clay');
    next.classList.add('btn-primary');
  }
  // disable next until the current screen has a valid answer
  next.disabled = !screenAnswered(visibleScreens[currentScreenIdx]);
}

function screenAnswered(screen) {
  switch (screen.id) {
    case 's0': return !!state.scope;
    case 's1': return state.roles.length > 0;
    case 's1b': return !!state.ukResident;
    case 's2': return !!state.selfAssessment;
    case 's3': return !!state.figuresBasis;
    case 's3b': return !!state.accountingPeriod;
    case 's4': return !!state.seIncomeBand;
    case 's5': return !!state.propIncomeBand;
    case 's5b': return !!state.amendedReturn;
    case 's5c': return !!state.hmrcLetter;
    case 's6': return !!state.sourcesOngoing;
    case 's7': return state.exemptionFlags.length > 0;
    case 's8': return !!state.recordKeeping;
    case 's9': return !!state.softwareReadiness;
    default: return true;
  }
}

/* ============================================================
   SCREEN BUILDERS - each returns a DOM element.
   ============================================================ */

function buildScreen(screen) {
  const el = document.createElement('div');
  el.className = 'screen';
  el.id = screen.id;
  el.setAttribute('role', 'group');
  el.setAttribute('aria-label', screen.label);
  switch (screen.id) {
    case 's0':  buildS0(el); break;
    case 's1':  buildS1(el); break;
    case 's1b': buildS1b(el); break;
    case 's2':  buildS2(el); break;
    case 's3':  buildS3(el); break;
    case 's3b': buildS3b(el); break;
    case 's4':  buildS4(el); break;
    case 's5':  buildS5(el); break;
    case 's5b': buildS5b(el); break;
    case 's5c': buildS5c(el); break;
    case 's6':  buildS6(el); break;
    case 's7':  buildS7(el); break;
    case 's8':  buildS8(el); break;
    case 's9':  buildS9(el); break;
  }
  return el;
}

function q(el, text) {
  const h = document.createElement('div');
  h.className = 'screen-q';
  h.textContent = text;
  el.appendChild(h);
  return h;
}
function helper(el, text) {
  const p = document.createElement('div');
  p.className = 'screen-helper';
  p.innerHTML = text;
  el.appendChild(p);
  return p;
}
function optsWrap(el, multi = false) {
  const w = document.createElement('div');
  w.className = multi ? 'opts opts-multi' : 'opts';
  w.setAttribute('role', multi ? 'group' : 'radiogroup');
  w.setAttribute('aria-label', 'Answer options');
  el.appendChild(w);
  return w;
}

function option(w, id, label, note, multi) {
  const b = document.createElement('button');
  b.className = 'opt';
  b.type = 'button';
  b.dataset.opt = id;
  b.setAttribute(multi ? 'aria-pressed' : 'aria-checked', 'false');
  const dot = document.createElement('span');
  dot.className = multi ? 'check' : 'radio';
  dot.setAttribute('aria-hidden', 'true');
  b.appendChild(dot);
  const lab = document.createElement('span');
  lab.className = 'opt-label';
  lab.textContent = label;
  if (note) {
    const n = document.createElement('span');
    n.className = 'opt-note';
    n.textContent = note;
    lab.appendChild(n);
  }
  b.appendChild(lab);
  w.appendChild(b);
  return b;
}

// Screen 0: Scope
function buildS0(el) {
  q(el, 'What are you checking?');
  helper(el, 'This checker covers MTD for Income Tax, which affects some sole traders and landlords. MTD for VAT is separate.');
  const w = optsWrap(el);
  option(w, 'self', 'MTD for Income Tax for myself');
  option(w, 'client', 'MTD for Income Tax for a client or someone else');
  option(w, 'vat', 'MTD for VAT', 'This checker is for Income Tax, not VAT. We will point you to the right GOV.UK page.');
  option(w, 'unsure', 'Not sure', 'We will explain the difference and continue.');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true');
    b.classList.add('selected');
    state.scope = b.dataset.opt;
    if (state.scope === 'vat') {
      // show out-of-scope panel inline, then stop
      showVatPanel(el);
    } else {
      removeVatPanel(el);
    }
    updateNav();
  }));
  // If the user already answered, preselect
  if (state.scope) {
    const b = w.querySelector('[data-opt="' + state.scope + '"]');
    if (b) b.setAttribute('aria-checked','true'), b.classList.add('selected');
    if (state.scope === 'vat') showVatPanel(el);
  }
}

function showVatPanel(el) {
  removeVatPanel(el);
  const p = document.createElement('div');
  p.className = 'info-panel blue';
  p.id = 'vat-panel';
  p.innerHTML = '<strong>Out of scope.</strong> This checker is for MTD for Income Tax, not VAT returns. For MTD for VAT, read the official guidance: <a href="' + HMRC_SOURCES.eligibility + '" target="_blank" rel="noopener noreferrer">GOV.UK MTD for Income Tax eligibility</a>. If you are not sure which applies to you, choose "Not sure" above and continue.';
  el.appendChild(p);
}
function removeVatPanel(el) {
  const p = document.getElementById('vat-panel');
  if (p) p.remove();
}

// Screen 1: Income role (multi-select)
function buildS1(el) {
  q(el, 'Which of these describe you?');
  helper(el, 'Select all that apply. PAYE, dividends and pensions do not count toward the MTD qualifying-income threshold, though they may still matter for your tax return. <a href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">See what counts as qualifying income on GOV.UK</a>.');
  const w = optsWrap(el, true);
  option(w, 'sole-trader', 'I am a sole trader or self-employed', null, true);
  option(w, 'uk-property', 'I have UK property or rental income', null, true);
  option(w, 'foreign-property', 'I have foreign property income', null, true);
  option(w, 'paye', 'I am employed through PAYE', 'Does not count toward the MTD threshold.', true);
  option(w, 'dividends', 'I receive dividends', 'Does not count toward the MTD threshold.', true);
  option(w, 'pension', 'I receive pension income', 'State and private pensions do not count.', true);
  option(w, 'partnership', 'I have partnership income', 'An individual partner\'s share of profit does not count the same way. Personal self-employment or property income can still count.', true);
  option(w, 'ltd-only', 'I run a limited company only', 'MTD for Income Tax usually does not apply to limited companies.', true);
  option(w, 'none', 'None of these, or not sure', null, true);
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.opt;
    const pressed = b.getAttribute('aria-pressed') === 'true';
    if (id === 'none') {
      // exclusive
      w.querySelectorAll('.opt').forEach(o => {
        o.setAttribute('aria-pressed','false'); o.classList.remove('selected');
        const oid = o.dataset.opt;
        if (state.roles.includes(oid)) state.roles = state.roles.filter(r => r !== oid);
      });
      if (!pressed) {
        b.setAttribute('aria-pressed','true'); b.classList.add('selected');
        state.roles = ['none'];
      } else {
        state.roles = [];
      }
    } else {
      // toggle, and clear 'none' if something else is chosen
      if (state.roles.includes('none')) state.roles = state.roles.filter(r => r !== 'none');
      const noneBtn = w.querySelector('[data-opt="none"]');
      if (noneBtn) { noneBtn.setAttribute('aria-pressed','false'); noneBtn.classList.remove('selected'); }
      if (!pressed) {
        b.setAttribute('aria-pressed','true'); b.classList.add('selected');
        state.roles.push(id);
      } else {
        b.setAttribute('aria-pressed','false'); b.classList.remove('selected');
        state.roles = state.roles.filter(r => r !== id);
      }
    }
    updateNav();
  }));
  // preselect
  state.roles.forEach(id => {
    const b = w.querySelector('[data-opt="' + id + '"]');
    if (b) { b.setAttribute('aria-pressed','true'); b.classList.add('selected'); }
  });
}

// Screen 1b: UK tax residence (conditional on foreign property)
function buildS1b(el) {
  q(el, 'Were you UK tax resident in the relevant tax year?');
  helper(el, 'This only appears because you selected foreign property income. If you were UK tax resident, HMRC counts UK and foreign property income on your Self Assessment return. If you were not UK resident, the rules differ. <a href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK qualifying income guidance</a>.');
  const w = optsWrap(el);
  option(w, 'yes', 'Yes, I was UK tax resident');
  option(w, 'no', 'No, I was not UK tax resident');
  option(w, 'unsure', 'Not sure');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.ukResident = b.dataset.opt;
    updateNav();
  }));
  if (state.ukResident) {
    const b = w.querySelector('[data-opt="' + state.ukResident + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 2: Self Assessment status
function buildS2(el) {
  q(el, 'Have you registered for Self Assessment and submitted a tax return before?');
  helper(el, 'HMRC says you do not need to start MTD for Income Tax until after your first Self Assessment tax return, and sign-up requires a recent submitted return. <a href="' + HMRC_SOURCES.signup + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK sign-up guidance</a>.');
  const w = optsWrap(el);
  option(w, 'filed', 'Yes, I have submitted a Self Assessment tax return');
  option(w, 'registered', 'I am registered but have not submitted my first return yet');
  option(w, 'new', 'I expect to register, or I am new to Self Assessment');
  option(w, 'no', 'No');
  option(w, 'unsure', 'Not sure');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.selfAssessment = b.dataset.opt;
    updateNav();
  }));
  if (state.selfAssessment) {
    const b = w.querySelector('[data-opt="' + state.selfAssessment + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 3: Tax year / figures basis
function buildS3(el) {
  q(el, 'Which figures are you using?');
  helper(el, 'HMRC uses your Self Assessment return for a specific tax year to decide your start date. 2024/25 figures are used for the April 2026 wave. 2025/26 for April 2027. 2026/27 for April 2028. If you use an estimate, the result is indicative only.');
  const w = optsWrap(el);
  option(w, '2024/25', '2024/25 tax return figures', 'Used for the April 2026 wave (over £50,000).');
  option(w, '2025/26', '2025/26 tax return figures', 'Used for the April 2027 wave (over £30,000).');
  option(w, '2026/27', '2026/27 tax return figures', 'Used for the April 2028 wave (over £20,000). Announced, not yet fully legislated.');
  option(w, 'estimate', 'Current estimate, or not from a submitted return', 'Indicative only. HMRC will use the relevant tax return.');
  option(w, 'unsure', 'Not sure');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.figuresBasis = b.dataset.opt;
    updateNav();
  }));
  if (state.figuresBasis) {
    const b = w.querySelector('[data-opt="' + state.figuresBasis + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 3b: Accounting period length
function buildS3b(el) {
  q(el, 'Was your trading or property period roughly a full 12 months?');
  helper(el, 'HMRC may annualise income for shorter or longer accounting periods. If your period was not a standard 12 months, your qualifying income calculation may need an HMRC or adviser check. <a href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK qualifying income guidance</a>.');
  const w = optsWrap(el);
  option(w, 'full12', 'Yes, roughly a full 12 months');
  option(w, 'shorter', 'Shorter than 12 months', 'Income may need annualising.');
  option(w, 'longer', 'Longer than 12 months', 'Income may need annualising.');
  option(w, 'unsure', 'Not sure');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.accountingPeriod = b.dataset.opt;
    updateNav();
  }));
  if (state.accountingPeriod) {
    const b = w.querySelector('[data-opt="' + state.accountingPeriod + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 4: Self-employment gross income
function buildS4(el) {
  q(el, 'What was your gross self-employment income before expenses?');
  helper(el, 'Gross income means income before expenses. It is not your profit. Use your turnover. <a href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">See the GOV.UK example</a>.');
  const w = optsWrap(el);
  INCOME_BANDS.forEach(b => option(w, b.id, b.label));
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.seIncomeBand = b.dataset.opt;
    updateNav();
  }));
  if (state.seIncomeBand) {
    const b = w.querySelector('[data-opt="' + state.seIncomeBand + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
  // Optional exact field
  const row = document.createElement('div');
  row.className = 'field-row';
  row.innerHTML = '<label for="se-exact">Optional: enter an exact amount if you know it</label><input id="se-exact" class="input-money" type="number" min="0" step="100" inputmode="numeric" placeholder="e.g. 54000" value="' + (state.seIncomeExact || '') + '">';
  el.appendChild(row);
  const inp = row.querySelector('input');
  inp.addEventListener('input', () => {
    state.seIncomeExact = inp.value === '' ? null : Number(inp.value);
    updateNav();
  });
  // Example
  const ex = document.createElement('div');
  ex.className = 'info-panel teal';
  ex.innerHTML = 'Example: £31,000 turnover from self-employment plus £21,000 rent received equals £52,000 qualifying income.';
  el.appendChild(ex);
}

// Screen 5: Property gross income
function buildS5(el) {
  q(el, 'What was your share of gross property or rental income before expenses?');
  helper(el, 'Use your share of the rent or property income, before expenses. For jointly owned property, only your share counts. <a href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK qualifying income guidance</a>.');
  const w = optsWrap(el);
  INCOME_BANDS.forEach(b => option(w, b.id, b.label));
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.propIncomeBand = b.dataset.opt;
    updateNav();
  }));
  if (state.propIncomeBand) {
    const b = w.querySelector('[data-opt="' + state.propIncomeBand + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
  // Optional exact
  const row = document.createElement('div');
  row.className = 'field-row';
  row.innerHTML = '<label for="prop-exact">Optional: enter an exact amount if you know it</label><input id="prop-exact" class="input-money" type="number" min="0" step="100" inputmode="numeric" placeholder="e.g. 21000" value="' + (state.propIncomeExact || '') + '">';
  el.appendChild(row);
  const inp = row.querySelector('input');
  inp.addEventListener('input', () => {
    state.propIncomeExact = inp.value === '' ? null : Number(inp.value);
    updateNav();
  });
  // Joint ownership + share unsure
  const c1 = document.createElement('label');
  c1.className = 'check-row';
  c1.innerHTML = '<input type="checkbox" id="joint-prop"><span>This is from jointly owned property.</span>';
  el.appendChild(c1);
  const cb1 = c1.querySelector('input');
  cb1.checked = state.jointProperty;
  cb1.addEventListener('change', () => { state.jointProperty = cb1.checked; });
  const c2 = document.createElement('label');
  c2.className = 'check-row';
  c2.innerHTML = '<input type="checkbox" id="share-unsure"><span>I am not sure what my share is.</span>';
  el.appendChild(c2);
  const cb2 = c2.querySelector('input');
  cb2.checked = state.propShareUnsure;
  cb2.addEventListener('change', () => { state.propShareUnsure = cb2.checked; });
}

// Screen 5b: Amended return
function buildS5b(el) {
  q(el, 'Are these figures from an amended Self Assessment return, or might they change?');
  helper(el, 'GOV.UK says amendments can affect qualifying income and start date. If an amendment increases income above a threshold after the relevant tax year starts, it will not be considered for that tax year. This is a nuance, so we flag it. <a href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK guidance</a>.');
  const w = optsWrap(el);
  option(w, 'no', 'No, these are original figures');
  option(w, 'yes', 'Yes, the return was amended');
  option(w, 'maybe', 'Maybe, I might amend or I am not sure');
  option(w, 'unsure', 'Not sure');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.amendedReturn = b.dataset.opt;
    updateNav();
  }));
  if (state.amendedReturn) {
    const b = w.querySelector('[data-opt="' + state.amendedReturn + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 5c: HMRC letter
function buildS5c(el) {
  q(el, 'Have you had an MTD letter from HMRC?');
  helper(el, 'HMRC writes to some sole traders and landlords before their start date. It remains your responsibility to check and sign up even if you have not had a letter. <a href="' + HMRC_SOURCES.eligibility + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK eligibility guidance</a>.');
  const w = optsWrap(el);
  option(w, 'yes', 'Yes, I have had an MTD letter');
  option(w, 'no', 'No, I have not had a letter');
  option(w, 'unsure', 'Not sure');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.hmrcLetter = b.dataset.opt;
    updateNav();
  }));
  if (state.hmrcLetter) {
    const b = w.querySelector('[data-opt="' + state.hmrcLetter + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 6: Ongoing / ceased sources
function buildS6(el) {
  q(el, 'Are the self-employment or property sources you entered still ongoing?');
  helper(el, 'If all sources have ceased, you may not need MTD for Income Tax. If some have ceased but you still have a continuing source, HMRC has specific rules. <a href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK guidance on ceased sources</a>.');
  const w = optsWrap(el);
  option(w, 'all', 'Yes, all are still ongoing');
  option(w, 'some', 'One or more have ceased, but I still have at least one source');
  option(w, 'none', 'All self-employment and property sources have ceased');
  option(w, 'unsure', 'Not sure');
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.sourcesOngoing = b.dataset.opt;
    updateNav();
  }));
  if (state.sourcesOngoing) {
    const b = w.querySelector('[data-opt="' + state.sourcesOngoing + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 7: Exemptions / digital exclusion
function buildS7(el) {
  q(el, 'Do any of these apply to you?');
  helper(el, 'HMRC decides exemptions. This checker cannot confirm an exemption. Selecting any option routes you to HMRC guidance. <a href="' + HMRC_SOURCES.exemption + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK exemption guidance</a>.');
  const w = optsWrap(el, true);
  option(w, 'digital', 'I may be digitally excluded', 'Age, disability, health, religion, or lack of internet access may make digital tools unreasonable.', true);
  option(w, 'no-ni', 'I do not have a National Insurance number', null, true);
  option(w, 'other', 'I think I may be exempt for another reason', null, true);
  option(w, 'none', 'None of these', null, true);
  option(w, 'unsure', 'Not sure', null, true);
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.opt;
    const pressed = b.getAttribute('aria-pressed') === 'true';
    // 'none' and 'unsure' are exclusive-ish; we allow toggling but clear others
    if (id === 'none' || id === 'unsure') {
      // clear all others
      w.querySelectorAll('.opt').forEach(o => {
        o.setAttribute('aria-pressed','false'); o.classList.remove('selected');
        const oid = o.dataset.opt;
        if (state.exemptionFlags.includes(oid)) state.exemptionFlags = state.exemptionFlags.filter(r => r !== oid);
      });
      if (!pressed) {
        b.setAttribute('aria-pressed','true'); b.classList.add('selected');
        state.exemptionFlags = [id];
      } else { state.exemptionFlags = []; }
    } else {
      // clear none/unsure
      ['none','unsure'].forEach(x => {
        if (state.exemptionFlags.includes(x)) state.exemptionFlags = state.exemptionFlags.filter(r => r !== x);
        const nb = w.querySelector('[data-opt="' + x + '"]');
        if (nb) { nb.setAttribute('aria-pressed','false'); nb.classList.remove('selected'); }
      });
      if (!pressed) {
        b.setAttribute('aria-pressed','true'); b.classList.add('selected');
        state.exemptionFlags.push(id);
      } else {
        b.setAttribute('aria-pressed','false'); b.classList.remove('selected');
        state.exemptionFlags = state.exemptionFlags.filter(r => r !== id);
      }
    }
    updateNav();
  }));
  state.exemptionFlags.forEach(id => {
    const b = w.querySelector('[data-opt="' + id + '"]');
    if (b) { b.setAttribute('aria-pressed','true'); b.classList.add('selected'); }
  });
}

// Screen 8: Record keeping
function buildS8(el) {
  q(el, 'How do you keep records now?');
  helper(el, 'This does not affect your eligibility. It helps us tailor your next steps.');
  const w = optsWrap(el);
  const opts = [
    ['paper','Paper or manual notes'],
    ['spreadsheet','Spreadsheet'],
    ['software','Accounting software'],
    ['landlord-sw','Landlord or property software'],
    ['accountant','My accountant or bookkeeper handles it'],
    ['mixed','Mixed methods'],
    ['none','I do not keep regular records yet']
  ];
  opts.forEach(([id,label]) => option(w, id, label));
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.recordKeeping = b.dataset.opt;
    updateNav();
  }));
  if (state.recordKeeping) {
    const b = w.querySelector('[data-opt="' + state.recordKeeping + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

// Screen 9: Software readiness
function buildS9(el) {
  q(el, 'Do you already have software or help that can handle MTD for Income Tax?');
  helper(el, 'This does not affect your eligibility. It helps us suggest next steps. HMRC-recognised software can keep digital records, send quarterly updates, and submit the tax return. <a href="' + HMRC_SOURCES.chooseSoftware + '" target="_blank" rel="noopener noreferrer">Read the GOV.UK software guidance</a>.');
  const w = optsWrap(el);
  const opts = [
    ['yes','Yes, I use software that says it supports MTD for Income Tax'],
    ['unsure-sw','I use software, but I am not sure if it supports MTD for Income Tax'],
    ['spreadsheet-bridge','I use spreadsheets and may need bridging software'],
    ['accountant','My accountant or bookkeeper will handle it'],
    ['no','No, not yet'],
    ['unsure','Not sure']
  ];
  opts.forEach(([id,label]) => option(w, id, label));
  w.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    w.querySelectorAll('.opt').forEach(o => { o.setAttribute('aria-checked','false'); o.classList.remove('selected'); });
    b.setAttribute('aria-checked','true'); b.classList.add('selected');
    state.softwareReadiness = b.dataset.opt;
    updateNav();
  }));
  if (state.softwareReadiness) {
    const b = w.querySelector('[data-opt="' + state.softwareReadiness + '"]');
    if (b) { b.setAttribute('aria-checked','true'); b.classList.add('selected'); }
  }
}

/* ============================================================
   RESULT RENDERER
   Builds the full result page inside the checker card.
   ============================================================ */

function renderResult() {
  const result = determineResult();
  const body = document.getElementById('checker-body');
  body.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  // hide nav
  const nav = document.querySelector('.checker-nav');
  if (nav) nav.style.display = 'none';
  // hide progress
  const prog = document.querySelector('.checker-progress');
  if (prog) prog.style.display = 'none';
  const reset = document.querySelector('.checker-reset');
  if (reset) reset.style.display = 'none';

  // build result
  let resEl = document.getElementById('result-screen');
  if (!resEl) {
    resEl = document.createElement('div');
    resEl.id = 'result-screen';
    resEl.className = 'screen';
    body.appendChild(resEl);
  }
  resEl.innerHTML = '';
  resEl.classList.add('active');

  // 1. Status badge
  const status = document.createElement('div');
  status.className = 'result-status';
  const badge = document.createElement('span');
  badge.className = 'badge badge-' + result.meta.colour;
  badge.textContent = result.meta.status;
  status.appendChild(badge);
  resEl.appendChild(status);

  // 2. Headline
  const h = document.createElement('div');
  h.className = 'result-headline';
  h.textContent = result.meta.headline;
  resEl.appendChild(h);

  // 3. Confidence + last checked
  const conf = document.createElement('div');
  conf.className = 'result-confidence';
  conf.innerHTML = '<span><strong>Confidence:</strong> ' + result.confidence + '</span><span><strong>Checked against HMRC guidance:</strong> ' + HMRC_LAST_CHECKED + '</span>';
  resEl.appendChild(conf);

  // Post-start-date variant for State A
  if (result.extra.alreadyStarted) {
    const panel = document.createElement('div');
    panel.className = 'callout trust';
    panel.innerHTML = '<p>You appear to already be in the April 2026 wave. You should already be keeping digital records. ' + (result.extra.postFirstQ ? 'Your first quarterly update deadline (7 August 2026) has passed. File it as soon as possible. ' : 'Your first quarterly update is due 7 August 2026. ') + 'If you have not signed up yet, <a href="' + HMRC_SOURCES.signup + '" target="_blank" rel="noopener noreferrer">read the GOV.UK sign-up guidance now</a>.</p>';
    resEl.appendChild(panel);
  }

  // 4. Qualifying income breakdown
  if (result.qi !== null && (result.stateKey === 'A' || result.stateKey === 'B' || result.stateKey === 'C' || result.stateKey === 'D' || result.stateKey === 'G')) {
    const sec = document.createElement('div');
    sec.className = 'result-section';
    sec.innerHTML = '<h3>Your qualifying income calculation</h3>';
    const tbl = document.createElement('table');
    tbl.className = 'income-breakdown';
    let rows = '';
    if (state.roles.includes('sole-trader')) {
      const seVal = getIncomeValue(state.seIncomeBand, state.seIncomeExact);
      rows += '<tr><td>Gross self-employment income (before expenses)</td><td class="num">' + formatMoney(seVal) + '</td></tr>';
    }
    if (state.roles.includes('uk-property') || state.roles.includes('foreign-property')) {
      const pVal = getIncomeValue(state.propIncomeBand, state.propIncomeExact);
      rows += '<tr><td>Gross property income, your share (before expenses)</td><td class="num">' + formatMoney(pVal) + '</td></tr>';
    }
    rows += '<tr class="total"><td>Combined qualifying income</td><td class="num">' + formatMoney(result.qi) + '</td></tr>';
    // excluded
    const excluded = [];
    if (state.roles.includes('paye')) excluded.push('PAYE employment income');
    if (state.roles.includes('dividends')) excluded.push('Dividends');
    if (state.roles.includes('pension')) excluded.push('State and private pensions');
    if (state.roles.includes('partnership')) excluded.push('Individual partnership profit share');
    if (state.roles.includes('ltd-only')) excluded.push('Limited company salary and dividends');
    excluded.forEach(x => rows += '<tr class="excluded"><td>' + x + ' (not counted for threshold)</td><td class="num">not added</td></tr>');
    tbl.innerHTML = '<thead><tr><th>Income source</th><th class="num">Amount</th></tr></thead><tbody>' + rows + '</tbody>';
    sec.appendChild(tbl);
    const note = document.createElement('p');
    note.className = 'muted';
    note.style.fontSize = '.8125rem';
    note.style.marginTop = '10px';
    note.innerHTML = 'HMRC generally uses gross self-employment and property income before expenses for the MTD for Income Tax threshold. This checker does not calculate your tax or profit. <a class="source-link" href="' + HMRC_SOURCES.qualifying + '" target="_blank" rel="noopener noreferrer">GOV.UK qualifying income</a>';
    sec.appendChild(note);
    resEl.appendChild(sec);
  }

  // 5. Why you got this result
  const why = document.createElement('div');
  why.className = 'result-section';
  why.innerHTML = '<h3>Why you got this result</h3><p>' + result.meta.blurb + ' <a class="source-link" href="' + HMRC_SOURCES.eligibility + '" target="_blank" rel="noopener noreferrer">GOV.UK eligibility</a></p>';
  resEl.appendChild(why);

  // 6. Deadline / calendar panel for in-scope A/B/C
  if ((result.stateKey === 'A' || result.stateKey === 'B' || result.stateKey === 'C') && result.startDate) {
    const cal = document.createElement('div');
    cal.className = 'result-section';
    cal.innerHTML = '<h3>Key deadlines</h3><p style="font-size:.9375rem;color:var(--steel)">Start date: <strong>' + result.startDate + '</strong>. Quarterly update deadlines (standard periods):</p>';
    const grid = document.createElement('div');
    grid.className = 'deadline-grid';
    QUARTERLY_DEADLINES.forEach(qd => {
      const cell = document.createElement('div');
      cell.className = 'deadline-cell';
      cell.innerHTML = '<div class="q">' + qd.period + '</div><div class="d">' + qd.deadline + '</div>';
      grid.appendChild(cell);
    });
    cal.appendChild(grid);
    const final = document.createElement('p');
    final.style.fontSize = '.8125rem';
    final.style.color = 'var(--muted)';
    final.style.marginTop = '10px';
    final.innerHTML = 'Final declaration (tax return) and payment deadline remains 31 January following the tax year. For the April 2026 cohort: tax return for 2026/27 is due 31 January 2028. <a class="source-link" href="' + HMRC_SOURCES.useMtdBefore + '" target="_blank" rel="noopener noreferrer">GOV.UK first-year table</a>';
    cal.appendChild(final);

    // 2026/27 soft-landing note
    if (result.stateKey === 'A') {
      const soft = document.createElement('div');
      soft.className = 'info-panel amber';
      soft.style.marginTop = '12px';
      soft.innerHTML = '<strong>Soft landing for 2026/27:</strong> There are no penalty points for late quarterly updates in the 2026/27 tax year. Final declaration and late payment penalties still apply. <a class="source-link" href="' + HMRC_SOURCES.penalty + '" target="_blank" rel="noopener noreferrer">GOV.UK penalties</a>';
      cal.appendChild(soft);
    }
    resEl.appendChild(cal);
  }

  // 7. Next 3-5 actions
  const act = document.createElement('div');
  act.className = 'result-section';
  act.innerHTML = '<h3>Next steps</h3>';
  const list = document.createElement('ol');
  list.className = 'action-list';
  const actions = buildActionList(result);
  actions.forEach(a => {
    const li = document.createElement('li');
    li.innerHTML = a;
    list.appendChild(li);
  });
  act.appendChild(list);
  resEl.appendChild(act);

  // 8. Edge-case warning panel (only if triggered)
  if (result.edgeFlags && result.edgeFlags.length > 0) {
    const edge = document.createElement('div');
    edge.className = 'result-section';
    edge.innerHTML = '<h3>Edge case warnings</h3>';
    const panel = document.createElement('div');
    panel.className = 'callout warning';
    let html = '<p>Your answer includes something that may need a HMRC or adviser check. This checker cannot decide edge cases for you.</p><ul style="margin-top:8px;padding-left:1.2em">';
    result.edgeFlags.forEach(f => {
      html += '<li style="margin-bottom:4px">' + f.label + ' <a class="source-link" href="' + f.source + '" target="_blank" rel="noopener noreferrer">GOV.UK</a></li>';
    });
    html += '</ul>';
    panel.innerHTML = html;
    edge.appendChild(panel);
    resEl.appendChild(edge);
  }

  // 9. Software readiness panel
  const sw = document.createElement('div');
  sw.className = 'result-section';
  sw.innerHTML = '<h3>Software readiness</h3><p style="font-size:.9375rem;color:var(--steel)">MTD software needs to keep digital records, send quarterly updates, and support the final tax return. HMRC does not recommend any product. <a class="source-link" href="' + HMRC_SOURCES.findSoftware + '" target="_blank" rel="noopener noreferrer">GOV.UK software finder</a></p>';
  resEl.appendChild(sw);

  // 10. Result disclaimer
  const disc = document.createElement('div');
  disc.className = 'callout disclaimer';
  disc.innerHTML = '<p>Your result is an estimate based on the figures you entered. If your income sources are mixed, jointly owned, recently started or ceased, or if you may be exempt, check HMRC guidance or speak to a qualified adviser before relying on this result.</p>';
  resEl.appendChild(disc);

  // 11. Verify with HMRC link
  const verify = document.createElement('div');
  verify.style.textAlign = 'center';
  verify.style.marginTop = 'var(--space-3)';
  verify.innerHTML = '<p style="font-size:.9375rem;color:var(--steel)">Always verify your result against the <a href="' + HMRC_SOURCES.hmrcChecker + '" target="_blank" rel="noopener noreferrer"><strong>official HMRC checker on GOV.UK</strong></a>.</p>';
  resEl.appendChild(verify);

  // 12. Email opt-in (after result)
  const email = document.createElement('div');
  email.className = 'email-block';
  email.innerHTML = '<h4>Optional: get a reminder or copy</h4><p>Email is optional and only after your result. We do not store your answers. No pre-ticked boxes.</p>';
  const consents = document.createElement('div');
  consents.className = 'email-consents';
  consents.innerHTML =
    '<label><input type="checkbox" name="em-result"><span><strong>Email me this result.</strong> Service message, one-off.</span></label>' +
    '<label><input type="checkbox" name="em-reminders"><span><strong>Send me MTD deadline reminders.</strong> Periodic service reminders before my quarterly dates.</span></label>' +
    '<label><input type="checkbox" name="em-marketing"><span><strong>Send me product updates and guides.</strong> Marketing. You can unsubscribe at any time.</span></label>';
  email.appendChild(consents);
  const field = document.createElement('div');
  field.className = 'email-field';
  field.innerHTML = '<input type="email" name="em-addr" placeholder="your@email.co.uk" aria-label="Email address"><button class="btn btn-primary btn-sm" id="em-submit" disabled>Send</button>';
  email.appendChild(field);
  resEl.appendChild(email);
  // wire email submit
  const submitBtn = field.querySelector('#em-submit');
  const addrInp = field.querySelector('input');
  const checks = consents.querySelectorAll('input[type=checkbox]');
  function updateEmailBtn() {
    const anyChecked = Array.from(checks).some(c => c.checked);
    const validEmail = addrInp.value && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addrInp.value);
    submitBtn.disabled = !(anyChecked && validEmail);
  }
  checks.forEach(c => c.addEventListener('change', updateEmailBtn));
  addrInp.addEventListener('input', updateEmailBtn);
  submitBtn.addEventListener('click', () => {
    if (submitBtn.disabled) return;
    const which = Array.from(checks).filter(c => c.checked).map(c => c.name);
    trackEvent('email_optin', { which });
    email.innerHTML = '<p style="color:var(--teal-deep);font-weight:600">Thanks. If you asked for a result copy or reminders, we will be in touch. This is a demo build, so no email was actually sent or stored.</p>';
  });

  // 13. Print / copy buttons
  const pc = document.createElement('div');
  pc.style.display = 'flex';
  pc.style.gap = '10px';
  pc.style.justifyContent = 'center';
  pc.style.marginTop = 'var(--space-3)';
  pc.style.flexWrap = 'wrap';
  pc.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="window.print()">Print result</button><button class="btn btn-secondary btn-sm" id="copy-result">Copy summary</button>';
  resEl.appendChild(pc);
  document.getElementById('copy-result').addEventListener('click', copyResultSummary);

  // 14. Restart button
  const restart = document.createElement('div');
  restart.style.textAlign = 'center';
  restart.style.marginTop = 'var(--space-3)';
  restart.innerHTML = '<button class="btn btn-ghost btn-sm" id="restart-btn">Start again</button>';
  resEl.appendChild(restart);
  document.getElementById('restart-btn').addEventListener('click', resetChecker);

  // scroll to top of card
  const card = document.querySelector('.checker-card');
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // analytics
  trackEvent('checker_complete', { state: result.stateKey });
  trackEvent('result_state', { state: result.stateKey, confidence: result.confidence });
}

function buildActionList(result) {
  const actions = [
    'Check your result against the <a href="' + HMRC_SOURCES.hmrcChecker + '" target="_blank" rel="noopener noreferrer">official HMRC checker on GOV.UK</a>.',
    'Confirm your gross self-employment and property income from the relevant Self Assessment return.',
    'Decide how you will keep digital records before your start date.'
  ];
  // record-keeping tailored
  if (state.recordKeeping === 'paper' || state.recordKeeping === 'none') {
    actions.push('Start moving from paper to digital records before your start date.');
  } else if (state.recordKeeping === 'spreadsheet') {
    actions.push('Check whether <a href="' + HMRC_SOURCES.chooseSoftware + '" target="_blank" rel="noopener noreferrer">bridging software</a> is suitable for your records, or whether all-in-one software is simpler.');
  } else if (state.recordKeeping === 'software' || state.recordKeeping === 'landlord-sw') {
    actions.push('Check that your current software is listed in the <a href="' + HMRC_SOURCES.findSoftware + '" target="_blank" rel="noopener noreferrer">HMRC software finder</a> and supports MTD for Income Tax.');
  } else if (state.recordKeeping === 'accountant') {
    actions.push('Ask your accountant what they will handle, what you still need to record, and whether any software access is required.');
  } else {
    actions.push('Check whether your software or accountant can handle MTD for Income Tax.');
  }
  // software readiness tailored
  if (state.softwareReadiness === 'no' || state.softwareReadiness === 'unsure' || state.softwareReadiness === 'unsure-sw') {
    actions.push('Use the <a href="' + HMRC_SOURCES.findSoftware + '" target="_blank" rel="noopener noreferrer">GOV.UK software finder</a> to check compatible software before signing up.');
  }
  // in-scope: add quarterly deadline to calendar
  if (result.stateKey === 'A' || result.stateKey === 'B' || result.stateKey === 'C') {
    actions.push('Add your quarterly update deadlines (7 Aug, 7 Nov, 7 Feb, 7 May) to your calendar.');
  }
  // State E: add register/file
  if (result.stateKey === 'E') {
    actions.push('Register and file Self Assessment as required. <a href="' + HMRC_SOURCES.signup + '" target="_blank" rel="noopener noreferrer">Use HMRC sign-up guidance</a> once you have filed.');
  }
  // State F: redirect
  if (result.stateKey === 'F') {
    actions.length = 0;
    actions.push('This checker is for MTD for Income Tax, which applies to sole traders and landlords with self-employment or property income. If you think you might be affected, <a href="' + HMRC_SOURCES.eligibility + '" target="_blank" rel="noopener noreferrer">read the GOV.UK eligibility guidance</a>.');
    actions.push('If you are VAT-registered, read the <a href="https://www.gov.uk/guidance/making-tax-digital-for-vat" target="_blank" rel="noopener noreferrer">GOV.UK MTD for VAT guidance</a> instead.');
  }
  // State G: HMRC check
  if (result.stateKey === 'G') {
    actions.push('Because your answer includes an edge case, <a href="' + HMRC_SOURCES.eligibility + '" target="_blank" rel="noopener noreferrer">check HMRC guidance</a> or speak to a qualified adviser before relying on this result.');
  }
  // cap at 5
  return actions.slice(0, 5);
}

function formatMoney(v) {
  if (v === null || v === undefined || isNaN(v)) return 'Not entered';
  return '\u00A3' + v.toLocaleString('en-GB');
}

function copyResultSummary() {
  const result = determineResult();
  const lines = [];
  lines.push('ReadyForMTD.co.uk result summary');
  lines.push('State: ' + result.stateKey + ' - ' + result.meta.headline);
  lines.push('Confidence: ' + result.confidence);
  lines.push('Checked against HMRC guidance: ' + HMRC_LAST_CHECKED);
  if (result.qi !== null) lines.push('Qualifying income: ' + formatMoney(result.qi));
  if (result.startDate) lines.push('Likely start: ' + result.startDate);
  lines.push('This is an estimate, not tax advice. Verify with HMRC.');
  const txt = lines.join('\n');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => {
      const btn = document.getElementById('copy-result');
      if (btn) { btn.textContent = 'Copied'; setTimeout(() => btn.textContent = 'Copy summary', 1800); }
    }).catch(() => fallbackCopy(txt));
  } else {
    fallbackCopy(txt);
  }
}
function fallbackCopy(txt) {
  const ta = document.createElement('textarea');
  ta.value = txt; ta.style.position='fixed'; ta.style.left='-9999px';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); } catch(e) {}
  ta.remove();
  const btn = document.getElementById('copy-result');
  if (btn) { btn.textContent = 'Copied'; setTimeout(() => btn.textContent = 'Copy summary', 1800); }
}

/* ============================================================
   NAVIGATION WIRING
   ============================================================ */

function wireNav() {
  const back = document.getElementById('btn-back');
  const next = document.getElementById('btn-next');
  const reset = document.getElementById('btn-reset');
  if (back) back.addEventListener('click', () => {
    if (currentScreenIdx > 0) showScreen(currentScreenIdx - 1);
  });
  if (next) next.addEventListener('click', () => {
    // first recompute visible screens in case conditional screens appeared
    computeVisibleScreens();
    if (currentScreenIdx < visibleScreens.length - 1) {
      showScreen(currentScreenIdx + 1);
    } else {
      // last screen -> result
      renderResult();
    }
  });
  if (reset) reset.addEventListener('click', resetChecker);
}

function resetChecker() {
  // clear state
  Object.keys(state).forEach(k => {
    if (k === 'roles' || k === 'exemptionFlags') state[k] = [];
    else if (k === 'screenIndex') state[k] = 0;
    else state[k] = null;
  });
  currentScreenIdx = 0;
  // clear DOM
  const body = document.getElementById('checker-body');
  body.innerHTML = '';
  // restore nav + progress
  const nav = document.querySelector('.checker-nav');
  if (nav) nav.style.display = '';
  const prog = document.querySelector('.checker-progress');
  if (prog) prog.style.display = '';
  const reset = document.querySelector('.checker-reset');
  if (reset) reset.style.display = '';
  computeVisibleScreens();
  showScreen(0);
  trackEvent('checker_reset');
}

/* ============================================================
   ANALYTICS - Plausible custom events.
   Replace the endpoint with your Plausible instance as needed.
   This is a no-op if Plausible is not loaded.
   ============================================================ */

function trackEvent(name, props) {
  if (typeof window.plausible === 'function') {
    try { window.plausible(name, { props: props || {} }); } catch(e) {}
  }
  // local debug log (remove in production if desired)
  if (window.location.search.indexOf('debug=1') !== -1) {
    console.log('[event]', name, props || {});
  }
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  computeVisibleScreens();
  wireNav();
  showScreen(0);
  // last-checked date in hero/elsewhere
  document.querySelectorAll('[data-last-checked]').forEach(el => {
    el.textContent = HMRC_LAST_CHECKED;
  });
});
