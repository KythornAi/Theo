---
name: research-write
description: Write routine research output to topic-scoped files in the research/ directory. One file per topic, absolute paths only.
version: 1.0.0
---

# Research File Write Procedures

## When to use this skill

Use `research-write` for **all routine research output**: competitor analysis, trend data, topic writeups, market research, review mining results. One topic = one file.

Use `hermes-inbox-write` only for short flags, quarantine notes, or Section-1 inbox items.

## PATH GUARD (NON-NEGOTIABLE)

**Research files live at:**
```
/home/kyle/hermes_files/theo/research/<topic>-YYYY-MM-DD.md
```

**ALWAYS use absolute paths. NEVER use:**
- Relative paths — causes path doubling if cwd is already inside the workspace
- Tilde paths — tilde expansion is shell-dependent and not reliable in all contexts

**Before writing, assert the resolved parent directory is exactly `/home/kyle/hermes_files/theo/research`.** If it isn't, abort and log a `[BLOCKED — wrong path]` note to `/home/kyle/hermes_files/theo/HERMES_INBOX.md`.

## Filename convention

```
<topic-slug>-YYYY-MM-DD.md
```

- Topic slug: lowercase, hyphens, no spaces. Descriptive of the subject.
- Date: the date the research was conducted (not today's date if run later).
- Examples:
  - `daily-focus-club-vs-manifestable-2026-05-02.md`
  - `adhd-planner-etsy-trends-2026-05-03.md`
  - `futuradhd-review-mining-2026-05-04.md`

## Write procedure

1. Determine the absolute output path: `/home/kyle/hermes_files/theo/research/<topic>-YYYY-MM-DD.md`
2. Check if the file already exists with `read_file`. If it does, append rather than overwrite (topic may have been researched before).
3. Write or append using `write_file` or `patch` with the absolute path.
4. After writing, add a short one-line flag to `HERMES_INBOX.md` Section 1 so Kyle knows new research landed:

```
[RESEARCH-COMPLETE] YYYY-MM-DD | Topic: <topic> | File: research/<topic>-YYYY-MM-DD.md
```

```python
from hermes_tools import read_file, write_file, patch

RESEARCH_DIR = "/home/kyle/hermes_files/theo/research"
INBOX_PATH = "/home/kyle/hermes_files/theo/HERMES_INBOX.md"

topic_slug = "daily-focus-club-vs-manifestable"
date_str = "2026-05-02"
output_path = f"{RESEARCH_DIR}/{topic_slug}-{date_str}.md"

content = "# Daily Focus Club vs Manifestable — Comparative Analysis\n\n..."
write_file(output_path, content)

# Flag in inbox
inbox = read_file(INBOX_PATH)['content'].rstrip()
flag = f"\n\n[RESEARCH-COMPLETE] {date_str} | Topic: {topic_slug} | File: research/{topic_slug}-{date_str}.md"
patch(INBOX_PATH, old_string=inbox, new_string=inbox + flag)
```

## File format

```markdown
# <Topic Title> — <Date>

## Summary
[2-3 sentence summary of findings]

## Sources
- [Source name](URL)

## Findings

[Full research content — structured with headers as needed]

## Key Opportunities
[Bullet list of actionable product/strategy takeaways]

*Spotted this: [top insight]*
```

## What NOT to do

- NEVER write full research to `HERMES_INBOX.md` — that file is for short flags only
- NEVER use relative or tilde paths
- NEVER overwrite an existing research file without reading it first
- NEVER skip the HERMES_INBOX.md flag — Kyle needs to know research landed
