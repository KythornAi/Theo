---
type: regular-note
project: MTD Checker
date: 2026-05-25
status: done
source: theo
tags: [theo, research, decision, project/mtd-checker, validation]
---

# MTD Checker — lean validation strategy — 2026-05-25

## Summary

Kyle and Theo revisited the MTD Checker build plan after the pre-build audit and affiliate discussion. The key decision is to **scale the project down from “build the full product” to “launch the smallest credible validation asset”** so the domain and research can be tested without creating a large speculative build.

This does not replace the earlier audit. It clarifies the operating strategy: **ReadyForMTD.co.uk should be treated as a low-effort seasonal SEO and commercial-signal experiment, not an immediate revenue project.**

## Decision

Proceed only with a lean validation version of `ReadyForMTD.co.uk`.

Do **not** build a large polished checker, full software marketplace, detailed comparison engine, or complete product suite before there is evidence of interest.

The first sprint should test whether targeted users:

- land on the site from search, ads, outreach, or direct links
- complete the checker
- click or join interest for the setup pack
- join deadline/checklist reminders
- engage with software/accountant next-step content
- produce Search Console impressions for relevant long-tail keywords

## What has changed from the existing audit/docs

The existing research and pre-build audit already said:

- SEO/search is the main channel.
- Affiliate approval is uncertain.
- A paid setup pack is a more controllable revenue path than affiliate links alone.
- Distribution is the biggest likely failure point.
- Launch timing matters because MTD demand is seasonal and deadline-driven.

This follow-up discussion makes the approach more conservative:

> The first build is not “launch the full product”. It is “set up the asset and begin collecting signals”.

## Recommended first version

One main site only: `ReadyForMTD.co.uk`.

Do **not** use Kyle’s 50 Hostinger sites as a backlink network or create multiple thin satellite sites. That adds maintenance and could look like low-quality SEO if done badly.

Build a normal topical cluster on the same domain:

- `/mtd-checker/`
- `/mtd-for-landlords/`
- `/mtd-for-sole-traders/`
- `/mtd-deadlines/`
- `/mtd-software/`
- `/mtd-setup-checklist/`

Each page should target a distinct search intent and internally link back to the checker and setup-pack offer.

## MVP contents

Minimum credible version:

1. **Landing/checker page**
   - Free, plain-English MTD for Income Tax readiness checker.
   - No UTR, National Insurance number, HMRC login or email required for result.
   - Uses GOV.UK source links and clear “not tax advice” caveats.

2. **Simple checker**
   - 5–7 questions max.
   - Result states: likely in scope/start date, probably not in scope, not enough information/edge case.
   - Highlight that result is guidance based on current HMRC public information, not a definitive tax decision.

3. **Commercial test**
   - Offer or waitlist for an **MTD Setup Pack** around £7–£15.
   - Pack angle is “clarity + organisation + next steps”, not a generic spreadsheet.
   - Possible contents: readiness checklist, quarterly deadline calendar, record-capture habit sheet, landlord/sole-trader income worksheet, software comparison worksheet, accountant email template.

4. **Email capture**
   - Optional after the result.
   - Use for checklist/deadline reminders.
   - Keep marketing consent separate and explicit.

5. **Analytics and validation instrumentation**
   - Google Search Console.
   - Basic analytics/event tracking for: checker start, checker completion, setup-pack click, email signup, affiliate/software outbound click.

## Traffic validation plan

A minimal site still needs deliberate traffic. Publishing and waiting is not enough.

Recommended channels:

### 1. Search-intent pages

Use the 4–6 pages above as a long-term organic traffic base. Target terms already identified in research:

- “do I need MTD”
- “MTD checker”
- “MTD eligibility checker”
- “MTD for landlords”
- “MTD for sole traders”
- “MTD deadlines 2026”
- “MTD software for landlords”
- “making tax digital checklist”

### 2. Tiny paid search test

If Kyle is comfortable, run a small Google Ads test with a hard cap of roughly £30–£75 against high-intent keywords only.

Purpose is not immediate profit. Purpose is to see whether targeted people click, complete, sign up, or click the setup-pack offer.

### 3. Manual targeted posting/outreach

Use non-spammy helpful framing in relevant places where allowed: landlord groups, sole-trader/small-business communities, relevant Reddit/forum questions, possibly accountant/bookkeeper communities.

Suggested framing:

> I made a free, plain-English MTD for Income Tax checker for UK sole traders and landlords. It doesn’t ask for your UTR/NINO/email and links back to GOV.UK sources. Useful if you’re not sure whether April 2026/2027 applies to you.

## Seasonal timing caveat

Kyle correctly flagged that a weak result soon after launch may be inconclusive.

The April 2026 panic window has passed, so if the site launches around July/August, low traffic does **not** necessarily prove the idea is bad. It may only mean:

- the first major panic spike has passed
- SEO has not matured yet
- many users will not think about MTD again until Self Assessment season
- the next affected cohort may not get anxious until closer to the 2027 threshold drop

Therefore, do not judge the project solely on immediate summer revenue.

## Fair validation window

Recommended interpretation by period:

### Now to August 2026

Goal: ship, index, catch any first-quarter-deadline traffic, validate checker completion and setup-pack/email interest.

Do not expect full proof of demand.

### September to December 2026

Goal: maintain lightly, watch Search Console impressions, improve only where impressions/clicks suggest opportunity.

Do not expand into a large product unless clear signals appear.

### January to April 2027

Main validation window for stronger demand. This period should show whether the asset can capture tax-season and next-cohort anxiety.

## Continue signals

Continue/refine if any of these appear:

- Search Console impressions for target long-tail queries.
- Users complete the checker once they land.
- Users join reminder/checklist list.
- Users click setup-pack offer or buy/preorder it.
- At least one useful affiliate programme accepts the site.
- Manual/paid traffic gets reasonable completion or signup behaviour.

## Pause or kill signals

Pause if:

- build scope expands beyond a short sprint
- setup-pack offer feels weak or unbuyable
- targeted visitors do not complete the checker
- no Search Console impressions appear after a reasonable indexing period
- traffic is only possible through paid ads that cannot plausibly convert
- project starts requiring accountant-level maintenance or advice risk

## Current working framing

> ReadyForMTD.co.uk is a low-effort, seasonal SEO asset and commercial-signal test. The first version should prove whether people care before Kyle/Claude invest in a fuller checker, comparison system, or product suite.

## Next action for Claude/Kyle

Before Claude starts building, use this note alongside:

- `mtd-mvp-spec.md`
- `mtd-traffic-channel-teardown.md`
- `mtd-monetisation-product-map.md`
- `mtd-objections-trust-copy.md`
- `pre-build-audit-2026-05-25.md`

Claude should build the smallest credible version that can collect the above signals, not the fully imagined product.

*Spotted this: the domain purchase is not the problem; the risk is letting a cheap domain turn into a multi-week speculative build before traffic and buying intent are tested.*
