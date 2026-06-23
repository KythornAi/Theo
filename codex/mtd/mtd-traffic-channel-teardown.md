---
type: evergreen
project: MTD Checker
date: 2026-05-24
status: done
source: theo
tags: [theo/research, project/mtd-checker]
---

# MTD Checker - traffic channel teardown

**Last updated:** 2026-05-24

## Executive summary

- **MTD traffic is already being attacked by four kinds of pages:** official HMRC guidance/checkers, software-provider hubs, accountant/bookkeeper lead-gen pages, and utility/comparison tools. The strongest visible acquisition pattern is organic SEO into a checker, calculator, FAQ, guide, or software page, then optional email capture, trial/signup, software affiliate, or consultation. Confidence: **High**.
- **The best ethical gap for Kyle is not “another MTD guide”.** The gap is a trust-first utility stack: ungated eligibility/start-date checker, deadline calendar, landlord and sole-trader branches, plain-English qualifying-income explainer, and neutral software chooser. Competitors often do one part well but either gate results, push one provider, mix VAT with Income Tax, or bury the useful answer under generic guide copy. Confidence: **High**.
- **Search language is broad but practical.** Google autocomplete-style evidence includes `mtd eligibility checker`, `hmrc mtd checker`, `mtd for landlords software`, `mtd for sole traders deadlines`, `mtd software comparison`, `cheapest mtd software`, `mtd income tax exemption`, and `making tax digital accountant near me`. This supports separate page clusters rather than one long landing page. Confidence: **High**.
- **Public demand evidence points upward, but exact Google Trends figures are secondary.** Direct Google Trends access had previously returned 429 in the 2026-05-24 audience sprint. Public articles citing Google Trends/Censuswide/Coconut report record-high UK interest and a 614% increase around 10 February 2026; Accountancy Age also reported Q1 averages and a March spike. Treat direction as useful and the exact percentages as vendor/news secondary evidence. Confidence: **Medium**.
- **Borrow utility and clarity, not thin SEO habits.** Good patterns to borrow: instant results, progress steps, result summaries, printable/PDF checklists, deadline tables, audience-specific FAQs, and source links beside compliance claims. Avoid: “HMRC-approved” wording unless directly sourced, definitive tax advice, hidden affiliate ranking, forced email gates, AI-generated generic FAQ farms, and pages that conflate MTD for VAT with MTD for Income Tax. Confidence: **High**.

## Method and prior coverage checked

Before researching, I checked:

- `03_Resources/Theo/MTD Checker/_index.md`
- `03_Resources/Theo/MTD Checker/mtd-audience-keywords.md`
- `03_Resources/Theo/MTD Checker/mtd-competitor-checkers.md`
- `03_Resources/Theo/MTD Checker/mtd-affiliate-programmes.md`
- `03_Resources/Theo/MTD Checker/mtd-monetisation-product-map.md`

This briefing complements those files by focusing on traffic acquisition rather than compliance rules, product monetisation, or checker UX alone.

Research inputs used on 2026-05-24:

- TinyFish searches for the required phrases and related variants.
- TinyFish fetches for competitor pages, software pages, guides, calculator pages, trend articles, and lead-gen examples.
- Google autocomplete-style suggestions via `suggestqueries.google.com` with `hl=en-GB&gl=GB`.
- One Perplexity `sonar` synthesis query for additional SERP perspective; used as secondary synthesis only because citations were not returned as a separate structured field.
- AnswerThePublic indexed search attempts. No usable public AnswerThePublic MTD report was found; prior browser access also showed a gated/unusable flow.
- Prior direct Google Trends attempt from the audience sprint, which returned 429 Too Many Requests.

## Competitor/content inventory

| Site / owner                                                                                | Asset type                                                             | Visible traffic hook                                                                                | Funnel / monetisation path                                             | What they are using to capture traffic                                                    | Confidence     |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------- |
| GOV.UK / HMRC                                                                               | Official eligibility checker, software finder, step-by-step collection | “Find out if and when you need to use MTD”, “choose the right software”, sole traders and landlords | Public-service guidance, no commercial funnel                          | Eligibility, thresholds, deadlines, sign-up steps, software finder, official authority    | High           |
| HMRC campaign site                                                                          | Plain-English campaign hub                                             | “Tax returns are changing”, dates, FAQs, quarterly updates                                          | Awareness and compliance education                                     | FAQs, deadlines, software basics, April 2026 framing                                      | High           |
| AccountingCompare                                                                           | MTD readiness checker                                                  | “Answer 6 questions”, personalised action plan                                                      | Affiliate comparison/disclosure, software recommendations              | Readiness score, VAT plus Income Tax questions, action plan, tax deadline calendar        | High           |
| ANNA Money                                                                                  | MTD Income Tax Eligibility Checker                                     | “Find out if you need to comply and when”                                                           | Product CTA to ANNA MTD-compatible software                            | Eligibility checker, deadline urgency, software promise                                   | High           |
| Harkia Accountants                                                                          | Free MTD checker                                                       | “Likely start date, urgency level, next step in under 60 seconds”                                   | Accountancy lead-gen, email capture, online-client discount            | Landlord/sole-trader specificity, gross-income questions, support offer                   | High           |
| Mercian Accountants                                                                         | Free Making Tax Digital checker                                        | “Personal start date, quarterly deadline calendar, action plan”                                     | Heavy contact gate and consultation offer                              | Five-step checker, PDF result, deadline calendar                                          | High           |
| Gorilla Accounting                                                                          | MTD deadline/status checker                                            | “Find out when you need to comply”                                                                  | Accountant lead-gen and marketing email consent                        | Calculator-style income fields, copy-to-email result, trusted-accountancy positioning     | High           |
| Taxd                                                                                        | MTD calculator                                                         | “Do you need to file under MTD?”                                                                    | Software signup/support, Taxd product positioning                      | Calculator, quarterly deadline table, bridging/software pitch, advisory call CTA          | High           |
| FigsFlow                                                                                    | Making Tax Digital calculator                                          | “Determine if you are required to comply”                                                           | Practice workflow product trial/demo                                   | Calculator for accountants/tax advisers, MTD compliance content                           | Medium         |
| RentalBux                                                                                   | MTD software finder/comparison                                         | “Compare 50+ HMRC-recognised software options”                                                      | Software/tool acquisition, property-specialist positioning             | Filterable software comparison, landlord and sole-trader suitability, templates elsewhere | High           |
| RossMartin                                                                                  | Software comparison guide                                              | “Compare software for MTD for Income Tax”                                                           | Professional resource/subscription ecosystem                           | Freeview comparison, HMRC software changes, professional tax search intent                | Medium to High |
| Money.co.uk                                                                                 | Compatible software guide                                              | “Guide to compatible software”                                                                      | Comparison/affiliate-style accounting software discovery               | Software categories, bridging/free software explainer, budget/user-fit questions          | High           |
| Sage                                                                                        | Multiple MTD hubs/guides/checklists                                    | Sole-trader guide, landlord FAQ, accountant guide, checklist PDF                                    | Software acquisition, e-book/checklist lead magnets, product education | Myth-busting articles, role-specific guides, interactive checklist, downloadable guide    | High           |
| Xero                                                                                        | MTD programme hub and landlord pages                                   | “What is MTD?”, “plan for 2026”, landlord guide                                                     | Software trial/signup and accountant/practice education                | Timelines, FAQs, landlord/property-income pages, software CTAs                            | High           |
| FreeAgent                                                                                   | MTD guide library                                                      | “Doing starts with knowing”, deadlines and next steps                                               | Software acquisition and accountant resources                          | Hub-and-spoke guide library, year-one guide, landlord guide, accountant/bookkeeper CTA    | High           |
| QuickBooks UK                                                                               | MTD software landing page                                              | MTD key dates and deadlines, HMRC-recognised software                                               | Product plan signup and pricing promo                                  | VAT plus Income Tax overview, deadline timeline, trust/reviews claims                     | High           |
| Starling Bank                                                                               | MTD software feature page                                              | “Free, simple and built into your account”                                                          | Sole-trader bank account signup, Accounting Plus upsell                | Free software angle, reminders, timelines, account/app integration                        | Medium to High |
| Clear Books                                                                                 | Free MTD software page                                                 | “Free MTD software for sole traders and landlords”                                                  | Free account/software acquisition                                      | Free software promise, digital records, quarterly updates, end-of-year filing             | Medium to High |
| Landlord Studio                                                                             | Landlord resource hub                                                  | “Free MTD resources for landlords”                                                                  | Landlord software acquisition                                          | Resource roundup, downloadable materials, landlord-specific FAQs and timeline             | High           |
| Glow Accounts                                                                               | Sole-trader checklist page                                             | “Making Tax Digital checklist for sole traders 2026”                                                | Accountancy support / lead magnet                                      | Printable checklist, common mistakes, help prompts, deadline prep                         | Medium to High |
| Accountant/blog sites such as FKCA, Hall Morrice, Lidertax, Arnold Hill, THP, SG Accounting | Guides, FAQs, service pages                                            | “Practical readiness checklist”, “FAQs”, “MTD accountants near me”                                  | Local/service SEO into consultation                                    | Blog clusters, service pages, question-answer posts, local accountant intent              | Medium         |
| Professional/trade publications and property press                                          | News/trend articles                                                    | “searches surge”, “HMRC struggles”, landlord urgency                                                | PR/newsjacking and topical referral traffic                            | Trend/data hooks, affected-user counts, rollout urgency                                   | Medium         |

## Traffic pattern findings

### 1. Organic SEO is the core channel

Most visible assets are built for search intent rather than social discovery. The clearest search-entry patterns are:

- **Action utility:** `MTD checker`, `MTD eligibility checker`, `MTD calculator`, `MTD deadline checker`.
- **Audience guides:** `MTD for landlords`, `MTD for sole traders`, `Making Tax Digital for self employed`.
- **Software shopping:** `MTD software`, `MTD software comparison`, `free MTD software`, `MTD software for landlords`, `MTD bridging software`.
- **Question/FAQ:** `do I need MTD`, `making tax digital questions`, `mtd income tax exemption`, `can my accountant do it`.
- **Local/service:** `making tax digital accountants`, `making tax digital accountant fee`, `making tax digital accountants near me`.

Google autocomplete-style suggestions gathered 2026-05-24 support all of these clusters. Confidence: **High**.

### 2. “Checker/calculator” pages are bottom-of-funnel capture assets

HMRC, AccountingCompare, ANNA, Harkia, Mercian, Gorilla, Taxd and FigsFlow all target utility language. The funnel is usually:

1. Search query with immediate uncertainty: “do I need MTD?”, “MTD checker”, “MTD calculator”.
2. Lightweight form/checker.
3. Result or promised result.
4. CTA to software, consultation, account signup, PDF, email result, or product trial.

This validates Kyle's checker concept. The improvement opportunity is to give the core result ungated and make email/software/accountant follow-up optional. Confidence: **High**.

### 3. Software providers are building hub-and-spoke content clusters

Sage, Xero, FreeAgent, QuickBooks, Starling, Clear Books, Coconut and Money.co.uk-style comparison pages are using MTD as a software-acquisition event. The common structure is:

- Main MTD hub.
- Role pages: sole trader, landlord, accountant/client.
- Deadline/timeline pages.
- Software explainer: compatible, recognised, bridging, free vs paid.
- FAQ sections targeting People Also Ask-style questions.
- Product CTAs and trust signals.

Sage is especially aggressive: landlord FAQ, sole-trader guide, accountant guide, and checklist/PDF style content. FreeAgent has a library-style MTD guide hub. Xero has programme pages, landlord/property pages and practice education. Confidence: **High**.

### 4. Accountant and bookkeeping firms use MTD for local/service SEO

Accountant pages tend to target “Making Tax Digital accountant”, “MTD accountants near me”, “MTD fee”, “MTD readiness checklist”, and client FAQ intent. The funnel is:

- Blog/article/service page.
- Authority claims and compliance reassurance.
- Book-a-call or consultation CTA.
- Sometimes a checker gated by contact details.

Kyle can ethically borrow the “when to ask an accountant” angle, but not the forced lead capture. Accountant lead-gen should remain Phase 2 unless there is a vetted disclosure and referral model. Confidence: **Medium to High**.

### 5. PR/newsjacking is emerging around rollout anxiety

Property118, UK Property Accountants, Professional Electrician, Accountancy Age and Estate Agent Today-style articles use search-surge, affected-user counts, HMRC phone pressure, and deadline urgency as news hooks. This is likely useful for:

- Digital PR outreach after Kyle's checker launches.
- “State of MTD readiness” data stories if the checker collects anonymous aggregate results.
- Short newsy posts after HMRC announcements.

This is a secondary channel, not the MVP traffic engine. Confidence: **Medium**.

### 6. Social traffic looks secondary for this project

The pages found are mostly SEO assets. Social may work for panic/awareness clips, but MTD search intent is more urgent and problem-led than inspiration-led. Kyle should not prioritise Pinterest/TikTok before the search utility stack unless later social research proves otherwise. Confidence: **Medium**.

## Trends/search-demand evidence

### Google Trends and search-surge articles

Direct Google Trends access was not available in the prior 2026-05-24 audience run; it returned Error 429 Too Many Requests. I therefore treated public articles citing Trends as **secondary evidence**.

Secondary findings:

- Property118 reported that searches for Making Tax Digital had surged ahead of the April deadline and cited Google Trends analysis by Censuswide, commissioned by Coconut, showing the term “Making Tax Digital” peaked at an index score of 100 on 10 February 2026 and represented a 614% increase from December 2025.
- UK Property Accountants repeated a similar claim, framing the 10 February 2026 score as the highest recorded UK level and linking the rise to landlord concern before rollout.
- Professional Electrician reported the same 614% trend angle for sole traders and landlords, tied to Coconut's quiz.
- Accountancy Age search result snippets reported monthly Google searches averaging 19,819 in Q1 with a 34,017 March spike and later rising to 43,648 per month, in the context of HMRC service strain. The page could not be fetched cleanly during this run, so this is snippet-level secondary evidence only.
- Estate Agent Today search snippets also reported a search surge around MTD and HMRC service pressure, but the page did not fetch cleanly.

Interpretation:

- It is safe to say **public secondary evidence suggests rising MTD search demand ahead of the 2026 rollout**.
- Do **not** put the exact 614% figure in user-facing copy unless cited as “reported by…” with the source and caveat that it is commissioned/secondary.
- A better launch claim is: “Interest is rising as the April 2026 rollout approaches; check your position now against HMRC guidance.”

Confidence: **Medium**.

### Google autocomplete-style evidence

Fetched 2026-05-24 with UK locale. Useful query language:

- `making tax digital`: `making tax digital software`, `making tax digital for income tax`, `making tax digital for landlords`, `making tax digital threshold`, `making tax digital software free`, `making tax digital for sole traders`, `making tax digital self employed`, `making tax digital hmrc`.
- `mtd checker`: `mtd checker`, `mtd eligibility checker`, `hmrc mtd checker`.
- `mtd for landlords`: `mtd for landlords threshold`, `mtd for landlords software`, `mtd for landlords free software`, `mtd for landlords april 2026`, `mtd for landlords start date`, `mtd for landlords delayed`.
- `mtd for sole traders`: `mtd for sole traders threshold`, `mtd for sole traders and landlords`, `mtd for sole traders software`, `mtd for sole traders 2026`, `mtd for sole traders free`, `mtd for sole traders deadlines`, `sage mtd for sole traders`.
- `mtd software comparison`: `mtd software reviews`, `mtd software price comparison`, `cheapest mtd software`, `mtd compatible software list`, `what is mtd software`.
- `making tax digital accountant`: `making tax digital accountants`, `making tax digital accountant fee`, `making tax digital accountants near me`, `making tax digital bookkeeper`, `making tax digital using an accountant`, `making tax digital can my accountant do it`.
- `mtd deadlines`: `mtd deadlines 2026`, `mtd deadlines hmrc`, `mtd filing deadlines`, `mtd submission deadlines`, `mtd quarterly deadlines`, `mtd itsa deadlines`.
- `mtd income tax`: `mtd income tax threshold`, `mtd income tax software`, `mtd income tax deadlines`, `mtd income tax bridging software`, `mtd income tax exemption`, `mtd income tax partnerships`, `mtd income tax submission dates`.

Interpretation: this supports building separate programmatic-ish but well-written pages by audience and job-to-be-done. Confidence: **High**.

### AnswerThePublic

No publicly usable AnswerThePublic report was found through indexed search in this run. Prior browser access in the audience sprint showed a gated/free-search modal and unusable report/page-not-found state. Treat AnswerThePublic as **not accessible** for this sprint. Confidence: **High** for access limitation.

## Content cluster opportunities

### Cluster 1: Main utility / checker cluster

Priority pages:

1. **Free Making Tax Digital checker**
   - Target: `Making Tax Digital checker`, `MTD checker`, `MTD eligibility checker`, `do I need MTD`.
   - Include: sole trader/landlord/both branch, Self Assessment status, gross qualifying income bands, deadlines, digital records, accountant/software next steps.
   - CTA: instant result first; optional email copy, deadline reminders and setup pack after.
   - Confidence: **High**.

2. **MTD deadline calculator / calendar**
   - Target: `MTD deadline`, `MTD deadlines 2026`, `mtd quarterly deadlines`, `mtd submission dates`.
   - Include: start wave, first quarterly dates, 7 August/7 November/7 February/7 May pattern, 31 January final declaration context, calendar download.
   - Confidence: **High**.

3. **MTD qualifying-income calculator / worksheet**
   - Target: `mtd income tax threshold`, `what counts as qualifying income`, `mtd sole trader and landlord`.
   - Include: gross self-employment plus property income, before-expenses explanation, PAYE/dividend/pension exclusions with HMRC links, edge-case warning.
   - Confidence: **High**.

### Cluster 2: Audience pages

1. **Making Tax Digital for landlords**
   - Target: `mtd for landlords`, `mtd landlord threshold`, `mtd landlord software`, `mtd for landlords free software`.
   - Include: property income, joint ownership caveat, foreign property, individual vs limited-company landlords, software and record-capture checklist.
   - Evidence: NRLA, Xero landlord page, FreeAgent landlord page, Landlord Studio resources, Sage landlord FAQ.
   - Confidence: **High**.

2. **Making Tax Digital for sole traders**
   - Target: `mtd for sole traders`, `mtd sole trader threshold`, `mtd sole trader software`, `mtd for sole traders deadlines`.
   - Include: gross self-employment income, April 2026/2027/2028 waves, records/software, spreadsheet route, accountant support, deadline calendar.
   - Evidence: Sage sole-trader page, Starling sole-trader software page, Glow checklist, HMRC.
   - Confidence: **High**.

3. **MTD for people who are both landlord and sole trader**
   - Target: `mtd for landlords and self employed`, `mtd sole trader and landlord`, `mtd qualifying income`.
   - Include: income streams get combined for threshold, separate quarterly-update workload may matter, show “not tax advice” on mixed/edge cases.
   - Confidence: **Medium to High**.

### Cluster 3: Software and comparison pages

1. **MTD software comparison for landlords and sole traders**
   - Target: `mtd software comparison`, `mtd software reviews`, `mtd software price comparison`, `cheapest mtd software`.
   - Include: HMRC software finder link, recognised/compatible wording, free vs paid, bridging vs all-in-one, accountant access, receipt capture, property categories, bank feeds, pricing caveats.
   - Evidence: GOV.UK software finder, RentalBux comparison, RossMartin comparison, Money.co.uk guide, Clear Books, Starling, Sage, Xero.
   - Confidence: **High**.

2. **Free MTD software guide**
   - Target: `making tax digital software free`, `mtd for landlords free software`, `mtd for sole traders free`.
   - Include: what “free” usually means, limitations, transaction caps, bank-account tie-ins, upgrade paths, HMRC finder.
   - Watch-out: avoid ranking by affiliate commission or implying all free tools fit all users.
   - Confidence: **High**.

3. **Can I use spreadsheets for MTD?**
   - Target: `mtd bridging software`, `mtd income tax bridging software`, `spreadsheet MTD software`.
   - Include: bridging concept, digital links, risks, when spreadsheet users should upgrade, landlord record-capture template route.
   - Confidence: **Medium to High**.

### Cluster 4: FAQ / People Also Ask cluster

Build one authoritative FAQ hub plus short answers embedded on pages:

- Do I need Making Tax Digital?
- Who needs MTD for Income Tax?
- What is qualifying income?
- Is qualifying income before or after expenses?
- Do I need MTD if I use an accountant?
- Do I need MTD if I already use MTD for VAT?
- Do landlords need MTD?
- Do sole traders need MTD?
- What are the MTD deadlines?
- Who is exempt from MTD?
- Can I use free software?
- What happens if I miss an MTD deadline?

Evidence: ATT FAQ, HMRC pages, MSE guide, BBC Money Box question page, autocomplete terms. Confidence: **High**.

### Cluster 5: Lead magnet / email cluster

Ethical lead magnets:

- Free result copy emailed after displaying result in-page.
- MTD deadline reminder calendar.
- Sole-trader readiness checklist.
- Landlord record-capture checklist.
- Accountant conversation checklist.
- “Ask your software provider these questions” worksheet.

Avoid hiding the result behind the email. Use separate consent for marketing, as already noted in the monetisation map. Confidence: **High**.

### Cluster 6: PR/newsjacking cluster

Potential posts:

- “What HMRC's latest MTD update means for sole traders and landlords” after announcements.
- “MTD readiness checklist after the April 2026 rollout begins”.
- “What we learned from X anonymous checker results” once Kyle has his own aggregate data.
- “MTD deadline calendar: next quarterly dates”.

Use this after the checker exists. PR without a tool is weaker. Confidence: **Medium**.

## Ethical copy/build implications

### Borrow these patterns

- **HMRC:** source-linked eligibility, printable/checkable results, exemption and digital-exclusion caution.
- **AccountingCompare:** progress count, quick readiness questions, personalised action plan.
- **Harkia:** gross-income split between sole-trader and property income, landlord/sole-trader specificity, urgency level.
- **Mercian:** personal start date plus quarterly deadline calendar and downloadable summary.
- **Taxd:** clear quarterly update deadline table and spreadsheet/bridging explanation.
- **Sage/FreeAgent/Xero:** hub-and-spoke guide architecture, role-specific pages, FAQ sections.
- **RentalBux/RossMartin/Money.co.uk:** software comparison filters and “how to choose” framing.
- **Glow/Landlord Studio:** downloadable checklist/resource bundle pattern.

Confidence: **High**.

### Build implications for Kyle's MVP

1. **Make the checker the homepage hero.** Above the fold: “Check if MTD for Income Tax applies to you and when you need to start.”
2. **Use “for Income Tax” consistently.** Disambiguate from VAT early.
3. **Show the answer before monetisation.** Result, deadline and caveats first; recommendations second.
4. **Expose source links beside compliance claims.** HMRC/GOV.UK links should appear in result panels.
5. **Use confidence states.** `Likely in scope`, `likely not yet`, `unclear/check HMRC or accountant`.
6. **Make the result reusable.** Print, copy, email optional, calendar download optional.
7. **Build content from checker branches.** Every checker branch can become a supporting SEO page.
8. **Separate affiliate data from eligibility logic.** Eligibility must never be influenced by monetisation.
9. **Prefer “compatible” or “recognised” software wording.** Avoid “approved” unless directly quoting a source.
10. **Create a small paid organisation pack.** Position it as readiness/admin help, not tax advice or submission software.

Confidence: **High**.

## Watch-outs

- **Thin generic guides will be hard to rank.** HMRC, ATT, MSE, Sage, Xero, FreeAgent and accountant firms already cover generic “what is MTD” content. Kyle needs utility and specificity. Confidence: **High**.
- **Forced email gates look weaker than instant utility.** Harkia/Mercian-style gating may work for accountants, but Kyle's trust angle is stronger if the result is ungated. Confidence: **High**.
- **Do not make definitive answers for edge cases.** Digital exclusion, exemptions, joint property, partnerships, foreign property, ceased sources, non-residence and unusual income need routing to HMRC/accountant. Confidence: **High**.
- **Avoid confusing VAT and Income Tax.** Many software pages talk about MTD broadly. Kyle's checker must say it is for MTD for Income Tax unless deliberately building a VAT branch. Confidence: **High**.
- **Avoid unsupported “free software” claims.** Free tools can have limits, account requirements or upgrade paths. Explain conditions. Confidence: **High**.
- **Avoid pay-to-rank affiliate comparisons.** This would damage trust and may create disclosure/compliance risk. Confidence: **High**.
- **Treat Google Trends claims carefully.** The useful signal is rising attention, not the exact commissioned percentage. Confidence: **Medium**.
- **AnswerThePublic is not a dependency.** If gated/unavailable, autocomplete, PAA-style SERPs, HMRC/ATT FAQs and competitor FAQ pages are enough to build the first cluster. Confidence: **High**.
- **Local accountant SEO is competitive and operationally heavy.** Do not build a “best MTD accountant near me” directory unless Kyle can vet/disclose relationships. Confidence: **Medium to High**.

## Recommended next actions

1. **Build the launch information architecture around six pages:**
   - `/mtd-checker/`
   - `/mtd-deadline-calculator/`
   - `/mtd-for-landlords/`
   - `/mtd-for-sole-traders/`
   - `/mtd-software-comparison/`
   - `/mtd-faq/`
   Confidence: **High**.

2. **Create the checker-result template before writing more articles.** The result page should include: likely status, start date, qualifying-income explanation, next three actions, source links, optional email result, optional deadline calendar, and software-readiness prompt. Confidence: **High**.

3. **Turn autocomplete clusters into page briefs.** Use one brief per cluster: landlord, sole trader, software, deadline, exemption, accountant, spreadsheet/bridging. Confidence: **High**.

4. **Use HMRC/GOV.UK and ATT/LITRG as compliance anchors.** Software and accountant pages are market evidence, not compliance authority. Confidence: **High**.

5. **Plan one lead magnet, not five.** First pick: free MTD deadline/reminder calendar plus checklist. Paid add-on later: quarterly routine pack. Confidence: **High**.

6. **Set up a source-update cadence.** Recheck HMRC, ATT, LITRG, and software finder pages monthly through April 2026 and after any HMRC announcement. Confidence: **High**.

7. **Save PR/data-story ideas until the checker has usage data.** A “what users are confused about” post using anonymised aggregate checker data would be more defensible than repeating vendor-commissioned trend stats. Confidence: **Medium**.

## Sources

Primary / official:

- GOV.UK, Find out if and when you need to use Making Tax Digital for Income Tax. Fetched 2026-05-24. https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
- GOV.UK, Making Tax Digital for Income Tax for sole traders and landlords: step by step. Fetched 2026-05-24. https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-businesses-step-by-step
- GOV.UK, Choose the right software for Making Tax Digital for Income Tax. Fetched 2026-05-24. https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax
- GOV.UK, Find software that works with Making Tax Digital for Income Tax. Fetched 2026-05-24. https://www.gov.uk/guidance/find-software-that-works-with-making-tax-digital-for-income-tax
- HMRC campaign site, Making Tax Digital for Income Tax. Fetched 2026-05-24. https://makingtaxdigital.campaign.gov.uk/

Professional / FAQ sources:

- Association of Taxation Technicians, MTD - HMRC launch new interactive checker tool. Fetched 2026-05-24. https://www.att.org.uk/technical/news/mtd-hmrc-launch-new-interactive-checker-tool
- Association of Taxation Technicians, Making Tax Digital - Frequently Asked Questions. Previously covered in `mtd-audience-keywords.md`; search-confirmed 2026-05-24. https://www.att.org.uk/making-tax-digital-frequently-asked-questions
- NRLA, Making Tax Digital for Landlords. Fetched 2026-05-24. https://www.nrla.org.uk/resources/tax/making-tax-digital
- MoneySavingExpert, Guide to Making Tax Digital. Search-confirmed 2026-05-24. https://www.moneysavingexpert.com/family/making-tax-digital/
- BBC Money Box, Making Tax Digital: Your questions answered. Search-confirmed 2026-05-24. https://www.bbc.co.uk/programmes/articles/BYVj9CWqKz4c9nPHmN8ZgG/making-tax-digital-your-questions-answered

Checker / calculator / utility pages:

- AccountingCompare, MTD Readiness Checker. Fetched 2026-05-24. https://www.accountingcompare.co.uk/tools/mtd-readiness-checker
- ANNA Money, MTD Income Tax Eligibility Checker. Fetched 2026-05-24. https://anna.money/free-tools/mtd-income-tax-eligibility-checker/
- Harkia, Free MTD Checker for Landlords & Sole Traders. Fetched 2026-05-24. https://harkia.co.uk/mtd-checker/
- Mercian Accountants, Free Making Tax Digital Checker. Fetched 2026-05-24. https://www.mercianaccountants.co.uk/free-making-tax-digital-checker/
- Gorilla Accounting, Making Tax Digital deadline checker. Fetched 2026-05-24. https://gorillaaccounting.com/making-tax-digital-deadline-checker/
- Taxd, MTD calculator. Fetched 2026-05-24. https://www.taxd.co.uk/mtd-calculator
- FigsFlow, Making Tax Digital Calculator. Fetched 2026-05-24. https://figsflow.com/calculators/making-tax-digital-calculator/

Software / comparison / content hubs:

- RentalBux, MTD software finder. Fetched 2026-05-24. https://rentalbux.com/mtd-software
- RossMartin, Compare software for Making Tax Digital for Income Tax. Fetched 2026-05-24. https://www.rossmartin.co.uk/making-tax-digital/6347-compare-software-for-making-tax-digital-for-income-tax
- Money.co.uk, Making Tax Digital compatible software guide. Fetched 2026-05-24. https://www.money.co.uk/business/guides/making-tax-digital-compatible-software
- Sage, MTD for Income Tax for landlords: FAQ. Fetched 2026-05-24. https://www.sage.com/en-gb/blog/mtd-income-tax-landlords-need-to-know/
- Sage, Sole trader guide to MTD for Income Tax. Fetched 2026-05-24. https://www.sage.com/en-gb/blog/dont-panic-a-sole-traders-guide-to-mtd-for-income-tax-april-2026-deadline/
- Sage, MTD for Income Tax accountant guide. Fetched 2026-05-24. https://www.sage.com/en-gb/blog/mtd-for-income-tax-accountants-need-to-know/
- Sage, MTD checklist interactive/PDF page. Fetched 2026-05-24. https://www.sage.com/en-gb/blog/infographic-mtd-for-income-tax-checklist-interactive/
- Xero, Making Tax Digital hub. Fetched 2026-05-24. https://www.xero.com/uk/programme/making-tax-digital/
- Xero, MTD for Income Tax 2026 page. Fetched 2026-05-24. https://www.xero.com/uk/programme/making-tax-digital/income-tax/
- Xero, landlord/property income MTD guide. Fetched 2026-05-24. https://www.xero.com/uk/programme/making-tax-digital/landlords-property-income/
- FreeAgent, Making Tax Digital guide hub. Fetched 2026-05-24. https://www.freeagent.com/guides/making-tax-digital/
- FreeAgent, MTD for landlords guide. Fetched 2026-05-24. https://www.freeagent.com/guides/making-tax-digital/mtd-what-landlords-need-to-know/
- QuickBooks UK, Making Tax Digital page. Fetched 2026-05-24. https://quickbooks.intuit.com/uk/making-tax-digital/
- Starling Bank, Making Tax Digital feature page. Fetched 2026-05-24. https://www.starlingbank.com/features/making-tax-digital/
- Clear Books, Free MTD software. Fetched 2026-05-24. https://www.clearbooks.co.uk/free-mtd-software/
- Coconut, Making Tax Digital quiz. Fetched 2026-05-24. https://www.getcoconut.com/making-tax-digital-quiz
- Landlord Studio, Free MTD resources for landlords. Fetched 2026-05-24. https://www.landlordstudio.co.uk/blog/mtd-resources-for-landlords/
- Glow Accounts, Making Tax Digital checklist for sole traders. Fetched 2026-05-24. https://glowaccounts.co.uk/making-tax-digital-checklist-sole-traders/

Trend / search-demand sources:

- Property118, Google searches for Making Tax Digital hit record high. Fetched 2026-05-24. https://www.property118.com/google-searches-for-making-tax-digital-hit-record-high/
- UK Property Accountants, Making Tax Digital: Search Interest for Term Hits Record High Ahead of April Start Date. Fetched 2026-05-24. https://www.ukpropertyaccountants.co.uk/making-tax-digital-search-interest-for-term-hits-record-high-ahead-of-april-start-date/
- Professional Electrician, Sole traders urged to prepare as Making Tax Digital searches surge. Fetched 2026-05-24. https://professional-electrician.com/news/sole-traders-urged-to-prepare-as-making-tax-digital-searches-surge/
- Accountancy Age, 1.1 million unanswered HMRC calls as MTD panic sets in. Search snippet only; fetch failed 2026-05-24. https://accountancyage.com/2025/06/19/1-1-million-unanswered-hmrc-calls-as-mtd-panic-sets-in/
- Estate Agent Today, Making Tax Digital search surge as HMRC struggles to service self-employed. Search snippet only; fetch failed 2026-05-24. https://www.estateagenttoday.co.uk/features/2025/07/making-tax-digital-search-surge-as-hmrc-struggles-to-service-self-employed/

Search / query evidence:

- Google autocomplete endpoint via `suggestqueries.google.com`, UK locale, seeds: `making tax digital`, `mtd checker`, `mtd calculator`, `mtd for landlords`, `mtd for sole traders`, `mtd software comparison`, `making tax digital accountant`, `making tax digital checklist`, `mtd deadlines`, `mtd income tax`. Fetched 2026-05-24.
- TinyFish search queries: `Making Tax Digital readiness checker UK`, `MTD checker UK`, `MTD for Income Tax guide sole traders landlords`, `MTD for landlords guide UK`, `MTD for sole traders guide UK`, `MTD calculator Making Tax Digital UK`, `Making Tax Digital accountant blog UK`, `MTD software comparison UK`, `Making Tax Digital Google Trends`, `Making Tax Digital searches surge`, `site:.co.uk Making Tax Digital FAQ landlords sole traders`, `site:.co.uk Making Tax Digital glossary FAQ`, `Making Tax Digital lead magnet checklist PDF`, `AnswerThePublic Making Tax Digital MTD`, `site:answerthepublic.com Making Tax Digital MTD`, `Making Tax Digital People Also Ask questions`. Fetched 2026-05-24.
- Perplexity `sonar` synthesis query on UK MTD traffic-targeting pages and acquisition paths. Queried 2026-05-24. Used as secondary synthesis only; no structured citations field returned.

## Related

- [[_index]]
- [[mtd-hmrc-guidance]]
- [[mtd-competitor-checkers]]
- [[mtd-affiliate-programmes]]
- [[mtd-audience-keywords]]
- [[mtd-monetisation-product-map]]
