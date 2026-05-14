---
name: git-commit
description: Commit and push changes to the Theo GitHub repo after research or workspace updates. Safe file selection, no secrets leakage.
version: 1.0.0
---

# Git Commit and Push

## When to use this skill

Use `git-commit` **after completing research runs, writing to HERMES_INBOX.md, or any workspace update** that should be version-controlled on GitHub.

Call this at the end of any task that modifies tracked files: research output, inbox updates, run log entries, skill updates.

## Session start (MANDATORY)

Before doing any work, pull the latest from GitHub:

```bash
git -C ~/hermes_files/theo pull
```

This pulls the latest skill updates, SOUL.md changes, and task queues from Kyle. If pull fails, log a note to HERMES_INBOX.md Section 4 and continue — do not block on it.

## Session end (MANDATORY)

After completing any task that produces output, commit and push. Research files, HERMES_INBOX.md updates, and brain_out files should all be committed so Kyle can pull them on his Mac without needing Syncthing.

## PATH GUARD

The git repo lives at `/home/kyle/hermes_files/theo/`. Always run git commands from this directory.

```bash
cd /home/kyle/hermes_files/theo && git status
```

## Pre-flight checks

Before committing, verify:

1. **SSH auth works**: `ssh -T github-theo` should return success
2. **Git identity is configured**: `user.name = Theo`, `user.email = blessed4evr@gmail.com`
3. **Repo remote is correct**: `git remote -v` should show `github-theo:KythornAi/Theo.git`
4. **No sensitive files are staged**: Check for `.env`, `~/.hermes/`, `.stfolder/` in `git status`
5. **Run `git status` BEFORE `git add`** — verify working tree state first, then stage. Commands can get eaten by heredocs or run together if sent in batch.

## Pitfalls discovered in practice

## Pitfalls discovered in practice

- **Batch commands get eaten**: When sending multiple commands, the terminal can concatenate heredoc content with subsequent commands. Always run git operations in separate, sequential calls. Test with `git status` alone before staging.
- **Safe vs unsafe files**: `THEO_SETUP_ACTIONS.md` may not exist in the Pi workspace (it's a Claude/Mac artifact). `.stignore`, `baoyu-infographic/`, `brain_out/`, `migration-baseline-*.md`, `tailwind.theme.json` — intentionally untracked, don't stage them.
- **`.gitignore` corruption**: If a heredoc gets interrupted, the file may be truncated or corrupted. Always `cat .gitignore` after writing and verify content. If corrupted, rewrite it — don't patch a broken file.
- **SSH config alias must match**: `github-theo` is the specific SSH alias configured for this repo. Using `git@github.com` directly won't find the right key — the `IdentitiesOnly yes` directive in the alias is what ensures the correct deploy key is used.
- **`.gitignore` must exclude**: `.env`, `*.env`, `.stfolder/`, `.stversions/`, `*.sync-conflict-*`, `syncthing.log`, `.DS_Store`, `*.swp`, `__pycache__/`, `*.pyc`, `research/*.tmp`, `brain_out/*.sync-conflict-*`
- **Safe files to stage**: `research/`, `skills/`, `memory/`, `notes/`, `prototypes/`, `.md` docs, `.gitignore`, `scripts/` (internal scripts, not Hermes internals)

## Commit procedure

### 1. Check what changed

```bash
cd /home/kyle/hermes_files/theo && git status
```

Review the output. Only safe files should be staged (research/, skills/, memory/, notes/, prototypes/, .md files).

### 2. Stage changed files

```bash
cd /home/kyle/hermes_files/theo

# Stage research output
git add research/

# Stage skill updates
git add skills/

# Stage inbox and run log
git add HERMES_INBOX.md THEO_RUNLOG.md

# Stage any modified docs (AGENTS.md, SOUL.md — only suggest changes, don't overwrite)
# Stage other modified .md files
git add *.md
```

**Never use `git add -A`** — it could stage `.env` files or Hermes internals if the `.gitignore` fails.

### 3. Create the commit

Use descriptive commit messages following this format:

```
<type>: <description> <date>
```

Types:
- `research:` — new or updated research output
- `inbox:` — HERMES_INBOX.md update
- `skill:` — skill file changes
- `chore:` — maintenance, config, housekeeping

Examples:
```
research: Etsy ADHD planner competitor scan 2026-05-10
inbox: quarantined 2 entries, added opportunity flag for ADHD planner gap
skill: updated reddit-pain-point-harvest with new subreddit sources
chore: workspace baseline sync 2026-05-10
```

```bash
cd /home/kyle/hermes_files/theo && git commit -m "research: <description>"
```

### 4. Push to remote (if commit succeeded)

```bash
cd /home/kyle/hermes_files/theo && git push
```

If push fails:
- Check SSH connectivity: `ssh -T github-theo`
- Check remote: `git remote -v`
- If branch not tracking: `git push -u origin main`

## Error handling

- **Nothing to commit**: `git status` shows "working tree clean" — skip commit, log to THEO_RUNLOG.md
- **SSH auth failure**: Log `[BLOCKED — GitHub SSH auth failed]` to HERMES_INBOX.md Section 1, notify Kyle via Telegram
- **Merge conflict**: Do NOT resolve conflicts automatically. Log the conflict details and notify Kyle
- **Push rejected**: Check if force push is needed (it shouldn't be — investigate before forcing)

## Post-commit verification

After pushing, confirm success:

```bash
cd /home/kyle/hermes_files/theo && git log --oneline -1
```

Log the commit to THEO_RUNLOG.md:
```
[YYYY-MM-DD HH:MM] git push: <commit message> (short SHA)
```


2026-05-10 — audit: [used — modified 0d ago]