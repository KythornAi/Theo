# Evening Close-Out Board

Experimental Paper N Pixels prototype built by Theo on 2026-05-30.

## What it is

A single-file HTML/CSS/JS evening close-out ritual for ADHD adults who have technically finished the day but still feel mentally open-looped.

The flow is intentionally narrow:

1. Offload what is on your mind.
2. Notice what stood out today.
3. Name anything that could get in the way tomorrow.
4. Leave tomorrow a hopeful intention.
5. Close gently, with a saved summary.

## How to run

Open:

```text
/home/kylemoore/theo/prototypes/evening-close-out-board/index.html
```

No build step, account, API key, or network connection is required.

## Storage model

The prototype uses browser `localStorage` only:

- `pnp-evening-closeout-draft-v1` stores the current day's autosaved draft.
- `pnp-evening-closeout-v1` stores recent completed close-outs.

Saved notes stay on the same browser/device. Clearing browser data removes them.

## Product rationale

This fills a different active product role from Daily Reset:

- Daily Reset helps start and sort the day.
- Evening Close-Out helps stop carrying the day into the night.

Note: Task Paralysis Rescue exists only as an archived experiment. It should not be used in bundle positioning unless Kyle explicitly reopens it.

The value is not a bigger planner. It is a soft transition ritual that reduces next-day friction without asking the user to perform productivity theatre.

## Value-add decisions implemented

Based on Kyle's 2026-05-29 feedback and a Codex prioritisation pass:

- Human, low-shame screen copy.
- Sparse chips only on the "what stood out" screen.
- Distinct blocker screen focused on tomorrow obstacles, not vague loose ends.
- A "10% easier move" field to turn a blocker into a tiny support action.
- Local autosave and recent evening history.
- Copy/export and reset escape hatches.
- Mobile-first layout.

## Deliberately not built yet

- AI summaries or advice.
- Streaks, badges, scores, charts, or mood analytics.
- Calendar/task integrations.
- Account sync.
- A full diary dashboard.
- Large chip banks or emotion taxonomies.
- Timer or habit tracker features.

## Verification notes

- Inline JavaScript extracted and checked with `node --check`.
- Browser walkthrough performed with local file URL.
- Console checked for runtime errors.
- localStorage keys inspected after completing the flow.
- Wording searched for banned framing: "loose ends", "wins", "crush", "hustle".
