---
name: obsidian-write
description: Write Theo-generated research and reports to the assigned Brain vault output folder. Scoped strictly to ~/hermes_files/theo/brain_out/. One file per topic.
version: 1.0.0
---

# Obsidian Vault Write Procedures

## When to use this skill

Use `obsidian-write` when writing research or reports that should appear in Kyle's Obsidian Brain vault — specifically in the `05_Attachments/Theo/` section. This is for **processed, finished output** that Kyle might link from other vault notes.

For routine research-in-progress, use `research-write` instead (writes to `~/hermes_files/theo/research/`).

## PATH GUARD (NON-NEGOTIABLE)

**Obsidian output files live at:**
```
/home/kyle/hermes_files/theo/brain_out/<topic>-YYYY-MM-DD.md
```

This folder is synced to `Brain/05_Attachments/Theo/` on Kyle's Mac automatically via Syncthing.

**ALWAYS use absolute paths. NEVER use:**
- Relative paths — causes path doubling if cwd is already inside the workspace
- Tilde paths — tilde expansion is shell-dependent and not reliable in all contexts
- Any path outside `/home/kyle/hermes_files/theo/brain_out/` — this is the ONLY allowed output dir for this skill

**Before writing, assert the resolved parent directory is exactly `/home/kyle/hermes_files/theo/brain_out`.** If it isn't, abort and log a `[BLOCKED — wrong path]` note to `/home/kyle/hermes_files/theo/HERMES_INBOX.md`.

## Filename convention

```
theo-<topic-slug>-YYYY-MM-DD.md
```

- Always prefix with `theo-` so vault files are clearly Theo-authored.
- Topic slug: lowercase, hyphens, no spaces. Descriptive of the subject.
- Date: the date the output was produced.
- Examples:
  - `theo-daily-focus-club-analysis-2026-05-02.md`
  - `theo-adhd-planner-market-summary-2026-05-10.md`

## Write procedure

1. Determine the absolute output path: `/home/kyle/hermes_files/theo/brain_out/theo-<topic>-YYYY-MM-DD.md`
2. Check if the file already exists with `read_file`. If it does, append a new dated section rather than overwrite.
3. Write using `write_file` with the absolute path.
4. After writing, add a short one-line flag to `HERMES_INBOX.md` Section 1:

```
[BRAIN-WRITE] YYYY-MM-DD | Topic: <topic> | File: brain_out/theo-<topic>-YYYY-MM-DD.md
```

## File format

```markdown
# <Topic Title> — <Date>

## Summary
[2-3 sentence summary of findings]

## Sources
- [Source name](URL)

## Findings

[Full content — structured with headers as needed]

## Key Opportunities
[Bullet list of actionable product/strategy takeaways]

*Spotted this: [top insight]*
```

## What NOT to do

- NEVER write to any path outside `brain_out/` — especially not the Obsidian vault root, `02_Areas/`, `00_Inbox/`, or any other Brain folder
- NEVER use relative or tilde paths
- NEVER overwrite an existing vault file without reading it first
- NEVER skip the HERMES_INBOX.md flag — Kyle needs to know output landed
- NEVER write draft or in-progress research here — use `research-write` skill for that
