---
type: evergreen
project: Paper and Pixels
date: 2026-05-24
status: done
source: theo
tags: [theo, research]
---

# MTD Checker objections, trust barriers, and landing-page copy

**Last updated:** 2026-05-24

## Why this angle was added

Theo added this extra angle because the MTD checker cannot win on eligibility logic alone. A sole trader or landlord arriving from search is likely worried about cost, penalties, software, HMRC letters, whether gross income means profit, and whether the site is secretly pushing a product. The landing page has to reduce anxiety, cite HMRC, and make clear that the checker gives general readiness information, not tax advice.

## Summary

- The highest-friction objections are threshold confusion, especially gross income before expenses, combined sole-trader plus property income, and whether PAYE, pensions or dividends count. The checker should answer these before asking for an email. Confidence: High.
- Users will also fear a jump from one annual Self Assessment return to quarterly updates plus year-end tax return, software cost, penalties, and being forced away from spreadsheets. The page should frame the tool as a calm triage tool, not a compliance shortcut. Confidence: High.
- Trust depends on three visible promises: HMRC-linked sources beside rules, instant ungated result, and neutral software language. Do not use “HMRC-approved” as broad copy. GOV.UK says HMRC does not recommend any software product or provider. Confidence: High.
- Required disclaimers should cover: not tax advice, edge cases need HMRC or a qualified adviser, results depend on user-entered information, rules can change, affiliate links may earn commission, and marketing emails require clear opt-in. Confidence: High.

## Sources checked

- GOV.UK, “Find out if and when you need to use Making Tax Digital for Income Tax”: https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
- GOV.UK, “Work out your qualifying income for Making Tax Digital for Income Tax”: https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax
- GOV.UK, “Choose the right software for Making Tax Digital for Income Tax”: https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax
- GOV.UK, “Apply for an exemption from Making Tax Digital for Income Tax”: https://www.gov.uk/guidance/apply-for-an-exemption-from-making-tax-digital-for-income-tax
- GOV.UK, “Penalties for Making Tax Digital for Income Tax”: https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax
- LITRG, “Who does Making Tax Digital apply to?”: https://www.litrg.org.uk/tax-nic/making-tax-digital-income-tax/who-does-making-tax-digital-apply
- LITRG, “Record keeping and quarterly updates for Making Tax Digital”: https://www.litrg.org.uk/tax-nic/making-tax-digital-income-tax/record-keeping-and-quarterly-updates-making-tax-digital
- LITRG, “Choosing Making Tax Digital software”: https://www.litrg.org.uk/tax-nic/making-tax-digital-income-tax/choosing-making-tax-digital-software
- ATT, “Making Tax Digital - Frequently Asked Questions”: https://www.att.org.uk/making-tax-digital-frequently-asked-questions
- MoneySavingExpert, “Guide to Making Tax Digital”: https://www.moneysavingexpert.com/family/making-tax-digital/
- MoneySavingExpert Forum, landlord MTD discussion: https://forums.moneysavingexpert.com/discussion/6654909/making-tax-digital-mtd-for-landlords
- ASA/CAP, “Affiliate marketing”: https://www.asa.org.uk/advice-online/affiliate-marketing.html
- ICO, “Electronic and telephone marketing”: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/

## Main objections and trust barriers

### 1. “Do I actually count?”

The core confusion is qualifying income. GOV.UK says MTD for Income Tax applies by qualifying income from self-employment and property, and GOV.UK’s qualifying-income guidance says HMRC assesses gross income before expenses. GOV.UK also states that employment, partnership share, dividends, State Pension and private pensions do not count toward qualifying income. LITRG reinforces the same point and warns that gross income is not profit or net income.

Observed user-language evidence: a MoneySavingExpert Forum landlord asked whether a small share of rental income was all they needed to consider, whether PAYE counted, and whether MTD was really aimed at landlords with multiple properties. This is not strong volume evidence, but it is useful as a live example of the confusion the checker must defuse.

Copy implication:

- Put “gross self-employment and property income before expenses” in the first screen.
- Add a small “What not to include” tooltip: PAYE wages, dividends, pensions and individual partnership profit share do not count for the MTD qualifying-income threshold, but may still matter for your tax return.
- Ask separately for self-employment income and property income, then show the combined total.
- Add a “joint property” warning rather than trying to solve every joint ownership case in the main result.

Reassurance copy angle:

> You do not need to know tax jargon to use this. We ask for the income figures HMRC uses for MTD, then show which rollout wave you appear to fall into.

### 2. “Is this based on turnover or profit?”

This is the biggest copy trap. A user may be under £50k profit but over £50k gross income, especially landlords with high mortgage costs or sole traders with materials. GOV.UK and LITRG both say the threshold uses gross income before expenses. MoneySavingExpert gives an example where gross income can put someone into MTD even if taxable income is much lower.

Copy implication:

- Do not say “income” alone in key fields. Use “gross income before expenses”.
- Show a tiny example under the field:
  - “Example: £31,000 turnover from self-employment plus £21,000 rent received = £52,000 qualifying income.”
- Avoid “profit” in result logic except to say it is not the test.

Reassurance copy angle:

> The threshold is not based on your profit. It is based on gross self-employment and property income before expenses. That is frustrating, but it is the test HMRC uses.

### 3. “Will this replace my tax return?”

GOV.UK says quarterly updates are summaries of self-employment and property income and expenses, not tax returns. GOV.UK also says users still submit one tax return by 31 January and still pay their tax bill as they do now. MSE’s guide frames the practical user fear clearly: five submissions a year instead of one, with quarterly updates plus a final year-end tax return.

Copy implication:

- Landing page should say “MTD changes how you keep records and send updates. It does not remove your annual tax return.”
- The result screen should separate “quarterly updates” from “final tax return”.
- Do not imply the checker can file anything.

Reassurance copy angle:

> This checker does not file anything with HMRC. It simply helps you understand whether MTD is likely to apply, when it may start for you, and what to read next.

### 4. “Will I be forced to buy expensive software?”

GOV.UK says users need commercial software compatible with MTD for Income Tax, but they can use all-in-one software or software that connects to existing records, commonly called bridging software. GOV.UK also says HMRC does not recommend any product or software provider. LITRG warns that HMRC is not producing its own software, products may vary, and some free products may be limited. LITRG also warns that people with multiple income sources may need separate digital records and potentially more than one licence or product.

Copy implication:

- Use “HMRC-recognised compatible software” or “software compatible with MTD for Income Tax”.
- Avoid “HMRC-approved software” as a generic marketing phrase because it can imply endorsement.
- Explain that spreadsheets may still be possible with bridging software, but the checker should not guarantee a particular setup will work.
- If affiliate links are used, disclose them before the first software card.

Reassurance copy angle:

> You may not need to abandon spreadsheets immediately. Some people can use bridging software, but the right setup depends on your records, income sources, and what your software can submit.

### 5. “What if I miss a deadline?”

GOV.UK says new late submission and late payment penalties will apply from the tax year a user joins MTD. GOV.UK’s penalty page also says there are no penalties for missing a quarterly update deadline for the 2026 to 2027 tax year. MSE similarly distinguishes quarterly-update penalties from late tax returns and payments. This is reassuring but risky to overstate, because penalty treatment depends on year and obligation.

Copy implication:

- Say “penalty rules change when you join MTD” rather than “you will be fined”.
- Include a deadline section that links directly to GOV.UK’s penalty page.
- Avoid fear-led copy. Do not use “avoid HMRC fines” as the main CTA.

Reassurance copy angle:

> The aim is not to scare you. The checker shows your likely start date so you can prepare before deadlines matter.

### 6. “What if I cannot use digital tools?”

GOV.UK says there are different exemption reasons, including digital exclusion, and that exempt users must still report income and gains through Self Assessment. GOV.UK has a separate application process for temporary and digitally excluded exemptions. LITRG raises practical readiness questions around confidence with IT, internet access, budget, device comfort, and support.

Copy implication:

- Include a short “Struggle with digital tools?” section on the landing page.
- The checker should include an “I may be digitally excluded” branch that points to GOV.UK, not a final eligibility decision.
- Do not decide exemption status for the user.

Reassurance copy angle:

> If digital access is genuinely difficult for you, there may be exemption routes. This checker can point you to the right HMRC page, but HMRC decides exemptions.

## Landing-page structure recommendation

### Hero

Goal: make it feel official-source-aware without pretending to be official.

Suggested copy:

> MTD readiness checker for UK sole traders and landlords
>
> Find your likely Making Tax Digital start date, based on HMRC’s current income thresholds. No email needed for your result.

Trust notes under CTA:

- Uses HMRC-published thresholds.
- No HMRC login required.
- Result is informational, not tax advice.

Primary CTA:

> Check my MTD position

Secondary CTA:

> What income should I include?

### “Who this is for” section

Bullets:

- Sole traders registered for Self Assessment.
- Landlords with UK or overseas property income.
- People with both self-employment and property income.
- People unsure whether PAYE, pensions or dividends count.

Exclusion note:

> This checker is not for companies, partnerships as entities, VAT-only MTD, or detailed tax planning.

### “What we ask” section

Show the inputs before asking. This lowers suspicion and makes the tool feel safe.

Fields to preview:

- Self-employment gross income before expenses.
- Property gross income before expenses.
- Whether the user has already submitted a Self Assessment return.
- Whether they may need an exemption route.
- Optional: whether they use spreadsheets, accounting software, or paper records now.

Copy:

> We do not need your National Insurance number, UTR, HMRC login, address, or bank details.

### “What you get” section

Outputs:

- Likely MTD start wave: April 2026, April 2027, April 2028, not currently in scope, or unclear.
- The income figure used and how it was calculated.
- What to prepare next: records, software, sign-up, adviser/HMRC check if needed.
- Source links for each rule.

Copy:

> Your result shows the rule used, the source link, and where your situation may need a human check.

### “Common worries” section

Recommended questions:

1. Is MTD based on profit or turnover?
2. Do PAYE wages count?
3. I am both a landlord and sole trader. Are they combined?
4. Can I keep using spreadsheets?
5. Is a quarterly update the same as a tax return?
6. What if I cannot use software?
7. Does HMRC recommend any software?
8. Will you email me or sell my details?

### “Software and affiliate transparency” section

If Kyle uses affiliate cards, put this above the cards, not hidden in the footer.

Suggested copy:

> Some software links may be affiliate links, which means we may earn a commission if you sign up. This does not change your price. We show why each option may or may not fit, and HMRC does not recommend any specific provider.

Source basis: ASA/CAP says affiliate marketing must be obviously identifiable and that the CAP Code applies to affiliate marketing. GOV.UK says HMRC does not recommend any product or software provider.

### “Email capture” section

If capturing emails, keep it optional and separate from the result.

Suggested copy:

> Want a reminder when your MTD start date gets closer? You can opt in after seeing your result. We will only email you if you ask us to.

Source basis: ICO PECR guidance says unsolicited electronic marketing rules apply, consent must be clear and specific where required, and the ICO recommends unticked opt-in boxes.

## Required disclaimers

### Footer disclaimer

> This checker provides general information based on publicly available HMRC guidance. It is not tax advice, accounting advice, or a substitute for checking your own position with HMRC or a qualified adviser. Your result depends on the information you enter and the rules in force when the page was last updated.

### Result-screen disclaimer

> Your result is an estimate based on the figures you entered. If your income sources are mixed, jointly owned, recently started or ceased, or if you may be exempt, check HMRC guidance or speak to a qualified adviser before relying on this result.

### Software disclaimer

> HMRC recognises software that meets its requirements, but GOV.UK says HMRC does not recommend any product or provider. Check that any software you choose supports your income sources, tax return needs, devices, budget, and agent setup.

### Affiliate disclaimer

> Some links may be affiliate links. If you use them, we may earn a commission. We should still show non-affiliate official sources and explain why a product is listed.

### Email/privacy disclaimer

> Email reminders are optional. Do not pre-tick marketing consent. Keep result delivery separate from newsletter consent.

## Copy principles for Kyle

- Lead with “check your position” rather than “avoid fines”. Fear will convert, but it damages trust in a tax-adjacent tool.
- Keep the first result ungated. Gate only optional reminders, PDF export, or setup checklist.
- Put HMRC source links next to claims about thresholds, software, exemptions and penalties.
- Use neutral “software compatible with MTD for Income Tax” language.
- State what the checker does not do: it does not file, sign up, authorise software, assess exemptions, or replace an adviser.
- Make uncertainty visible. A result of “unclear, check this HMRC page” is better than a confident wrong answer.

## Bottom line

The landing page should feel like a calm explainer attached to a utility, not a software funnel pretending to be a government checker. The strongest trust position is: instant result, no email gate, source-linked rules, plain-English threshold maths, clear non-advice disclaimer, and transparent affiliate handling if software recommendations are added later.
