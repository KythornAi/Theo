#!/usr/bin/env bash
# memory-watchdog.sh — runs every 6 hours, checks Theo's working memory.
# Warns at 70%, auto-archives stale entries at 85%.
# Pattern: --no-agent bash. Telegram via Python to handle encoding safely.

MEMORY_FILE="/home/kylemoore/theo/memory/MEMORY.md"
ARCHIVE_FILE="/home/kylemoore/Brain/03_Resources/Theo/memory-archive-2026.md"
ENV_FILE="/home/kylemoore/.hermes/.env"
LIMIT=2200
WARN_THRESHOLD=1540    # 70%
AUTO_THRESHOLD=1870    # 85%

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
    python3 - "$BOT_TOKEN" "$CHAT_ID" "$1" <<'PYEOF'
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
PYEOF
}

# ── Check memory file ───────────────────────────────────────────────────────
if [ ! -f "$MEMORY_FILE" ]; then
    send_telegram "memory-watchdog: MEMORY.md not found at $MEMORY_FILE"
    exit 1
fi

CHARS=$(wc -c < "$MEMORY_FILE" | tr -d ' ')
PCT=$(python3 -c "print(round($CHARS * 100 / $LIMIT))")

# Silent below 70%
if [ "$CHARS" -lt "$WARN_THRESHOLD" ]; then
    exit 0
fi

# Warning only between 70-85%
if [ "$CHARS" -lt "$AUTO_THRESHOLD" ]; then
    send_telegram "Theo memory watchdog [$(date '+%H:%M')]: ${PCT}% full (${CHARS}/${LIMIT} chars). Approaching limit. No action taken — nightly cron should clear this."
    exit 0
fi

# ── Above 85%: attempt guarded mechanical trim ─────────────────────────────
TRIM_RESULT=$(python3 - "$MEMORY_FILE" "$ARCHIVE_FILE" "$DATE" <<'PYEOF'
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
        f.write("# Theo Memory Archive — 2026\n\nEntries auto-archived by memory-watchdog when MEMORY.md exceeds 85% capacity.\n")
    f.write(f"\n\n---\n\n## Archived {date_str}\n\n")
    for entry in safe_to_archive:
        f.write(f"**Date archived:** {date_str}\n")
        f.write(f"**Reason:** stale/status entry (auto-archived at >85% capacity)\n")
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
PYEOF
)

if [ "$TRIM_RESULT" = "NO_SAFE_CANDIDATES" ]; then
    send_telegram "Theo memory watchdog [$(date '+%H:%M')]: ${PCT}% full (${CHARS}/${LIMIT} chars). No safe stale entries found. Manual consolidation needed — ask Claude or wait for nightly cron."
    exit 0
fi

NEW_CHARS=$(wc -c < "$MEMORY_FILE" | tr -d ' ')
NEW_PCT=$(python3 -c "print(round($NEW_CHARS * 100 / $LIMIT))")

send_telegram "Theo memory watchdog [$(date '+%H:%M')]: was ${PCT}% (${CHARS} chars), now ${NEW_PCT}% (${NEW_CHARS} chars).

Auto-archived to Brain/03_Resources/Theo/memory-archive-2026.md:
${TRIM_RESULT}

Nightly cron will do full consolidation. Check vault to verify."


# -- Commit MEMORY.md if it actually changed --------------------------------
cd /home/kylemoore/theo
git add memory/MEMORY.md
if ! git diff --cached --quiet; then
    git commit -m "chore: memory-watchdog auto-trim $(date '+%Y-%m-%d %H:%M')"
    git push origin main
fi
