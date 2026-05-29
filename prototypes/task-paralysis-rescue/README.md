# Task Paralysis Rescue Button — Experimental Prototype

**Status:** experimental, not customer-facing. Built by Theo on 2026-05-29. Upgraded after Codex deep-thinking pass and Claude copy/product pass on 2026-05-29.

## What it is

A single-file HTML prototype for ADHD task-initiation paralysis. It is designed for moments where the user knows something needs doing but cannot start.

Positioning line:

> The ADHD start ritual for when you know what to do but cannot make yourself begin.

## Current flow

1. Pick current energy.
2. Dump one stuck task or thought.
3. Choose a "way in" that matches the flavour of stuckness.
4. Get a first move, two-minute version, and fallback.
5. Optionally start a guided 30-second breathe + two-minute start timer.
6. If the move still feels blocked, choose why and get a more reachable route.
7. Save useful rescues locally, reuse them later, and mark whether they helped.
8. Optionally leave an exit note for next time.

## Added value from the upgrade pass

The first version was a useful widget. This version is closer to a bundle-worthy product because it adds:

- **Ways in library:** multiple stuck-state routes, not just one generic answer.
- **Guided start timer:** the app bridges the user into action, rather than only giving advice.
- **Make it more reachable flow:** recognises that the first move can still be too much.
- **Things that helped before:** local reuse turns it into a personal rescue kit over time.
- **Exit notes:** shifts the emotional tone from pass/fail to learning what helped.
- **Gentle local observation:** only appears after enough marked successes, with no dashboard or diagnosis.

## Why it might be worth paying for inside a bundle

It solves a specific pain point that standard planners do not solve: task initiation. The value is not task storage or planning. The value is the bridge between "I know what needs doing" and "I have started".

It complements Daily Reset, Printable Reset Cards, and an ADHD Reset Toolkit because it becomes the emergency start tool customers use when the rest of the system is not enough.

## What deliberately was not added

- AI coaching
- accounts or sync
- public sharing
- full planner/calendar/todo features
- streaks, badges, XP, or levels
- integrations
- real body-doubling rooms
- notification systems

Those would make the tool heavier and move it toward crowded ADHD app territory.

## How to run

Open `index.html` in a browser. No build step, no external services, no tracking, no API calls.

## Notes for Kyle / Claude

- All storage is localStorage only.
- Copy is intentionally warm, low-shame, and non-clinical.
- The timer is skippable so it does not become another demand.
- The saved library is useful enough to support a paid bundle, but light enough to avoid becoming a planner.
