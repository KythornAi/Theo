# Theo Support — Claude Code Context

This VS Code workspace is for supporting Theo, Kyle's AI agent running on a Pop OS laptop.
Use it when Theo is broken, misbehaving, or needs infrastructure work.
Claude Code has full SSH access to the laptop and can read/edit Theo's files directly.

---

## Who is Theo

Theo is a personal AI agent built on Hermes (v0.13.0), running on a Pop OS laptop.
He handles research, cron jobs, and skill-based tasks for Kyle's Paper N Pixels side hustle.
He communicates with Kyle via Telegram. His "brain" is a set of markdown files and skills.

**He is not a chatbot. He is an operator with bounded autonomy.** When something breaks,
the cause is almost always a file, a path, a config value, or a missing dependency — not
a model failure. Fix the environment, not the prompt.

---

## SSH Access

```
Host:     kylemoore@100.126.155.50   (Tailscale IP — must be on Tailscale)
SSH key:  already configured on Mac
Test:     ssh kylemoore@100.126.155.50 "echo ok"
```

Always use `ssh kylemoore@100.126.155.50 "command"` for remote commands.
Never `cd /path && command` — use absolute paths or `bash -l -c` for login-shell PATH.

---

## Key Paths on the Laptop

| What | Path |
|------|------|
| Hermes binary | `~/.local/bin/hermes` |
| Hermes config | `~/.hermes/config.yaml` |
| Hermes env | `~/.hermes/.env` |
| Hermes skills | `~/.hermes/skills/` |
| Hermes memories | `~/.hermes/memories/` |
| Hermes notes | `~/.hermes/notes/` |
| Hermes prototypes | `~/.hermes/prototypes/` |
| Theo repo | `~/theo/` (git: KythornAi/Theo.git) |
| Brain vault | `~/Brain/` (git: KythornAi/brain-vault) |
| Codex CLI | `~/.local/bin/codex` |

---

## Key Files in This Workspace (all symlinked — edits update the source)

| File | What it is |
|------|-----------|
| `AGENTS.md` | Theo's primary instruction document — his rules, identity, tools, memory protocol |
| `THEO_OPS.md` | Kyle's runbook — recovery sequences, common failures, how to SSH in |
| `SOUL.md` | Theo's persona, values, tone |
| `THEO_CLI_CHEATSHEET.md` | Quick reference for Hermes CLI commands |
| `HERMES_INBOX.md` | Theo's live work queue — Section 1 ready, Section 4 blocked |
| `skills/` | All custom skills Theo can invoke |
| `research/` | Research outputs Theo has produced |

After editing any file here, sync it to the laptop:
```bash
rsync -av /path/to/file kylemoore@100.126.155.50:~/.hermes/skills/<skill>/SKILL.md
# or for AGENTS.md / SOUL.md:
rsync -av AGENTS.md kylemoore@100.126.155.50:~/theo/AGENTS.md
```

---

## Hermes Gateway (Telegram connection)

```bash
# Check status
ssh kylemoore@100.126.155.50 "systemctl --user status hermes-gateway"

# Restart
ssh kylemoore@100.126.155.50 "systemctl --user restart hermes-gateway"

# View live logs
ssh kylemoore@100.126.155.50 "journalctl --user -u hermes-gateway -f"
```

If gateway fails on start, check logs — most common cause is Telegram polling conflict
(another instance running). Restart clears it.

---

## LLM Stack (three tiers)

| Tier | Model | When |
|------|-------|------|
| Chat (default) | `gpt-5.5` via openai-codex (ChatGPT Plus OAuth) | All Telegram conversations and most tasks |
| Cron | `gpt-5.5` via openai-codex (ChatGPT Plus OAuth) | Scheduled research jobs |
| Deep think | `gpt-5.5` via Codex CLI | Complex analysis — invoked via `codex-think` skill |

Codex CLI auth: ChatGPT Plus OAuth (Kyle's subscription). Token stored at `~/.codex/`.
If Codex auth expires, Kyle needs to run `codex` once in a terminal on the laptop to re-auth.

---

## Cron Jobs

Theo's cron jobs are not version-controlled. To inspect them:
```bash
ssh kylemoore@100.126.155.50 "crontab -l"
```

Known jobs (recreate if missing):
- `weekly-adhd-painpoints-research` — Mon 17:00 BST
- `monthly-skill-audit` — Sun 11:00 BST

---

## Git Sync Rules

**Theo repo** (`~/theo/`) — push/pull manually:
```bash
ssh kylemoore@100.126.155.50 "cd ~/theo && git pull"
ssh kylemoore@100.126.155.50 "cd ~/theo && git add -p && git commit -m 'msg' && git push"
```

**Brain vault** (`~/Brain/`) — auto-syncs every 30 min via cron.
Manual sync: `ssh kylemoore@100.126.155.50 "bash ~/Brain/scripts/brain-sync-laptop.sh"`

Mac auto-pulls Theo repo every 5 min via `scripts/git-pull-theo.sh`.

---

## Common Failures and Fixes

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| Theo not responding in Telegram | Context window full | Send `/new` or `/restart` in Telegram |
| Gateway crash on start | Telegram polling conflict | `systemctl --user restart hermes-gateway` |
| Skill not working | Wrong path or stale SKILL.md | Read the skill file, compare paths, rsync fix |
| Cron job silent / no output | Model rate limit or wrong config | Check `~/.hermes/config.yaml` cron model setting |
| `codex: command not found` | PATH issue in non-login shell | Use `bash -l -c 'codex ...'` |
| Codex auth error | OAuth token expired | Kyle runs `codex` once on laptop to re-auth |
| Memory not persisting | Memory tool used but folder write skipped | Check `~/.hermes/memories/` — write the `.md` file too |

Full recovery sequence is in `THEO_OPS.md`.

---

## What NOT to do

- Do not re-enable `hermes-gateway.service` on the laptop with a second bot token — Theo uses one Telegram bot, one gateway only.
- Do not pass API keys or credentials into Codex prompts.
- Do not edit `~/.hermes/config.yaml` without checking the current model names against OpenRouter's live list.
- Do not use `sudo npm install -g` — Codex is installed at `~/.local/bin/` intentionally.

---

## Session Start Checklist (for a support session)

Run these in order — every session, no exceptions:

1. Read `WORKING_HANDOVER.md` — what did the last session do, what's next, any blockers?
2. `ssh kylemoore@100.126.155.50 "systemctl --user status hermes-gateway"` — is gateway running?
3. `ssh kylemoore@100.126.155.50 "crontab -l"` — are cron jobs present?
4. Read `HERMES_INBOX.md` Section 4 — any blocked tasks?
5. Scan `HERMES_INBOX.md` for any `[THEO→CLAUDE]` entries — these are messages from Theo that need a response. Respond by appending `[CLAUDE→THEO] YYYY-MM-DD | <subject> | <response>` to HERMES_INBOX.md, then commit and push on the laptop.
6. Report a brief summary to Kyle: Theo's current status, any messages from Theo, open blockers.
7. Ask Kyle: what is Theo doing wrong, or what needs setting up?

---

## Session Wrap Up (MANDATORY — do before closing)

1. Append to `WORKING_HANDOVER.md` — label `### Session N — VS Code/Terminal — YYYY-MM-DD`. Sections: **Done**, **Next**, **Blockers for Kyle**. Keep last 5 entries.
2. **Theo notification check** — did any changes this session affect Theo's behaviour, tools, memory, config, SOUL.md, or vault files? If yes, send a `[CLAUDE→THEO] YYYY-MM-DD | <subject> | <summary of changes>` message by appending to `HERMES_INBOX.md` before committing. Theo reads this inbox at session start — if it's not in there, he won't know. **Before writing any `[CLAUDE→THEO]` entry, paste the full message text into the chat with Kyle first.** Kyle reads it, edits or approves, then Claude writes the approved version. This is mandatory — Kyle has no other way to see what Theo is being told, and a vague message produces a confused agent.
3. If any files were changed on the laptop (skills, AGENTS.md, HERMES_INBOX.md etc.), commit and push via SSH: `git -C ~/theo add <files> && git -C ~/theo commit -m '...' && git -C ~/theo push`
4. Write a session note to the Brain vault at `~/Desktop/Brain/01_Projects/Theo Support/YYYY-MM-DD -- VS Code (SN) -- Short Title.md` using the Write tool directly. Key decisions, fixes, and parking lot items. This is mandatory — the vault is Kyle's second brain.
5. Append a one-line entry to the Session Log section of `~/Desktop/Brain/01_Projects/Theo Support/Theo Support.md` linking the new session note: `- [[YYYY-MM-DD -- VS Code (SN) -- Short Title]] — one-line summary`.
6. Scan for mentioned-but-not-done items — note them in the handover under **Next**.

If the session ends without a handover write, the next instance will be flying blind.

---

*Workspace created: 2026-05-16. Files are symlinked from Side_Hustle/theo/ — edits here update the source.*
