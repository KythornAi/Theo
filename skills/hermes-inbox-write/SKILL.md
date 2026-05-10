---
name: hermes-inbox-write
description: Safe write procedures for HERMES_INBOX.md — append-only, never overwrite. Prevents data loss when adding research entries.
version: 1.1.0
---

# HERMES_INBOX.md Write Procedures

## PATH GUARD (NON-NEGOTIABLE)

**The canonical absolute path is:**
```
/home/kyle/hermes_files/theo/HERMES_INBOX.md
```

**ALWAYS use this exact absolute path. NEVER use:**
- Relative paths (`hermes_files/theo/HERMES_INBOX.md`) — causes path doubling if cwd is already inside the workspace
- Tilde paths (`~/hermes_files/theo/HERMES_INBOX.md`) — tilde expansion is shell-dependent and not reliable in all contexts

**Before every write, assert the parent directory is exactly `/home/kyle/hermes_files/theo`.** If it isn't, abort and write a `[BLOCKED — wrong path]` entry to the actual canonical file.

> **Why this rule exists:** On 2026-05-02 Theo wrote research to a nested wrong path (`/home/kyle/hermes_files/theo/hermes_files/theo/HERMES_INBOX.md`) because a relative path was used while cwd was already `~/hermes_files/theo/`. The content was recovered manually but the sync was already broken, so the error went undetected for a full session.

---

## Scope of this skill

`HERMES_INBOX.md` is for **short flags, quarantine notes, and Section-1 inbox items only.** It is NOT for full research writeups.

For routine research output (competitor analysis, trend data, topic writeups), use the `research-write` skill instead — it writes to `research/<topic>-YYYY-MM-DD.md`.

---

## Golden Rule

**NEVER overwrite HERMES_INBOX.md.** Always append. A lost inbox = lost research.

## Before Writing

1. Always `read_file` the current file using the **absolute path** first to get the latest line count and content.
2. Verify the file structure has Sections 1-4. If it doesn't, DO NOT write — flag to Kyle.

## Append Procedure (preferred)

1. `read_file` the file using the absolute path. Note the last line content (should be the last entry in Section 4).
2. Construct the new content as a string starting with `\n\n---\n\n` followed by the new entries.
3. Use `patch` with `old_string` = the last line or last few characters of the file, and `new_string` = that same text plus your appended content. This guarantees surgical insertion.

```python
from hermes_tools import read_file, patch

INBOX_PATH = "/home/kyle/hermes_files/theo/HERMES_INBOX.md"

result = read_file(INBOX_PATH)
content = result['content']
# Find the last meaningful content (not trailing newlines)
last_line = content.rstrip()
new_content = "\n\n---\n\n[RESEARCH] ..." # your entry
patch_result = patch(INBOX_PATH, old_string=last_line, new_string=last_line + new_content)
```

## Alternative: read + construct + write_file

If patch fails, use this two-step approach:
1. `read_file` to get current content (absolute path)
2. `write_file` with `current_content.rstrip() + "\n" + new_entries` (absolute path)

**CRITICAL:** You MUST read the file immediately before writing in the same script. Never rely on a read from a previous turn.

## Entry Format (Section 1)

Each entry must use this header:
```
[RESEARCH] YYYY-MM-DD | Topic: [topic] | Confidence: High / Medium / Low
```

Include after header: source URL(s), summary, "why it matters" reasoning, and end with:
```
*Spotted this: [key finding/opportunity]*
```

For competitor entries, add a "Spotted this:" section at the end listing the top product URLs clearly (for Everbee).

## What NOT to do

- NEVER use a relative path — always use the absolute path `/home/kyle/hermes_files/theo/HERMES_INBOX.md`
- NEVER call `write_file` without first reading the current file in the same script
- NEVER use `write_file` to replace the entire file unless explicitly instructed by Kyle
- NEVER delete or modify existing Section 1 entries, Section 2-4 content, or theme summaries
- DO NOT assume the file content from a previous turn is still valid — always re-read
- DO NOT write full research writeups here — use `research-write` skill instead
