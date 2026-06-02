# MiniMax Build Brief - MNM Companion Apps

Date: 2026-06-02
For: Theo to turn into cron jobs that direct MiniMax M3.
Goal: prototypes that come back close enough to spec that Claude only needs a polish pass, not a rebuild.

How to use this doc:
1. Kyle fills in PART A section A0 (brand tokens: exact colours + fonts).
2. Theo creates one cron job per app in PART B, pasting PART A (the universal spec) plus that app's brief into the MiniMax prompt.
3. MiniMax returns one self-contained HTML file per app.
4. Claude polishes (legibility final-check, humanise copy, real design assets, accessibility, merge best bits).

Reference content lives in `Ebook Exercises - inventory 2026-06-02.md` (the 9 book exercises) and `ADHD Affirmations - extracted 2026-06-02.md` (the 58 affirmations). Every app's text comes from those, not invented.

---

# PART A - Universal spec (applies to EVERY app)

## A0. Brand tokens (filled 2026-06-02 from Kyle's brand palettes; swappable later)
Brand context: these apps are Grounded Humanity (umbrella) products, sold via Paper N Pixels (shop). Palette draws from the Grounded Humanity + PaperNPixelShop brand colours. Readability prioritised: the muted greens are NOT used for text.

Fonts (keep the current families; they tested well, Kyle likes the serif):
- Display/heading font: editorial serif, Cormorant Garamond or Fraunces (the "curly" serif in the current prototypes). Confirm exact family.
- UI/label font: Inter (clean sans for labels, counters, buttons).

Palette (exact hex):
- Page background (cream): #f3eee3
- Card / panel surface (slightly deeper, for separation): #e8dacb
- Primary heading text: #2f4633 (deep forest green, matches the logo ink, high contrast on cream)
- Body / readable text: #30232d (near-black aubergine; for anything that must be read easily)
- Hint / tertiary text (still must pass AA): #5a6849 (Grounded Humanity sage/olive; about 5.3:1 on cream, readable, NOT the old muted sage). Verify >= 4.5:1 and darken if a size needs it.
- Primary button: #2f4633 fill with #f3eee3 text. Sage #5a6849 acceptable as an alternative button.
- Single accent, sparing (focus ring, a thin rule, the "you are here" mark): #a4492f (terracotta).
- Borders / dividers / decorative only: #a8b3a2 (soft grey-sage), #e8dacb (beige), #c8a784 (tan).
- Available but unused by default: #790026 burgundy, #b5a56a gold, #7c5a53 brown.

Hard reminder tying to A1: muted/light tones (#a8b3a2, #c8a784, #b5a56a, terracotta) are for surfaces, borders, and decoration. They must NEVER carry body or hint text. Readable text is #30232d or #2f4633; #5a6849 is the lightest a readable line is ever allowed to go.

Logo assets (for Claude's final polish, NOT MiniMax): folder `Grounded Humanity logo - Transparent/`.
- Corner motif / watermark: `[Social] GH_Icon_TreeOnly_Transparent_1024.png` (tree only, no wordmark, square, transparent). This replaces the placeholder hand-drawn branch.
- Header/footer brand signature: `GroundedHumanity_FullLogo_Transparent_2400w.png` (ink) and `..._White_Transparent_2400w.png` (for dark surfaces). Full lockup, do NOT cram into a corner.
- A true .svg master may exist (there is a `GroundedHumanity_Master.svg.png`); if found, prefer inline SVG for crisp, recolourable, single-file use.

## A1. LEGIBILITY AND CONTRAST (the single most important rule)
The current prototypes look beautiful but FAIL here: secondary text is too small and too faint (light sage on cream, roughly 2:1 contrast). It disappears in poor lighting. This must be fixed at the source.

Hard rules:
- Any text the user needs to READ must meet WCAG AA contrast: at least 4.5:1 against the cream background (3:1 only for large display headings). Check with a contrast tool, do not eyeball it.
- A light/muted green (sage-soft) or the amber accent must NEVER be used for readable text. Those colours are for borders, dividers, dots, and decorative marks ONLY. Body and hint text use the dark ink/dark-sage colour.
- Minimum sizes (mobile): body text 17px, secondary/hint text 15px (not 12 to 14px as now), eyebrow/label text 12px and bumped to a darker tone if it carries meaning.
- Italic hint lines stay italic for tone but must be the dark readable colour, not faint sage.
- Test: at arm's length on a phone in average indoor light, every word must be effortless to read. If any line makes you squint, it fails.

## A2. Single file, no runtime dependencies
- One self-contained .html file. No Tailwind CDN, no external JS/CSS libraries, no external images.
- Fonts: use the brand fonts via a standard web-font link OR a clean system-serif/system-sans fallback. The app must still work offline (it will ship inside a Gumroad download AND on the website).

## A3. No gamification
- No streaks, no scores, no "great job!", no "you did it!", no confetti, no compounding-habit language. The audience is ADHD/overwhelm; guilt-inducing streak mechanics are off-brand and counterproductive.

## A4. Claim-safe copy
- No medical or neuro claims ("vagal", "vagus nerve", "rewires your brain", "processes emotional chemistry in 90 seconds"). Use the book's own hedged wording where a claim is unavoidable (e.g. the 90-second exercise: "many people find the wave eases within about 90 seconds... this varies"). No academic citations on-screen.
- Include a short, calm disclaimer footer: self-guided reflection, not medical advice.

## A5. Voice and spelling
- UK spelling throughout (colour, prioritise, recognise).
- NO em-dashes anywhere in copy. Use full stops, commas, or brackets.
- Tone: calm, plain, warm, anti-pressure. Short sentences. Never clinical, never mystical, never toxic-positive.

## A6. Accessibility and motion
- Fully keyboard operable. Visible focus states.
- Honour prefers-reduced-motion: provide a non-animated / 2D fallback (no 3D spin, no scaling pulse) for vestibular-sensitive users.
- Any breathing animation must be driven by ONE clock (one timer source) so the on-screen label and the visual never drift apart.
- Use aria-live sparingly: announce step changes, not every ticking second.

## A7. Keepsake output
- Where the app produces something personal (a reflection, a card, a chosen word), let the user keep it: a "Copy as text" button (modern clipboard API WITH an execCommand fallback) and a clearly screenshot-friendly layout. PNG export only where specified per app (see A8).

## A8. Design assets (prototype vs final)
- For the PROTOTYPE, do NOT spend effort on illustration. Leave a single clearly-commented ornament slot (e.g. "<!-- ornament slot: GH tree icon goes here in final polish -->"). Do not ship hand-drawn childlike SVG leaves as if final.
- Final art is added by Claude during polish, using the real brand logo set, not redrawn:
  - Corner motif / quiet watermark: the tree-only icon (`[Social] GH_Icon_TreeOnly_Transparent_1024.png`), low opacity. Replaces the placeholder branch.
  - One brand signature per app: the full Grounded Humanity lockup as a header OR footer, not both, not scattered.
- BRAND CLUTTER FIX (Kyle flagged): the current prototypes scatter "Paper N Pixels" at the top and "Grounded Humanity" at the bottom inconsistently. Standardise: these are Grounded Humanity products. One clean GH brand signature per screen, placed consistently. MiniMax should keep brand text minimal and in one place; Claude finalises placement with the real logo.
- The Canva affirmation deck's watercolour-sage botanical style is the visual reference for tone. MiniMax should nail layout, flow, type hierarchy, contrast, and interaction, not decoration.

## A9. Keep the design retro comment
- Top-of-file HTML comment stating concept, intent, palette, type scale, and "what I'd refine with more time". This has been genuinely useful, keep doing it.

---

# PART B - Per-app briefs (the NEW builds)

These four are the apps we do NOT yet have in the brand system. Existing brand-aligned prototypes (gratitude reset, 90-second hinge, affirmation previewer) are Claude-polish jobs, not MiniMax rebuilds, see PART C.

## App 1 - The Body Stress Scan (Chapter 1)
Source: Exercise Inventory #1. Purpose: a guided head-to-toe tension scan that helps the user notice where stress sits in the body, without trying to fix it.
Flow (one calm screen per step, gentle fades between):
1. Intro: "The Body Stress Scan", one-line purpose, "Begin". State it is about noticing, not fixing.
2. Three settling breaths (simple visual, in-nose / out-mouth).
3. Guided scan, one body area per step: forehead, jaw, shoulders, then arms/chest/stomach/legs. For each, the user taps a label for what THEY feel ("tight", "buzzing", "numb", "calm", "nothing").
4. Close: a small keepsake summary ("Today, stress sat mostly in your [areas]. Stress is here, but so am I."), copy-as-text.
Body visual (Kyle feedback): the Gemini somatic body-map concept tested well and Kyle likes it. Improve on it: the figure should look more human and natural (a soft, simple human silhouette), still elegant and on-brand, NOT a crude blocky shape and NOT a clinical anatomical diagram. The user taps the area to mark their own sensation; the app never auto-assigns a location or prescribes where the feeling "should" be.
Key: no diagnosis, no "you are stressed" verdicts. Pure noticing.
Done = readable at AA contrast, single file, keepsake copy works, reduced-motion safe, the figure reads as a warm human silhouette.

## App 2 - The Balance Audit and Reset Card (Chapter 2)
Source: Exercise Inventory #2. Purpose: the user lists what tips them off balance and what steadies them, then generates a small "Reset Card" they can save as an image.
Flow:
1. Intro.
2. Two-column capture: Column B ("What tips me off balance", up to 5) and Column A ("What steadies me", up to 5). Provide gentle example chips they can tap to prefill, all examples lifted from the book exercise.
3. One adjustment prompt: "One change I can lean into this week."
4. Reset Card: a designed card showing three lines (Three breaths / Name the tilt / One tiny steadying action) plus their chosen steadiers. PNG export in two sizes: phone lock-screen (1080x1920) and a small wallet/print card.
Critical technical note for the PNG export (this was buggy in the earlier draft): the canvas render MUST wait for fonts to load (document.fonts.ready) before drawing, and MUST measure wrapped line height so long entries never overlap. The on-screen preview and the exported image must show identical content.
Done = export renders in the correct brand font, no overlap, preview equals export, AA contrast.

## App 3 - The Recovery Menu (Chapter 6, hub that also delivers Ch 4, 5, 7)
Source: Exercise Inventory #6, with sessions drawn from #4, #5, #7. Purpose: "How much space do you have right now?" -> pick a duration -> a guided timed sequence. This is the supplementary add-on hub.
Flow:
1. Menu screen: four cards, 1 / 3 / 10 / 15 minutes, each with a short description.
   - 1 min: One-Point Focus (Ch7) - rest attention on one object/point.
   - 3 min: Paced breathing (4 in, longer out), one breath clock.
   - 10 min: Self-Compassion Reset (Ch4) - notice the critic, breath, switch to kindness, one step. Multi-phase.
   - 15 min: 15-Minute Embodied Reset (Ch5) - settle, mindful walk, micro-mobility, body scan, choose one step. Multi-phase with a sub-step progress bar.
2. Session screen: phase title, calm instruction (from the book text), a single-clock breathing visual where relevant, a progress meter, pause/resume, and a gentle exit.
3. Completion: a calm close plus one "wise next step" suggestion (small, concrete). Copy-as-text. NO streak.
Content: use the exact phase scripts from Exercise Inventory #4, #5, #6, #7.
Done = one breath clock (no drift), AA contrast, keyboard + reduced-motion safe, no streak, single file.

## App 4 - The 90-Second Emotional Pause, merged (Chapter 8) - CONFIRMED
Source: Exercise Inventory #8. We have two takes (Theo hinge + Gemini wave-rider). Brief MiniMax to merge them into one brand-aligned app.
Flow: Stop -> Name the emotion -> Locate it in the body -> Breathe through it for about 90s on one breath clock (book's hedged wording) -> Reopen with "What is the next wise step?". Keepsake copy at the end.
Locate step (Kyle feedback on the wave-rider): the user marks where THEY feel the emotion on a soft human silhouette (same elegant figure as App 1). The location is the user's own choice; it must NOT be auto-assigned or fixed to the same spot regardless of emotion. In the Gemini wave-rider this felt broken because the body area never changed with the emotion. The correct model: emotion and location are both the user's input, the app simply records what they tap. Reuse App 1's body-figure component for consistency.
Done = book's hedged claim wording, one breath clock, AA contrast, single file, user-driven body locate on a warm human silhouette.

---

# PART C - Stays with Claude (do NOT rebuild via MiniMax)
- Affirmation previewer (the 3D flip deck Kyle loves): polish only, load the real 58 affirmations, fix first-draw jump, 2D reduced-motion fallback, contrast, light ornament. The flip is the centrepiece, keep it.
- Gratitude reset: polish only (fix sr-only label, dead code, contrast, stitched-sentence logic). Optionally align to the book's "one thing + three ripple effects" structure.
- 90-second hinge: polish, or merge with the wave-rider body-locate step (see App 4).
- All final botanical/illustration art and the legibility final-check across every app.

---

# Coverage check (the 9 exercises)
- Ch1 Body Stress Scan -> App 1 (new)
- Ch2 Balance Audit + Reset -> App 2 (new)
- Ch3 Gratitude Expansion -> existing gratitude reset (Claude polish)
- Ch4 Self-Compassion Reset -> App 3, 10-min route
- Ch5 15-Min Embodied Reset -> App 3, 15-min route
- Ch6 Recovery Menu -> App 3 (hub)
- Ch7 One-Point Focus -> App 3, 1-min route
- Ch8 90-Second Pause -> existing hinge + App 4 merge
- Ch9 Mindful Listening -> parked (needs two people, weak fit for a solo web app)
Plus: affirmation previewer (deck companion, not an exercise) -> Claude polish.
