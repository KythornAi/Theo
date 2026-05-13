# THEO_OPS.md — Kyle's Runbook for Theo

*This file is for Kyle, not Theo. It covers how to recover from common issues and what to watch for during supervised runs.*

---

## Quick reference — when Theo goes quiet or breaks

| Symptom | Fix |
|---------|-----|
| Theo stopped responding in Telegram | Type `/new` in Telegram chat to start a new conversation and compact context |
| `/new` didn't help | Type `/restart` in Telegram chat |
| Still broken | Open terminal on Pi, press `Ctrl+C` to stop Hermes, then type `hermes` to relaunch |
| Theo seems confused / looping | Check `HERMES_INBOX.md` Section 4 (BLOCKED) and Section 3 (QUARANTINE) for clues |
| Skill stopped working | Check the skill `.md` file for the last lesson-learned entry — may point to what changed |
| DuckDuckGo search not working (`ddgs: command not found` or `ModuleNotFoundError`) | Install `ddgs` into the Hermes venv — see "Skill Python dependencies" section below |

---

## Why Theo breaks (root causes)

1. **Context window too large** — the conversation in Telegram has grown too long. Theo starts to forget earlier instructions. Fix: `/new` or `/restart`.
2. **Skill degraded** — a skill `.md` file has conflicting lesson-learned entries. Fix: open the skill file, read the last few entries, clean up conflicts, then `/restart`.
3. **Blocked task looping** — Theo is retrying a failed task instead of moving on. Fix: check `HERMES_INBOX.md` Section 4, then `/new`.
4. **Model rate limit** — free OpenRouter models have rate limits. If Theo reports API errors, wait 10–15 minutes and restart.

---

## Recovery sequence (step by step)

1. Open Telegram.
2. Type `/new` — wait 30 seconds.
3. If no response: type `/restart` — wait 60 seconds.
4. If still no response: SSH into Pi (or use Pi directly), open terminal.
5. Find the Hermes process: `ps aux | grep hermes`
6. Press `Ctrl+C` if Hermes is running in the foreground, or `kill <pid>` if background.
7. Relaunch: type `hermes` in terminal.
8. Confirm Theo responds in Telegram.

---

## Supervised run checklist (Sat/Sun daytime — 2026-04-26/27)

Run through this each time you send Theo a task:

- [ ] Give Theo a single, clear task (one Reddit subreddit, one Etsy keyword, one competitor)
- [ ] Check `HERMES_INBOX.md` via SSH — does it update within a reasonable time? (`ssh kyle@hermes-theo-pi "cat ~/hermes_files/theo/HERMES_INBOX.md"`)
- [ ] Read Section 1 (Theo's Notes) — are summaries in Theo's own words? Are source URLs present?
- [ ] Check Section 3 (Quarantine) — did Theo flag anything suspicious?
- [ ] Check Section 4 (Blocked) — did Theo get stuck anywhere?
- [ ] Is the writing UK English? No em-dashes?
- [ ] Does anything look hallucinated (confident claim with no URL)?
- [ ] Give Theo feedback in Telegram: what was good, what to do differently next time

After 3–4 successful supervised tasks, Theo is ready for a first overnight run.

---

## First overnight run (Sunday night 2026-04-27)

**Before you go to bed:**
- Send Theo 2–3 clearly defined overnight tasks via Telegram
- Confirm `HERMES_INBOX.md` is empty / reset for the night
- Note the time you sent the tasks

**Monday morning review:**
- Check `HERMES_INBOX.md` — did all sections get populated correctly?
- Check Section 4 (Blocked) — what did Theo get stuck on?
- Review Section 3 (Quarantine) — were any injection attempts flagged?
- Look at Section 1 (Theo's Notes) — is the quality good enough to work from?
- Give Theo feedback before running anything else

---

## What Theo's cron tasks look like (v1)

Tasks Theo should run once stable:

| Task | Frequency | Output |
|------|-----------|--------|
| Reddit ADHD pain-point harvest | Weekly (Mon overnight) | 10+ quotes with URLs → HERMES_INBOX.md S1 |
| FutureADHD + Daily Focus Club monitoring | Weekly (Wed overnight) | New products, price changes, review spikes → HERMES_INBOX.md S1 |
| Etsy new-listings scan (ADHD keywords) | Weekly (Fri overnight) | New listings worth knowing about → HERMES_INBOX.md S1 |

Add tasks one at a time. Do not set up all three at once until each runs cleanly solo.

---

## Model config reminder (S39 — three-tier stack)

Theo's LLM stack is split across three tiers. See AGENTS.md "LLM stack" section for Theo's view. This is Kyle's operational cheat sheet.

**Chat default (Tier 1):** `qwen/qwen3.6-plus` via OpenRouter. $0.325/M input, $1.95/M output. 1M context. Strong on agentic tasks. Kyle can swap this to any OpenRouter model any time — see "Swapping the chat model" below.

**Cron jobs (Tier 2):** Both active cron jobs (`monthly-skill-audit`, `weekly-adhd-painpoints-research`) have `deepseek/deepseek-v4-flash` pinned explicitly in `~/.hermes/cron/jobs.json` (swapped from qwen/qwen3.6-plus on 2026-05-10 for cost savings). Cron ignores the chat default — changing `config.yaml` model does not affect cron.

**Deep thinking (Tier 3):** Codex CLI via Kyle's ChatGPT Plus (£18/mo). No extra billing. Invoked via the `codex-think` skill. 10-60s per call. Rate-limited under Plus tier — use for hard strategy/reasoning only, not routine chats. Claude.ai is the manual backup if Codex rate-limits hit.

**Why ChatGPT Plus can't power Theo chats directly:** The OAuth session is strictly bound to the Codex CLI binary — it does not expose an OpenAI-compatible HTTP endpoint. Hermes cannot use ChatGPT Plus as a chat backend. GPT-5.5 via OpenAI API would require a separate paid `OPENAI_API_KEY` (~$5/M input). Not worth it when Qwen 3.6 Plus handles routine work at 15x lower cost.

---

## Swapping the chat model

The default chat model lives in `~/.hermes/config.yaml` under `model.default`. To swap:

1. SSH to the active host: `ssh kyle@hermes-theo-pi` (Pi) or `ssh kyle@<laptop>` when laptop is primary.
2. Edit `~/.hermes/config.yaml`, change `model.default:` to a new OpenRouter slug.
3. Restart Hermes: kill the background process and relaunch (`kill <pid>; nohup hermes gateway run --replace > ~/.hermes/logs/gateway.log 2>&1 &`).

Cron jobs are unaffected — they pin `deepseek/deepseek-v4-flash` in `~/.hermes/cron/jobs.json` regardless.

---

## Invoking deep thinking (Codex)

Three patterns to trigger the `codex-think` skill from Telegram:

- **Explicit:** "Use codex for this — [problem]"
- **Explicit session:** "Let's strategy session, use codex throughout" — Theo holds the mode until you say "back to normal"
- **Implicit:** hard reasoning questions sometimes trigger Theo's skill router automatically (unreliable early on — be explicit)

Codex calls take 10-60s. Theo will tell you in Telegram that it's running. If rate-limited, Theo will say so — fall back to Claude.ai manually.

---

## Cron 401 troubleshooting

If a cron fails with a 401 and the key is `sk-or-v1-*` being sent to `api.openai.com`:

- Root cause is in `~/.hermes/config.yaml`, NOT in `~/.hermes/.env`.
- Verify `providers.openai-api.base_url: https://openrouter.ai/api/v1` and `key_env: OPENROUTER_API_KEY`.
- If a single cron job fails but chats work, check that job's `model` field in `~/.hermes/cron/jobs.json` — it may reference a model that doesn't exist on OpenRouter.
- Rollback: `cp ~/.hermes/config.yaml.bak-s39 ~/.hermes/config.yaml` then restart Hermes.

---

## Files in `~/hermes_files/theo/` (Pi working folder — live-synced to Mac)

This folder is live-synced to `Side_Hustle/theo/` on your Mac via Syncthing. You can read everything directly in VS Code or Finder without SSH.

| File / Folder | Written by | Purpose |
|------|-----------|---------|
| `SOUL.md` | Kyle / Claude | Theo's identity and operating rules |
| `AGENTS.md` | Kyle / Claude | Workspace instructions — directory layout, priorities, tools |
| `HERMES_INBOX.md` | Theo (append-only) | Theo's research output for Claude |
| `CLAUDE_TASKS.md` | Kyle / Claude | Tasks queued for Theo |
| `THEO_OPS.md` | Kyle / Claude | This file — Kyle's runbook |
| `THEO_RUNLOG.md` | Theo (append-only) | Run log — one line per task |
| `skills/` | Theo | Copies of Theo's skill files for review |
| `notes/` | Theo | Working notes — fast iteration |
| `research/` | Theo | Research outputs — one file per topic |
| `memory/` | Theo | Long-term memory files |
| `prototypes/` | Theo | Experimental code and tools |

---

## Skill Python dependencies

Some Hermes skills require Python packages that are not pre-installed. These must be installed into the **Hermes venv** — not the system Python.

**Hermes venv path:** `~/.hermes/hermes-agent/venv/`

The venv has no `pip` binary — use `python3 -m pip` after bootstrapping:

```bash
# One-time bootstrap (only needed once)
ssh kyle@hermes-theo-pi "~/.hermes/hermes-agent/venv/bin/python3 -m ensurepip --upgrade"

# Install a package (e.g. ddgs for DuckDuckGo search)
ssh kyle@hermes-theo-pi "~/.hermes/hermes-agent/venv/bin/python3 -m pip install ddgs"

# Verify install
ssh kyle@hermes-theo-pi "~/.hermes/hermes-agent/venv/bin/python3 -c 'from ddgs import DDGS; print(\"OK\")'"
```

**Packages installed (as of 2026-04-27):**

| Package | Skill | Why |
|---------|-------|-----|
| `ddgs` v9.14.1 | duckduckgo-search | Provides `ddgs` CLI and Python library for web search (fallback — TinyFish is now primary) |
| `tinyfish` v0.2.5 | tinyfish | Live browser-rendered search + page fetch. Reads `TINYFISH_API_KEY` from `~/.hermes/.env` automatically |

If a skill reports a missing module, install it here. Do not use system `pip3` — Pi OS (Bookworm) blocks it under PEP 668.

---

## Hermes architecture and file sync

**What installs where:**
- `~/.hermes/` — the full Hermes Agent installation (code, Python venv, config, skills, memory). Do not sync this directory — it contains node modules and a venv and will be enormous.
- `~/hermes_files/theo/` — the working folder on the Pi. Theo writes outputs here. Kyle reads them via SSH over Tailscale (`ssh kyle@hermes-theo-pi`). Everything here is a document Kyle or Claude reads or writes.

**OpenClaw vs Hermes Agent:** These are separate projects with different creators. Theo is a fresh Hermes Agent install — no migration from OpenClaw needed. Ignore any community content that conflates them.

**During first-time setup (`hermes setup`):**
1. Run the install command: `curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`
2. The wizard will ask for your LLM provider — choose OpenRouter, paste your API key, select `qwen/qwen3.6-plus` as the model.
3. When asked for a persona file, point it to `~/.hermes/SOUL.md` (deploy SOUL.md there after setup).
4. When asked for a workspace directory, point it to `~/hermes_files/theo/` — this is where Hermes will look for `AGENTS.md` and where Theo will write outputs.
5. Configure the Telegram gateway: `hermes gateway` — follow the prompts to connect your bot token.

**File sync — Git (primary, as of 2026-05-13):**
- Both Mac (`Side_Hustle/theo/`) and Pi (`~/hermes_files/theo/`) are git repos pointing to `https://github.com/KythornAi/Theo.git`.
- **Kyle → Theo:** Claude commits skill/config changes and pushes in each session. Theo runs `git pull` at session start to pick them up automatically.
- **Theo → Kyle:** Theo uses the `git-commit` skill after completing tasks. Mac auto-pulls every 5 minutes via cron (`theo/scripts/git-pull-theo.sh`). Research outputs appear on Mac without any manual steps.
- Pi SSH alias uses `github-theo` in `~/.ssh/config` (dedicated `theo_github` key). Mac uses HTTPS (no SSH key needed).
- `~/.hermes/` is NOT synced — API keys and runtime stay on device only.

**Syncthing — safety net only (no longer required):**
- Pi Syncthing service still running (`systemd --user syncthing`). Leave it — it does no harm and provides a backup layer.
- Mac Syncthing is unreliable (external drive LaunchAgent issue). Do not depend on it. Start manually only if needed: `/opt/homebrew/opt/syncthing/bin/syncthing --no-browser --no-restart >> /tmp/syncthing-mac.log 2>&1 &`
- Mac has **Staggered File Versioning** — deleted/overwritten files recoverable from `Side_Hustle/theo/.stversions/`.

**Syncthing management commands:**

```bash
# Check Pi service status
ssh kyle@hermes-theo-pi "systemctl --user is-active syncthing"

# Restart Pi syncthing service
ssh kyle@hermes-theo-pi "systemctl --user restart syncthing"

# Check Mac syncthing process
ps aux | grep syncthing | grep -v grep

# Start Mac syncthing (after reboot)
/opt/homebrew/opt/syncthing/bin/syncthing --no-browser --no-restart >> /tmp/syncthing-mac.log 2>&1 &

# View Pi sync log
ssh kyle@hermes-theo-pi "tail -20 /tmp/syncthing-pi.log"
```

**Versioning — recover a deleted file (Mac side):**
```bash
ls "Side_Hustle/theo/.stversions/"
```

**Emergency rsync fallback (if Syncthing is down):**
```bash
rsync -av kyle@hermes-theo-pi:~/hermes_files/theo/ "/Volumes/Home Ext/Home Ext/Desktop/Side_Hustle/theo/"
```

---

## Onboarding ladder — first 7 days

Don't give Theo the whole kingdom on day one. Open one corridor, see if he walks straight, then unlock the next door.

| Day | Activity | Supervision |
|-----|----------|-------------|
| 1 | Install, connect, read SOUL.md, confirm version via Telegram | Live with Kyle |
| 1–2 | One tiny supervised research task (e.g. one Reddit subreddit scan, one keyword) | Live with Kyle |
| 2–3 | One supervised file-write task to HERMES_INBOX.md | Live with Kyle |
| 3–4 | One scheduled cron task, but Kyle present when it fires | Supervised |
| After day 4 | First overnight run — low-risk task only | Unsupervised |

Theo's §33 (first-week probation mode) enforces the same constraints at his end: no overnight runs, no sub-agents, no auto-skill creation until Kyle explicitly unlocks them.

---

## Hermes hardening checklist — Pi install

Run these during install, before Theo's first run. Hermes Agent provides defence-in-depth security — this checklist ensures it is actually configured correctly.

**Access controls:**
- [ ] Set `TELEGRAM_ALLOWED_USERS` to Kyle's Telegram user ID only — never use `GATEWAY_ALLOW_ALL_USERS=true`
- [ ] Confirm DM pairing is enabled (default: pairing-required, not open)

**Approval mode:**
- [ ] Set `approvals.mode: manual` in Hermes config (or `smart` only after 4+ weeks of stable runs)
- [ ] Never use `approvals.mode: off` or run with `--yolo` flag

**Sandbox / terminal backend:**
- [ ] Pi is a dedicated machine for Theo only — `local` backend acceptable
- [ ] If Theo ever runs on a shared machine, switch to `docker` or `ssh` backend

**Context file scanning (default-on, verify):**
- [ ] Confirm SOUL.md and AGENTS.md load with no `[BLOCKED: ... contained potential prompt injection]` warnings
- [ ] If any file is blocked, review the file content for what tripped the scanner — do not work around it

**Tirith pre-execution scanning:**
- [ ] On first run, allow Tirith to auto-install from GitHub releases (SHA-256 verified)
- [ ] Confirm cosign verification is available (optional but recommended)

**Credential hygiene:**
- [ ] OpenRouter API key stored in `~/.hermes/.env`, file permissions set to `0600` (owner read/write only)
- [ ] State directory `~/.hermes/` permissions set to `0700`
- [ ] No API keys in any file inside `~/hermes_files/theo/` — this folder is reviewed by Kyle and may be rsynced
- [ ] Telegram bot token rotated if it was ever shared in chat or pasted into any document

**Network exposure:**
- [ ] Hermes gateway bound to localhost only — not exposed to LAN or public internet
- [ ] If remote access needed, use Tailscale (per pre-install research task), never public ports

**Initial audit:**
- [ ] Run `hermes doctor` after install. Resolve any issues before first task. Note: `hermes security audit` does not exist as a command in Hermes v0.11.0.
- [ ] Run `hermes doctor` weekly.

**Skill hygiene:**
- [ ] Only install skills from `~/.hermes/skills/` that you wrote or reviewed line-by-line
- [ ] No installs from third-party skill marketplaces without source review

---

## Hermes v0.11.0 — what changed (released 2026-04-23)

- **Ink TUI rewrite:** The terminal interface has been redesigned with Ink. Visual change only — no behaviour change for Theo.
- **File coordination layer:** Hermes now coordinates concurrent file access between sub-agents automatically (PR #13718). Reduces conflict files during multi-agent runs. SOUL.md §35 still applies — report any conflict file to Kyle regardless.
- **Orchestrator role + max_spawn_depth:** Hermes can now run in orchestrator mode with a configurable maximum sub-agent nesting depth. Confirm this is set correctly during install (see hardening checklist). SOUL.md §24 covers Theo's rules on this.

---

## Contacts and links

- **Hermes GitHub:** https://github.com/NousResearch/hermes-agent (setup reference)
- **OpenRouter:** https://openrouter.ai (model list, API key)
- **File sync:** Syncthing (live bidirectional) — see "File sync" section above. Maestral abandoned; rsync available as emergency fallback.
- **Julian Goldie's Hermes overview:** https://www.youtube.com/watch?v=7T2UBNPmonU

---

*THEO_OPS.md v2.4 — updated 2026-04-30*
*v2.4 (2026-04-30): File sync section rewritten — rsync replaced by Syncthing (live bidirectional). Added Syncthing management commands, versioning recovery, and emergency rsync fallback. Files table expanded with notes/, research/, memory/, prototypes/. Contacts updated.*
*v2.3: Added "Skill Python dependencies" section documenting Hermes venv path, pip bootstrap process, and ddgs install. Added ddgs quick-reference entry.*
*v2.1 corrections: Section headers and file paths updated — Maestral abandoned, all references now reflect rsync over Tailscale and ~/hermes_files/theo/ working folder.*
*v2.2 corrections: Remaining Dropbox references removed from supervised run checklist and setup steps.*
*Update this file as you hit new edge cases during supervised runs.*
