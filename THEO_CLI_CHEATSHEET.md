# Theo CLI Cheat Sheet — Kyle's Quick Reference

All commands run from your Mac terminal. Tailscale must be active.

---

## SSH In

```bash
ssh kylemoore@100.126.155.50
```

Exit with `exit` or `Ctrl+D`.

---

## Read Theo's Output

```bash
# Read HERMES_INBOX.md (Theo's work queue and notes)
ssh kylemoore@100.126.155.50 "cat ~/theo/HERMES_INBOX.md"

# Read run log
ssh kylemoore@100.126.155.50 "cat ~/theo/THEO_RUNLOG.md"

# Read SOUL.md version
ssh kylemoore@100.126.155.50 "head -5 ~/.hermes/SOUL.md"
```

---

## Read Theo's Files on Mac (no SSH needed)

Files sync via **git** — pull the repo on Mac to get the latest:

```bash
cd "/Volumes/Home Ext/Home Ext/Desktop/Side_Hustle" && git pull
```

Key files are at:
```
Side_Hustle/theo/HERMES_INBOX.md      ← Theo's work queue
Side_Hustle/theo/THEO_RUNLOG.md       ← run log
Side_Hustle/theo/research/            ← research outputs
Side_Hustle/theo/skills/              ← all custom skills
```

Mac auto-pulls the Theo repo every 5 min via crontab (`scripts/git-pull-theo.sh`).

---

## Gateway (Telegram Service)

```bash
# Check if gateway is running
ssh kylemoore@100.126.155.50 "systemctl --user status hermes-gateway"

# Restart gateway (if Theo goes quiet)
ssh kylemoore@100.126.155.50 "systemctl --user restart hermes-gateway"

# Stop gateway
ssh kylemoore@100.126.155.50 "systemctl --user stop hermes-gateway"

# View live logs
ssh kylemoore@100.126.155.50 "journalctl --user -u hermes-gateway -f"
```

---

## Hermes Diagnostics

```bash
# Health check
ssh kylemoore@100.126.155.50 "bash -l -c 'hermes doctor'"

# Show current config (model, keys, etc.)
ssh kylemoore@100.126.155.50 "bash -l -c 'hermes config show'"

# List cron jobs
ssh kylemoore@100.126.155.50 "bash -l -c 'hermes cron list'"

# Check crontab directly
ssh kylemoore@100.126.155.50 "crontab -l"
```

---

## Codex CLI (Deep Think)

Codex is installed at `~/.local/bin/codex`. Theo uses it via the `codex-think` skill.

```bash
# Confirm Codex is installed
ssh kylemoore@100.126.155.50 "bash -l -c 'which codex && codex --version'"

# Run a quick test (non-interactive)
ssh kylemoore@100.126.155.50 "bash -l -c 'codex exec -s read-only --skip-git-repo-check \"Say hello in 5 words.\"'"
```

Auth is via ChatGPT Plus OAuth. If it expires, open a terminal on the laptop and run `codex` to re-authenticate.

---

## File Sync (Mac ↔ Laptop)

Files sync via **git** (Syncthing is gone). Theo repo: `KythornAi/Theo.git`.

```bash
# Pull latest from Theo's repo on laptop
ssh kylemoore@100.126.155.50 "cd ~/theo && git pull"

# Push a file edit (Mac → laptop) — push to GitHub then pull on laptop
git -C "/Volumes/Home Ext/Home Ext/Desktop/Side_Hustle" push
ssh kylemoore@100.126.155.50 "cd ~/theo && git pull"

# Emergency rsync for a single file (skill update, etc.)
rsync -av "/Volumes/Home Ext/Home Ext/Desktop/Side_Hustle/theo/skills/some-skill/SKILL.md" \
  kylemoore@100.126.155.50:~/.hermes/skills/some-skill/SKILL.md
```

---

## Brain Vault Sync

Brain vault (`~/Brain/`) auto-syncs every 30 min on both sides via cron.

```bash
# Manual sync on laptop (pull latest from GitHub)
ssh kylemoore@100.126.155.50 "bash ~/Brain/scripts/brain-sync-laptop.sh"

# Manual sync on Mac (commit + push any new notes)
bash "/Volumes/Home Ext/Home Ext/Desktop/Brain/scripts/brain-sync-mac.sh"
```

---

## Telegram Commands (in chat with Theo)

| Command | What it does |
|---------|-------------|
| `/new` | Start a fresh conversation (clears context) |
| `/restart` | Full restart of Theo |
| `/busy status` | Show what Theo is currently doing |
| `/busy queue` | Show queued tasks |
| `/voice on` | Voice replies when you send voice notes |
| `/voice tts` | Voice replies to everything |
| `/voice off` | Text only |
| `/voice status` | Show current voice setting |

---

## Recovery Sequence (if Theo goes quiet)

1. Send `/new` in Telegram — wait 30 seconds
2. If no response: send `/restart` — wait 60 seconds
3. If still nothing: `ssh kylemoore@100.126.155.50 "systemctl --user restart hermes-gateway"`
4. Confirm Theo responds in Telegram

Full recovery detail in `THEO_OPS.md`.

---

## Check .env Keys (read only)

```bash
ssh kylemoore@100.126.155.50 "grep -v '#' ~/.hermes/.env | grep -v '^$'"
```

---

*THEO_CLI_CHEATSHEET.md v2.0 — 2026-05-16*
*v2.0: Full rewrite post-Pi-decommission. Updated SSH host (kyle@hermes-theo-pi → kylemoore@100.126.155.50), paths (hermes_files/theo → ~/theo + ~/.hermes), sync method (Syncthing → git), added Codex CLI section and Brain vault sync.*
