# MiniMax Build Brief — 3 New Apps

Date: 2026-06-07
For: Theo to turn into cron jobs that direct MiniMax M3.
Companion to: `MiniMax Build Brief - companion apps 2026-06-02.md` (the 4 original apps + universal spec).

**Important:** PART A (universal spec) from the 2026-06-02 brief applies to ALL three apps below. Paste it in full before each app's brief when building the MiniMax cron prompt. Do not abbreviate it.

Reference files (same as before):
- `Ebook Exercises - inventory 2026-06-02.md` — book exercise scripts
- `ADHD Affirmations - extracted 2026-06-02.md` — 58 affirmation strings
- Brand tokens: all in PART A of the 2026-06-02 brief (exact hex, fonts, logo slots)

---

## App 5 — One Breath (lead magnet, free)

**Serial:** Nº [assign on build — this is the free entry point]
**Chapter source:** None (standalone, not a book exercise)
**Role:** Free lead magnet. The simplest possible tool in the suite — a single guided breath to steady yourself. No login, no friction. Purpose is to show the quality of the collection and send users to the Gumroad bundle.

**Concept:** One breath. That is the entire promise. Not a course, not a programme, not a streak. One breath, right now, whenever you need it.

**Flow (one continuous screen, no multi-step navigation):**
1. **Landing state:** App name "One Breath" large, in display serif. Tagline: "One breath to steady yourself." A single "Begin" button.
2. **Breath state:** A minimal, single breath clock. 4 counts in (nose), 6 counts out (mouth). One cycle. Soft expanding/contracting circle animation — must honour prefers-reduced-motion with a simple count-up label fallback. On-screen label tracks the phase ("breathe in... breathe out..."). No second clock, no drift.
3. **Close state:** After one cycle completes, a gentle close message: "That is it. You did it." Then one line: "The full collection has more tools like this." A clear, simple CTA button: "See the full collection →" linking to `https://gumroad.com` (placeholder — Claude will update the real URL at polish stage).

**Design notes:**
- This is the simplest app in the suite. Resist the urge to add more. One breath is the product.
- No keepsake output needed (nothing to capture from one breath).
- The CTA is the commercial point of this app — it must be visible and legible, not buried.
- Cover/intro page follows the standard Nº serial + coloured fullstop brand mark template.
- Leave the ornament slot comment for Claude (tree icon, low opacity).

**Done criteria:** Single file, one clean breath cycle, CTA works as a link, AA contrast, prefers-reduced-motion safe.

---

## App 6 — The Inner Critic Journal (Chapter 4, dedicated)

**Serial:** Nº [assign on build]
**Chapter source:** Exercise Inventory #4 — Self-Compassion Reset
**Role:** A standalone, deeper journalling experience for the Ch4 exercise. The Recovery Menu Hub has a 10-minute route through Ch4, but this is the dedicated tool: slower, more personal, journalling-focused.

**Concept:** The inner critic is loudest when we are already struggling. This tool does not argue with it — it notices it, names it, and gently responds to it the way you would respond to a friend.

**Flow (one calm screen per step, gentle fades):**
1. **Intro:** "The Inner Critic Journal." Subtitle: "Notice. Name. Respond with kindness." One-line purpose. Begin button.
2. **Notice:** Prompt: "What is the inner critic saying right now?" Large open text field. Calm placeholder: "It doesn't have to be fair or rational. Just write what it's saying." No character limit, no judgement.
3. **Name it:** A single statement for the user to read aloud or sit with: "This is a moment of difficulty. Struggle is part of being human." Below: a small prompt: "Where do you feel this in your body?" — the standard warm human silhouette (reuse App 1/App 4's component). User taps the area; the app records it and displays "I'm holding this in my [area]." No auto-assignment.
4. **Respond:** Prompt: "What would you say to a close friend who was feeling exactly this?" Large open text field. Calm placeholder: "You don't need to be kind to yourself yet. Just write what you'd say to someone you care about." This is the compassion pivot — the user's own words, not a script.
5. **Close:** A soft summary card: their critic's words (step 2), their body location (step 3), and their own compassionate response (step 4). Below the card: "That was for you. You can take it with you." Copy-as-text button. No scores, no "well done", no streak.

**Voice notes:**
- Do not use the word "journalling" in the UI — it sounds like homework. "Write what comes" or "just write" is fine.
- Do not tell users how to feel at step 3. The body-locate is a noticing step, not a diagnosis.
- At no point does the app validate the inner critic or suggest the user is right to be self-critical. The tone is neutral observation, not therapy.

**Done criteria:** 5 clean screens, body silhouette reuses App 1 component (or equivalent warm human figure), copy-as-text works, AA contrast, single file, no medical/neuro claims, UK spelling.

---

## App 7 — Mindful Listening (Chapter 9, pair exercise)

**Serial:** Nº 007
**Chapter source:** Exercise Inventory #9 — Mindful Listening (two-person exercise)
**Role:** The only exercise in the book that requires two people. Designed to be used face-to-face or on a video call. One person acts as speaker, one as listener, then they swap.

**Concept:** Most conversations have two people talking. This one has two people listening. Three minutes each to share what is present — no interruption, no advice, no fixing. Then a joint reflection.

**Flow:**
1. **Welcome:** "Mindful Listening." Subtitle: "An exercise for two. About ten minutes." Short paragraph: what this is (one person speaks uninterrupted for three minutes, then you swap). What the listener does: stay present, no problem-solving, no reassurance, just witness. "Ready when you both are." Begin button.
2. **Role select:** Two cards, side by side (or stacked on mobile): "Person A — speaks first" and "Person B — listens first." Each person taps their card. Both cards must be selected before the Start button activates. A subtle confirmation state when both are selected.
3. **Speaker turn (Person A):** Full-screen timer, 3 minutes countdown. Single calm prompt at the top: "Share what's present for you right now. What you're carrying, noticing, or feeling." Large readable text. The timer counts down visually (a minimal arc or progress ring — NOT a digital stopwatch). Gentle single tone when time is up (use the Web Audio API with a simple sine wave tone — single short beep, not aggressive). No pause button (this is the point — you stay with it). An emergency exit link, small and low: "Need to stop early" which ends the session without judgment.
4. **Switch screen:** Full-screen transition. Single line: "Now swap roles." Sub-line: "Person B, it's your turn to share. Person A, you're listening now." A "Begin Person B's turn →" button. No timer running on this screen.
5. **Listener turn (Person B):** Identical to step 3, same timer, same prompt. Same tone at end.
6. **Joint reflection:** "You both showed up for each other." Then two open text fields, one per person if they want to write: "What did you notice?" (Person A) and "What did you notice?" (Person B). Below: a shared field: "What shifted, for either of you?" Copy-as-text covers all three fields. A gentle close: "You can come back to this whenever you need it."

**Technical notes:**
- The 3-minute timer must use a single clock source — start timestamp vs current time, not setInterval decrement. This prevents drift if the app is backgrounded briefly.
- Web Audio API tone: simple sine wave, 440Hz, 0.3 seconds, fade out. Provide a silent fallback if AudioContext is blocked.
- The role-select screen must not proceed until both cards are tapped — add clear visual confirmation state (border highlight, checkmark, or colour fill) on each selected card.
- No LocalStorage persistence needed. This is a live session, not a saved history.
- Honour prefers-reduced-motion: replace the timer arc with a plain percentage label.

**Design notes:**
- This app has a different energy from the solo tools — it is relational. The copy should reflect that: "you both", "together", "for each other". Not "you" alone.
- The design should match Recovery Menu Hub closely (same palette, typography, spacing rhythm) since both are session/timer-led tools.
- Cover/intro page: Nº 007, coloured fullstop, intro page with "What you'll need: two people, ten minutes, a quiet space."
- Leave ornament slot for Claude.

**Done criteria:** 6 screens, single-clock 3-minute timer, Web Audio tone with silent fallback, role-select requires both tapped, joint reflection copy-as-text, AA contrast, prefers-reduced-motion safe, single file, UK spelling.

---

## Build order suggestion

1. App 7 (Mindful Listening) — most complex, most specs, build first while MiniMax has full context
2. App 6 (Inner Critic Journal) — medium complexity, reuses body silhouette component
3. App 5 (One Breath) — simplest, build last, verify the CTA placeholder is clearly marked for Claude to update

Each returns one self-contained `.html` file. Claude polishes after all three are in.
