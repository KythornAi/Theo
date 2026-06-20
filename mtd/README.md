# ReadyForMTD.co.uk

A free, trust-first Making Tax Digital for Income Tax readiness checker for UK sole traders and landlords. Static HTML/CSS/JS. No backend, no database, no framework, no build step.

## What this is

An independent checker that helps UK sole traders and landlords find their likely MTD for Income Tax start date using HMRC's current income thresholds. No email gate, no personal identifiers required, no data leaves the browser.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage with hero + the checker (checker IS the hero product) |
| `styles.css` | Shared stylesheet (Inter font, warm cream palette, pill buttons, WCAG 2.1 AA) |
| `checker.js` | All checker logic (10-screen flow, threshold config, result states A-G, analytics) |
| `mtd-for-sole-traders/index.html` | Audience guide for sole traders |
| `mtd-for-landlords/index.html` | Audience guide for landlords |
| `mtd-deadlines/index.html` | Deadline tables + quarterly update dates |
| `mtd-software/index.html` | Neutral software criteria (affiliate cards deferred) |
| `mtd-faq/index.html` | People-Also-Ask style FAQ with accordion |
| `privacy/index.html` | Privacy policy |
| `disclaimer/index.html` | Legal disclaimer |

## HMRC rule config

All threshold logic and result-state definitions live in a single clearly-labelled CONFIG BLOCK at the top of `checker.js`. The key variables are:

- `HMRC_LAST_CHECKED` - date the logic was last checked against GOV.UK guidance
- `HMRC_SOURCES` - all GOV.UK source URLs used in the checker
- `THRESHOLD_TABLE` - the phased rollout table (year, threshold, start date)
- `INCOME_BANDS` - the banded income options
- `RESULT_META` - the headline, status, colour, and blurb for each result state A-G

When HMRC updates thresholds, edit this block and update `HMRC_LAST_CHECKED`.

## Deploy to Cloudflare Pages

1. Create a Cloudflare Pages project.
2. Set the build output directory to the repo root (where `index.html` lives).
3. No build command needed (static files).
4. Set custom domain: `ReadyForMTD.co.uk` via Cloudflare DNS.
5. Cloudflare auto-provisions HTTPS.

## Analytics

Plausible (cookie-light, privacy-friendly). NOT Google Analytics. Track these events:
- `checker_start` - when the user starts the checker
- `checker_complete` - when the user reaches a result
- `result_state` - the result state (A-G) and confidence level
- `email_optin` - when the user opts in to email (with which consents)
- `software_card_click` - when a software card is clicked (future)

The Plausible script tag is in each HTML file's `<head>`. Replace the `data-domain` attribute with your actual domain when live.

## Monthly HMRC review reminder

**Review the checker against HMRC guidance every month.** Steps:

1. Check the GOV.UK pages listed in `HMRC_SOURCES` in `checker.js`.
2. Verify thresholds, deadlines, and penalty rules are still current.
3. Update `HMRC_LAST_CHECKED` in `checker.js` and the `data-last-checked` values in HTML files.
4. Update any copy that references rules if they have changed.
5. Push to GitHub. Cloudflare Pages auto-deploys.

Key GOV.UK pages to check:
- https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
- https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax
- https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax
- https://www.gov.uk/guidance/sign-up-for-making-tax-digital-for-income-tax

## Tech stack

- Plain HTML/CSS/JS. No npm, no framework, no build step.
- Inter font via Google Fonts.
- All checker logic is client-side. No data leaves the browser.
- No localStorage of personal data.
- WCAG 2.1 AA: real form semantics, focus states, keyboard nav, 4.5:1 text contrast, aria on checker steps.
- Mobile-first, single column under 560px.

## Not affiliated with HMRC or GOV.UK

ReadyForMTD.co.uk is an independent website. It is not affiliated with, endorsed by, or connected to HMRC, GOV.UK, or any government body.
