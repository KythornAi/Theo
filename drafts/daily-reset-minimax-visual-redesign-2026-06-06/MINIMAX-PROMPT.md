# MiniMax Prompt — Daily Reset Visual Redesign Copy

Use this when giving MiniMax the current Daily Reset app file.

## File to upload / use as source

`source-daily-reset-current-preview.html`

This is a copy of the latest pushed Daily Reset preview from:

`KythornAi/paper-n-pixels`, branch `theo/daily-reset-preview`, file `product/daily-reset/index.html`.

Do **not** overwrite the original app. Ask MiniMax to create a new standalone copy.

## Paste this prompt into MiniMax

```text
You are redesigning an existing single-file HTML mini app.

IMPORTANT: make a visual redesign COPY only.
Do not overwrite the original file.
Do not change the product flow, user journey, screen order, localStorage keys, JavaScript logic, task behaviour, timer behaviour, parking lot behaviour, wrap-up behaviour, settings behaviour, accessibility wiring, or button actions.

Use the attached Daily Reset HTML file as the functional source of truth. Preserve the existing working app logic. Your job is to restyle the interface around that logic.

Create a new standalone HTML file named:
daily-reset-visual-redesign-copy.html

At the top of the new file, add this comment:
“This is a visual redesign copy only. Original flow and logic preserved.”

VISUAL DIRECTION
Restyle The Daily Reset so it blends with the recent warm editorial MiniMax mini web apps. It should feel calmer, more premium, and more designed, while still practical and ADHD-friendly.

Use:
- warm cream/off-white page background
- larger, calmer type scale
- more spacious mobile-first cards
- elegant editorial-feeling headings, ideally a display serif for main headings paired with a clean readable sans-serif body
- restrained but richer muted accent palette: terracotta, sage, ochre, dusty rose, warm charcoal, soft cream
- bigger breathing room between sections
- softer rounded cards, subtle borders, very gentle shadows
- subtle brand/ornament treatment in the top area or corner
- a more crafted top bar than the current small “DAILY RESET” label
- calm, practical, warm tone

The newer visual system should feel closer to these qualities:
- warm editorial rather than generic Tailwind card
- expressive headings without becoming loud
- small uppercase labels / eyebrow text where useful
- tasteful accent stripes, dots, dividers, or corner ornament
- mobile-first, spacious, easy to scan

Do not make it:
- childish
- clinical
- gamified
- neon
- dashboard-like
- overdecorated
- heavy or cluttered

DO NOT ADD
- new features
- scores
- streaks
- dashboards
- AI claims
- therapy, medical, diagnosis, cure, treatment, or coaching claims
- new screens
- account systems
- telemetry
- external services
- complicated animations

PRESERVE
- all buttons and their actions
- all form fields
- all IDs/classes needed by JavaScript
- all localStorage keys and data structure
- all existing app states
- the full Daily Reset flow
- mobile responsiveness
- existing settings behaviour
- existing timer behaviour
- existing parking lot behaviour
- existing wrap-up behaviour

If you need to add CSS classes for visual styling, do so safely. If you rename or remove IDs/classes that JavaScript uses, the app will break, so do not do that.

QUALITY CHECK BEFORE OUTPUT
Before giving the final file, check:
1. The app still opens on the first screen.
2. Name capture still works.
3. Continue buttons still work.
4. Brain dump fields still work.
5. Sorting still works.
6. Today list still works.
7. Timer and Stuck Support still work.
8. Wrap-up and closed screen still work.
9. Settings still open and close.
10. No original logic was simplified or rewritten.

Output only the complete new HTML file.
```

## One-line instruction to repeat if MiniMax starts changing flow

```text
Stop changing product logic. Keep the Daily Reset flow exactly as supplied. This task is visual redesign only.
```

## After MiniMax outputs the copy

Save MiniMax output as:

`daily-reset-visual-redesign-copy.html`

Then compare against the original:

- Original: `source-daily-reset-current-preview.html`
- Redesign: `daily-reset-visual-redesign-copy.html`

Check visually first, then run functional smoke tests.

## Visual acceptance checklist

The redesigned copy should have:

- Warmer cream/editorial feel than the original.
- Larger headings and more confident hierarchy.
- Bigger card spacing and calmer mobile layout.
- Muted multi-accent palette, not one flat green/orange accent everywhere.
- A tasteful brand/ornament/logo slot in the top area or corner.
- No extra features or flow changes.

## Functional acceptance checklist

Do not approve the redesign unless these still work:

- first-run name capture
- mood screen
- brain dump
- sort Now / Park / Remove
- Today list with max task cap
- ticking tasks complete
- Stuck Support appears only after first task tick
- Make it Smaller overlay
- Tiny Timer
- Wrap up
- closed screen
- Start another session
- settings drawer
- reset today / reset all data

## Important note

The current latest Daily Reset file I checked still appears to have only a small text label (`DAILY RESET`) plus settings gear, not a real logo asset in the corner. If Claude has a local version with a real logo corner treatment, use that local version as the source instead of this copied preview file.
