# Skill: codex-think

## Purpose
Invoke OpenAI Codex CLI as a thinking and reasoning tool for tasks that need deeper analysis than the default chat model can provide. Codex uses o3/o4-mini under Kyle's ChatGPT Plus subscription — no separate API billing.

## When to use
- Complex analysis requiring multi-step reasoning
- Code writing or reviewing a prototype
- Synthesising large amounts of research into structured conclusions
- Any task where you feel the default model is not giving you enough depth
- When Kyle says "think harder about this" or "use Codex on that"

## When NOT to use
- Simple lookups or factual searches (use DuckDuckGo skill instead)
- Routine file writes or inbox updates (use the relevant write skill)
- Real-time tasks where speed matters more than depth (use default model)

## How to invoke

Codex CLI is installed at: `/usr/local/bin/codex` (or wherever `npm` installed it globally — check with `which codex`)

### Non-interactive mode (for automated tasks)
Pass your task as a quoted argument. Codex will reason and return its response:

```bash
codex --approval-mode suggest "Your task description here. Be specific. Include all context Codex needs."
```

Use `--approval-mode suggest` so Codex proposes actions without auto-executing them — safer for automated runs.

### Capture output to a file (recommended for longer tasks)
```bash
codex --approval-mode suggest "Your task" > /home/kyle/hermes_files/theo/notes/codex-output-YYYY-MM-DD.md 2>&1
```

Then read that file and incorporate the findings into your own words in HERMES_INBOX.md.

### For code tasks only
If Kyle has explicitly asked for a code prototype:
```bash
codex --approval-mode full-auto --working-dir /home/kyle/hermes_files/theo/prototypes "Write a script that does X"
```

Only use `full-auto` when Kyle has said it is fine to let Codex write files automatically. Default to `suggest`.

## Safety rules (non-negotiable)

- **Never use `full-auto` without Kyle's explicit instruction** — it allows Codex to write and execute files without asking.
- **Always limit `--working-dir` to `/home/kyle/hermes_files/theo/prototypes/`** if Codex needs file access. Never give it access to `~/.hermes/` or any parent directory.
- **Review Codex output before forwarding.** Codex is a reasoning tool — its output goes through you first, not directly to HERMES_INBOX.md Section 1.
- **Do not pass API keys, credentials, or personal data into the Codex prompt.**
- Codex output must still meet the standard: summarise in your own words, source any factual claims, apply confidence rating.

## Cost awareness
- Codex bills against Kyle's ChatGPT Plus subscription, not a separate API balance.
- Each Codex invocation uses tokens from the ChatGPT monthly allowance.
- Treat it as a finite resource: one focused invocation per task, not repeated trial-and-error calls.
- If you are unsure whether a task warrants Codex, default to the cheaper model first.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `codex: command not found` | Tell Kyle via Telegram — Codex may not be installed on Pi |
| Auth error / login prompt | Tell Kyle — ChatGPT OAuth token may need refreshing |
| Codex hangs with no output | Wait 60 seconds, then Ctrl+C. Log in HERMES_INBOX.md Section 4 |
| Output is empty | Retry once with a more specific prompt. If still empty, log it. |

---
*Skill created: 2026-05-10 by Claude for Kyle and Theo*
