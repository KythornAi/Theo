# Task Paralysis Rescue — Codex + Claude upgrade rationale

Date: 2026-05-29

## Why this pass happened

Kyle asked Theo to stop treating mini-tools as the end of the work and instead use deep thinking to ask: what would make this worth paying for, useful inside a bundle, and meaningfully different from generic ADHD tools?

## Codex deep-thinking output distilled

Codex recommended the highest-value additions as:

1. **One-tap start ritual timer** because the paid value is the bridge into motion, not just the plan.
2. **Make it smaller / reachable flow** because standard advice says "break it down", but does not keep lowering the activation wall until the user can actually start.
3. **Rescue modes library** because different stuck states need different ways in.
4. **Saved stuck tasks with reuse** because local persistence makes it personally useful over time.
5. **Gentle pattern insight** only if it remains non-diagnostic and light.

Codex also recommended not building AI coaching, accounts, sync, public sharing, a full planner, gamification, dashboards, notifications, body-doubling rooms, or integrations yet.

## Claude product/copy pass distilled

Claude pushed the app towards human, warm, non-clinical language:

- Use **"What kind of stuck are you?"** and **"Ways in"** instead of clinical mode language.
- Lead with modes such as **"Do it badly on purpose"** and **"Just two minutes, then stop"** because they immediately lower pressure.
- Make the timer skippable so it does not become another demand.
- Add an **exit note** so the saved library captures what helped without turning the app into a pass/fail tracker.
- Defer dashboards and avoid making pattern insight visible before there is enough user history.

## What Theo implemented

Built into `prototypes/task-paralysis-rescue/index.html`:

- Six "ways in" modes.
- Guided 30-second breathe + two-minute start timer.
- "Make it more reachable" reason flow.
- LocalStorage rescue library with reuse, helped, not-today, and delete actions.
- Optional exit note.
- Gentle observation only after three saved successes.

## Bundle role

This should be treated as the **Emergency Start Tool** inside a Paper N Pixels ADHD Reset Toolkit: the thing customers use when planners, lists, and good intentions are not enough to get them moving.
