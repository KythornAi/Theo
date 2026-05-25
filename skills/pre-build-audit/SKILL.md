---
name: pre-build-audit
description: Run a structured 6-question pre-build audit on any completed research sprint before a build session begins. Uses Codex (GPT-5.5) for deep reasoning. Manual trigger only.
tags: [research, audit, codex, planning]
version: 1.0.0
---

# Skill: pre-build-audit

## Purpose

Audit a completed research sprint before a build session begins. Find what's missing, what's stale, and what needs deciding before code is written. Catches gaps that would force a mid-build decision or cause a post-launch failure.

This skill uses `codex-think` (GPT-5.5), not the default model — this is reasoning and critique across a large body of research, not a search task.

## When to use

- Kyle says "Run pre-build audit on [Project Name]"
- Before any build session where research has been completed
- Retrospectively on existing projects to surface unresolved gaps

## When NOT to use

- To do more research (use the relevant research skill instead)
- When research is not yet complete (audit finds gaps, it does not fill them)
- As a substitute for a dedicated research cron — this reads existing files only

---

## How to invoke (step by step)

### Step 1: Confirm the project name and research folder

Extract the project name from Kyle's message. Map it to the correct research folder:

| Project | Research folder |
|---------|----------------|
| MTD Checker | `/home/kylemoore/Brain/03_Resources/Theo/MTD Checker/` |
| Paper N Pixels / PNP | `/home/kylemoore/Brain/01_Projects/Paper and Pixels/` |
| Any other project | Ask Kyle: "What folder should I read for [Project Name]?" |

If the folder path is unclear, stop and ask Kyle before proceeding.

### Step 2: List the research files

Before passing anything to Codex, list the files so you know what it will read:

```bash
ls /home/kylemoore/Brain/03_Resources/Theo/<ProjectFolder>/
```

If the folder is empty or fewer than 3 files exist, tell Kyle: "The research folder for [Project Name] has fewer than 3 files — the audit may not surface meaningful gaps. Continue?" Wait for confirmation.

### Step 3: Run the Codex audit

Build the prompt by substituting the project name and research folder path. Run in read-only mode so Codex can read the files directly:

```bash
bash -l -c 'codex exec -s read-only --skip-git-repo-check -o /tmp/pre-build-audit-output.md "You are auditing a completed research sprint for [PROJECT NAME] before a build session begins.

Read all files in: /home/kylemoore/Brain/03_Resources/Theo/[RESEARCH_FOLDER]/

Your job is not to re-research. Find what is missing, what is stale, and what needs deciding before build begins. Be specific — cite the file and section where each gap was found.

Answer each question below. Rate confidence on each finding as High / Medium / Low.

1. STALE OR RISKY CONTENT
   - Is any regulatory or compliance content time-sensitive? Has anything changed since this research was written that makes it wrong or misleading?
   - Flag anything with a publication date older than 6 months that has not been re-verified.

2. LOGIC GAPS
   - Are there user scenarios or edge cases the spec does not handle?
   - What would a confused or edge-case user do that the tool does not account for?

3. PRE-BUILD BLOCKERS
   - What must be decided or actioned BEFORE build starts? (domain name, legal copy, email platform, affiliate applications, API access, third-party accounts, credentials)
   - What open questions will force a mid-build decision if not resolved now?

4. REVENUE REALITY CHECK
   - Is there a revenue model with actual numbers?
   - If not, write 3 rough scenarios: pessimistic, realistic, optimistic — with explicit assumptions stated.

5. LAUNCH TIMING
   - Is the launch window still valid based on today'\''s date?
   - What is the next demand peak, and is there realistically time to reach it?
   - Flag any result states or time-sensitive scenarios the tool needs to handle that the spec does not cover.

6. ONE THING MOST LIKELY TO CAUSE FAILURE
   - If this project underperforms, what is the single most likely reason?
   - What would prevent that failure?

Output as structured markdown with clear headings. Flag confidence on every finding. Cite the specific file where each gap was found."'
```

Wait for Codex to complete. This typically takes 60–120 seconds. If it hangs beyond 3 minutes, tell Kyle and log it in HERMES_INBOX.md Section 4.

### Step 4: Read the output

```bash
cat /tmp/pre-build-audit-output.md
```

If the output is empty or clearly malformed, retry once with a more specific prompt. If it fails again, tell Kyle and stop.

### Step 5: Write to the Brain vault

Write the audit output to the project's research folder in the vault. Use the absolute path — never tilde or relative paths.

```bash
# Determine filename
DATE=$(date +%Y-%m-%d)
OUTPUT_PATH="/home/kylemoore/Brain/03_Resources/Theo/<ProjectFolder>/pre-build-audit-${DATE}.md"
```

Write the file with this frontmatter prepended:

```markdown
---
type: regular-note
date: YYYY-MM-DD
tags: [#theo, #pre-build-audit, #research]
---

# Pre-Build Audit: [Project Name] — YYYY-MM-DD

[Codex output here — do not edit or summarise. Preserve all headings, confidence ratings, and file citations.]
```

### Step 6: Commit and push the vault

```bash
git -C /home/kylemoore/Brain add "03_Resources/Theo/<ProjectFolder>/pre-build-audit-${DATE}.md"
git -C /home/kylemoore/Brain commit -m "chore: Theo - pre-build audit for [Project Name]"
git -C /home/kylemoore/Brain push
```

Never use `git add -A` or `git add .` — stage the single file only.

### Step 7: Flag in HERMES_INBOX.md Section 1

Append to Section 1 of HERMES_INBOX.md (use the `hermes-inbox-write` skill):

```
[BRAIN] YYYY-MM-DD | Pre-build audit: [Project Name] | File: 03_Resources/Theo/<ProjectFolder>/pre-build-audit-YYYY-MM-DD.md
```

### Step 8: Notify Kyle

Send Kyle a Telegram message:

```
Pre-build audit complete for [Project Name].

I found [N] findings — [X] high confidence, [Y] medium, [Z] low.

Top blocker: [single most urgent finding in one sentence].

Full report: Brain/03_Resources/Theo/<ProjectFolder>/pre-build-audit-YYYY-MM-DD.md
```

---

## Output location summary

| Project | Output file |
|---------|------------|
| MTD Checker | `/home/kylemoore/Brain/03_Resources/Theo/MTD Checker/pre-build-audit-YYYY-MM-DD.md` |
| Paper N Pixels | `/home/kylemoore/Brain/01_Projects/Paper and Pixels/pre-build-audit-YYYY-MM-DD.md` |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `codex: command not found` | Tell Kyle via Telegram — Codex binary at `~/.local/bin/codex`, PATH may not be set. Use `bash -l -c` wrapper. |
| Auth error / login prompt | Tell Kyle — ChatGPT OAuth token may need refreshing. Kyle runs `codex` once on laptop to re-auth. |
| Codex hangs > 3 minutes | Send Kyle a Telegram message: "Codex is not responding on pre-build audit for [Project]. Stopping." Log in HERMES_INBOX.md Section 4. |
| Output file is empty | Retry once with a more focused prompt. If still empty, tell Kyle. |
| Research folder not found | Stop and ask Kyle for the correct path before proceeding. |
| Git push fails | Check `git -C ~/Brain status` — resolve conflicts before retrying. Never force push. |

---

## Cost awareness

Each run invokes Codex once against a large research corpus. This bills against Kyle's ChatGPT Plus monthly allowance — not cheap. Run once per project per research update, not on every session.

---

*Skill created: 2026-05-25 by Claude for Kyle and Theo*
