# Skill: claude-write

## Purpose
Invoke Claude Code CLI for writing, content creation, and coding tasks that benefit from Claude's natural language quality. Claude is particularly strong at blog posts, product copy, social content, and any task where tone and voice matter. Also capable of code writing and analysis.

Runs against Kyle's claude.ai subscription — no separate API billing.

## When to use
- Blog posts, articles, and long-form content
- Product copy, landing page text, email sequences
- Social media captions and Pinterest descriptions
- Rewriting or improving draft content for tone/clarity
- Code writing or review when natural explanation alongside code is needed
- Any task where the output needs to sound genuinely human

## When NOT to use
- Simple lookups or factual searches (use TinyFish or Perplexity)
- Complex multi-step reasoning or deep analysis (use codex-think)
- Routine file writes or inbox updates (use the relevant write skill)
- Real-time tasks where speed matters more than quality (use default model)

## How to invoke

Claude Code CLI is installed at: `/home/kylemoore/.local/bin/claude`

Verify with: `bash -l -c 'which claude'`

### Non-interactive mode (for all automated tasks)
Use `--print` to get output and exit immediately — never run `claude` interactively from a skill:

```bash
bash -l -c 'claude --print "Your task here. Be specific. Include all context and any style/tone requirements."'
```

### Capture output to a file (recommended for longer content)
```bash
bash -l -c 'claude --print "Your task here." > /home/kylemoore/.hermes/notes/claude-output-YYYY-MM-DD.md'
```

Then read that file and incorporate the output into your response or the relevant deliverable.

### Specify a model (optional)
Claude Code defaults to Claude Sonnet. For longer or more nuanced writing tasks:

```bash
bash -l -c 'claude --print --model claude-opus-4-5 "Your task here."'
```

Use Opus only when depth genuinely warrants it — it uses more of Kyle's subscription allowance.

### Writing task example
```bash
bash -l -c 'claude --print "Write a 400-word blog post introduction for Paper N Pixels about why ADHD brains abandon planners within a week. Tone: warm, honest, slightly self-deprecating. Audience: adults with ADHD who have tried many systems. Do not use bullet points."'
```

## Safety rules (non-negotiable)

- **Always use `--print`** — never run `claude` without it in automated contexts. Interactive mode will hang.
- **Always use `bash -l -c`** — ensures nvm PATH is loaded and `claude` is found.
- **Do not pass API keys, credentials, or personal data into the prompt.**
- **Review Claude output before forwarding.** Output goes through you first — apply your own judgement on quality before sending to Kyle or writing to a deliverable.
- Claude output must still meet the standard: flag any factual claims, apply confidence rating if research is involved.

## Cost awareness
- Claude Code bills against Kyle's claude.ai subscription, not a separate API balance.
- Treat it as a finite resource: one focused invocation per task.
- For short tasks (under ~500 words output), Sonnet is fine and uses less allowance.
- Reserve Opus for long-form or high-stakes content.
- If unsure whether a task warrants Claude, default to the cheaper model first.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `claude: command not found` | Tell Kyle via Telegram — binary lives at `~/.local/bin/claude`; PATH may need checking |
| Auth error / login prompt | Tell Kyle — claude.ai OAuth token may need refreshing (Kyle runs `claude` once in a terminal to re-auth) |
| `--print` hangs with no output | Wait 60 seconds, then flag in HERMES_INBOX.md Section 4 |
| Output is empty or truncated | Retry once with a more focused prompt. If still failing, log it. |

---
*Skill created: 2026-05-18 by Claude for Kyle and Theo*
