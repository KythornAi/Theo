# Theo CLI Cheat Sheet — Kyle's Quick Reference

All commands run from your Mac terminal. Tailscale must be active (not just connected — fully running).

---

## SSH In

```bash
ssh kyle@hermes-theo-pi
```

Exit with `exit` or `Ctrl+D`.

---

## Read Theo's Output

```bash
# Read HERMES_INBOX.md (Theo's research notes)
ssh kyle@hermes-theo-pi "cat ~/hermes_files/theo/HERMES_INBOX.md"

# Read run log (one line per task)
ssh kyle@hermes-theo-pi "cat ~/hermes_files/theo/THEO_RUNLOG.md"

# Read SOUL.md version
ssh kyle@hermes-theo-pi "head -5 ~/.hermes/SOUL.md"
```

---

## Read Theo's Files on Mac (no SSH needed)

Files are **live-synced** via Syncthing. Open them directly:

```
Side_Hustle/theo/HERMES_INBOX.md      ← Theo's research notes
Side_Hustle/theo/THEO_RUNLOG.md       ← run log
Side_Hustle/theo/research/            ← research files
Side_Hustle/theo/memory/              ← Theo's long-term memory
```

No rsync or SSH needed for reading. If the file isn't there yet, wait 30 s — sync is near-instant but not atomic.

---

## Gateway (Telegram Service)

```bash
# Check if gateway is running
ssh kyle@hermes-theo-pi "systemctl --user status hermes-gateway"

# Restart gateway (if Theo goes quiet)
ssh kyle@hermes-theo-pi "systemctl --user restart hermes-gateway"

# Stop gateway
ssh kyle@hermes-theo-pi "systemctl --user stop hermes-gateway"

# Start gateway
ssh kyle@hermes-theo-pi "systemctl --user start hermes-gateway"
```

---

## Hermes Diagnostics

```bash
# Health check
ssh kyle@hermes-theo-pi "/home/kyle/.local/bin/hermes doctor"

# Show current config (keys, model, etc.)
ssh kyle@hermes-theo-pi "/home/kyle/.local/bin/hermes config show"

# List cron jobs
ssh kyle@hermes-theo-pi "/home/kyle/.local/bin/hermes cron list"
```

---

## File Sync (Mac ↔ Pi)

Files are **live-synced via Syncthing** — edit `Side_Hustle/theo/` on Mac and it appears on Pi within seconds. No rsync needed.

**Syncthing status:**
```bash
# Is Pi syncthing running?
ssh kyle@hermes-theo-pi "systemctl --user is-active syncthing"

# Is Mac syncthing running?
ps aux | grep syncthing | grep -v grep

# Start Mac syncthing after a reboot
/opt/homebrew/opt/syncthing/bin/syncthing --no-browser --no-restart >> /tmp/syncthing-mac.log 2>&1 &
```

**Emergency rsync fallback (if Syncthing is down):**
```bash
# Pull Pi → Mac
rsync -av kyle@hermes-theo-pi:~/hermes_files/theo/ "/Volumes/Home Ext/Home Ext/Desktop/Side_Hustle/theo/"

# Push Mac → Pi (single file)
rsync -av "/Volumes/Home Ext/Home Ext/Desktop/Side_Hustle/theo/SOUL.md" kyle@hermes-theo-pi:~/hermes_files/theo/SOUL.md
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
3. If still nothing: `ssh kyle@hermes-theo-pi "systemctl --user restart hermes-gateway"`
4. Confirm Theo responds in Telegram

---

## Check .env Keys (read only)

```bash
ssh kyle@hermes-theo-pi "grep -v '#' ~/.hermes/.env | grep -v '^$'"
```

---

*THEO_CLI_CHEATSHEET.md v1.1 — 2026-04-30*
*v1.1: Replaced rsync pull section with live-sync note (Syncthing). Replaced File Sync section with Syncthing status commands + emergency rsync fallback.*
