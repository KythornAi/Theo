---
type: regular-note
date: 2026-05-25
tags: [#theo, #pre-build-audit, #research]
---

# Pre-Build Audit: MTD Readiness Checker — 2026-05-25

**Audit Scope**

Read all 10 files in `/home/kylemoore/Brain/03_Resources/Theo/MTD Checker/`. I also checked current GOV.UK/HMRC pages because MTD rules, sign-up guidance, penalties and software guidance are time-sensitive.

Current official position checked on 2026-05-25: headline thresholds still match the research: over £50k from 6 April 2026, over £30k from 6 April 2027, over £20k from 6 April 2028. GOV.UK confirms this on its MTD eligibility page, last updated 26 March 2026. Source: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax

**1. Stale Or Risky Content**

The threshold logic is not stale, but the launch framing is now partly stale. The first MTD wave started on **6 April 2026**, and today is **25 May 2026**. The spec still frames some copy as preparation before April 2026, especially social hooks like “before April 2026” in `mtd-pinterest-social-scan.md`, section `Evidence by channel > TikTok`, and update cadence “monthly through April 2026” in `mtd-traffic-channel-teardown.md`, section `Recommended next actions`. This needs rewriting as “already started for the first wave” and “first quarterly deadline is 7 August 2026”. Confidence: High.

The MVP result states do not account for users who are already late or partially late. `mtd-mvp-spec.md`, section `Result states`, has April 2026/2027/2028 waves, but no “you appear to already be in the April 2026 wave; check sign-up/software now” state. GOV.UK’s sign-up page says people required from 2026/27 should sign up now and that they need to have submitted a tax return in the last 2 years. Confidence: High.

Penalty copy is time-sensitive. `mtd-objections-trust-copy.md`, section `Main objections and trust barriers > What if I miss a deadline?`, correctly notes no penalty points for late quarterly updates in 2026/27, but this must be displayed only for the April 2026 cohort and not generalized. GOV.UK currently says penalty points will not apply for late quarterly updates in 2026/27, while late tax return and late payment penalties still apply. Confidence: High.

Some demand evidence is weak or not fully verified. `mtd-traffic-channel-teardown.md`, section `Trends/search-demand evidence`, says direct Google Trends failed with 429 and relies on secondary trend articles. Two sources, Accountancy Age and Estate Agent Today, are explicitly “search snippet only; fetch failed”. Do not use those as hard claims in launch copy or investor-style projections. Confidence: High.

Publication-date risk: the sprint files themselves are fresh, dated 2026-05-23 to 2026-05-25. I did not find a local research file older than 6 months. However, several external GOV.UK pages were originally published years ago but recently updated or fetched during the sprint, so they are not “unverified old” sources. The genuinely risky older/unverified items are the snippet-only trend/news sources in `mtd-traffic-channel-teardown.md`, section `Sources`. Confidence: High.

**2. Logic Gaps**

The biggest missing logic branch is “after start date”. `mtd-mvp-spec.md`, sections `State A` and `Deadline / calendar panel`, assume the start date is a future/action-planning date. As of 2026-05-25, April 2026 users have already started. The result should say whether the user should already be keeping digital records, whether the first quarterly update deadline is still ahead, and what to do if they have not signed up. Confidence: High.

Short/long accounting periods are not handled. GOV.UK says qualifying income may be annualised for shorter or longer periods; sole trader income can be annualised by HMRC, and property users need to annualise themselves. `mtd-mvp-spec.md`, sections `Screen 3`, `Screen 4`, and `Qualifying-income calculation`, do not ask about trading/property period length. Confidence: High.

Amended tax returns are not handled. GOV.UK says amendments can affect qualifying income and start date, but amendments increasing income above threshold after the relevant tax year starts will not be considered for that tax year. `mtd-mvp-spec.md`, section `Tax year / figures basis`, does not ask whether figures are original, amended, or likely to be amended. Confidence: Medium.

Several HMRC qualifying-income edge cases are only broadly caveated, not routed. `mtd-hmrc-guidance.md`, sections `What counts as qualifying income` and `Property, ceased income sources and residence edge cases`, mentions residence, ceased sources and joint property. Current GOV.UK also lists VAT-inclusive cash basis treatment, bare trusts, interest in possession trusts, REITs/PAIFs, basis period reform, qualifying care relief, transactions in UK land, and averaging relief. `mtd-mvp-spec.md`, section `What NOT to build yet`, explicitly defers furnished holiday lets, grants, recharges, deposits and unusual receipts, but the UI needs a catch-all “special income/tax return boxes” caution. Confidence: High.

The checker asks about foreign property but does not ask UK tax residence. `mtd-mvp-spec.md`, `Screen 1` includes foreign property, and `Qualifying-income calculation` flags non-residence, but there is no question to route UK-resident versus non-resident users. This can produce misleading results for foreign property income. Confidence: High.

User confusion scenario: “HMRC has not written to me, so I assume I’m safe.” `mtd-mvp-spec.md`, result actions say verify with HMRC, but there is no explicit branch for “received HMRC letter / did not receive letter”. GOV.UK says it remains the taxpayer’s responsibility to check and sign up even without a letter. Confidence: Medium.

**3. Pre-Build Blockers**

Brand/domain must be decided before build. `mtd-mvp-spec.md`, section `Open questions / Kyle decisions before build`, asks whether this is `/mtd-checker/` or a dedicated domain and notes Paper N Pixels may not feel tax-specific. This affects trust, SEO, footer legal copy, analytics, email sender reputation and affiliate applications. Confidence: High.

Legal/privacy copy must be finalized before email capture. `mtd-objections-trust-copy.md`, sections `Required disclaimers` and `Email/privacy disclaimer`, gives draft wording but not final policy pages. Before build: privacy policy, cookie notice, affiliate disclosure, “not tax advice” footer, result disclaimer, and email consent wording. Confidence: High.

Email platform and consent model are blockers if reminders or emailed results are in v1. `mtd-monetisation-product-map.md`, section `Email capture`, recommends separate choices for result email, reminders and marketing. Build needs a chosen provider, list structure/tags, unsubscribe handling, and whether result emails are transactional or marketing. Confidence: High.

Affiliate applications are not build blockers for the checker, but they are blockers for software cards. `mtd-affiliate-programmes.md`, section `Affiliate programme comparison table`, says Sage, Coconut, QuickBooks and Xero require approval or terms verification. `mtd-mvp-spec.md`, section `Monetisation decisions`, asks which programmes to apply to first. Do not build provider ranking UI until provider metadata and disclosures are settled. Confidence: High.

Provider metadata storage must be decided before software recommendations. `mtd-mvp-spec.md`, section `Technical/content decisions`, asks whether metadata lives in static JSON, CMS, database or markdown. If undecided, build should ship with generic criteria and GOV.UK software finder links only. Confidence: High.

Analytics/privacy decision is needed before tracking answers. `mtd-mvp-spec.md`, section `Technical/content decisions`, asks whether anonymous aggregate answers will be tracked. This affects cookie consent, privacy wording, database schema and whether result URLs can contain user inputs. Confidence: High.

**4. Revenue Reality Check**

There is a revenue model, but not a revenue forecast. `mtd-monetisation-product-map.md`, sections `Recommended product architecture` and `Build priority`, defines free checker, paid setup pack at £7-£12, affiliate cards, and later lead-gen. `mtd-affiliate-programmes.md`, section `Affiliate programme comparison table`, gives some commission figures. But no traffic, conversion, EPC, refund, approval or monthly revenue model exists. Confidence: High.

Rough scenarios:

| Scenario | Assumptions | Monthly Revenue |
|---|---|---:|
| Pessimistic | 1,000 visits/month, 35% checker completion, 3% email opt-in, 0.5% paid pack conversion at £9, 1 affiliate signup/month at £20 average commission | ~£65 |
| Realistic | 5,000 visits/month by peak, 45% completion, 6% email opt-in, 1.5% paid pack conversion at £9, 10 affiliate signups/month at £30 average commission | ~£975 |
| Optimistic | 20,000 visits/month during deadline spike, 55% completion, 10% email opt-in, 2.5% paid pack conversion at £12, 50 affiliate signups/month at £40 average commission | ~£7,500 |

Confidence: Medium. The biggest unknowns are SEO velocity, affiliate approval, software conversion rate and whether users trust a non-official tax-adjacent site.

**5. Launch Timing**

The April 2026 launch window is no longer valid as a future deadline. It has passed. The useful near-term launch angle is now: “MTD has started for the first cohort; check whether you are in scope before the first quarterly update deadline.” Confidence: High.

The next demand peak is likely before the first quarterly update deadline on **7 August 2026** for the April 2026 cohort. There is realistically time to reach it if build starts immediately, but not much time for SEO to mature. Best route: ship the checker quickly, publish deadline/landlord/sole-trader pages, and use lightweight outreach/social/search snippets around “first quarterly update due 7 August 2026”. Confidence: Medium.

A second strong peak should build around Self Assessment filing and the 2027 cohort: users preparing or filing 2025/26 returns, plus the April 2027 threshold drop to over £30k. The project has much more time to reach that window. Confidence: High.

Missing time-sensitive result states in `mtd-mvp-spec.md`, section `Result states`: already started April 2026; not signed up yet; signed up but no software authorised; current date before/after first quarterly deadline; voluntarily signing up before required; user received/did not receive HMRC letter; standard versus calendar update periods. Confidence: High.

**6. One Thing Most Likely To Cause Failure**

The single most likely failure mode is weak distribution: building a useful checker that does not rank, does not get shared, and has no trusted route to users before deadline anxiety moves on. This risk is visible in `mtd-traffic-channel-teardown.md`, sections `Watch-outs` and `Recommended next actions`: generic MTD guides are hard to rank, social is secondary, and the project needs utility-specific pages rather than another explainer. Confidence: High.

What would prevent it: ship the checker as the core utility, then immediately publish the supporting SEO stack from `mtd-traffic-channel-teardown.md`, section `Recommended next actions`: `/mtd-checker/`, `/mtd-deadline-calculator/`, `/mtd-for-landlords/`, `/mtd-for-sole-traders/`, `/mtd-software-comparison/`, and `/mtd-faq/`. Add source-linked result pages, a printable/checklist asset, and a monthly HMRC source review cadence. Confidence: High.

---

## Validation Update — 2026-05-25

Kyle asked to validate the three “needs validation before build” items from this audit.

### 1. Penalty soft-landing beyond 2026/27

**Status: validated.** GOV.UK’s penalties page says that for the **2026 to 2027 tax year**, there are **no penalties for missing a quarterly update deadline**. It also says users must still keep digital records and send quarterly updates before submitting the tax return. The same page states penalty points apply for missed quarterly update deadlines **for tax years after 2026 to 2027**.

**Build implication:** do not describe this as an ongoing soft landing. In checker copy, limit it to the April 2026 cohort / 2026 to 2027 tax year only. Late tax return, late payment penalties and late payment interest still need separate warnings.

**Source checked:** https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax — published 12 March 2026, last updated 30 March 2026.

### 2. HMRC/GOV.UK guidance updates since 23 May 2026

**Status: validated from core GOV.UK pages checked.** I re-checked the main MTD for Income Tax pages on 2026-05-25. I found no core guidance page updated after 23 May 2026 in the checked set.

Core pages checked and latest update dates seen:

- Eligibility/start-date page — last updated 26 March 2026: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
- Penalties page — last updated 30 March 2026: https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax
- Sign-up page — last updated 19 May 2026: https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax
- Business step-by-step collection — last updated 17 December 2025, with linked guidance dates including 8 May and 19 May 2026: https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-businesses-step-by-step
- Software guidance/search result — last updated 8 May 2026: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax

**Build implication:** current threshold, sign-up, software and penalty assumptions can be used for the build brief, but user-facing pages should include a “last checked against GOV.UK” date and source links because this policy area is active.

### 3. Four affiliate applications accepted before build

**Status: still pending / cannot be validated from public sources.** Local research confirms Sage, Coconut, QuickBooks UK and Xero are the priority application targets, but acceptance status requires checking Kyle’s actual affiliate dashboards or emails. Public programme pages only show how to apply and expected review routes; they cannot prove whether Kyle’s applications have been accepted.

**Build implication:** affiliate acceptance is **not a blocker for building the checker**, but it is a blocker for live provider ranking/cards with affiliate links. If acceptance is not confirmed before build, ship software guidance as neutral criteria plus GOV.UK software finder/source links, and add affiliate cards later once programme approval, allowed traffic types, disclosure wording and link terms are confirmed.

**Validation needed from Kyle/Claude:** check the relevant accounts/inboxes for Sage/Impact or financeAds, Coconut/UpPromote, QuickBooks/FlexOffers or PartnerStack, and Xero/PartnerStack. Record each as `accepted`, `rejected`, `pending`, or `not applied` before launch copy includes affiliate links.
