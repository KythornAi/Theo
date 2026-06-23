# Codex — Agent Instructions

Read this file before starting any work in this workspace.

---

## Who Kyle Is

Kyle is a solo founder building a side hustle alongside a full-time job. He has carpal tunnel/hand pain — never suggest keyboard-heavy workflows. Use **UK English** always (colour, behaviour, travelling, favourite, etc.).

**Source verification:** Never present an unverified claim as fact. Every factual claim needs a primary source URL. When uncertain, say so explicitly.

---

## This Workspace

`~/theo/codex/` holds project files organised for Codex sessions. Two active areas:

- **`codex/mtd/`** — ReadyForMTD.co.uk (Making Tax Digital checker site): build brief, research, HTML/JS/CSS source
- **`codex/data-intelligence/`** — Demand scans, side-hustle research, marketplace analysis

See `README.md` for the full file index.

---

## Brain Vault (Obsidian)

Kyle's second brain is an Obsidian vault. Write session notes here so work is captured permanently.

**Vault paths:**

| Location | Path |
|----------|------|
| Mac | `~/Desktop/Brain/` |
| Laptop | `~/Brain/` |

**PARA folder structure:**

| Folder | What goes there |
|--------|----------------|
| `00_Inbox/` | New notes, unsorted items |
| `00_Inbox/Session Notes/` | Session notes from Claude, Codex, Theo |
| `01_Projects/` | Active project hubs |
| `03_Resources/` | Reference material, research |

**Session note convention:**

At the end of any work session, write a note to `00_Inbox/Session Notes/` using this filename:

```
YYYY-MM-DD -- Codex -- Short Title.md
```

Content (keep it brief -- bullets, not prose):
- What was built or changed
- Key decisions made
- Ideas that came up (and why parked if not actioned)
- Open questions for Kyle

**On Mac:** write directly to `~/Desktop/Brain/00_Inbox/Session Notes/`. Obsidian picks it up automatically.

**On laptop:** write to `~/Brain/00_Inbox/Session Notes/`, then commit and push:
```bash
git -C ~/Brain add <file> && git -C ~/Brain commit -m "chore: Codex session note" && git -C ~/Brain push
```

---

## Active Projects

### ReadyForMTD.co.uk

A free MTD (Making Tax Digital) readiness checker for UK small businesses and landlords. Static site. Domain: readyformtd.co.uk. Professional email: hello@readyformtd.co.uk.

Current status: site built by Theo (GLM 5.2), pending Kyle's personal review before go-live. Hosting: Cloudflare Pages (pending). Affiliate applications (Sage, QuickBooks, Xero) planned post-launch.

Key files in `codex/mtd/`:
- `build-brief.md` — full project brief
- `codex-brief.md` — Codex-specific task brief  
- `index.html` + `checker.js` + `styles.css` — the live site source
- Research files — audience keywords, competitors, HMRC guidance, monetisation map

### Data Intelligence

Weekly demand scans tracking Upwork/Fiverr trends, Reddit signals, and side-hustle opportunities. Used to inform what to build next. Files in `codex/data-intelligence/` are read-only reference — Theo generates these via cron.

---

## Key People

| Name | Role |
|------|------|
| Kyle | Owner — makes all final decisions |
| Theo | AI agent on Pop OS laptop — research, cron jobs, vault writes |
| Claude | VS Code / Terminal / Desktop — builds, strategy, infrastructure |

Theo and Claude communicate via `~/theo/HERMES_INBOX.md`. If you need to flag something for Kyle to pass to Claude or Theo, note it clearly at the end of your session note.

---

## Git

If you change files in this workspace, commit them:

```bash
git -C ~/theo add <files>
git -C ~/theo commit -m "feat: <description>"
# No need to push manually — auto-push runs every 30 minutes
```
