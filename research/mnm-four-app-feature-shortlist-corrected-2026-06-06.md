# MNM Four-App Feature Shortlist — Corrected

## Date
2026-06-06

## Purpose
This replaces the overlong audit-style writeup with a buildable feature shortlist. It focuses on what to add, not a long critique or repeated guardrails.

## 1. Body Stress Scan

### Feature 1 — “What brought you here?” entry chips
Add a first-screen chooser before the scan:
- Tight jaw / shoulders
- Racing thoughts
- After a meeting
- Before sleep
- Too many tabs open
- Not sure

Use the selected reason in the final card: “I came here because: [reason].”

Why it adds value: it makes the scan feel personal immediately instead of just being a guided body checklist.

### Feature 2 — Stress pattern summary card
After the body scan, generate a simple non-diagnostic sentence from selected areas:
- “Today, stress showed mostly in your upper body.”
- “Today, the strongest signals were around breath and stomach.”
- “Today, the scan felt spread out rather than centred in one place.”

Why it adds value: the user gets a useful takeaway, not just a list of tapped body parts.

### Feature 3 — Carry-forward choice
After the summary, offer one small carry-forward option:
- unclench jaw once
- soften shoulders by 5%
- drink water
- close one tab
- step outside
- leave it noticed, no action

Append it to the copied/screenshot card.

Why it adds value: the app gives a next step without becoming a planner.

### Feature 4 — Screenshot body map result
Create a clean final visual card showing selected body areas and sensation words, designed for screenshot/export.

Why it adds value: this gives the app a tangible artefact similar to the Reset Card, improving bundle value.

## 2. Balance Audit Reset Card

### Feature 1 — Quick Card mode
Add a fast route: “I only have 60 seconds.”

It asks only:
- One thing tipping me off balance
- One thing that steadies me
- One small adjustment

Then it generates the Reset Card.

Why it adds value: the app becomes useful even when someone cannot complete a full two-column audit.

### Feature 2 — Personalised if/then line
Let the user choose one item from “tilts me” and one from “steadies me”, then add this line to the card:

“When [tilter] shows up, I can reach for [steadier].”

Why it adds value: the card becomes genuinely personal rather than generic.

### Feature 3 — Two output modes
Add two clear export choices:
- Phone lock-screen card
- Printable pocket/notebook card

Keep the content the same, but format the card differently.

Why it adds value: users instantly understand how to use the output after leaving the app.

### Feature 4 — Stuck prompt drawer
Add a small “Need ideas?” drawer for the two audit columns:
- body basics
- boundaries
- digital noise
- context switching
- people pressure
- rest/recovery

Why it adds value: blank boxes are hard; prompts help completion without adding complexity.

## 3. Recovery Menu Hub

### Feature 1 — Build your own recovery menu
Add an optional section where the user creates a tiny personal menu:
- 3 micro recovery options under 10 minutes
- 1 bigger recovery option for later

Make it copyable as a simple text card.

Why it adds value: this turns the app from timer launcher into a useful recovery decision tool.

### Feature 2 — “What kind of recovery do I need?” chooser
Before the four sessions, add a chooser:
- Body tense
- Mind noisy
- Critic loud
- Attention scattered
- Just need a pause

Then gently highlight one matching session while leaving all options available.

Why it adds value: it solves the “I’m drained and can’t choose” moment.

### Feature 3 — No-timer recovery mode
Add a route called “I can’t do a session right now.”

It gives a small menu:
- water
- stretch
- look outside
- one breath
- step away from screen
- choose nothing yet

Why it adds value: the app still helps on very low-capacity days.

### Feature 4 — Session-specific completion cards
Instead of one generic completion keepsake, tailor the ending to the chosen session:
- One-Point Focus: object noticed
- Paced Breathing: breath phrase
- Self-Compassion Reset: kind phrase
- Embodied Reset: body area noticed

Why it adds value: the four sessions feel distinct and more premium.

## 4. 90-Second Emotional Pause

### Feature 1 — Fast name-and-locate path
Add a quick route for when the full timer feels too much:
- name the emotion
- tap where it sits in the body
- copy a one-line pause card

Why it adds value: it keeps the core skill usable in intense moments.

### Feature 2 — Emotion word ladder
Add optional “more specific” word chips:
- Angry: irritated, resentful, protective, sharp
- Sad: disappointed, lonely, tender, flat
- Anxious/uneasy: restless, braced, uncertain, wired
- Overwhelmed: flooded, crowded, frayed, stuck

Why it adds value: it makes the naming step richer and more useful than a generic breathing timer.

### Feature 3 — Next-wise-step chips
After the pause, offer one next-wise-step choice:
- wait before replying
- ask for space
- drink water
- write one sentence
- step outside
- do nothing yet

Add the chosen step to the final card.

Why it adds value: the app helps the user leave the pause with a practical anchor.

### Feature 4 — After-wave check-in
At the end ask: “What is here now?”

Chips:
- softer
- still strong
- clearer
- tired
- not sure

Why it adds value: it adds closure while staying honest that the feeling may not have gone away.

## Best build order
1. Balance Audit: Quick Card mode + personalised if/then line.
2. Recovery Menu: Build your own recovery menu.
3. 90-Second Pause: Fast name-and-locate path + next-wise-step chips.
4. Body Stress Scan: Entry reason chips + pattern summary.
5. Add visual/export polish only after the core new value is working.

## Build brief rule for Claude/MiniMax
For each app, build the new value layer first. Do not spend most of the brief saying what not to make. Keep guardrails to one short paragraph, then specify the actual new UI states, fields, buttons, and final output card.
