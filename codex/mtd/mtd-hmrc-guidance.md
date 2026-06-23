---
type: evergreen
project: MTD Checker
date: 2026-05-23
status: done
source: theo
tags: [theo, research]
---

# MTD Checker - HMRC guidance audit

**Last updated:** 2026-05-23

## Summary

- Making Tax Digital for Income Tax applies to sole traders and landlords registered for Self Assessment who have self-employment or property income, or both, and whose qualifying income is above the relevant threshold.
- Rollout is phased by qualifying income: over £50,000 from 6 April 2026 based on the 2024 to 2025 tax return, over £30,000 from 6 April 2027 based on 2025 to 2026, and over £20,000 from 6 April 2028 based on 2026 to 2027.
- Qualifying income means gross income before expenses from self-employment and property. Employment, dividends, pensions and an individual partner's share of partnership profit do not count, although personal self-employment or property income can still count.
- In-scope users must keep digital records, use compatible commercial software, send quarterly updates for each self-employment or property business, then submit the tax return through software by 31 January following the tax year.
- Exemptions exist, but HMRC separates automatic exemptions from exemptions that must be applied for. Digital exclusion is assessed case by case and HMRC says extra time, extra cost, unfamiliarity with accountancy software, or a small number of records are not enough on their own.

## Scope of this note

This note uses primary GOV.UK and HMRC sources only. It is a compliance guidance audit for a proposed UK Making Tax Digital readiness checker. It is not tax advice and should not be presented to users as a substitute for HMRC guidance, an accountant, or a tax adviser.

Existing Brain coverage checked before research:

- `03_Resources/Theo/product-opportunities.md` already records the MTD readiness checker as an active research sprint and says compliance claims must use primary GOV.UK/HMRC sources.
- `03_Resources/Theo/MTD Checker/_index.md` lists this HMRC guidance audit as the scheduled first file.
- No existing `mtd-hmrc-guidance.md` file was present before this run.

## Primary sources used

1. GOV.UK, HMRC: Find out if and when you need to use Making Tax Digital for Income Tax  
   https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
2. GOV.UK, HMRC: Work out your qualifying income for Making Tax Digital for Income Tax  
   https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax
3. GOV.UK, HMRC: Use Making Tax Digital for Income Tax  
   https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax
4. GOV.UK, HMRC: Use Making Tax Digital for Income Tax - Before you use this guide  
   https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/before-you-use-this-guide
5. GOV.UK, HMRC: Use Making Tax Digital for Income Tax - Send quarterly updates  
   https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates
6. GOV.UK, HMRC: Sign up for Making Tax Digital for Income Tax  
   https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax
7. GOV.UK, HMRC: Choose the right software for Making Tax Digital for Income Tax  
   https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax
8. GOV.UK, HMRC: Find software that works with Making Tax Digital for Income Tax  
   https://www.gov.uk/guidance/find-software-that-works-with-making-tax-digital-for-income-tax
9. GOV.UK, HMRC: Find out if you can get an exemption from Making Tax Digital for Income Tax  
   https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax
10. GOV.UK, HMRC: Making Tax Digital for Income Tax Self Assessment for sole traders and landlords  
    https://www.gov.uk/government/publications/extension-of-making-tax-digital-for-income-tax-self-assessment-to-sole-traders-and-landlords/making-tax-digital-for-income-tax-self-assessment-for-sole-traders-and-landlords
11. GOV.UK, HMRC: Reduction of the mandation threshold from £30,000 to £20,000 from April 2028  
    https://www.gov.uk/government/publications/making-tax-digital-for-income-tax-self-assessment-reducing-the-mandation-threshold-from-30000-to-20000-from-april-2028/reduction-of-the-mandation-threshold-from-30000-to-20000-from-april-2028

## Who is affected

HMRC says a person needs to use Making Tax Digital for Income Tax if all of the following apply:

- they are a sole trader or landlord registered for Self Assessment;
- they receive income from self-employment or property, or both;
- their qualifying income is more than the relevant threshold for the tax year.

Source: GOV.UK, "Find out if and when you need to use Making Tax Digital for Income Tax".

The "Before you use this guide" page frames it similarly: MTD for Income Tax is a new way for sole traders and landlords to do Self Assessment, and applies only where the user is already registered for Self Assessment, has submitted a tax return, and receives self-employment income as a sole trader or property income as a landlord, or both.

Source: GOV.UK, "Use Making Tax Digital for Income Tax - Before you use this guide".

HMRC also says users do not need to start using MTD for Income Tax until after they have submitted their first Self Assessment tax return. The sign-up page says a user must be registered for Self Assessment and have submitted a tax return in the last two years to sign up.

Sources: GOV.UK, "Find out if and when you need to use Making Tax Digital for Income Tax" and "Sign up for Making Tax Digital for Income Tax".

### Partnerships

Partnerships are not currently in the same immediate rollout. HMRC says partnerships will also need to use Making Tax Digital for Income Tax in the future, but that the timeline will be set out later. The exemptions page says partnerships do not currently need to use MTD for Income Tax.

Sources: GOV.UK, "Find out if and when you need to use Making Tax Digital for Income Tax" and "Find out if you can get an exemption from Making Tax Digital for Income Tax".

## Income thresholds and rollout timeline

HMRC's current rollout table is:

| Tax return used to assess qualifying income | Qualifying income | MTD start date |
|---|---:|---|
| 2024 to 2025 Self Assessment tax return | More than £50,000 | 6 April 2026 |
| 2025 to 2026 Self Assessment tax return | More than £30,000 | 6 April 2027 |
| 2026 to 2027 Self Assessment tax return | More than £20,000 | 6 April 2028 |

Sources: GOV.UK, "Find out if and when you need to use Making Tax Digital for Income Tax" and "Use Making Tax Digital for Income Tax - Before you use this guide".

The policy paper on sole traders and landlords confirms the first two phases for individuals: from April 2026 for qualifying income over £50,000 and from April 2027 for qualifying income over £30,000. The separate GOV.UK threshold-reduction page confirms that reducing the threshold to £20,000 takes effect from 6 April 2028 and extends obligations to sole traders and landlords with total qualifying income between £20,000 and £30,000.

Sources: GOV.UK, "Making Tax Digital for Income Tax Self Assessment for sole traders and landlords" and "Reduction of the mandation threshold from £30,000 to £20,000 from April 2028".

## What counts as qualifying income

Qualifying income is the total income in a tax year from self-employment and property. HMRC assesses gross income before expenses, also called turnover. Total qualifying income may come from more than one self-employment or property source.

HMRC gives an example where £25,000 rental income plus £27,000 self-employment income equals £52,000 qualifying income.

Source: GOV.UK, "Work out your qualifying income for Making Tax Digital for Income Tax".

### Income that does not count towards qualifying income

HMRC says the following Self Assessment income sources do not count towards qualifying income:

- employment income reported through PAYE;
- an individual partner's share of profit from a partnership;
- dividends, including from the user's own company;
- State Pension;
- private pensions.

Source: GOV.UK, "Work out your qualifying income for Making Tax Digital for Income Tax".

An individual partner's share of profit from a partnership does not count towards qualifying income and does not require digital records or quarterly updates. However, it still needs to be included in the tax return through compatible software. Personal self-employment or property income that a partnership tells the individual about can count, including disguised investment management fees or income-based carried interest.

Source: GOV.UK, "Work out your qualifying income for Making Tax Digital for Income Tax".

### Property, ceased income sources and residence edge cases

For jointly owned property, only the individual's share of property income counts towards qualifying income. If a jointly owned property generates £50,000 and the taxpayer has an equal share, HMRC's example says their qualifying income is £25,000.

Self-employment or property income from a ceased source can still be included if the taxpayer has another continuing source of self-employment or property income. If all self-employment or property income sources have ceased, the taxpayer will not need to use MTD for Income Tax and should tell HMRC.

If the taxpayer was UK tax resident in the relevant tax year, HMRC counts self-employment income and UK and foreign property income shown on the Self Assessment return. If the taxpayer was not UK resident, qualifying income includes UK property income and self-employment income declared in the UK Self Assessment return. Foreign property income and self-employment income not declared on the UK Self Assessment return do not count.

Source: GOV.UK, "Work out your qualifying income for Making Tax Digital for Income Tax".

## Core obligations under MTD for Income Tax

HMRC describes MTD for Income Tax as a new way for sole traders and landlords to do Self Assessment. Some parts remain the same: users still submit one tax return every tax year and still pay their tax bill by 31 January following the end of the tax year.

New things users need to do include:

- use compatible software;
- create digital records of self-employment and property income;
- send quarterly updates every three months;
- add other income sources and submit the tax return using software;
- understand the penalty changes.

Source: GOV.UK, "Use Making Tax Digital for Income Tax - Before you use this guide".

### Digital records

HMRC says a digital record is a record of income or expense created and stored using software compatible with MTD for Income Tax. Users only need to create digital records for their self-employment and property income. For each record, HMRC says the user needs the amount, the date income was received or the expense occurred, and the category of income or expense using the same categories as Self Assessment.

Sources: GOV.UK, "Use Making Tax Digital for Income Tax - Before you use this guide" and "Choose the right software for Making Tax Digital for Income Tax".

### Quarterly updates

Quarterly updates are summaries of self-employment and property income and expenses. HMRC states they are not tax returns. Compatible software adds together the digital records for each business and creates totals for the income and expense categories used.

A user must send quarterly updates every three months for each self-employment and property business they have. No accounting or tax adjustments are needed before sending a quarterly update. HMRC will not receive details of individual digital records such as receipts or invoices.

Source: GOV.UK, "Use Making Tax Digital for Income Tax - Send quarterly updates".

HMRC says each quarterly update covers from the start of the tax year to the end of the update period, rather than only the previous three months. This means records can be corrected without resending previous updates. If there has been no income or expense during the latest update period, the taxpayer must still send a quarterly update to tell HMRC.

Source: GOV.UK, "Use Making Tax Digital for Income Tax - Send quarterly updates".

### Quarterly deadlines

For standard update periods aligned to the tax year, the deadlines are:

| Standard update period | Update deadline |
|---|---|
| 6 April to 5 July | 7 August |
| 6 April to 5 October | 7 November |
| 6 April to 5 January | 7 February |
| 6 April to 5 April | 7 May following the tax year |

For calendar update periods, the deadlines are the same, but the periods run:

| Calendar update period | Update deadline |
|---|---|
| 1 April to 30 June | 7 August |
| 1 April to 30 September | 7 November |
| 1 April to 31 December | 7 February |
| 1 April to 31 March | 7 May following the tax year |

Source: GOV.UK, "Use Making Tax Digital for Income Tax - Send quarterly updates".

For the first April 2026 cohort, HMRC's first-year table says users should create digital records from 6 April 2026 if using standard update periods, or from 1 April 2026 if using calendar update periods, send the first quarterly update by 7 August 2026, and submit the tax return by 31 January 2028.

Source: GOV.UK, "Use Making Tax Digital for Income Tax - Before you use this guide".

### End-of-year tax return

After quarterly updates, the user still submits one tax return for the tax year. The compatible software must show the self-employment and property income and expenses for the whole year for each business. The user may need to amend or update information, check HMRC-held information, add other income such as savings or dividends, record reliefs or allowances, and then submit the tax return through software.

Source: GOV.UK, "Use Making Tax Digital for Income Tax - Before you use this guide".

## Exemptions and deferrals

HMRC says there are automatic exemptions and exemptions the user must apply for. Exemptions can be permanent unless circumstances change, or temporary, lasting until April 2027 at the earliest. If exempt, the user does not have to use MTD for Income Tax but must continue reporting income and gains through Self Assessment as normal.

Source: GOV.UK, "Find out if you can get an exemption from Making Tax Digital for Income Tax".

### Automatic exemptions

Automatic exemptions include:

- partnerships, until HMRC sets out a future timeline;
- qualifying income of £20,000 or less;
- no National Insurance number before the start of the tax year;
- non-resident companies submitting SA700;
- trusts submitting SA900, including charitable trusts and trusts of non-registered pension schemes;
- personal representatives submitting for someone who has died;
- Lloyd's member SA103L underwriting business, where relevant;
- cases where the 2024 to 2025 tax return says the person is not physically or mentally capable of providing financial information to HMRC and has a UK power of attorney or legally appointed deputy, controller or guardian in place.

Source: GOV.UK, "Find out if you can get an exemption from Making Tax Digital for Income Tax".

Automatic exemptions that last until April 2027 apply where the 2024 to 2025 return included certain claims or pages, including averaging relief, qualifying care relief, SA107 for income from trusts or estates, or SA109. HMRC says if qualifying income is above £30,000 in 2025 to 2026, the person will need to use MTD for Income Tax from the 2027 to 2028 tax year onwards.

Source: GOV.UK, "Find out if you can get an exemption from Making Tax Digital for Income Tax".

Automatic exemptions that last beyond April 2027 include, based on the 2024 to 2025 return, SA102M for a minister of religion, SA103L because the person is a Lloyd's member with self-employment or property income, Married Couple's Allowance for those born before 6 April 1935, and Blind Person's Allowance. HMRC says these people will need to use MTD for Income Tax in the future, with the timeline to be set out later.

Source: GOV.UK, "Find out if you can get an exemption from Making Tax Digital for Income Tax".

### Exemptions that need an application

The most important user-facing applied exemption is digital exclusion. HMRC says being digitally excluded means it is not reasonable for the person to use compatible software to keep digital records, send quarterly updates, or submit the tax return.

HMRC examples include:

- age, health condition or disability stopping the person from using a computer, tablet or smartphone for records or HMRC submissions;
- practising membership of a religious society or order whose beliefs are incompatible with using digital communications or keeping digital records, where the person does not use a computer, tablet or smartphone for business or personal use;
- inability to get internet access at home or business because of location, with no suitable alternative access.

HMRC says it will not accept a digital exclusion application if the only reason is that the person previously filed a paper return, is unfamiliar with accountancy software, has only a small number of digital records each year, or faces extra time or cost to sign up and use MTD for Income Tax. HMRC says it will consider applications case by case.

Source: GOV.UK, "Find out if you can get an exemption from Making Tax Digital for Income Tax".

## What HMRC-approved or HMRC-recognised software means

The current GOV.UK language is more precise than simply saying "HMRC-approved software". HMRC uses phrases such as "compatible software", "software that works with Making Tax Digital for Income Tax", and says software listed in the software finder has been through HMRC's recognition process. HMRC also says it does not recommend any product or provider.

Sources: GOV.UK, "Use Making Tax Digital for Income Tax - Before you use this guide" and "Choose the right software for Making Tax Digital for Income Tax".

The software must allow the user, or their agent, to:

- create, store and correct digital records of self-employment and property income and expenses;
- send quarterly updates to HMRC;
- add any other income sources and submit the tax return by 31 January the following year.

Source: GOV.UK, "Choose the right software for Making Tax Digital for Income Tax".

HMRC recognises two broad types of software:

1. Software that creates digital records, such as by bank feeds, receipt and invoice scanning, or manual entry. HMRC says these products usually meet all requirements and let users send quarterly updates and submit the tax return.
2. Software that connects to existing records, such as spreadsheets or other accounting tools. HMRC says this is sometimes called bridging software.

Source: GOV.UK, "Choose the right software for Making Tax Digital for Income Tax".

A user can use more than one product, but HMRC says they can only use one product for each separate submission that needs to be made to HMRC. If using more than one product, the products must work together to meet all MTD for Income Tax requirements.

Source: GOV.UK, "Choose the right software for Making Tax Digital for Income Tax".

The software finder asks sole traders and landlords about their income sources covered by MTD for Income Tax, other income sources for the tax return, whether they want to create new digital records or connect to existing ones, and their accounting period. Agents can see all compatible software with filters. HMRC says if current software is not listed or an income source is not yet supported, the user should ask the software provider about plans.

Source: GOV.UK, "Find software that works with Making Tax Digital for Income Tax".

## Readiness checker implications

A safe MTD readiness checker should ask only for enough information to route the user to HMRC-backed next steps. Suggested logic from HMRC guidance:

1. Are you registered for Self Assessment and have you submitted a tax return? If not, HMRC says MTD for Income Tax does not start until after the first Self Assessment tax return, and the sign-up service requires a recent submitted return.
2. Are you a sole trader, landlord, or both? If only partnership profit is involved, that share does not count towards qualifying income, and partnerships are not currently mandated.
3. What was your gross self-employment and property income before expenses on the relevant return? Use the phased thresholds.
4. Do you have multiple property or self-employment sources, jointly owned property, ceased sources, residence issues, or income sources that HMRC says do or do not count? Route uncertain cases to the GOV.UK qualifying income guidance.
5. Do any automatic or applied exemption categories potentially apply? Route to HMRC's exemption page and avoid declaring the person definitively exempt unless the case is clear.
6. Do you already use software? If yes, tell the user to check GOV.UK's software finder or their provider. If no, explain the two routes HMRC recognises: all-in-one digital record software or bridging software for existing spreadsheet/accounting records.
7. If in scope, output should emphasise: choose software before signing up, sign up before the start date, keep digital records, send quarterly updates, and submit the final tax return through software by 31 January.

Important copy guardrails:

- Prefer "HMRC-recognised" or "compatible software listed by HMRC" over "HMRC-approved" unless quoting user language, because GOV.UK says software listed in the finder has been through HMRC's recognition process and HMRC does not recommend products.
- Avoid promising exemption results. Use wording such as "you may be exempt" and link directly to HMRC.
- Avoid presenting software lists as recommendations. HMRC explicitly says it does not recommend any product or provider.
- Use gross income before expenses when describing qualifying income.
- Make clear that quarterly updates are summaries, not tax returns.
- Make clear that the tax return and payment deadline remains 31 January following the tax year.

## Open questions for build

- GOV.UK guidance is still changing. The checker should show a "last checked against HMRC guidance" date and link to GOV.UK for live confirmation.
- The software finder is an interactive GOV.UK tool, not a static list. Affiliate routing should not imply HMRC recommendation or endorsement.
- Exemption logic is too detailed for a simple yes/no checker. The safest product shape is a triage tool: "likely in scope", "not currently in scope based on your answers", or "check HMRC/agent because exemption or edge-case rules may apply".

Related: [[MTD Checker/_index]], [[product-opportunities]], [[research-registry]]
