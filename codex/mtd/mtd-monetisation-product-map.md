---
type: evergreen
project: MTD Checker
date: 2026-05-24
status: done
source: theo
tags: [theo/research, project/mtd-checker, monetisation]
---

# MTD Checker - monetisation and product map

**Last updated:** 2026-05-24

## Summary

- The best first monetisation route is a **trust-first free checker** with instant ungated results, optional email capture, transparent affiliate software routing, and a small paid downloadable bundle for users who want an organised setup pack.
- Software affiliates can work, but should be **secondary to fit logic**. GOV.UK tells users to choose compatible software that can keep digital records, submit quarterly updates, and submit the tax return, so recommendations should be explained by user need rather than commission.
- Accountant lead-gen is potentially valuable but higher maintenance and trust-sensitive. It should start as a curated "find qualified help" resource using public directories and disclosed sponsor placements, not as hidden paid routing.
- Downloadable checklists, deadline calendars, spreadsheet setup packs, and email reminder sequences fit Kyle's digital-product style better than bespoke tax advice. They are lower maintenance if positioned as organisation tools with HMRC links and disclaimers.
- Email capture is viable only as a clearly optional reminder or download opt-in. ICO guidance says marketing emails to individuals need specific consent unless the narrow soft opt-in applies, so the checker should not copy competitors that blend result delivery and marketing consent too casually.

## Scope and source check

Task: research monetisation routes for an MTD readiness checker beyond simple software affiliate links. Evaluate affiliate routing, accountant lead-gen, downloadable checklists, email capture, calculators, comparison pages, and content clusters. Prioritise ethical, low-maintenance options that fit Kyle's digital-product style.

Existing Brain coverage checked before new research:

- `03_Resources/Theo/MTD Checker/mtd-hmrc-guidance.md` gives the compliance rules and GOV.UK source language.
- `03_Resources/Theo/MTD Checker/mtd-competitor-checkers.md` shows most private checkers are software or accountant lead funnels, while HMRC is official but not commercial.
- `03_Resources/Theo/MTD Checker/mtd-affiliate-programmes.md` compares FreeAgent, Xero, QuickBooks, Sage, Coconut and FreshBooks affiliate routes.
- `03_Resources/Theo/MTD Checker/mtd-audience-keywords.md` covers search intent and audience language.
- `03_Resources/Theo/product-opportunities.md` records the MTD checker as a selected product opportunity with software-affiliate potential.

New source approach:

- TinyFish search and fetch, UK location, fetched 2026-05-24.
- Primary compliance and ethical sources used where available: GOV.UK, HMRC, ICO, ASA/CAP, CMA/GOV.UK creator guidance.
- Competitor/product sources used as evidence of market patterns, not as compliance authorities.

## Recommendation matrix

| Route | Fit for Kyle | Maintenance | Trust risk | Revenue timing | Evidence from sources | Recommendation |
|---|---:|---:|---:|---:|---|---|
| Free checker with instant result | Very high | Medium | Low if HMRC-linked and caveated | Indirect | HMRC has an official eligibility tool, and AccountingCompare uses a six-question readiness checker with personalised action plan and software recommendations. Sources: GOV.UK checker guidance and AccountingCompare. | **Build first.** This is the acquisition asset and trust anchor. No email gate before core result. |
| Software affiliate routing | High | Medium | Medium if pay-to-rank | Medium | GOV.UK says users need compatible software for digital records, quarterly updates and tax return submission. Prior affiliate research found Sage, Coconut, QuickBooks and Xero are the strongest candidates. ASA requires affiliate marketing to be obviously identifiable where editorial independence may be unclear. | **Use, but disclose.** Rank by fit, then affiliate. Keep eligibility logic separate from commission metadata. |
| Downloadable checklist / setup pack | Very high | Low to medium | Low if not tax advice | Fast if priced low | Glow Accounts offers a free MTD readiness checklist covering applicability, software, HMRC expectations, mistakes and help. RentalBux sells or promotes MTD templates for landlords and sole traders. | **Best paid add-on.** Sell a £5 to £15 organisation pack: checklist, quarterly calendar, record-capture sheet, software comparison worksheet, email scripts for accountants. |
| Email capture and reminder sequence | High | Low after setup | Medium under PECR if consent is weak | Indirect | ICO says marketing emails to individuals need specific consent unless the limited soft opt-in applies. Gorilla offers an emailed checker result and states users agree to receive results and marketing emails. | **Use carefully.** Make email optional after result: "send my deadline/reminder pack" with separate marketing consent. |
| Accountant lead-gen | Medium | High | Medium to high | Slow but potentially high | Harkia, Mercian and Gorilla use MTD checkers to generate accountancy enquiries. ICAEW and ACCA both offer public accountant directories. HMRC sets expectations for tax agents. | **Phase 2 only.** Start with neutral directory links and a "questions to ask your accountant" download. Add paid leads only with clear disclosure and qualification rules. |
| Calculators | High | Medium | Low if arithmetic and assumptions are transparent | Indirect | GOV.UK says start date depends on qualifying income thresholds. AccountingCompare and Gorilla both present checker/calculator-style flows. | **Include as productised modules.** Deadline calculator, qualifying-income worksheet, quarterly-update calendar generator. Avoid tax estimates unless sourced and caveated. |
| Comparison pages | High | Medium | Medium if affiliate-heavy | Medium | GOV.UK has a software selection page, and RentalBux has a software finder comparing many HMRC-recognised options by income type, features and pricing. | **Build after checker MVP.** Create comparison pages around audience jobs: landlord software, sole trader software, spreadsheet/bridging options, accountant-supported options. |
| Content clusters | Very high | Medium | Low | Slow | GOV.UK has a step-by-step collection for sole traders and landlords. NRLA, Xero, Sage and accountant sites publish MTD guides. | **Build in parallel.** Use clusters to feed SEO and email: thresholds, gross income, landlords, sole traders, software, quarterly routine, digital exclusion, accountant questions. |

## 1. Ethical baseline for any monetisation

### Source evidence

GOV.UK's MTD for Income Tax software guidance says affected sole traders and landlords need compatible software to create, store and correct digital records of self-employment and property income and expenses, send quarterly updates to HMRC, and submit the tax return by 31 January the following year. It also says users should choose software before signing up for MTD for Income Tax and that free products may exist for simple tax affairs, with possible limits such as transaction caps.

Source: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax

GOV.UK's step-by-step collection says MTD for Income Tax is a new way for sole traders and landlords to report income and expenses to HMRC, and that they or their agent will need software that works with MTD for Income Tax.

Source: https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-businesses-step-by-step

ASA/CAP guidance says affiliate marketing is performance-based marketing where affiliates are rewarded for new customers, usually through commission, and that where content gives an impression of editorial independence, additional disclosure is likely required so affiliate content is obviously identifiable as marketing communication.

Source: https://www.asa.org.uk/advice-online/affiliate-marketing.html

GOV.UK/CMA creator guidance says it is not enough to tag a brand, use discount codes or affiliate links. Labels must be clear, prominent and easy to understand, and hidden ads are illegal and harmful.

Source: https://www.gov.uk/government/publications/social-media-endorsements-guidance-for-content-creators/social-media-endorsements-being-transparent-with-your-followers

### Implication for Kyle

The checker should make three promises explicit:

1. **Eligibility first:** MTD timing and compliance output comes from HMRC rules, not affiliate deals.
2. **Fit first:** Software suggestions are filtered by user need: landlord, sole trader, both, spreadsheet user, accountant-supported user, budget, transaction volume, mobile needs, and whether the provider can support the required MTD workflow.
3. **Disclosure always:** Put a short affiliate note above recommendation cards and a fuller disclosure in the footer.

Suggested disclosure copy:

> Some links may be affiliate links. We may earn a commission if you sign up, at no extra cost to you. Your MTD result is based on HMRC guidance and your answers, not on commissions. We show why each option may or may not fit your situation.

## 2. Core funnel map

### Recommended MVP funnel

1. **Search/content entry:** user lands on a page such as "Do landlords need MTD in 2026?" or "MTD for sole traders over £50,000".
2. **Free checker CTA:** "Check your likely start date in 60 seconds".
3. **Ungated result:** show likely start date, threshold logic, risk caveats, and a link to verify with GOV.UK.
4. **Action plan:** show 3 to 5 next steps: check income, choose software, set quarterly routine, ask accountant, calendar deadlines.
5. **Optional email capture:** "Email me this result and the quarterly reminder checklist" with explicit consent wording.
6. **Monetised recommendations:** software comparison cards and optional paid download pack.
7. **Retargetable content path:** result page links to deeper guides and comparison pages.

### Why not gate the result?

Competitor evidence from the prior `mtd-competitor-checkers.md` file showed several accountant-led checkers capture email or phone before or around the result. Harkia asks for first name and email before the result section. Mercian asks for name, email, phone and town before full result/PDF. Gorilla's page includes "Email Calculator Results" and states that by submitting, the user agrees to receive results and marketing emails.

Sources:

- Harkia: https://harkia.co.uk/mtd-checker/
- Mercian: https://www.mercianaccountants.co.uk/free-making-tax-digital-checker/
- Gorilla: https://gorillaaccounting.com/making-tax-digital-deadline-checker/

Kyle can differentiate by giving the result first, then offering email delivery and reminders. This is more trust-friendly and should reduce the feeling that the checker is only a lead trap.

## 3. Route-by-route analysis

### A. Affiliate routing

Affiliate routing remains a good commercial route because MTD creates genuine software need. However, it should be implemented as **routing**, not a single default recommendation.

Recommended routing dimensions:

- User type: sole trader, landlord, both.
- Income source complexity: UK property, foreign property, multiple sole trades, jointly owned property.
- Current record-keeping: paper, spreadsheet, cloud software, accountant-managed.
- Budget sensitivity: needs free/low-cost option, willing to pay for support.
- Support need: DIY, accountant review, full managed support.
- Compatibility: whether the provider supports MTD for Income Tax tasks relevant to the user.

Source basis:

- GOV.UK says MTD software must support digital records, quarterly updates, and tax return submission for self-employment and property income. Source: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax
- RentalBux's software finder shows the market is already comparison/filter driven, with claimed filtering across 50+ HMRC-recognised software options for landlords and sole traders. Source: https://rentalbux.com/mtd-software
- Prior affiliate research found Sage, Coconut, QuickBooks UK and Xero are the best initial affiliate targets, with FreeAgent weaker as a public cash route and FreshBooks weaker for UK MTD fit. Source: `mtd-affiliate-programmes.md`.

Implementation note:

Store affiliate fields separately:

- `provider_name`
- `mtd_fit_tags`
- `audience_tags`
- `features`
- `pricing_notes`
- `hmrc_software_url_or_evidence`
- `affiliate_network`
- `affiliate_url`
- `commission_notes`
- `disclosure_required`

The result algorithm should read fit tags first. Commission notes should never influence the eligibility result.

### B. Accountant lead-gen

This route has potentially higher value than software affiliate links but is higher maintenance. MTD users may need an accountant if they have multiple income sources, uncertainty over exemptions, digital exclusion issues, or poor records. But poor implementation could make the site feel like an accountant referral trap.

Source basis:

- Competitor checkers from Harkia, Mercian and Gorilla already use MTD calculators/checkers to generate accountancy enquiries. Sources: https://harkia.co.uk/mtd-checker/, https://www.mercianaccountants.co.uk/free-making-tax-digital-checker/, https://gorillaaccounting.com/making-tax-digital-deadline-checker/
- ICAEW's public directory is the official online directory for ICAEW Chartered Accountants, ICAEW-licensed individuals and licensed/accredited firms. It also notes Business Advice Service firms provide a free initial consultation to SMEs and start-ups. Source: https://find.icaew.com/
- ACCA's find-an-accountant page says users can find an accountant and refers to confidence in the professional and ethical standards of ACCA members. Source: https://www.accaglobal.com/gb/en/member/find-an-accountant.html
- HMRC's standard for agents sets out minimum standards expected from those who represent or advise taxpayers. Source: https://www.gov.uk/government/publications/hmrc-the-standard-for-agents/hmrc-the-standard-for-agents

Recommended staged approach:

1. **MVP:** neutral "When to ask an accountant" section plus links to ICAEW/ACCA directories.
2. **Phase 2:** downloadable "Questions to ask an MTD accountant" checklist.
3. **Phase 3:** sponsored accountant directory only if Kyle can vet firms and disclose sponsorship clearly.
4. **Avoid for MVP:** selling raw leads to unknown accountants. It creates support burden and reputation risk.

### C. Downloadable checklists and setup packs

This is the best fit for Kyle's digital-product style because it creates a small, useful product without needing regulated advice.

Source basis:

- Glow Accounts offers a free MTD readiness checklist for sole traders. The page says it covers who MTD applies to, what software is needed, what HMRC expects, common mistakes, where to get help, and a printable tick-off version. Source: https://glowaccounts.co.uk/making-tax-digital-checklist-sole-traders/
- RentalBux promotes MTD templates for landlords and sole traders, including Excel and Google Sheets, UK property, foreign property and self-employment categories, and quarterly summary views. Source: https://rentalbux.com/mtd-templates
- GOV.UK says records must be created, stored and corrected digitally, and quarterly updates must be sent. Source: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax

Recommended products:

| Product | Price idea | Why it fits | Caveat |
|---|---:|---|---|
| MTD Readiness Checklist PDF | Free or £3 | Lead magnet or tripwire. Easy to maintain if tied to HMRC update dates. | Must avoid implying legal/tax advice. |
| MTD Quarterly Routine Pack | £7 to £12 | Calendar, recurring task prompts, receipt capture habit sheet, quarterly review script. Strong match with Paper N Pixels productivity style. | Needs annual date refresh. |
| Landlord Record-Capture Starter Pack | £9 to £15 | Spreadsheet categories, document checklist, property-income prep. | Do not claim HMRC submission compatibility unless actually integrated/recognised. |
| Sole Trader MTD Setup Pack | £9 to £15 | Income/expense capture, software comparison worksheet, accountant email templates. | Keep to organisation and setup, not tax treatment. |
| Accountant Conversation Pack | £5 to £9 | Questions to ask, information to gather, red flags, meeting notes. | Avoid recommending specific tax positions. |

Recommended positioning:

> Organisation tools for getting ready for MTD, not tax advice and not submission software.

### D. Email capture

Email capture should be useful and explicit rather than hidden inside result delivery.

Source basis:

- ICO guidance says organisations must not send marketing emails or texts to individuals without specific consent, except for a limited soft opt-in for previous customers. It also says the soft opt-in does not apply to prospects or new contacts in the same way. Source: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/
- Gorilla's checker states: "By submitting, you agree to receive your results and marketing emails from us." Source: https://gorillaaccounting.com/making-tax-digital-deadline-checker/

Recommended pattern:

After the result, offer three independent choices:

1. "Email me my result".
2. "Send me MTD deadline reminders".
3. "Send me product updates and guides from Paper N Pixels".

Only option 3 should be marketing. Options 1 and 2 can be service/reminder messaging, but still need clear privacy wording and unsubscribe controls. If in doubt, use explicit consent for all recurring emails.

### E. Calculators

Calculators should focus on compliance timing and planning, not tax due.

Good calculator modules:

- MTD start-date calculator based on gross qualifying self-employment and property income.
- Combined income worksheet for sole trader plus landlord users.
- Quarterly update calendar generator.
- "What do I need to do before April 2026/2027/2028?" countdown.
- Software readiness score.

Avoid or defer:

- Tax owed estimates.
- Penalty calculators unless sourced and refreshed from HMRC penalty rules.
- Advice on deductible expenses.

Source basis:

- GOV.UK says start date depends on qualifying income thresholds and income tax years. Source: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
- AccountingCompare and Gorilla show market precedent for readiness/deadline checker language. Sources: https://www.accountingcompare.co.uk/tools/mtd-readiness-checker and https://gorillaaccounting.com/making-tax-digital-deadline-checker/

### F. Comparison pages

Comparison pages should be built after the checker MVP because they need more maintenance than a checklist. They can be powerful if they answer specific audience jobs.

Recommended comparison pages:

- Best MTD software for sole traders who use spreadsheets.
- Best MTD software for landlords with 1 to 3 properties.
- MTD software for landlords with foreign property income.
- Free or low-cost MTD software options.
- Accountant-supported vs DIY MTD setup.
- MTD-compatible spreadsheets and bridging software, with strong caveats.

Source basis:

- GOV.UK has a page for choosing MTD for Income Tax software and sets the functional baseline. Source: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax
- RentalBux has a software finder comparing many options with filters by income type, features and pricing. Source: https://rentalbux.com/mtd-software

Maintenance rule:

Each comparison page should include:

- Date last checked.
- Source links for software compatibility and pricing.
- Affiliate disclosure.
- "Check provider terms before signing up" note.
- Link back to GOV.UK software guidance.

### G. Content clusters

Content clusters are the lowest-risk traffic route but slowest to monetise. They should be built around actual confusion points from the audience and HMRC logic.

Core clusters:

1. **Eligibility:** thresholds, gross income, sole trader, landlord, both, ceased sources, joint property.
2. **Deadlines:** April 2026, April 2027, April 2028, quarterly update rhythm, January tax return.
3. **Software:** what compatible software needs to do, choosing software, free/low-cost options, spreadsheets and bridging.
4. **Setup:** digital records, receipt capture, opening balance, quarterly bookkeeping routine.
5. **Help:** when to ask an accountant, how to brief an accountant, digital exclusion/exemption routes.
6. **Product:** checklist, calendar, setup pack, reminder sequence.

Source basis:

- GOV.UK step-by-step collection for sole traders and landlords. Source: https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-businesses-step-by-step
- GOV.UK software guidance. Source: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax
- Audience/keyword research in `mtd-audience-keywords.md`.

## Recommended product architecture

### Free layer

- MTD readiness checker.
- Plain-English result page with GOV.UK verification links.
- Basic action plan.
- Software-neutral next-step guide.
- Optional result email.

Purpose: trust, SEO conversion, affiliate click qualification.

### Low-price digital product layer

- MTD Readiness Pack for Sole Traders and Landlords.
- Format: PDF checklist plus Google Sheets/Excel worksheet plus calendar prompts.
- Suggested launch price: £7 to £12.
- Include: income-source worksheet, quarterly routine, software comparison worksheet, accountant email template, document checklist, deadline calendar.

Purpose: Kyle-style digital product revenue that does not require affiliate approval.

### Affiliate layer

- Software recommendation cards filtered by user type.
- Comparison pages for high-intent queries.
- Clear disclosures.
- Provider metadata refreshed monthly until MTD launch, then quarterly.

Purpose: upside revenue from users ready to choose software.

### Lead-gen layer

- MVP: neutral links to ICAEW/ACCA directories and "ask your accountant" checklist.
- Phase 2: vetted sponsored accountant slots by region or use case.
- Phase 3: paid referral only if Kyle has review capacity and clear terms.

Purpose: optional higher-value monetisation without compromising MVP trust.

## Build priority

1. **Checker MVP:** ungated result, source-linked HMRC logic, email-result option, action plan.
2. **Free lead magnet:** printable checklist and deadline calendar.
3. **Paid setup pack:** organisation tools, not tax advice.
4. **Affiliate software cards:** Sage, Coconut, QuickBooks, Xero first, subject to programme approval and product verification.
5. **Content cluster:** eligibility and deadlines first, software comparisons second.
6. **Accountant lead-gen:** only after traffic proves demand and Kyle can vet offers.

## Red lines

- Do not say "HMRC-approved software" unless quoting a source that uses that phrase. Prefer GOV.UK-aligned wording such as "software that works with Making Tax Digital for Income Tax" or "compatible software".
- Do not gate the core eligibility result behind email.
- Do not blend result delivery with marketing consent. Keep consent granular.
- Do not rank software by commission.
- Do not sell tax advice. Sell organisation, readiness and decision-support tools.
- Do not imply an accountant sponsor is recommended because of professional quality unless Kyle has a documented vetting process.

## Source list

- GOV.UK, Choose the right software for Making Tax Digital for Income Tax: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax
- GOV.UK, Making Tax Digital for Income Tax for sole traders and landlords step by step: https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-businesses-step-by-step
- GOV.UK, Find out if and when you need to use MTD for Income Tax: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
- ICO, Electronic mail marketing: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/
- ASA/CAP, Online Affiliate Marketing: https://www.asa.org.uk/advice-online/affiliate-marketing.html
- GOV.UK/CMA, Social media endorsements: being transparent with your followers: https://www.gov.uk/government/publications/social-media-endorsements-guidance-for-content-creators/social-media-endorsements-being-transparent-with-your-followers
- AccountingCompare MTD Readiness Checker: https://www.accountingcompare.co.uk/tools/mtd-readiness-checker
- Harkia Free MTD Checker: https://harkia.co.uk/mtd-checker/
- Mercian Accountants Free Making Tax Digital Checker: https://www.mercianaccountants.co.uk/free-making-tax-digital-checker/
- Gorilla Accounting MTD Deadline Checker: https://gorillaaccounting.com/making-tax-digital-deadline-checker/
- Glow Accounts MTD Checklist for Sole Traders: https://glowaccounts.co.uk/making-tax-digital-checklist-sole-traders/
- RentalBux MTD Templates: https://rentalbux.com/mtd-templates
- RentalBux MTD Software Finder: https://rentalbux.com/mtd-software
- ICAEW Find a chartered accountant: https://find.icaew.com/
- ACCA Find an accountant: https://www.accaglobal.com/gb/en/member/find-an-accountant.html
- HMRC standard for agents: https://www.gov.uk/government/publications/hmrc-the-standard-for-agents/hmrc-the-standard-for-agents

## Related

- [[mtd-hmrc-guidance]]
- [[mtd-competitor-checkers]]
- [[mtd-affiliate-programmes]]
- [[mtd-audience-keywords]]
- [[../product-opportunities]]
