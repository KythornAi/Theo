#!/usr/bin/env bash
# memory-watchdog.sh — runs every 6 hours, checks Theo's working memory.
# MEMORY.md: warns at 70%, auto-archives stale entries at 80%.
# USER.md:   warns at 70%, alerts at 80% (Theo must compact — no mechanical archive).
# Pattern: --no-agent bash. Telegram via Python to handle encoding safely.

MEMORY_FILE="/home/kylemoore/theo/memory/MEMORY.md"
USER_FILE_GIT="/home/kylemoore/theo/memory/USER.md"
USER_FILE_LIVE="/home/kylemoore/.hermes/memories/USER.md"
ARCHIVE_FILE="/home/kylemoore/Brain/03_Resources/Theo/memory-archive-2026.md"
ENV_FILE="/home/kylemoore/.hermes/.env"
MEMORY_LIMIT=5000
USER_LIMIT=3000
WARN_PCT=70
AUTO_PCT=80

DATE=$(date '+%Y-%m-%d %H:%M %Z')

# ── Load Telegram credentials from .env ────────────────────────────────────
if [ ! -f "$ENV_FILE" ]; then
    echo "memory-watchdog: .env not found at $ENV_FILE" >&2
    exit 1
fi

BOT_TOKEN=$(grep '^TELEGRAM_BOT_TOKEN=' "$ENV_FILE" | cut -d= -f2)
CHAT_ID=$(grep '^TELEGRAM_HOME_CHANNEL=' "$ENV_FILE" | cut -d= -f2)

if [ -z "$BOT_TOKEN" ] || [ -z "$CHAT_ID" ]; then
    echo "memory-watchdog: missing Telegram credentials in .env" >&2
    exit 1
fi

send_telegram() {
    python3 - "$BOT_TOKEN" "$CHAT_ID" "$1" <<'PYEOF2'
import sys, urllib.request, urllib.parse, json
token, chat_id, text = sys.argv[1], sys.argv[2], sys.argv[3]
payload = json.dumps({"chat_id": chat_id, "text": text}).encode()
req = urllib.request.Request(
    f"https://api.telegram.org/bot{token}/sendMessage",
    data=payload,
    headers={"Content-Type": "application/json"}
)
try:
    urllib.request.urlopen(req, timeout=10)
except Exception as e:
    print(f"Telegram send failed: {e}", file=sys.stderr)
PYEOF2
}

# ── Check USER.md ───────────────────────────────────────────────────────────
if [ ! -f "$USER_FILE_LIVE" ]; then
    send_telegram "memory-watchdog: USER.md not found at $USER_FILE_LIVE"
else
    USER_CHARS=$(wc -c < "$USER_FILE_LIVE" | tr -d ' ')
    USER_WARN_THRESH=$(python3 -c "print(int($USER_LIMIT * $WARN_PCT / 100))")
    USER_AUTO_THRESH=$(python3 -c "print(int($USER_LIMIT * $AUTO_PCT / 100))")
    USER_PCT=$(python3 -c "print(round($USER_CHARS * 100 / $USER_LIMIT))")

    if [ "$USER_CHARS" -ge "$USER_AUTO_THRESH" ]; then
        send_telegram "Theo memory watchdog [$(date '+%H:%M')]: USER.md is ${USER_PCT}% full (${USER_CHARS}/${USER_LIMIT} chars). ACTION NEEDED — compact your USER.md entries before your next run. Each entry should be one tight sentence. Claude can help if needed."
    elif [ "$USER_CHARS" -ge "$USER_WARN_THRESH" ]; then
        send_telegram "Theo memory watchdog [$(date '+%H:%M')]: USER.md is ${USER_PCT}% full (${USER_CHARS}/${USER_LIMIT} chars). Approaching limit — plan a compact pass soon."
    fi
fi

# ── Check MEMORY.md ─────────────────────────────────────────────────────────
if [ ! -f "$MEMORY_FILE" ]; then
    send_telegram "memory-watchdog: MEMORY.md not found at $MEMORY_FILE"
    exit 1
fi

CHARS=$(wc -c < "$MEMORY_FILE" | tr -d ' ')
WARN_THRESHOLD=$(python3 -c "print(int($MEMORY_LIMIT * $WARN_PCT / 100))")
AUTO_THRESHOLD=$(python3 -c "print(int($MEMORY_LIMIT * $AUTO_PCT / 100))")
PCT=$(python3 -c "print(round($CHARS * 100 / $MEMORY_LIMIT))")

# Silent below 70%
if [ "$CHARS" -lt "$WARN_THRESHOLD" ]; then
    exit 0
fi

# Warning only between 70-80%
if [ "$CHARS" -lt "$AUTO_THRESHOLD" ]; then
    send_telegram "Theo memory watchdog [$(date '+%H:%M')]: MEMORY.md ${PCT}% full (${CHARS}/${MEMORY_LIMIT} chars). Approaching limit. No action taken — nightly cron should clear this."
    exit 0
fi

# ── Above 80%: attempt guarded mechanical trim ──────────────────────────────
TRIM_RESULT=$(python3 - "$MEMORY_FILE" "$ARCHIVE_FILE" "$DATE" <<'PYEOF3'
import sys, os

memory_file, archive_file, date_str = sys.argv[1], sys.argv[2], sys.argv[3]

with open(memory_file, 'r') as f:
    content = f.read()

# Entries are separated by bare § lines
raw_entries = content.split('\n§\n')
entries = [e.strip() for e in raw_entries if e.strip()]

# Protected keywords — never auto-archive these entries
PROTECTED = [
    'kyle', 'protocol', 'vault', 'brain', "don't", 'never', 'prefer',
    'north star', 'platform', 'model', 'extended memory', 'tool strategy',
    'convention', '/home/', 'binary', 'workspace', 'hermes', 'theo/',
    'research', 'codex', 'tinyfish', 'perplexity', 'agy'
]

# Stale keywords — candidates for auto-archive
STALE = [
    'completed', 'fixed', 'done', 'was at', 'session', 'trimmed',
    'resolved', 'shipped', 'restarted', 'rotated', 'updated to',
    'has been', 'were cleared', 'was reset'
]

safe_to_archive = []
keep = []

for entry in entries:
    lower = entry.lower()
    is_protected = any(kw in lower for kw in PROTECTED)
    is_stale = any(kw in lower for kw in STALE)
    if is_stale and not is_protected:
        safe_to_archive.append(entry)
    else:
        keep.append(entry)

if not safe_to_archive:
    print("NO_SAFE_CANDIDATES")
    sys.exit(0)

# Append to archive file
header_needed = not os.path.exists(archive_file)
with open(archive_file, 'a') as f:
    if header_needed:
        f.write("# Theo Memory Archive — 2026\n\nEntries auto-archived by memory-watchdog when MEMORY.md exceeds 80% capacity.\n")
    f.write(f"\n\n---\n\n## Archived {date_str}\n\n")
    for entry in safe_to_archive:
        f.write(f"**Date archived:** {date_str}\n")
        f.write(f"**Reason:** stale/status entry (auto-archived at >80% capacity)\n")
        f.write(f"**Source:** ~/theo/memory/MEMORY.md\n")
        f.write(f"**Content:**\n{entry}\n\n")

# Rewrite MEMORY.md with kept entries only
new_content = '\n§\n'.join(keep)
if not new_content.endswith('\n'):
    new_content += '\n'
with open(memory_file, 'w') as f:
    f.write(new_content)

# Output summary lines for Telegram message
print(f"ARCHIVED:{len(safe_to_archive)}")
for e in safe_to_archive:
    first_line = e.split('\n')[0][:80]
    print(f"  - {first_line}")
PYEOF3
)

if [ "$TRIM_RESULT" = "NO_SAFE_CANDIDATES" ]; then
    send_telegram "Theo memory watchdog [$(date '+%H:%M')]: MEMORY.md ${PCT}% full (${CHARS}/${MEMORY_LIMIT} chars). No safe stale entries found. Manual consolidation needed — ask Claude or wait for nightly cron."
    exit 0
fi

NEW_CHARS=$(wc -c < "$MEMORY_FILE" | tr -d ' ')
NEW_PCT=$(python3 -c "print(round($NEW_CHARS * 100 / $MEMORY_LIMIT))")

send_telegram "Theo memory watchdog [$(date '+%H:%M')]: MEMORY.md was ${PCT}% (${CHARS} chars), now ${NEW_PCT}% (${NEW_CHARS} chars).

Auto-archived to Brain/03_Resources/Theo/memory-archive-2026.md:
${TRIM_RESULT}

Nightly cron will do full consolidation. Check vault to verify."

# ── Commit MEMORY.md if it actually changed ─────────────────────────────────
cd /home/kylemoore/theo
git add memory/MEMORY.md
if ! git diff --cached --quiet; then
    git commit -m "chore: memory-watchdog auto-trim $(date '+%Y-%m-%d %H:%M')"
    git push origin main
fi

# Sync trimmed copy to Hermes live store
cp "$MEMORY_FILE" /home/kylemoore/.hermes/memories/MEMORY.md
