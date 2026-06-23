---
type: evergreen
project: MTD Checker
date: 2026-05-24
status: done
source: theo
tags: [theo/research, project/mtd-checker]
---

# MTD Checker - audience and keyword research

**Last updated:** 2026-05-24

## Executive summary

- **The strongest audience fit is ordinary UK sole traders and landlords who are trying to answer one immediate question: "Do I need Making Tax Digital, and when?"** Google autocomplete, HMRC wording, ATT/LITRG FAQs and software-vendor pages all converge around eligibility, thresholds, deadlines and software choice. Confidence: **High**.
- **Search intent is not one cluster.** It splits into: eligibility checker intent, deadline/calendar intent, landlord-specific questions, sole-trader/self-employed questions, software-shopping intent, exemption intent, and accountant/bookkeeper client-workflow intent. Confidence: **High**.
- **A non-advice checker can safely answer factual readiness questions when it anchors to HMRC wording:** income source, gross qualifying income band, Self Assessment status, landlord/sole-trader status, software readiness, accountant involvement, and next-step signposting. It should not decide edge cases such as exemptions, mixed partnership income, non-residence, jointly owned property allocations, furnished holiday lets, allowable expenses, or whether a user should choose a particular tax treatment. Confidence: **High**.
- **The first landing page should target "Making Tax Digital checker" plus "MTD for Income Tax", "do I need MTD", "MTD landlord", "MTD sole trader", "MTD software" and "MTD deadline" language.** Autocomplete confirms commercial phrases such as `mtd eligibility checker`, `hmrc mtd checker`, `mtd software cost`, `mtd landlord free software`, and `mtd sole trader deadline`. Confidence: **High**.
- **Trend evidence points to rising urgency around the 2026 start date, but direct Google Trends access was blocked by 429 during this run.** Secondary trend articles cite Google Trends analysis showing record-high interest and a 614% rise around February 2026. Treat the direction as useful, but the exact percentage as secondary/vendor-commissioned evidence. Confidence: **Medium**.

## Method and prior coverage checked

Before new research I checked:

- `03_Resources/Theo/MTD Checker/_index.md`
- `03_Resources/Theo/MTD Checker/mtd-hmrc-guidance.md`
- `03_Resources/Theo/MTD Checker/mtd-competitor-checkers.md`
- `03_Resources/Theo/MTD Checker/mtd-affiliate-programmes.md`

This briefing complements rather than repeats those files. The HMRC guidance audit already covers primary compliance rules. The competitor audit covers existing checkers and tools. The affiliate research covers software monetisation. This note focuses on audience, search language, question clusters and content implications.

Research inputs used:

- TinyFish search and fetch for HMRC, ATT, LITRG, NRLA, Sage, FreeAgent, MSE, Money.co.uk, Xero, Monzo, ANNA and ICAEW pages.
- Google autocomplete-style data from `suggestqueries.google.com` with UK locale parameters.
- Browser attempt for AnswerThePublic.
- Browser attempt for Google Trends.
- Built-in web search for public articles citing Google Trends data.
- One Perplexity `sonar` synthesis query for UK PAA/autocomplete-style clusters, treated as secondary synthesis because it did not return a separate citations field.

## Audience segments

### 1. Sole traders and self-employed people

**Core questions:**

- Do sole traders need Making Tax Digital?
- Is MTD mandatory for sole traders?
- When do sole traders need MTD?
- What records do sole traders need to keep?
- Can a sole trader use spreadsheets?
- What software do sole traders need?

**Evidence:**

HMRC frames MTD for Income Tax as applying to individuals registered for Self Assessment who get self-employment or property income and whose qualifying income is above the relevant threshold. Its step-by-step collection says sole traders and landlords must use MTD from 6 April 2026 if total annual self-employment and property income is over £50,000. ATT likewise says MTD applies to self-employed individuals and landlords with gross qualifying income above the threshold. Google autocomplete returned `mtd sole trader software`, `mtd sole trader threshold`, `mtd sole trader accountant`, `mtd sole trader deadline`, `mtd sole trader app`, `mtd sole trader and landlord`, and `mtd sole trader rules`.

**Interpretation for Kyle:**

This segment needs a checker that feels practical, not accountant-heavy. The first page should speak in plain terms: "sole trader", "self-employed", "income before expenses", "when you need to start", and "what to do next". Confidence: **High**.

### 2. Landlords

**Core questions:**

- Do landlords need Making Tax Digital?
- Does rental income count for MTD?
- Does the threshold apply per property or per person?
- What if I jointly own a property?
- What if I have one inherited property?
- What if I have foreign property income?
- What software works for landlords?

**Evidence:**

NRLA's landlord guide says landlords with gross annual income from property or self-employment of £50,000 or more in 2024/25 are required to use MTD for Income Tax from April 2026, dropping to £30,000 and £20,000 in later phases. Sage's landlord FAQ explicitly lists landlord-specific questions such as inherited property, REIT income, buy-to-let, jointly owned property, foreign property, incorporated property businesses, tenancy deposits and whether the threshold applies to each property. Google autocomplete returned `mtd landlord software`, `mtd landlord threshold`, `mtd landlord free software`, `mtd landlords qualifying income`, `mtd landlord bridging software`, and `mtd landlord tax update hmrc`.

**Interpretation for Kyle:**

Landlords need a dedicated branch in the checker, not a generic small-business path. The language should mention property income, rental income, UK/foreign property, jointly owned property and whether the user also has self-employment income. Confidence: **High**.

### 3. People with mixed income or side hustles

**Core questions:**

- Does MTD apply if I am employed but have a side hustle?
- Does PAYE income count?
- Do dividends or pension income count?
- What if I have both self-employment and rental income?
- What if I am under the threshold now but may cross it later?

**Evidence:**

The HMRC audit already found that qualifying income means gross income before expenses from self-employment and property, and excludes employment, dividends, pensions and partnership profit from the threshold test, although self-employment or property income can still count separately. TinyFish search surfaced a smallbusinessuk Reddit result about mixed employed/self-employed MTD, plus AccountingWEB discussion around side-hustle implementation. Google autocomplete returned `do i need mtd for self assessment`, `do i need to use mtd for income tax`, and `do i need to do mtd this year`.

**Interpretation for Kyle:**

This is a high-value clarity gap. The checker should separate "total taxable income" from "qualifying income for MTD" in plain English. It can safely say PAYE/dividends/pension income are not part of the MTD qualifying-income threshold only if linked back to HMRC guidance. Confidence: **High** for the need; **Medium** for the scale of side-hustle search volume.

### 4. Accountants and bookkeepers

**Core questions:**

- Can an accountant handle MTD for me?
- How do agents sign clients up?
- What software should a practice use for clients?
- How do I prepare clients for MTD?
- What does MTD mean for quarterly workflows?

**Evidence:**

ATT says professional agents can assist clients in complying with MTD. HMRC's software finder explicitly has an agent mode with a list of compatible software and filter options to help find solutions for clients. ICAEW's TAXguide is aimed at professional questions from webinars and includes detailed edge cases such as threshold years, partnerships, non-resident landlords, property recharge income and joint property. Google search results for MTD questions repeatedly surfaced ATT, ICAEW and accountant FAQ pages.

**Interpretation for Kyle:**

Accountants/bookkeepers are probably not the first consumer landing page, but they are a useful secondary audience. A future page could be "MTD client readiness checklist" or "Use this checker before speaking to your accountant". Confidence: **Medium to High**.

### 5. Software shoppers

**Core questions:**

- What software do I need for MTD?
- Is there free MTD software?
- Can I use spreadsheets?
- What is bridging software?
- Which software is best for landlords/sole traders?
- How much does MTD software cost?

**Evidence:**

HMRC's software finder says MTD software must create digital records, send quarterly updates and submit the tax return. It asks users about income sources, other tax-return income, whether they want new digital records or to connect existing records, and accounting period. Google autocomplete returned `mtd software hmrc`, `mtd software for landlords`, `mtd software free`, `mtd software for sole traders`, `mtd software for self employed`, `mtd software cost`, `mtd software reviews`, `mtd software for small business`, and `mtd software uk`. MSE explains all-in-one and bridging-software options; HMRC's own campaign page says spreadsheets can still be used if supported by bridging software.

**Interpretation for Kyle:**

Software intent is the monetisable middle of the funnel. But the checker should earn trust by separating eligibility from software recommendations and by showing HMRC-compatible criteria before any affiliate CTA. Confidence: **High**.

### 6. VAT-registered businesses

**Core questions:**

- Is MTD only for VAT?
- If I already use MTD for VAT, do I also need MTD for Income Tax?
- Does VAT registration change my Income Tax MTD obligations?
- What is the difference between MTD for VAT and MTD for Income Tax?

**Evidence:**

Many public pages mention MTD for VAT history. Xero's timeline and British Business Bank-style explainers mix VAT and Income Tax context. Sage's landlord FAQ includes the question "I'm already registered for Making Tax Digital for VAT. Do I need to register for and/or use Making Tax Digital for Income Tax?" Google autocomplete returned `making tax digital for vat` and software pages frequently use "MTD software" in a way that can mean either VAT or Income Tax.

**Interpretation for Kyle:**

The landing page and checker need disambiguation: "This checker is for MTD for Income Tax, not VAT returns." Confidence: **High**.

## Question clusters

### Cluster A: Eligibility checker intent

Representative questions:

- Do I need Making Tax Digital?
- Do I need MTD for Income Tax?
- Do sole traders need MTD?
- Do landlords need MTD?
- Do I need MTD if I have an accountant?
- Do I need MTD if I am below £50,000?
- What counts as qualifying income for MTD?
- Does rental plus self-employed income get added together?
- Does MTD apply to side hustles?

Content type fit: **checker** and **FAQ page**.

Safe checker answer:

- Give a provisional "likely in scope / likely not yet / unclear" based on HMRC criteria.
- Show the threshold year and source link.
- Explain that the result is not tax advice and HMRC/accountant confirmation is needed for edge cases.

Confidence: **High**.

### Cluster B: Deadline and calendar intent

Representative questions:

- When does MTD start?
- What is the MTD deadline?
- When do I need to sign up?
- What are the quarterly update deadlines?
- What happens if I miss an MTD deadline?
- When is my last normal Self Assessment return?

Content type fit: **deadline calculator**, **calendar download**, **FAQ**, and **blog post**.

Evidence:

Google autocomplete returned `mtd deadlines`, `mtd deadline dates`, `mtd deadlines 2026`, `mtd deadline for registration`, `mtd deadline for self employed`, `mtd filing deadlines`, `mtd submission deadlines`, and `mtd quarterly deadlines`. Monzo and HMRC campaign pages present timeline and quarterly update dates. ATT and HMRC confirm phased thresholds.

Confidence: **High**.

### Cluster C: Qualifying income and threshold intent

Representative questions:

- Is qualifying income before or after expenses?
- Does PAYE count?
- Does dividend income count?
- Does pension income count?
- Does property income count per property or total?
- What if income drops below the threshold later?
- Which tax return year is used to decide my start date?

Content type fit: **calculator**, **FAQ**, and **plain-English guide**.

Safety note:

A checker can explain HMRC's general concept of gross qualifying income, but should avoid making definitive answers for unusual tax-return box mappings, grants, service-charge recharges, joint property shares, or non-residence without signposting HMRC/accountant support.

Confidence: **High**.

### Cluster D: Landlord-specific intent

Representative questions:

- Does MTD apply to rental income?
- What if I own one rental property?
- What if I jointly own a property?
- Does foreign property income count?
- Do incorporated landlords need MTD for Income Tax?
- Do tenancy deposits count?
- What about furnished holiday lets?

Content type fit: **landlord guide**, **FAQ page**, **checker branch**, **software comparison for landlords**.

Evidence:

Sage's landlord FAQ and NRLA's guide both show this is a live content cluster. Google autocomplete confirms landlord software, threshold, qualifying-income and bridging-software searches.

Confidence: **High**.

### Cluster E: Sole-trader/self-employed intent

Representative questions:

- Do sole traders need MTD?
- Is MTD mandatory for self-employed people?
- What software does a sole trader need?
- Can a sole trader use an app?
- Does CIS income affect MTD?
- What if I am a sole trader and a landlord?

Content type fit: **sole-trader landing page**, **checklist lead magnet**, **software comparison**, **deadline reminder signup**.

Evidence:

Google autocomplete specifically returned `mtd sole trader cis`, `mtd sole trader accountant`, `mtd sole trader app`, and `mtd sole trader and landlord`, suggesting granular subtopics beyond the generic HMRC threshold.

Confidence: **Medium to High**.

### Cluster F: Software and spreadsheet intent

Representative questions:

- Do I need MTD software?
- What is MTD-compatible software?
- Is there free MTD software?
- Can I use spreadsheets?
- What is bridging software?
- What software works for landlords?
- What software works for sole traders?
- How much does MTD software cost?

Content type fit: **comparison page**, **software chooser**, **affiliate page**, **"free vs paid" guide**, **spreadsheet/bridging explainer**.

Safety note:

A checker can say the user will need compatible software if in scope, and link to HMRC's software finder. It should not imply HMRC "approves" a specific affiliate product unless the claim is directly sourced and current.

Confidence: **High**.

### Cluster G: Exemptions and edge cases

Representative questions:

- Who is exempt from MTD?
- Can I apply for an exemption?
- What if I am digitally excluded?
- What if I have no National Insurance number?
- What if I cannot use software because of age, disability, location or religion?
- Are partnerships included?
- Are limited companies included?

Content type fit: **FAQ**, **HMRC link hub**, **"ask your accountant" warning panel**.

Safety note:

The checker should not approve exemptions. It can identify "you may need to check the exemption rules" and route to HMRC's exemption guidance. Confidence: **High**.

## Keyword clusters

### Primary landing-page keywords

Use these in the first page title/H1/meta and above-the-fold copy:

- Making Tax Digital checker
- MTD checker
- MTD for Income Tax checker
- Do I need Making Tax Digital?
- Do I need MTD?
- Making Tax Digital for Income Tax
- MTD deadline
- MTD eligibility checker

Rationale: Google autocomplete includes `mtd checker`, `mtd eligibility checker`, and `hmrc mtd checker`. Search results show HMRC's checker, ANNA's MTD Income Tax Eligibility Checker, Gorilla's deadline checker and RentalBux's checker. Confidence: **High**.

### Landing-page support phrases

- Check if MTD applies to you
- Find out when you need to start
- Sole traders and landlords
- Self-employment and property income
- Gross qualifying income
- Income before expenses
- April 2026 / April 2027 / April 2028
- Digital records
- Quarterly updates
- Compatible software

Rationale: These terms align with HMRC, ATT, NRLA and software-vendor wording. Confidence: **High**.

### Landlord cluster

- MTD landlord
- MTD landlords
- Making Tax Digital for landlords
- MTD landlord threshold
- MTD landlord software
- MTD landlord free software
- MTD landlord bridging software
- rental income MTD
- property income MTD
- jointly owned property MTD

Rationale: Google autocomplete and Sage/NRLA pages show this as a distinct content path. Confidence: **High**.

### Sole-trader cluster

- MTD sole trader
- Making Tax Digital for sole traders
- MTD sole trader software
- MTD sole trader threshold
- MTD sole trader deadline
- MTD sole trader accountant
- MTD sole trader app
- MTD sole trader and landlord
- MTD self-employed

Rationale: Google autocomplete directly surfaced most of these. Confidence: **High**.

### Software cluster

- MTD software
- MTD software HMRC
- MTD compatible software
- MTD software for landlords
- MTD software for sole traders
- MTD software for self-employed
- MTD software free
- MTD software cost
- MTD software reviews
- MTD bridging software
- MTD spreadsheet software

Rationale: Google autocomplete and HMRC's software finder confirm both commercial and informational software intent. Confidence: **High**.

### Deadline cluster

- MTD deadline
- MTD deadlines 2026
- MTD deadline dates
- MTD deadline for registration
- MTD deadline for self-employed
- MTD filing deadlines
- MTD quarterly deadlines
- Making Tax Digital deadline 2026
- April 2026 MTD
- April 2027 MTD
- April 2028 MTD

Rationale: Google autocomplete directly returned these deadline variations. Confidence: **High**.

### FAQ/blog backlog keywords

- Making Tax Digital questions
- Making Tax Digital frequently asked questions
- Making Tax Digital problems
- Making Tax Digital rules
- Making Tax Digital requirements
- How does Making Tax Digital work?
- MTD for Income Tax FAQ
- MTD for Income Tax help
- Do I need MTD if I have an accountant?
- Do I need receipts for MTD?
- Do I need accountant for MTD?

Rationale: Google autocomplete returned these phrase variants; ATT and LITRG rank for FAQ-style queries. Confidence: **High**.

## AnswerThePublic / Trends attempt notes

### AnswerThePublic

Required terms to try:

- `Making Tax Digital`
- `MTD income tax`
- `MTD landlord`
- `MTD sole trader`

Attempt result:

- Browser access to an AnswerThePublic report URL loaded the site shell, then showed a sign-in/free-search modal and ultimately a "Page not found" state for the report URL.
- Search for public indexed AnswerThePublic pages containing "Making Tax Digital" did not return a usable report; results were unrelated or generic.
- I treated AnswerThePublic as **gated / not publicly accessible in this cron run** and fell back to TinyFish search results, Google autocomplete-style suggestions, accountant/software FAQ pages and Perplexity synthesis.

Confidence: **High** for the access limitation; **Medium** for substituted query coverage.

### Google Trends

Attempt result:

- Direct browser access to Google Trends for UK 5-year comparison of `Making Tax Digital`, `MTD Income Tax`, `MTD landlord`, and `MTD sole trader` returned **Error 429 Too Many Requests**.
- Built-in web search found secondary trend articles citing Google Trends analysis. Property118 and UK Property Accountants reported that Google Trends data commissioned by Coconut/Censuswide showed the term "Making Tax Digital" reached an index score of 100 on 10 February 2026 and represented a roughly 614% rise. Professional Electrician and trade publications repeated the sole-trader urgency angle.

Interpretation:

- Use direct Trends data later if access is available.
- For now, the safe claim is: **public secondary articles report rising and record-high search interest ahead of the April 2026 start date, but exact numbers should be treated as vendor-commissioned secondary evidence.**

Confidence: **Medium**.

## FAQ and content opportunities

### 1. Main checker landing page

Working angle:

> Free Making Tax Digital checker: find out if MTD for Income Tax applies to you and when you need to start.

Must answer:

- Are you a sole trader, landlord, or both?
- Are you registered for Self Assessment?
- Do you have self-employment or property income?
- What was your gross qualifying income in the relevant tax year?
- Do you use an accountant or bookkeeper?
- Do you already use digital records/software?
- Are you checking for Income Tax rather than VAT?

Target keywords: `Making Tax Digital checker`, `MTD checker`, `MTD eligibility checker`, `do I need MTD`, `MTD for Income Tax checker`.

Confidence: **High**.

### 2. FAQ page: "Do I need Making Tax Digital?"

Questions to include:

- Who needs MTD for Income Tax?
- What is qualifying income?
- Is the threshold based on income before or after expenses?
- Does PAYE count?
- Does rental income count?
- What if I am both a sole trader and a landlord?
- What if I use an accountant?
- What if I already use MTD for VAT?
- Who is exempt?
- What happens if I miss a deadline?

Confidence: **High**.

### 3. Landlord guide

Working title options:

- Making Tax Digital for landlords: do you need to use MTD in 2026?
- MTD landlord threshold: does your rental income count?
- MTD software for landlords: what to look for before choosing

Include:

- rental/property income
- joint ownership
- foreign property
- one inherited property
- limited-company landlords vs individual landlords
- software and record-keeping

Confidence: **High**.

### 4. Sole-trader guide

Working title options:

- Making Tax Digital for sole traders: deadline, threshold and software checklist
- MTD sole trader deadline: when do you need to start?
- Can sole traders use spreadsheets for MTD?

Include:

- self-employment income before expenses
- £50k/£30k/£20k threshold waves
- CIS/contractor mention as a research-backed subtopic to verify with HMRC/accountant sources
- software and accountant support

Confidence: **Medium to High**.

### 5. Software comparison / chooser

Working title options:

- MTD software for sole traders and landlords: free, paid and bridging options
- MTD-compatible software: what HMRC says you need
- Can I use spreadsheets for Making Tax Digital?

Include:

- HMRC software finder criteria
- all-in-one vs bridging software
- landlord-specific vs sole-trader-specific features
- cost, receipt capture, reminders, accountant access, tax-calendar features
- affiliate disclosure if monetised

Confidence: **High**.

### 6. Deadline calculator / calendar lead magnet

Working title options:

- MTD deadline calculator: your first quarterly update dates
- Making Tax Digital deadline 2026: what to do before April
- Free MTD deadline calendar for sole traders and landlords

Include:

- start wave based on qualifying income and tax year
- first quarterly update dates
- last normal Self Assessment return context
- reminder/email capture option

Confidence: **High**.

### 7. Accountant/bookkeeper client checklist

Working title options:

- MTD client readiness checklist for accountants and bookkeepers
- How to prepare sole-trader and landlord clients for MTD
- Client questions to ask before MTD for Income Tax starts

Use as a secondary traffic/lead-gen page, not the first launch page. Confidence: **Medium**.

## Checker-flow implications

Recommended checker flow:

1. **Scope disambiguation**
   - "Are you checking MTD for Income Tax? This is different from MTD for VAT."
2. **Audience branch**
   - Sole trader / landlord / both / neither / accountant checking for client.
3. **Self Assessment status**
   - Registered and filed a tax return? New to Self Assessment? Not sure?
4. **Income-source selection**
   - self-employment, UK property, foreign property, employment, dividends, pensions, partnership income, limited company income.
5. **Qualifying-income estimate**
   - gross self-employment + property income before expenses, with bands: under £20k, £20k-£30k, £30k-£50k, over £50k, not sure.
6. **Deadline result**
   - likely start wave with source link and confidence.
7. **Readiness questions**
   - digital records, current software/spreadsheets, receipt capture, accountant/bookkeeper support, calendar/reminder system.
8. **Software route**
   - show neutral criteria first; link HMRC software finder; optionally suggest comparison categories.
9. **Edge-case warning**
   - if user selects partnership, joint property, non-residence, exemption, no NI number, incorporated landlord, digital exclusion, or unusual income mix, show "check HMRC/accountant" rather than a definitive answer.
10. **Output package**
   - eligibility summary, likely deadline, preparation checklist, software-readiness checklist, HMRC links, optional email reminder/lead magnet.

Result language:

- Use "Based on your answers, you may need to..." not "You must..." for anything not directly official.
- Use "likely" and "check HMRC" when confidence is not high.
- Show source links next to compliance statements.

Confidence: **High**.

## Safety and disclaimer notes

### Safe for a non-advice readiness checker to answer

- Whether the user appears to be in a common HMRC-described group: sole trader, landlord, or both.
- Whether the user is checking MTD for Income Tax rather than VAT.
- What the current threshold waves are, if sourced to HMRC.
- That qualifying income is generally gross self-employment and property income before expenses, if sourced to HMRC.
- That compatible software is required for in-scope users.
- That quarterly updates and a year-end tax return/final submission are part of the workflow.
- That HMRC has a software finder and official checker.
- That an accountant/bookkeeper can help.

Confidence: **High**.

### Needs careful disclaimers and HMRC/accountant links

- Exemption eligibility, especially digital exclusion, disability, age, location, religious grounds or prior VAT exemption.
- Joint property income allocation.
- Foreign property income.
- Furnished holiday lets or property-rule transitions.
- Partnerships, LLPs and partnership income.
- Non-resident landlords and National Insurance number issues.
- Limited-company landlords, salary/dividend income and corporation tax contexts.
- Whether income that is not reported due to allowances counts.
- Whether grants, recharges, deposits or unusual receipts count.
- Whether a specific software product satisfies all of a user's needs.
- Penalties, tax-saving decisions, allowable expenses, reliefs and whether to sign up voluntarily.

Confidence: **High**.

Suggested disclaimer copy:

> This checker gives a plain-English readiness guide based on public HMRC information and your answers. It is not tax advice. If your circumstances are unusual, if you may be exempt, or if you are unsure what counts as qualifying income, check HMRC guidance or speak to an accountant.

## Sources

Primary / official:

- GOV.UK / HMRC, Making Tax Digital for Income Tax for sole traders and landlords: step by step. Fetched 2026-05-24. https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-businesses-step-by-step
- GOV.UK / HMRC, Find software that works with Making Tax Digital for Income Tax. Fetched 2026-05-24. https://www.gov.uk/guidance/find-software-that-works-with-making-tax-digital-for-income-tax
- HMRC campaign site, Making Tax Digital for Income Tax. Fetched 2026-05-24. https://makingtaxdigital.campaign.gov.uk/
- HMRC campaign site, Dates you need to know for Making Tax Digital. Fetched 2026-05-24. https://makingtaxdigital.campaign.gov.uk/quarterly-updates/
- HMRC campaign site, What software you'll need for Making Tax Digital. Fetched 2026-05-24. https://makingtaxdigital.campaign.gov.uk/making-tax-digital-software/

Professional / tax-body FAQs:

- Association of Taxation Technicians, Making Tax Digital - Frequently Asked Questions. Fetched 2026-05-24. https://www.att.org.uk/making-tax-digital-frequently-asked-questions
- Low Incomes Tax Reform Group, Making tax digital for income tax. Fetched 2026-05-24. https://www.litrg.org.uk/making-tax-digital-income-tax
- ICAEW, TAXguide 04/25: Making Tax Digital for income tax. Fetched 2026-05-24. https://www.icaew.com/technical/tax/tax-faculty/taxguides/2025/taxguide-04-25

Landlord / consumer / software pages:

- NRLA, Making Tax Digital for Landlords: Your Essential Guide for MTD for Income Tax. Fetched 2026-05-24. https://www.nrla.org.uk/resources/tax/making-tax-digital
- Sage, Making Tax Digital for Income Tax for landlords: Answers to frequently asked questions. Fetched 2026-05-24. https://www.sage.com/en-gb/blog/mtd-income-tax-landlords-need-to-know/
- FreeAgent, MTD for Income Tax: your questions answered by our expert. Search/fetch attempted 2026-05-24. https://www.freeagent.com/blog/mtd-for-income-tax-your-questions/
- MoneySavingExpert, Guide to Making Tax Digital. Fetched 2026-05-24. https://www.moneysavingexpert.com/family/making-tax-digital/
- Money.co.uk, Making Tax Digital for sole traders checklist. Fetched 2026-05-24. https://www.money.co.uk/business/guides/making-tax-digital-for-sole-traders-checklist
- ANNA Money, MTD Income Tax Eligibility Checker. Fetched 2026-05-24. https://anna.money/free-tools/mtd-income-tax-eligibility-checker/
- Xero, MTD deadline: key dates and what you need to do. Fetched 2026-05-24. https://www.xero.com/uk/programme/making-tax-digital/making-tax-digital-timeline/
- Monzo, Making Tax Digital timeline: meet the deadlines. Fetched 2026-05-24. https://monzo.com/business-banking/learn/making-tax-digital-timeline

Search / query evidence:

- Google autocomplete endpoint via `suggestqueries.google.com`, UK locale, queries tested: `making tax digital for`, `do i need mtd`, `mtd landlord`, `mtd sole trader`, `mtd software`, `mtd checker`, `mtd deadline`, `making tax digital questions`, `mtd income tax faq`, `mtd landlord questions`, `mtd sole trader questions`, `mtd software questions`. Fetched 2026-05-24.
- TinyFish search results for required terms: `Making Tax Digital questions`, `MTD Income Tax FAQ`, `do I need Making Tax Digital`, `MTD landlord questions`, `MTD sole trader questions`, `MTD software questions`, `Making Tax Digital deadline 2026`, `Making Tax Digital Google Trends`, `AnswerThePublic Making Tax Digital`. Fetched 2026-05-24.
- Perplexity `sonar` UK search-intent synthesis for MTD PAA/autocomplete-style clusters. Queried 2026-05-24. Citations were embedded in answer text but not returned as a separate API citations field, so used as secondary synthesis only.

Trend / gated-tool evidence:

- Google Trends direct access attempt. 2026-05-24. Result: Error 429 Too Many Requests.
- AnswerThePublic direct browser attempt. 2026-05-24. Result: sign-in/free-search modal and unusable report/page-not-found state.
- Property118, Google searches for Making Tax Digital hit record high. Search result accessed 2026-05-24. https://www.property118.com/google-searches-for-making-tax-digital-hit-record-high/
- UK Property Accountants, Making Tax Digital Searches Reach Record High. Search result accessed 2026-05-24. https://www.ukpropertyaccountants.co.uk/making-tax-digital-search-interest-for-term-hits-record-high-ahead-of-april-start-date/
- Professional Electrician, Sole traders urged to prepare as Making Tax Digital searches surge. Search result accessed 2026-05-24. https://professional-electrician.com/news/sole-traders-urged-to-prepare-as-making-tax-digital-searches-surge/

## Related

- [[_index]]
- [[mtd-hmrc-guidance]]
- [[mtd-competitor-checkers]]
- [[mtd-affiliate-programmes]]
