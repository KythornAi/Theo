---
type: evergreen
project: MTD Checker
date: 2026-05-25
status: done
source: theo
tags: [theo/research, project/mtd-checker, product/spec]
---

**Last updated:** 2026-05-25

# MTD Checker MVP spec

## TLDR recommendation

Build a **trust-first, search-led, ungated MTD for Income Tax readiness checker** for UK sole traders and landlords.

The MVP should answer one job clearly:

> Based on your answers, are you likely to need Making Tax Digital for Income Tax, and if so, when should you prepare to start?

The checker should **not** try to be a full tax-advice tool, exemption decision engine, software marketplace, accountant directory, or tax calculator at launch.

Best positioning:

> Free MTD readiness checker for UK sole traders and landlords. Find your likely Making Tax Digital start date using HMRC's current income thresholds. No email, HMRC login, UTR or National Insurance number needed for your result.

## Research coverage check

Expected sprint files in `/home/kylemoore/Brain/03_Resources/Theo/MTD Checker/`:

| Expected file | Status | Notes |
|---|---|---|
| [[mtd-hmrc-guidance]] | Complete | Primary-source HMRC audit. Strong enough for threshold/result logic. |
| [[mtd-competitor-checkers]] | Complete | Identifies gap: no-gate HMRC-aligned checker with practical next steps. |
| [[mtd-affiliate-programmes]] | Complete | Sage, Coconut, QuickBooks and Xero are strongest first affiliate candidates, but approval/terms need verifying. |
| [[mtd-audience-keywords]] | Complete | Confirms search-led demand around checker, deadline, landlord, sole trader and software queries. |
| [[mtd-monetisation-product-map]] | Complete | Recommends free checker, optional email, transparent affiliate cards, small paid setup pack. |
| [[mtd-traffic-channel-teardown]] | Complete | Confirms SEO/utility pages are the core channel. Social is secondary. |
| [[mtd-objections-trust-copy]] | Complete | Provides trust/disclaimer/copy guardrails. |
| [[mtd-pinterest-social-scan]] | Complete | Confirms social is useful after MVP, not primary launch engine. |
| [[mtd-mvp-spec]] | Created | This file. Practical build spec distilled from the above. |

Missing or incomplete:

- No expected sprint file is missing.
- No sprint file appears incomplete for MVP decision-making.
- Caveat: some source access had limitations: Google Trends returned 429; AnswerThePublic was gated/unusable; some social metrics were thin. This affects traffic/social confidence, not the checker logic.
- Remaining build risks are decisions/maintenance issues, not research gaps.

## Recommended MVP positioning

### Primary promise

**Check if MTD for Income Tax is likely to apply to you and when you may need to start.**

### Audience

Primary:

- UK sole traders registered for Self Assessment.
- UK landlords with property income.
- People with both self-employment and property income.
- People unsure whether PAYE, dividends, pensions or profit count toward the MTD threshold.

Secondary:

- Accountants/bookkeepers checking a client informally.
- Existing spreadsheet users deciding whether to change setup.

Not primary:

- VAT-only MTD users.
- Limited companies.
- Partnerships as entities.
- Detailed exemption cases.
- Users seeking tax calculations, expenses advice, penalty advice or software legal/compliance assurance.

### Differentiation

Compared with competitor checkers, lead with:

- **Instant result, no email gate.**
- **HMRC-aligned language and source links.**
- **Clear gross-income maths.**
- **Sole trader, landlord and mixed-income branches.**
- **Practical next steps before affiliate/software monetisation.**
- **Visible uncertainty states for edge cases.**

## First-pass question flow

Design principle: every question must either change eligibility, confidence, start date, or result-page recommendations. Do not ask trivia or collect personal identifiers.

### Screen 0: Scope confirmation

**Question:** What are you checking?

Options:

1. MTD for Income Tax for myself
2. MTD for Income Tax for a client/someone else
3. MTD for VAT
4. Not sure

Logic:

- Options 1/2 continue.
- Option 3: show out-of-scope panel: “This checker is for MTD for Income Tax, not VAT returns.” Link GOV.UK VAT MTD guidance if desired.
- Option 4: continue but show a short explainer: “MTD for Income Tax affects some sole traders and landlords. MTD for VAT is separate.”

### Screen 1: Income role

**Question:** Which of these describe you? Select all that apply.

Options:

- I am a sole trader / self-employed
- I have UK property or rental income
- I have foreign property income
- I am employed through PAYE
- I receive dividends
- I receive pension income
- I have partnership income
- I run a limited company only
- None of these / not sure

Logic:

- Self-employment, UK property, foreign property are possible qualifying-income sources.
- PAYE, dividends and pensions should be shown as “do not count for the MTD qualifying-income threshold, though they may still matter for your tax return.”
- Partnership income should trigger a caution state: individual partnership profit share does not count toward the threshold in the same way, but personal self-employment/property income can still matter.
- Limited company only should usually route to “MTD for Income Tax probably does not apply based on this answer” with caveat.

### Screen 2: Self Assessment status

**Question:** Have you registered for Self Assessment and submitted a tax return before?

Options:

1. Yes, I have submitted a Self Assessment tax return
2. I am registered but have not submitted my first return yet
3. I expect to register / I am new to Self Assessment
4. No
5. Not sure

Logic:

- HMRC says users do not need to start MTD for Income Tax until after the first Self Assessment tax return, and sign-up requires a recent submitted return.
- Do not end the flow too early if income appears relevant. Instead, return “not yet/start depends after first return” with next steps.

### Screen 3: Tax year / figures basis

**Question:** Which figures are you using?

Options:

1. 2024 to 2025 tax return figures
2. 2025 to 2026 tax return figures
3. 2026 to 2027 tax return figures
4. Current estimate / not from a submitted return
5. Not sure

Logic:

- 2024/25 figures are used for the April 2026 wave over £50,000.
- 2025/26 figures are used for the April 2027 wave over £30,000.
- 2026/27 figures are used for the April 2028 wave over £20,000.
- Estimate/not sure can still show indicative threshold logic but must say “estimate only; HMRC will use the relevant tax return.”

### Screen 4: Self-employment gross income

Show only if self-employed selected.

**Question:** What was your gross self-employment income before expenses?

Answer input options:

- Exact amount field: £____
- Or bands if Kyle wants lower friction:
  - £0
  - £1 to £20,000
  - Over £20,000 to £30,000
  - Over £30,000 to £50,000
  - Over £50,000
  - Not sure

Recommended MVP: use **banded buttons first** with optional exact amount. Exact amount is nicer for showing maths, but bands are enough for start-wave routing unless the user is close to a threshold.

Helper copy:

> Gross income means income before expenses. It is not your profit.

### Screen 5: Property gross income

Show if UK or foreign property selected.

**Question:** What was your share of gross property/rental income before expenses?

Answer input options:

- Exact amount field: £____
- Or same bands as above.
- Checkbox: “This is from jointly owned property.”
- Checkbox: “I am not sure what my share is.”

Helper copy:

> Use your share of the rent/property income, before expenses. Joint ownership can be an edge case, so check HMRC guidance or an adviser if unsure.

### Screen 6: Current/ceased sources

**Question:** Are the self-employment or property sources you entered still ongoing?

Options:

1. Yes, all are still ongoing
2. One or more have ceased, but I still have at least one self-employment/property source
3. All self-employment/property sources have ceased
4. Not sure

Logic:

- All ceased: route to “not currently in scope based on your answer / check HMRC if unsure.”
- Some ceased: caution state because HMRC has specific rules.

### Screen 7: Possible exemptions / digital exclusion

**Question:** Do any of these apply?

Options:

- I may be digitally excluded because of age, disability, health, religion or lack of internet access
- I do not have a National Insurance number
- I think I may be exempt for another reason
- None of these
- Not sure

Logic:

- Any selected except “none” should not produce a definitive exemption. Return “you may need to check exemption rules with HMRC” and link HMRC exemption guidance.
- Keep the main eligibility result visible but mark confidence as “needs HMRC/adviser check.”

### Screen 8: Current record keeping

**Question:** How do you keep records now?

Options:

- Paper/manual notes
- Spreadsheet
- Accounting software
- Landlord/property software
- My accountant/bookkeeper handles it
- Mixed methods
- I do not keep regular records yet

Logic:

This does not affect eligibility. It affects next steps and software/readiness recommendations.

### Screen 9: Software/accountant readiness

**Question:** Do you already have software or help that can handle MTD for Income Tax?

Options:

- Yes, I use software that says it supports MTD for Income Tax
- I use software, but I am not sure if it supports MTD for Income Tax
- I use spreadsheets and may need bridging software
- My accountant/bookkeeper will handle it
- No / not yet
- Not sure

Logic:

Use for action plan only.

## Eligibility/result logic

Use conservative, plain-English result states. Avoid “you must” except when directly quoting or linking to HMRC. Preferred wording: “Based on your answers, you are likely…”

### Qualifying-income calculation

Calculate:

`qualifying_income = gross_self_employment_income + gross_property_income_share`

Do not add:

- PAYE employment income
- Dividends
- State Pension/private pension
- Individual partnership profit share
- Limited company dividends/salary

Flag but do not solve:

- Foreign property
- Joint property share uncertainty
- Partnership/LLP complexities
- Non-residence
- Ceased sources
- Exemption/digital exclusion

### Threshold/start-date rules

Core wave logic:

| Relevant return / figures | Qualifying income | Likely MTD start |
|---|---:|---|
| 2024 to 2025 | More than £50,000 | 6 April 2026 |
| 2025 to 2026 | More than £30,000 | 6 April 2027 |
| 2026 to 2027 | More than £20,000 | 6 April 2028 |

Important copy:

- Say “more than £50,000”, “more than £30,000”, “more than £20,000”.
- If exactly equal to threshold, do not treat as over threshold unless HMRC wording says otherwise. Return “threshold boundary; check HMRC.”
- If using estimates, say “indicative only.”

## Result states

### State A: Likely in scope from April 2026

Trigger:

- Qualifying income over £50,000 on 2024/25 figures.
- User has relevant self-employment/property income.
- No hard out-of-scope answer.

Result headline:

> You are likely in the April 2026 MTD for Income Tax wave.

Show:

- Start date: 6 April 2026.
- Why: “You entered £X gross self-employment/property income. HMRC's first rollout wave applies above £50,000 based on the 2024 to 2025 return.”
- Next steps: choose/check compatible software, prepare digital records, note first quarterly update date, verify with HMRC.

### State B: Likely in scope from April 2027

Trigger:

- Qualifying income over £30,000 on 2025/26 figures, and not already caught by 2026 logic.

Headline:

> You are likely in the April 2027 MTD for Income Tax wave.

### State C: Likely in scope from April 2028

Trigger:

- Qualifying income over £20,000 on 2026/27 figures, and not already caught by earlier waves.

Headline:

> You are likely in the April 2028 MTD for Income Tax wave.

### State D: Not currently in scope based on income entered

Trigger:

- Qualifying income at or below £20,000, no special concern.
- Or relevant tax year/band below current threshold for that wave.

Headline:

> Based on your answers, you do not appear to be in the current MTD for Income Tax rollout yet.

Important caveat:

> This could change if your gross self-employment or property income rises above a future threshold.

### State E: Not enough Self Assessment history yet

Trigger:

- User has not submitted first Self Assessment return but has relevant income.

Headline:

> MTD for Income Tax usually starts after you have submitted a Self Assessment tax return.

Show:

- “Your future MTD position will depend on your qualifying income on the relevant return.”
- “Register/file Self Assessment as required; use HMRC guidance.”

### State F: Probably out of scope for this checker

Triggers:

- VAT-only.
- Limited company only.
- No self-employment/property income.
- Partnership entity only, with no personal self-employment/property income selected.

Headline:

> This checker may not apply to your situation.

### State G: Edge case / check HMRC or adviser

Triggers:

- Possible digital exclusion/exemption.
- No NI number.
- Joint property share not known.
- Foreign property with uncertainty.
- All sources ceased or partly ceased.
- Partnership complexities.
- Not sure on income source or figures.
- Exact threshold boundary.

Headline:

> Your answer includes something that may need a HMRC or adviser check.

Keep useful guidance:

- Show the provisional income maths if possible.
- Link to exact HMRC page.
- Do not declare exempt or definitively not required.

## Result page sections

### 1. Result summary card

Fields:

- Status: likely in scope / likely not in scope / unclear.
- Likely start date or “not currently shown”.
- Confidence: high / medium / needs HMRC check.
- Last checked against HMRC guidance: date.

### 2. Your qualifying-income calculation

Show:

- Gross self-employment income entered.
- Gross property income/share entered.
- Combined qualifying income.
- Income not counted for the threshold, if selected: PAYE, dividends, pensions, partnership share.

Copy:

> HMRC generally uses gross self-employment and property income before expenses for the MTD for Income Tax threshold. This checker does not calculate your tax or profit.

### 3. Why you got this result

Use a short rule explanation with source links.

Example:

> You entered more than £50,000 of qualifying income using 2024 to 2025 figures. HMRC says the first MTD for Income Tax wave starts from 6 April 2026 for sole traders and landlords above this threshold.

### 4. Deadline / calendar panel

For in-scope users show:

- Start date: 6 April 2026 / 2027 / 2028.
- Standard quarterly update deadlines:
  - 7 August
  - 7 November
  - 7 February
  - 7 May following the tax year
- Final tax return/payment deadline remains 31 January following the tax year.

For 2026 wave, show first-year framing:

- Digital records from 6 April 2026 for standard update periods.
- First quarterly update due 7 August 2026.
- Tax return for 2026/27 due 31 January 2028.

### 5. Next 3 to 5 actions

Tailor by readiness answers.

Core action list:

1. Check your result against the official HMRC checker/guidance.
2. Confirm your gross self-employment and property income from the relevant return.
3. Decide how you will keep digital records.
4. Check whether your software or accountant can handle MTD for Income Tax.
5. Add quarterly update deadlines to your calendar.

If spreadsheet user:

- “Check whether bridging software is suitable for your records, or whether all-in-one software is simpler.”

If paper/manual:

- “Start moving to digital records before your start date.”

If accountant handles it:

- “Ask your accountant what they will handle, what you still need to record, and whether any software access is required.”

### 6. Edge-case warning panel

Only if triggered.

Examples:

- “You selected possible digital exclusion/exemption. HMRC decides exemptions. Read the HMRC exemption guidance before relying on this result.”
- “You selected jointly owned property and are unsure of your share. This checker cannot confirm your allocation.”
- “You selected partnership income. Partnership rules are not fully covered by this MVP checker.”

### 7. Software readiness panel

Position as criteria first, not affiliate first.

Show:

- “MTD software needs to keep digital records, send quarterly updates and support the final tax return/submission workflow.”
- “HMRC has a software finder.”
- “Options may include all-in-one software, landlord software, accountant-managed software, or spreadsheets plus bridging software.”

MVP can include static, non-ranked cards:

- “Using spreadsheets now?”
- “Landlord with 1 to 3 properties?”
- “Sole trader who invoices clients?”
- “Accountant handles your books?”

Do not launch with a full comparison engine unless Kyle has verified provider details.

### 8. Optional email/result actions

Place after the result, not before.

Options:

- Email me this result.
- Send me MTD deadline reminders.
- Send me the free checklist/calendar.
- Subscribe to future Paper N Pixels guides/products.

Consent rule:

- Keep marketing consent separate.
- Do not pre-tick boxes.

### 9. Monetisation block

MVP-safe order:

1. Free checklist/calendar opt-in.
2. Paid “MTD readiness/routine pack” when available.
3. Software cards only if affiliate/disclosure and provider-fit metadata are ready.
4. Accountant directory links/sponsored lead-gen deferred.

## Disclaimer and trust copy guardrails

### Above-the-fold trust bar

Use:

- Uses public HMRC guidance.
- No HMRC login, UTR, NI number or bank details needed.
- No email needed for your result.
- Informational, not tax advice.

### Footer disclaimer

> This checker provides general information based on publicly available HMRC guidance. It is not tax advice, accounting advice, or a substitute for checking your own position with HMRC or a qualified adviser. Your result depends on the information you enter and the rules in force when the page was last updated.

### Result disclaimer

> Your result is an estimate based on the figures you entered. If your income sources are mixed, jointly owned, recently started or ceased, or if you may be exempt, check HMRC guidance or speak to a qualified adviser before relying on this result.

### Software disclaimer

> HMRC recognises software that meets its requirements, but GOV.UK says HMRC does not recommend any product or provider. Check that any software you choose supports your income sources, tax return needs, devices, budget and agent setup.

### Affiliate disclosure

> Some software links may be affiliate links. We may earn a commission if you sign up, at no extra cost to you. Your MTD result is based on HMRC guidance and your answers, not on commissions.

### Words to prefer

- “MTD for Income Tax”
- “compatible software”
- “software that works with MTD for Income Tax”
- “HMRC-recognised” only where sourced
- “likely”, “based on your answers”, “check HMRC”
- “gross income before expenses”

### Words/claims to avoid

- “HMRC-approved software” as generic copy
- “You must” unless directly backed by HMRC and no edge case is present
- “Guaranteed”
- “Avoid fines” as the main hook
- “Free software” without conditions
- “We recommend this software” if ranking is affiliate-led
- Anything implying the checker files, signs up, authorises, or stores HMRC data

## Monetisation assumptions

### MVP monetisation sequence

1. **Free checker as trust/acquisition asset.** This is the product front door.
2. **Optional email capture after result.** Best first opt-in: “send me my result and MTD deadline checklist.”
3. **Small paid organisation pack.** Suggested £7 to £12: deadline calendar, quarterly routine checklist, record-capture worksheet, accountant email template, software comparison worksheet.
4. **Software affiliate cards once verified.** Start with Sage, Coconut, QuickBooks UK and Xero applications/terms. Keep FreeAgent and FreshBooks lower priority for this project.
5. **Comparison pages later.** Build after MVP once provider data and affiliate terms are verified.
6. **Accountant lead-gen later.** Start with neutral ICAEW/ACCA directory links; no paid leads until vetting/disclosure process exists.

### Assumed business model

- Primary traffic: organic search utility queries.
- Primary conversion: checker completion.
- Secondary conversion: email reminder/checklist opt-in.
- Revenue #1 early: paid readiness pack.
- Revenue #2 later: software affiliate clicks/signups.
- Revenue #3 later: sponsored/vetted accountant referrals if traffic proves demand.

## What NOT to build yet

Do not build in MVP:

- Full tax calculator or tax owed estimator.
- Penalty calculator.
- Expense/deduction advice.
- Exemption approval flow.
- Full software comparison marketplace.
- Pay-to-rank affiliate software recommendations.
- Accountant lead marketplace or lead-selling system.
- User accounts.
- HMRC login/OAuth/integration.
- UTR, NI number, address, bank details or sensitive personal data capture.
- PDF generation if it slows build. A printable result page is enough for MVP.
- Pinterest/TikTok content engine before checker/SEO pages exist.
- VAT MTD branch unless Kyle deliberately expands scope.
- Complex partnership/non-resident/foreign-property tax logic.
- Exact treatment of furnished holiday lets, grants, recharges, deposits or unusual receipts.

## Open questions / Kyle decisions before build

### Product/scope decisions

1. Should the MVP use **banded income buttons** or exact £ input? Recommendation: bands plus optional exact amount if easy.
2. Does Kyle want the landing page at `/mtd-checker/` or as the homepage of a dedicated domain?
3. Should the first version include a separate `/mtd-deadline-calculator/`, or should the deadline calendar live inside the checker result first?
4. Should the checker support “checking for a client” wording in v1, or keep it consumer-only?

### Brand/trust decisions

5. What site/brand name will appear on the checker? Paper N Pixels may not feel tax-specific.
6. How prominent should “not tax advice” be visually? Recommendation: visible in hero trust bar and result footer, not scary modal copy.
7. Does Kyle want to say “based on HMRC guidance” in the hero? Recommendation: yes, but do not imply official affiliation.

### Monetisation decisions

8. Which affiliate programmes should Kyle apply to first? Recommendation: Sage, Coconut, QuickBooks UK, Xero.
9. Does Kyle want a paid setup pack at launch, or only a free checklist/reminder opt-in first?
10. If email is used, which consent model/tool will handle result delivery, reminders and marketing consent separately?

### Technical/content decisions

11. Where will provider metadata live if software cards are included: static JSON, CMS, database, or markdown data file?
12. Who owns monthly HMRC guidance review before April 2026?
13. Should result pages be shareable via URL query params, local-only state, or copy/print only? Recommendation: avoid storing personal data; copy/print first.
14. Will Kyle track anonymous aggregate answers for future content/PR? If yes, add consent/privacy wording and avoid collecting identifiable data.

## Recommended build order

1. Build static landing page hero and trust/disclaimer structure.
2. Build checker flow with the 9 screens above.
3. Implement result-state logic and result page template.
4. Add HMRC source links and “last checked” date.
5. Add optional print/copy result.
6. Add optional email capture only after result.
7. Add free checklist/calendar lead magnet.
8. Add paid pack or affiliate cards only after core trust experience works.
9. Add SEO support pages: landlord, sole trader, deadlines, software, FAQ.
10. Repurpose branches into short social assets after launch.

## Source notes

This MVP spec is synthesised from:

- [[mtd-hmrc-guidance]]
- [[mtd-competitor-checkers]]
- [[mtd-affiliate-programmes]]
- [[mtd-audience-keywords]]
- [[mtd-monetisation-product-map]]
- [[mtd-traffic-channel-teardown]]
- [[mtd-objections-trust-copy]]
- [[mtd-pinterest-social-scan]]

Related: [[_index]], [[../product-opportunities]], [[../research-registry]]
