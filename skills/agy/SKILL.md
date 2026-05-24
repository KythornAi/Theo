# Skill: agy (Google Antigravity CLI)

## Purpose
Invoke Google Antigravity CLI (`agy`) for tasks that benefit from Gemini's multimodal capabilities — particularly analysing images, screenshots, and YouTube videos, or when you need a second capable model for reasoning and coding tasks.

## When to use
- Analysing screenshots, images, or visual content
- Researching or summarising YouTube videos (Gemini has native video understanding)
- A second opinion on code, analysis, or reasoning when Codex is rate-limited
- Tasks explicitly involving visual or multimodal inputs
- When Kyle says "use agy", "check this with Antigravity", or "use Gemini on this"

## When NOT to use
- Routine text research (use TinyFish → Perplexity hierarchy instead)
- Writing tasks (use `claude-write` skill)
- Deep code reasoning (use `codex-think` first — it has workspace-write capability)
- Tasks where you need file writes (agy is read/reason-only in this setup)

## How to invoke

Binary location: `/home/kylemoore/.local/bin/agy`

Auth: Authenticated via Kyle's Google account (one-time OAuth done 2026-05-24). Token stored at `~/.gemini/antigravity-cli/`. If auth expires, tell Kyle via Telegram — he must re-run `ssh -t kylemoore@100.126.155.50 "bash -l -c 'agy -p test'"` and log in again.

### Non-interactive mode (standard use)

```bash
agy --print "Your prompt here. Include all context needed." 2>&1
```

`--print` / `-p` runs a single prompt non-interactively and returns the response. This is the mode to use in all automated and skill-based tasks.

### Capture output to a file

```bash
agy --print "Your prompt" 2>&1 > /home/kylemoore/.hermes/notes/agy-output-YYYY-MM-DD.md
```

Then read that file and incorporate findings in your own words — do not paste raw output directly into HERMES_INBOX.md.

### Multimodal use (images/screenshots)

Pass image context in the prompt text itself, or reference a local file path:

```bash
agy --print "Analyse the screenshot at /path/to/image.png and describe what you see" 2>&1
```

Note: If Antigravity does not accept local file paths directly, describe the image content in the prompt or use `--add-dir` to add the directory to its workspace context.

### Adding workspace context

```bash
agy --print "Your prompt" --add-dir /home/kylemoore/theo/research 2>&1
```

Use `--add-dir` when the task requires reading from a local directory. Only pass directories Theo has read access to.

## Safety rules

- **Do not pass API keys, credentials, or .env file contents into the prompt.**
- **Do not use `--dangerously-skip-permissions`** — this flag auto-approves all tool actions. Never use it.
- Review agy output before forwarding to Kyle or HERMES_INBOX.md. Treat it as a first draft, not ground truth.
- agy may try to create a scratch workspace at `~/.gemini/antigravity-cli/scratch` — this is normal and safe.

## Cost awareness
- `agy` uses Kyle's Google account (Gemini 3.5 Flash). Check if there is a free tier limit or billing attached to the Google account used.
- Treat as a finite resource: one focused invocation per task. Do not retry in loops.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `agy: command not found` | Binary is at `~/.local/bin/agy`. Run `bash -l -c 'agy --print ...'` to ensure login-shell PATH |
| Auth error / login prompt | Tell Kyle via Telegram — Google OAuth token needs refreshing |
| Hangs with no output | Wait 60 seconds, then Ctrl+C. Log in HERMES_INBOX.md Section 4 |
| Empty response | Retry once with a more specific prompt. If still empty, log and move on |

---
*Skill created: 2026-05-24 by Claude for Kyle and Theo*
