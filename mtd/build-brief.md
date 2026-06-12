# ReadyForMTD.co.uk — Build Brief

**For Claude.** This is the actionable build document. Full research at `Brain/03_Resources/Theo/MTD Checker/`.

## What to build

A **static site at ReadyForMTD.co.uk** with 6 pages, a simple JavaScript-based MTD eligibility checker, optional email capture, and a small paid setup-pack offer.

Lean validation asset only. Not a full product.

## Pages

### 1. Home / checker page (`/`)
- Free, plain-English MTD for Income Tax readiness checker
- 5–7 questions max
- **No UTR, National Insurance number, HMRC login or email required for result**
- Result states:
  - A: Likely in scope April 2026 (over £50k on 2024/25)
  - B: Likely in scope April 2027 (over £30k on 2025/26)
  - C: Likely in scope April 2028 (over £20k on 2026/27)
  - D: Not currently in scope
  - E: Not enough Self Assessment history yet
  - F: Probably out of scope
  - G: Edge case / needs HMRC check
- Shows qualifying-income calculation (gross self-employment + gross property income)
- Links to exact GOV.UK source pages
- Clear "not tax advice" disclaimers throughout
- Optional email capture after result (for deadline reminders / setup-pack offer)

### 2. MTD for sole traders (`/mtd-for-sole-traders/`)
- Audience-specific guide: what does MTD mean for sole traders, thresholds, timeline, next steps
- SEO target: "MTD for sole traders", "making tax digital for self employed"

### 3. MTD for landlords (`/mtd-for-landlords/`)
- Audience-specific guide: what does MTD mean for landlords, property income thresholds, timeline
- SEO target: "MTD for landlords", "making tax digital for landlords", "mtd for landlords software"

### 4. MTD deadlines (`/mtd-deadlines/`)
- Clear deadline table for each wave
- Quarterly update dates, final return dates
- SEO target: "mtd deadlines 2026", "making tax digital deadlines"

### 5. MTD software (`/mtd-software/`)
- Neutral software comparison / info page
- Covers: FreeAgent, Xero, QuickBooks, Sage, Coconut, Clear Books, ANNA Money
- Transparent affiliate cards where programmes accept us
- SEO target: "mtd software", "free mtd software", "mtd software for landlords"

### 6. MTD setup checklist (`/mtd-setup-checklist/`)
- Practical readiness pack landing page
- Setup-pack offer here (£7–£15)
- SEO target: "making tax digital checklist", "mtd readiness checklist"

## Checker question flow

### Screen 0: Scope confirmation
- What are you checking? (MTD for Income Tax / MTD for VAT / Not sure)
- VAT → out of scope panel with GOV.UK link

### Screen 1: Income role
- Which describe you? (sole trader, UK property, foreign property, PAYE, dividends, pension, partnership, limited company only)
- Multi-select. PAYE/dividends/pension shown as "don't count for threshold"

### Screen 2: Self Assessment status
- Have you submitted a Self Assessment return? (Yes / Registered but not filed / New / No / Not sure)

### Screen 3: Tax year basis
- Which figures are you using? (2024/25 / 2025/26 / 2026/27 / Estimate / Not sure)

### Screen 4: Self-employment gross income (conditional)
- Banded buttons: £0 / £1–20k / £20–30k / £30–50k / Over £50k / Not sure
- Optional exact amount field

### Screen 5: Property gross income (conditional)
- Same bands, plus joint ownership checkbox
- "Use your share of rent/income before expenses"

### Screen 6: Sources still ongoing?
- Yes / Some ceased / All ceased / Not sure

### Screen 7: Possible exemptions
- Digital exclusion, no NI number, other exemption reason / None / Not sure

### Screen 8: Current record keeping (doesn't affect eligibility, affects next steps)
- Paper / Spreadsheet / Software / Accountant / Mixed / No regular records

### Screen 9: Software readiness (doesn't affect eligibility)
- Already have compatible software / Not sure / Spreadsheet needs bridging / Accountant handles / Not yet / Not sure

## Threshold logic

qualifying_income = gross_self_employment + gross_property_income_share

| Figures used | Income | Start date |
|---|---|---|
| 2024/25 | > £50,000 | April 2026 |
| 2025/26 | > £30,000 | April 2027 |
| 2026/27 | > £20,000 | April 2028 |

Do NOT add: PAYE, dividends, pensions, partnership share, company salary.

## Design principles

- Clean, trustworthy, gov-adjacent but not impersonating GOV.UK
- Mobile-first (most search traffic will be on phones)
- Instant page loads (static HTML, no build framework)
- Plain English, no jargon
- Every compliance claim links to HMRC source

## Technical

- **Static HTML/CSS/JS** — no database, no backend, no PHP, no framework
- Checker is **client-side JavaScript only** — all logic runs in the browser
- Hosted wherever Kyle's cheapest reliable option is (recommend: static hosting on Hostinger or Cloudflare Pages)
- Google Analytics or Plausible for basic event tracking (checker starts, completions, setup-pack clicks, email signups)
- Google Search Console

## Monetisation (deferred, not part of MVP build)

- Setup pack: £7–£15 (checklist, deadline calendar, income worksheet, software comparison, accountant email template)
- Affiliate links to accounting software where programmes approve us
- Email capture for deadline reminders

## Disclaimers (must be visible on checker page)

> This checker provides guidance based on current HMRC public information. It is not tax advice, does not replace professional advice, and does not create an accountant-client relationship. Tax rules can change. Always verify your position with HMRC or a qualified accountant.

## Build guardrails

- Do not build a software marketplace, full comparison engine, or product suite
- Do not add user accounts or login systems
- Do not try to do anything AI/LLM-related — this is a simple static tool
- Affiliate links should be transparent: "We may earn a commission if you sign up through this link"
- Checker should still be useful even if no affiliate programmes accept us

## What NOT to build

- No database
- No user accounts
- No AI/chat features
- No full software marketplace
- No tax calculations (income tax, profit, expenses)
- No accountant directory
- No email-to-SMS or notification system
- No blog engine

## Next steps for Claude

1. Build the site as static HTML files
2. Set up hosting (recommend Hostinger or Cloudflare Pages)
3. Point ReadyForMTD.co.uk DNS to hosting
4. Submit to Google Search Console
5. Apply to affiliate programmes
6. Share a preview link with Kyle

## Source research

Full details at:
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-mvp-spec.md` — complete MVP spec (695 lines)
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-lean-validation-strategy-2026-05-25.md` — lean validation approach
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-hmrc-guidance.md` — HMRC primary source audit
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-competitor-checkers.md` — competitor checker audit
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-affiliate-programmes.md` — affiliate programme research
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-audience-keywords.md` — audience, search intent, forums
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-traffic-channel-teardown.md` — SEO clusters, traffic channels
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-objections-trust-copy.md` — trust barriers, copy guardrails
- `~/Brain/03_Resources/Theo/MTD Checker/mtd-monetisation-product-map.md` — monetisation routes
- `~/Brain/03_Resources/Theo/MTD Checker/pre-build-audit-2026-05-25.md` — pre-build audit