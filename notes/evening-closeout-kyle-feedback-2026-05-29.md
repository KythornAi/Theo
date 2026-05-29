# Evening Close-Out — Kyle screen feedback

Date: 2026-05-29
Source: Telegram feedback, parts 1–2

## High-level product direction

The flow should feel like a human, gentle evening reflection — not AI-ish, not clinical, and not hustle-coded. It should help the user offload the day, notice what mattered, name anything that could block tomorrow, then shift into a hopeful intention for the next day.

Avoid duplicating prompts. If a concept has already been covered naturally, do not add another explicit screen for it.

## Revised flow logic

### Screen 1 — brain dump / offload

**Current issue:** “Time to put the day down” does not sound like something a human would naturally say.

**Preferred direction:**
- Heading direction: “Let go of what’s on your mind”
- Purpose: open brain-dump section; let the user offload the day without needing structure.
- Tone: warm, simple, conversational.

### Screen 2 — what stood out / wins and hard bits

**Current issue:** “What actually happened today?” is not quite right.

**Preferred direction:**
- Heading direction: “What stood out about today?”
- Keep/support body idea: “Big things, ordinary things. If you got through it, it counts.”
- Purpose: help the user acknowledge what made the day productive, happy, challenging, or simply survivable.
- This is not about hustle-style wins. It is about noticing that they showed up, rested, kept going, asked for help, or got through something difficult.

**Chips:** use fewer chips. Good candidates:
- I showed up
- I rested
- I kept going
- I asked for help

Possible alternate/additional chip if space allows:
- I got through a hard bit

Avoid overloading the screen with too many chips.

### Screen 3 — blockers / what could get in the way tomorrow

**Current issue:** “What is still in your head?” and “loose ends” are too vague, and the button “I’ve written it down” feels redundant because the user has already typed into a free-text area.

**Preferred direction:**
- Purpose: help the user identify whether anything from today could become an obstacle tomorrow.
- This should follow naturally from Screen 2: if something was a low point or difficult part of today, ask whether it might block tomorrow.
- It is not a to-do list.
- It is not just about getting things off their mind.
- It should help them reflect: what is one thing, or two things, that might make tomorrow harder?

**Copy direction:**
- Avoid “put loose ends here”.
- Use wording around “anything that might become an obstacle tomorrow” or “anything that could get in your way tomorrow”.
- Consider removing the “I’ve written it down” button or replacing it with a more appropriate progression action.

### Screen 4 — tomorrow intention / hopeful next-day picture

Kyle’s Part 2 reframes the next step: after offloading and blockers, the user should shift from heavier reflection into hope/shape/intention for tomorrow.

**Preferred direction:**
- Prompt them to imagine how they would like tomorrow to look.
- Ask what their intention for tomorrow is.
- Let them write freely; no chips needed.
- Purpose: move from “what got heavy / what could block me” to “what would I like tomorrow to feel or look like?”

Possible prompt directions:
- “How would you like tomorrow to look?”
- “What’s your intention for tomorrow?”
- “What would make tomorrow feel a little better?”

### Reconsider/remove “What are you leaving here tonight?”

Kyle is not sure this still fits because the flow may already address offloading, blockers, and intention. Treat this screen as optional or likely redundant unless it clearly adds a distinct emotional closure function.

### Optional “What got in the way?” screen

Do not add as a blunt optional screen. Kyle feels this is already addressed indirectly through Screen 2 and Screen 3 in a softer, less in-your-face way.

### Final screen — done / close

**Preferred heading direction:**
- “Deep breath in & out. You’re done for today.”

Kyle likes the idea of a random fixed message from a bank/list, but the risk is that messages sound AI-generated or inhuman. If used, fixed messages must be carefully written to sound natural and human.

**Optional saved/refreshed action:**
- The optional collapsed section may not need to be collapsible.
- Consider a pill-style button that lets the user save what they wrote.
- Consider a pill-style button that refreshes/resets the app so it is ready for the next night.

## Copy principles from this feedback

- Use human phrasing over polished/AI-like phrasing.
- Avoid “hustle” framing around wins.
- Keep reflective prompts simple and spacious.
- Do not over-chip; fewer, better prompts are stronger.
- Each screen needs a distinct job:
  1. Offload what is on your mind.
  2. Notice what stood out today.
  3. Name anything that could block tomorrow.
  4. Set a hopeful/intention-based picture for tomorrow.
  5. Close gently and optionally save/reset.
