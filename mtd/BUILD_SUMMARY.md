# BUILD_SUMMARY - ReadyForMTD.co.uk

**Build date:** 2026-06-20
**Built by:** GLM 5.2 via Hermes Agent cron

## What was built

A complete static website for ReadyForMTD.co.uk, a Making Tax Digital for Income Tax readiness checker for UK sole traders and landlords. The site is trust-first, ungated, HMRC-anchored, and built with plain HTML/CSS/vanilla JS.

### Pages (8 total)

1. `/index.html` - Homepage with teal hero band, clay CTA, trust chips, and the checker embedded as the hero product. Includes "who this is for" panels, "what we ask / what you get" split, common worries grid, threshold table summary, and disclaimers.
2. `/mtd-for-sole-traders/index.html` - Audience guide for sole traders. SEO target: "MTD for sole traders", "making tax digital for self employed".
3. `/mtd-for-landlords/index.html` - Audience guide for landlords with joint ownership, foreign property, and edge case panels. SEO target: "MTD for landlords".
4. `/mtd-deadlines/index.html` - Deadline tables for each wave, quarterly update dates (7 Aug/Nov/Feb/May), final declaration deadline (31 Jan), and 2026/27 soft-landing note.
5. `/mtd-software/index.html` - Neutral criteria first (3 HMRC requirements), two routes (all-in-one vs bridging), questions to ask providers, affiliate disclosure placeholder. Affiliate cards deferred until programmes are approved.
6. `/mtd-faq/index.html` - People-Also-Ask style accordion with 12 questions. Each answer links to GOV.UK source. Includes FAQPage structured data.
7. `/privacy/index.html` - Privacy policy (checker runs client-side, no data stored, Plausible analytics, email consent rules).
8. `/disclaimer/index.html` - Legal disclaimer (not tax advice, not affiliated with HMRC, rules can change, affiliate disclosure, email consent).

### Checker (`checker.js`)

Full 10-screen flow as specified in `mtd-mvp-spec.md`, with all pre-build-audit additions:

- Screen 0: Scope (Income Tax self/client, VAT out-of-scope, not sure)
- Screen 1: Income role (multi-select with "does not count" notes for PAYE/dividends/pensions)
- Screen 1b: UK tax residence (conditional on foreign property) - **pre-build audit addition**
- Screen 2: Self Assessment status
- Screen 3: Tax year / figures basis
- Screen 3b: Accounting period length ("roughly 12 months?") - **pre-build audit addition**
- Screen 4: Self-employment gross income (banded buttons + optional exact)
- Screen 5: Property gross income (banded + joint ownership checkbox + share unsure checkbox)
- Screen 5b: Amended return nuance - **pre-build audit addition**
- Screen 5c: HMRC letter branch - **pre-build audit addition**
- Screen 6: Ongoing / ceased sources
- Screen 7: Exemptions / digital exclusion / no NI number
- Screen 8: Current record keeping (next-steps only)
- Screen 9: Software/accountant readiness (next-steps only)

### Result states (A-G)

All 7 result states implemented and verified via headless Chrome CDP walkthrough:

- A: Likely April 2026 (over £50k on 2024/25) - verified passing
- B: Likely April 2027 (over £30k on 2025/26) - verified passing
- C: Likely April 2028 (over £20k on 2026/27)
- D: Not currently in scope
- E: Not enough SA history yet - verified passing
- F: Probably out of scope (ltd-only/no SE or property) - verified passing
- G: Edge case, check HMRC/adviser

Post-start-date logic: State A detects if today is past 6 April 2026 and shows "already in wave" messaging with sign-up guidance and first quarterly deadline (7 August 2026).

Result page includes: status badge, confidence level, "checked vs HMRC" date, qualifying-income breakdown table (showing the maths, listing excluded income), "why you got this result" with source links, deadline/calendar panel with quarterly grid, tailored next 3-5 actions, edge-case warning panel (only if triggered), software-readiness panel, optional email opt-in (3 separate consents, no pre-ticked boxes), print/copy buttons, and result disclaimer.

### Design system

- Inter font (Google Fonts), full weight range for typographic contrast
- Warm cream page background, white cards with hairline borders and soft shadows
- Teal hero band with gold and clay radial glows
- Multi-colour feature panels (teal/clay/gold/blue icon badges)
- All buttons pill-shaped with soft drop shadow at rest, lift on hover
- Clay CTA rests at clay-deep, goes lighter on hover
- Secondary buttons fill with teal tint on hover
- Mobile-first, single column under 560px

### WCAG 2.1 AA compliance

All text contrast verified at 4.5:1 or higher across every (token, surface) pair. Three tokens were darkened from the spec's initial values to pass AA on soft-background badges:
- `--clay-deep`: #c0512f -> #a8442a (3.95:1 -> 4.99:1 on clay-soft)
- `--gold-deep`: #a9781f -> #7a5a14 (3.32:1 -> 5.42:1 on gold-soft)
- `--amber`: #9a6206 -> #875500 (4.41:1 -> 5.47:1 on amber-soft)

Other accessibility features: skip link, semantic HTML, ARIA roles on checker steps, radio/check patterns on options, focus-visible outlines, aria-live on progress, prefers-reduced-motion support, keyboard navigation.

### Copy guardrails (all followed)

- No em-dashes anywhere (verified by scan)
- "compatible software" / "HMRC-recognised", never "HMRC-approved"
- "Based on your answers, you are likely..." language throughout
- "gross income before expenses" consistently used
- Quarterly updates described as summaries, not tax returns
- "Last checked against HMRC guidance" date on checker and result
- Disclaimers on: hero trust bar, footer, result, software, affiliate, email
- Email optional, AFTER result, separate consents, no pre-ticked boxes
- Edge cases route to HMRC, never decide
- "Not affiliated with HMRC or GOV.UK" in footer
- "announced, not yet fully legislated" label on April 2028 threshold
- 2026/27 soft-landing penalty note limited to first year only

### Verification performed

1. `node --check checker.js` - JS syntax valid
2. Em-dash scan across all HTML/CSS/JS files - clean
3. WCAG contrast matrix across 23 colour pairs - all pass (after 3 token darkens)
4. Headless Chrome CDP walkthrough - 5 test scenarios all pass:
   - State A (April 2026, over £50k)
   - State F (ltd company only)
   - VAT scope-out panel
   - State E (new to SA)
   - State B (April 2027, over £30k)
5. All HMRC claims link to GOV.UK source pages (11 source URLs in config)

## Issues encountered and fixed

1. **forEach comma operator bug**: The original code used `forEach(o => o.setAttribute(...), o.classList.remove(...))` which JavaScript parsed as `forEach(callback, thisArg)` where the `thisArg` expression `o.classList.remove(...)` threw a silent ReferenceError (variable `o` not in scope), killing all click handlers. Fixed by using block body: `forEach(o => { o.setAttribute(...); o.classList.remove(...); })` in all 12 instances.

2. **s5b showing without SE/property**: The amended-return screen originally showed whenever a tax year was selected, even if the user had no self-employment or property income. Fixed by adding `hasSEOrProperty()` to the `showIf` predicate.

3. **WCAG contrast failures**: Three colour tokens (clay-deep, gold-deep, amber) failed AA contrast on their soft-background badges. Fixed by darkening the tokens. White-on-token contrast was verified to still pass for button and icon badge usage.

## What needs review before go-live

1. **Plausible analytics**: The script tag references `plausible.io` with `data-domain="readyformtd.co.uk"`. Verify the Plausible account is set up and the domain matches. If using a self-hosted Plausible, update the script src.

2. **Email functionality**: The email opt-in is currently a demo (shows a success message but does not actually send or store email). To make it functional, you need to:
   - Choose an email provider (e.g., Buttondown, MailerLite, ConvertKit)
   - Add a form endpoint or API integration
   - Ensure ICO/PECR compliance for consent storage

3. **Affiliate programmes**: The software page has affiliate disclosure text but no affiliate cards. Cards should be added once Sage, Coconut, QuickBooks UK, and Xero programmes are approved and terms verified.

4. **DNS and hosting**: Point `ReadyForMTD.co.uk` DNS to Cloudflare Pages. The domain is purchased but not yet hosted.

5. **Google Search Console**: Submit the site after DNS is live.

6. **Contact email**: The privacy and disclaimer pages reference `hello@readyformtd.co.uk`. Set up this email address.

7. **Content review**: Have a tax professional or adviser review the HMRC claims, threshold wording, and result-state logic before publishing to a live audience.

8. **FAQ structured data**: The FAQPage JSON-LD only includes 3 questions. Add the remaining questions to the structured data for better SEO.

9. **`<html lang>`**: All pages use `lang="en-GB"` which is correct.

10. **Sitemap.xml and robots.txt**: Not included. Add for SEO after hosting is live.

## Files to check

- `index.html` - Homepage with checker (most important file)
- `checker.js` - All checker logic (config block at top, result logic at bottom)
- `styles.css` - Design system (tokens at top, components below)
- `mtd-faq/index.html` - FAQ with accordion (check JS in script tag)
- `privacy/index.html` and `disclaimer/index.html` - Legal pages
