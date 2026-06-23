---
type: evergreen
project: MTD Checker
date: 2026-05-23
status: done
source: theo
tags: [research, theo]
---

# MTD Checker - competitor checker audit

**Last updated:** 2026-05-23

## Summary

- The strongest direct competitor is HMRC's own checker because it is official, privacy-safe and asks the compliance-critical eligibility questions, but it is not a commercial readiness journey and does not help users choose software or build habits.
- Most private checkers are lead-generation tools for accountants or software providers. Harkia and Mercian give the clearest eligibility-style flows, but both ask for contact details before or around the result.
- Software-led tools such as !Coconut, Checkatrade/Sage, TaxZap and Landlord Studio use MTD education as acquisition. They are useful for awareness, but tend to route quickly towards a product trial, consultation or software offer.
- Kyle's checker can exploit a clear gap: combine HMRC-style eligibility accuracy with no-gate instant output, income-source nuance, deadline calendar, software-neutral options, and plain-English next steps for sole traders and landlords.
- Avoid weak competitor patterns: stale threshold wording, VAT/ITSA conflation, vague "approved software" language, no explanation of gross qualifying income, and results that appear only after an email capture.

## Method

Checked existing coverage in `/home/kylemoore/Brain/03_Resources/` and `/home/kylemoore/Brain/01_Projects/Paper and Pixels/` before new research. Existing coverage was limited to the MTD project setup and the HMRC guidance audit. New research used TinyFish search and fetch first, then browser inspection for interactive checker pages where fetched markdown did not expose the full flow. Sources were fetched or viewed on 2026-05-23.

## Competitor landscape at a glance

| Tool | Owner | Type | Main audience | Lead capture pattern | Confidence |
|---|---|---|---|---|---|
| HMRC official checker | HMRC / GOV.UK | Eligibility guidance tool | Sole traders and landlords | None observed | High |
| MTD Readiness Checker | AccountingCompare | Readiness score / action plan | UK small businesses | Affiliate disclosure in footer, no email gate observed | High |
| Free MTD Checker | Harkia Accountants | Eligibility and urgency checker | Landlords and sole traders | Email required before result and offer | High |
| Free Making Tax Digital Checker | Mercian Accountants | Eligibility, deadline calendar and PDF result | Sole traders and landlords | Name, email, phone and town before full result/PDF | High |
| Making Tax Digital Quiz | !Coconut | Knowledge quiz and product awareness | Self-employed people and landlords | No gate observed before quiz start, CTA to 14-day trial | High |
| MTD Readiness Quiz | Landlord Studio | Knowledge/readiness quiz | Landlords | CTA to Landlord Studio free start | Medium |
| Checkatrade/Sage MTD readiness check | Checkatrade, powered by Sage | Simple readiness quiz plus software offer | Tradespeople/sole traders | Product offer CTA to Sage plans | High |
| TaxZap MTD Requirement Checker | TaxZap | Requirement checker embedded in software site | Sole traders and landlords | Routes into TaxZap account/HMRC-linking narrative | Medium |
| Accountancy readiness/checklist pages | FKCA, Perfectly Balanced Bookkeeping, Grosvenor and similar | Article or consultation-led readiness checks | Sole traders, landlords, clients | Book a call, ChatGPT quiz or consultation | Medium |

## 1. HMRC official checker

**Source:** GOV.UK guidance page: <https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax>  
**Tool URL observed:** <https://www.tax.service.gov.uk/guidance/check-if-you-need-to-use-making-tax-digital-for-income-tax/start/about-this-guidance>  
**Fetched/viewed:** 2026-05-23  
**Confidence:** High

### Questions asked

The public GOV.UK page says the tool checks if the user needs to use the service, when they need to start, and whether they may be exempt. It tells users to consider whether they need to send a Self Assessment return, which income sources they declare, and how much self-employed or property income they will receive for tax years ending 5 April 2025, 2026 and 2027.

Browser inspection of the live HMRC flow showed these questions in sequence:

- About this guidance: explains question count varies, answers can be checked and amended, results can be printed.
- Whether the user thinks they are digitally excluded. The page defines this as whether it is reasonable for them to use compatible software to keep digital records and send quarterly updates or tax returns.
- Whether the user thinks they are exempt from MTD for Income Tax.
- Whether the user has a National Insurance number.
- Whether all self-employment or property income sources have ceased after the end of tax year 2025 to 2026.
- Why the user needs to send a Self Assessment tax return, with checkbox options for self-employed sole trader, UK property income, foreign property income, and other reasons such as partnership income or dividends.

### Output/result given

The guidance states that the result tells the user whether they need MTD for Income Tax, when they need to start, and whether they may be exempt. It also allows printing for records. The GOV.UK page separately states the phased thresholds: over £50,000 for 2024/25 means start from 6 April 2026, over £30,000 for 2025/26 means start from 6 April 2027, and over £20,000 for 2026/27 means start from 6 April 2028.

### Lead capture or affiliate pattern

None observed. This is an official guidance service, not a commercial funnel.

### UX strengths

- Highest trust source because it is HMRC-owned.
- Uses plain GOV.UK service design, back links, printable results and check/amend answers.
- Handles exemption and digital exclusion before income logic.
- Avoids commercial bias and does not push specific software.

### Weak spots

- Slow official-service feel. It is accurate, but not motivating or product-friendly.
- Does not appear to create a personalised action plan beyond eligibility and timing.
- Does not help users compare software, build a quarterly routine, or understand practical setup tasks.
- Some wording is clunky, for example the observed question heading "Do you think you are you digitally excluded?"

### Gap Kyle can exploit

Build a friendlier companion, not a replacement: "Get your plain-English result in 60 seconds, then verify against HMRC." Use HMRC thresholds and income definitions, but add next-step checklists, deadline reminders, software-neutral options, and an explicit "not tax advice" note.

## 2. AccountingCompare MTD Readiness Checker

**Source:** <https://www.accountingcompare.co.uk/tools/mtd-readiness-checker>  
**Fetched/viewed:** 2026-05-23  
**Confidence:** High

### Questions asked

The page states users answer six questions. Browser and TinyFish extraction showed the full question set:

1. Are you VAT-registered? Options include turnover over £90,000, voluntarily registered, or no.
2. How do you currently submit VAT returns? Options include MTD-compatible software, HMRC online portal, spreadsheet with bridging software, or accountant submission.
3. What is your self-employment/property income? Options include over £50,000 per year, £30,000 to £50,000, under £30,000, or employed only.
4. How do you keep financial records? Options include cloud software, desktop software, spreadsheets, or paper records.
5. Are you prepared to submit quarterly income/expense updates to HMRC? Options range from ready to "I don't know what this means".
6. Have you evaluated MTD-compatible accounting software? Options include already using HMRC-recognised software, shortlisting, not started, or unaware.

### Output/result given

The tool says it scores readiness across key MTD compliance areas and gives a personalised action plan plus software recommendations matched to the user's business type and MTD requirements. Static side-panel actions include signing up for MTD-compatible accounting software, keeping records digitally, setting a quarterly bookkeeping routine, speaking to an accountant, and checking the HMRC MTD for ITSA pilot.

### Lead capture or affiliate pattern

No email gate was observed. The footer says AccountingCompare may earn affiliate commissions from links at no extra cost to the user. It also offers a free UK tax deadline calendar download without email.

### UX strengths

- Strong above-the-fold clarity: six questions, progress count, percentage complete.
- Covers VAT and Income Tax in the same flow, which may be useful for small businesses with both obligations.
- Presents a timeline alongside the questionnaire.
- Transparent affiliate disclosure.

### Weak spots

- Mixing VAT and ITSA can confuse the core 2026 sole-trader/landlord question.
- Income bands are coarse and miss the £20,000 2028 threshold in the question options, although the timeline mentions it as proposed.
- Does not capture multiple income sources, joint property share, foreign property, ceased sources, exemption or National Insurance status.
- Software recommendations may be perceived as affiliate-driven unless very clearly explained.

### Gap Kyle can exploit

Use AccountingCompare's progress-and-action-plan clarity, but narrow the product to MTD for Income Tax. Ask exact income-source questions, include the £20,000 phase, and make affiliate links visibly secondary to the user's result.

## 3. Harkia Accountants Free MTD Checker

**Source:** <https://harkia.co.uk/mtd-checker/>  
**Fetched:** 2026-05-23  
**Confidence:** High

### Questions asked

TinyFish extraction exposed a five-step flow:

- What applies to you: Sole Trader, Landlord, or Both.
- Gross qualifying income before expenses, split into gross sole trader income and gross property income.
- Tax year used for the check: latest completed tax year, 2024/25, 2025/26, or forward estimate only.
- Anything unusual: no, one source ceased, part-year/first year, or jointly owned property.
- Current record-keeping method: paper/manual, spreadsheet, accounting software, or mixed methods.
- Number of properties and number of sole trader businesses.
- What help is wanted: review only, software/setup help, quarterly compliance support, or full managed service.
- Final checks: whether the income is from a limited company only, and whether the user may be exempt or digitally excluded.
- First name and email address.

### Output/result given

The page says it shows the likely MTD start date, urgency level and next practical step. The result table includes income type, gross sole trader income, gross property income, total qualifying income, likely start date, urgency and suggested support. It also shows a recommended next step and an online client offer.

### Lead capture or affiliate pattern

Email and first name are requested before the result section. The page promotes a 15% online-client discount and tailored MTD quote. It is clearly an accountancy lead-generation tool.

### UX strengths

- Strong income-source logic. It explicitly uses gross self-employment and gross property income before expenses.
- Handles property share, part-year/first-year, ceased sources and possible digital exclusion.
- Useful for both sole traders and landlords.
- The promised output is practical: start date, urgency and next step.

### Weak spots

- Contact capture before result adds friction and lowers trust for users who just want an answer.
- It is accountant-specific and pushes towards Harkia support rather than neutral software/compliance options.
- It may not give a full explanation of how thresholds are calculated unless the user submits details.

### Gap Kyle can exploit

Offer the Harkia-style specificity with no email gate. Put the result first, then offer email reminders or software suggestions as optional follow-up.

## 4. Mercian Accountants Free Making Tax Digital Checker

**Source:** <https://www.mercianaccountants.co.uk/free-making-tax-digital-checker/>  
**Fetched:** 2026-05-23  
**Confidence:** High

### Questions asked

Mercian's page says users answer five quick questions:

1. Are you digitally excluded? The page explains HMRC may grant exemption where age, disability or lack of reliable internet makes digital tools unreasonable.
2. What kind of income do you have? It notes MTD applies to self-employment or property rental income and HMRC combines both streams.
3. What is your gross income? It asks for self-employment income and property/rental income before expenses and displays combined gross income.
4. Are you registered for Self Assessment with HMRC? It notes MTD requires Self Assessment registration before sign-up and registration can take 2 to 4 weeks.
5. Do you use MTD-compatible accounting software? It states MTD requires digital record-keeping and quarterly submissions through HMRC-approved software, and that spreadsheets and paper records will not meet requirements on their own.

### Output/result given

The page promises a personal start date, quarterly deadline calendar, step-by-step action plan, downloadable PDF summary and rules-change notification. After contact capture, the page says the PDF summary is ready and prompts the user to download it. It also offers a free MTD readiness consultation.

### Lead capture or affiliate pattern

Full results and PDF are gated behind first name, last name, email, phone number and town/city. It then routes to a free 30-minute readiness consultation and promotes Mercian's MTD package.

### UX strengths

- Strong user promise: start date, deadline calendar and action plan.
- Asks Self Assessment registration, which many competitor flows miss.
- Includes digital exclusion early.
- Downloadable PDF summary is a useful retention device.

### Weak spots

- Heavy contact gate before the full result.
- "HMRC-approved software" wording should be treated carefully. HMRC generally uses recognised or compatible software language, and the HMRC guidance audit recommends avoiding "approved" unless quoting a source that uses it.
- Consultation funnel may feel less neutral than a consumer-facing checker.

### Gap Kyle can exploit

Make the PDF/email optional, not required. Provide deadline calendar instantly in-page. Use precise wording: HMRC-recognised or compatible software.

## 5. !Coconut Making Tax Digital Quiz

**Source:** <https://www.getcoconut.com/making-tax-digital-quiz>  
**Fetched/viewed:** 2026-05-23  
**Confidence:** High

### Questions asked

The page says the quiz covers whether MTD applies now or in the future, income thresholds, digital record-keeping, quarterly updates and the role of HMRC-compatible accounting or bridging software. Browser inspection of the embedded quiz showed the first question: "What is the primary objective of HMRC's Making Tax Digital initiative?" with multiple-choice answers including transition to online digital reporting, flexible pay-as-you-go tax, increasing tax paid by small businesses, and replacing accountants.

### Output/result given

The page positions the quiz as a two-minute test of knowledge/preparedness rather than a strict eligibility calculator. It does not require using !Coconut to take part, according to the page text.

### Lead capture or affiliate pattern

No gate was observed before starting the quiz. The page includes strong product CTAs for !Coconut, including a 14-day free trial, app store links and positioning as HMRC-recognised record-keeping software for self-employed people.

### UX strengths

- Low-friction, friendly quiz framing.
- Good awareness hook: nearly half of self-employed Brits do not understand MTD, according to !Coconut's commissioned research.
- Product CTA is present, but the quiz is framed as educational.

### Weak spots

- Knowledge testing is not the same as readiness or obligation checking.
- It may not answer the user's most urgent question: "Do I have to comply, and when?"
- The first observed question is conceptual, which may feel like a test rather than help.

### Gap Kyle can exploit

Avoid trivia. Ask only information that changes the user's result. Use educational explanations after each answer, not as quiz questions.

## 6. Landlord Studio MTD Readiness Quiz

**Source:** <https://www.landlordstudio.com/uk/academy/mtd-readiness-quiz>  
**Fetched:** 2026-05-23  
**Confidence:** Medium

### Questions asked

The article says Landlord Studio created a short quiz with six quick questions to test knowledge of MTD requirements, timelines and what landlords need to do to get compliant. The fetched page did not expose the full interactive question list.

### Output/result given

The page frames the result as awareness and preparedness: when MTD impacts the user and what they need to do to get ready. It also educates landlords that MTD requires digital records, quarterly income updates via HMRC-recognised software and an end-of-year declaration.

### Lead capture or affiliate pattern

The page is embedded in Landlord Studio's academy and routes users to "Get started for free" with Landlord Studio. It positions Landlord Studio as helping landlords digitally track income and expenses, generate reports, stay on top of deadlines and keep records ready for MTD.

### UX strengths

- Audience-specific: landlords only.
- Uses a content/academy context rather than an aggressive sales page.
- Explains why MTD matters in practical landlord terms.

### Weak spots

- Fetched content did not reveal exact questions or result logic.
- Landlord-only framing excludes sole traders and mixed sole trader/property cases.
- More educational than diagnostic.

### Gap Kyle can exploit

Offer a branch for landlords, sole traders and both. For landlords, include joint ownership/share-of-rent logic and property count, then give specific record-keeping next steps.

## 7. Checkatrade / Sage Making Tax Digital Readiness Check

**Source:** <https://makingtaxdigital.checkatrade.com/>  
**Fetched:** 2026-05-23  
**Confidence:** High

### Questions asked

The page exposes a three-question readiness check:

1. What's your turnover? Options: less than £20k, £20k to £30k, £30k to £50k, £50k+.
2. Do you currently use accounting software? Options: yes, MTD-compliant software; yes, but not sure if compliant; no, spreadsheets or paper.
3. How much do you know about MTD? Options: understand the requirements, heard about it, or this is new to me.

### Output/result given

The fetched page did not expose a personalised text result, but it presents a four-step readiness guide and product offers immediately below the quiz. The software plans shown are Sage Sole Trader Free and Sage Sole Trader, with features such as digital records, quarterly updates, tax estimates, end-of-year returns, receipts, invoices and bank connections.

### Lead capture or affiliate pattern

The page is explicitly powered by Sage and routes to Sage offers. It includes a six-month-free promotional offer for paid plans and a general guidance disclaimer stating Checkatrade does not provide tax, financial or legal advice.

### UX strengths

- Very fast three-question experience.
- Strong audience fit for tradespeople and sole traders using Checkatrade.
- Clear product path for users who know they need software.
- Includes a useful tax-advice disclaimer.

### Weak spots

- It states "if your turnover is over £50,000 you'll need to go digital" and "sole traders with turnover over £50,000", but the HMRC rule is broader qualifying income from self-employment or property. That shorthand may confuse landlords or mixed-income users.
- Does not ask property income, Self Assessment registration, exemptions, ceased sources, or tax-year basis.
- Product bias is obvious because Sage offers dominate the page.

### Gap Kyle can exploit

Use the three-question simplicity as an inspiration for the opening path, but avoid oversimplifying turnover. Add an "I have rental income" branch and distinguish eligibility from software choice.

## 8. TaxZap MTD Requirement Checker

**Sources:** <https://taxzap.co.uk/> and search result for <https://taxzap.com/uk/resources>  
**Fetched/searched:** 2026-05-23  
**Confidence:** Medium

### Questions asked

TinyFish did not expose the interactive question list. The page text says TaxZap's free MTD requirement checker helps users see whether they need to follow HMRC's MTD rules. Search snippets described a requirement checker for sole traders and landlords based on total annual income from 6 April 2026.

### Output/result given

The page says users can check MTD eligibility, link their HMRC account, link bank accounts or upload spreadsheets, categorise income and transactions, add receipts, submit quarterly updates and end-of-year returns through HMRC-connected software, and view tax liability.

### Lead capture or affiliate pattern

This is a software acquisition funnel for TaxZap. The checker is embedded in a product narrative that leads towards TaxZap's HMRC-connected dashboard and account linking.

### UX strengths

- Integrates eligibility checking with downstream actions inside software.
- Strong "one central dashboard" promise.
- Speaks directly to self-employed people and landlords.

### Weak spots

- Publicly fetched content does not make the question logic transparent.
- The flow appears product-first, which could reduce trust for users seeking independent guidance.
- May be too tied to account setup/HMRC linking for early-stage awareness users.

### Gap Kyle can exploit

Make the logic visible and auditable. Tell users exactly why each question is being asked, then offer software links only after the result.

## 9. Accountancy checklist and consultation-led alternatives

### FKCA practical readiness checklist

**Source:** <https://www.fkca.co.uk/news/blog/making-tax-digital-your-practical-readiness-checklist/>  
**Fetched:** 2026-05-23  
**Confidence:** High

FKCA is not an interactive checker, but it gives a strong preparation checklist: confirm whether and when MTD applies, understand digital records/quarterly updates/final year-end submission, decide who manages bookkeeping, ensure suitable compatible software, build a quarterly reporting rhythm, and consider voluntary testing. It correctly emphasises qualifying income as gross income before expenses or deductions and says multiple self-employment/rental sources must be added together.

**Gap Kyle can exploit:** convert this checklist content into an interactive result that tells the user which checklist items apply to them now.

### Perfectly Balanced Bookkeeping ChatGPT quiz

**Source:** <https://perfectlybalancedbookkeeping.co.uk/mtd-next-steps/>  
**Fetched:** 2026-05-23  
**Confidence:** High

The page links to a free "MTD Readiness Checker in ChatGPT" and says it gives a clear action plan. The article itself gives practical next steps: double-check gross income, set up Government Gateway, start using MTD-compatible software, understand the reporting timeline, separate income types and talk to a bookkeeper/accountant.

**Gap Kyle can exploit:** a web-native checker is more accessible and trustworthy than sending non-technical taxpayers into ChatGPT. However, the conversational-action-plan promise is useful.

### Grosvenor Solutions readiness check

**Source:** <https://grosvenor.solutions/mtd-readiness-check/>  
**Fetched:** 2026-05-23  
**Confidence:** Medium

The page positions a one-minute free assessment checking whether software, record-keeping and processes are ready. TinyFish did not expose the detailed questions. The call to action is a free discovery call for help setting up MTD-compliant systems, migrating from spreadsheets and handling quarterly submissions.

**Gap Kyle can exploit:** provide a more complete public result before any consultation CTA.

## Cross-competitor patterns

### Common questions competitors ask

- Income type: sole trader, landlord, both, or neither.
- Gross self-employment and property income, usually before expenses.
- Threshold band or exact income amount.
- Tax year being tested.
- Current record-keeping method: paper, spreadsheet, software, mixed.
- Whether user has or has checked MTD-compatible software.
- Whether user is digitally excluded or exempt.
- Whether user needs Self Assessment or is registered for it.
- Awareness/preparedness around quarterly updates.

### Common outputs

- Likely MTD start date.
- Urgency level.
- Action plan or next step.
- Deadline calendar or quarterly reporting rhythm.
- Software recommendation or consultation CTA.
- PDF/downloadable summary in more lead-gated flows.

### Common lead capture and monetisation

- Accountants gate a detailed result or PDF behind name, email, phone and location.
- Software vendors use the quiz as a soft route into a free trial or product plan.
- Affiliate sites recommend accounting software and disclose commissions.
- Some pages offer free calls or consultations as the main conversion.

## Strategic gaps for Kyle's checker

1. **Instant no-gate result:** Most useful private checkers either gate results or are product-biased. Give the answer first, then invite optional email reminders.
2. **HMRC-aligned question logic:** Include digital exclusion, exemption, National Insurance, Self Assessment, ceased sources, source type, gross qualifying income, tax year and property share where relevant.
3. **Software-neutral recommendation layer:** Explain options: accountant-managed, full accounting software, landlord-specific software, spreadsheet plus bridging software where appropriate. Only then show affiliate links.
4. **Trust copy:** State sources, last updated date, not tax advice, and "verify with HMRC". Link the official HMRC checker next to Kyle's result.
5. **Deadline calendar:** Competitors promise this, but few show it openly. Generate quarter dates and setup milestones based on start date.
6. **Landlord nuance:** Joint property share, UK vs foreign property, number of properties, and mixed sole trader/property income are under-served.
7. **Plain-English microcopy:** Replace tax jargon with short explanations beside each question: "gross means before expenses", "PAYE does not count", "your share of joint rent only".
8. **Result segmentation:** Return one of several clear states: not in scope, likely exempt/check HMRC, not yet required, due from 2026, due from 2027, due from 2028, already late/urgent if future date context changes.

## Recommended checker shape for Kyle

### Minimal high-trust flow

1. Are you checking for yourself or someone else?
2. Do you have sole trader income, UK property income, foreign property income, both/multiple, or none?
3. Are you registered for Self Assessment or expecting to file one?
4. Enter gross self-employment income and gross property income for the relevant tax year, with helper text for joint property share.
5. Which tax year are these figures from: 2024/25, 2025/26, 2026/27 or estimate?
6. Have all self-employment/property sources ceased?
7. Do you think you may be digitally excluded or otherwise exempt?
8. How do you currently keep records: paper, spreadsheet, software, accountant, mixed?
9. Do you already have HMRC-recognised MTD-compatible software or an accountant handling MTD?

### Output

- Your likely MTD status and start date.
- Why this result was reached, with threshold math shown.
- What to do next in 3 to 5 steps.
- Deadline calendar for the relevant start year.
- Software/accountant options, clearly marked as recommendations or affiliate links if applicable.
- Link to HMRC official checker and HMRC guidance.
- Optional email: "send me this result and remind me before key dates".

## Source list

- GOV.UK/HMRC, Find out if and when you need to use Making Tax Digital for Income Tax: <https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax>
- HMRC official guidance tool start: <https://www.tax.service.gov.uk/guidance/check-if-you-need-to-use-making-tax-digital-for-income-tax/start/about-this-guidance>
- AccountingCompare MTD Readiness Checker: <https://www.accountingcompare.co.uk/tools/mtd-readiness-checker>
- Harkia Free MTD Checker: <https://harkia.co.uk/mtd-checker/>
- Mercian Accountants Free Making Tax Digital Checker: <https://www.mercianaccountants.co.uk/free-making-tax-digital-checker/>
- !Coconut Making Tax Digital Quiz: <https://www.getcoconut.com/making-tax-digital-quiz>
- Landlord Studio MTD Readiness Quiz: <https://www.landlordstudio.com/uk/academy/mtd-readiness-quiz>
- Checkatrade/Sage Making Tax Digital readiness page: <https://makingtaxdigital.checkatrade.com/>
- TaxZap homepage/MTD requirement checker text: <https://taxzap.co.uk/>
- FKCA Making Tax Digital practical readiness checklist: <https://www.fkca.co.uk/news/blog/making-tax-digital-your-practical-readiness-checklist/>
- Perfectly Balanced Bookkeeping MTD next steps and ChatGPT readiness quiz link: <https://perfectlybalancedbookkeeping.co.uk/mtd-next-steps/>
- Grosvenor Solutions MTD readiness check: <https://grosvenor.solutions/mtd-readiness-check/>

Related: [[mtd-hmrc-guidance]], [[MTD Checker/_index]], [[product-opportunities]]
