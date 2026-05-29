# Theo Scratchpad

Purpose: a low-friction holding area for raw Telegram feedback, half-formed observations, and context that may be useful later but should not immediately go into Hermes memory.

Use this when:
- Kyle sends detailed feedback that may need sorting later.
- A session contains useful context but it is too project-specific for permanent memory.
- Theo needs a safe place to capture “don’t lose this” notes before deciding whether they belong in project notes, Brain vault, memory, or a skill.

Rules:
- Prefer one markdown file per topic or date.
- Keep raw notes here until they are consolidated.
- Once consolidated, link to the final project note and mark the scratch note as processed instead of deleting it.
- Do not store secrets, passwords, API keys, or private account details here.
- Do not use this as a replacement for durable memory; only promote reusable facts/rules into Hermes memory.

Suggested filename format:
- `YYYY-MM-DD-topic.md`

Current source-of-truth example:
- Evening close-out feedback is already consolidated in `../evening-closeout-kyle-feedback-2026-05-29.md`.

Automation safety net:
- Cron job `Theo scratchpad sorter` (`8fee686c8e2e`) runs every 2 hours with local-only delivery. It reviews unprocessed scratchpad markdown files, consolidates them where appropriate, marks them processed, and commits/pushes changes.
- Cron job `Theo scratchpad backlog alert` (`c7726ebff7da`) runs every 2 hours and only sends Telegram if unprocessed scratchpad files exceed 3 items or the oldest is 6+ hours old. Empty output means silent/no alert.
