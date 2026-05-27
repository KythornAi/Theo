# Migration Baseline — 2026-05-09

*Pre-migration snapshot for moving Theo from Pi 5 → Pop!_OS laptop. Generated before any changes are made.*

---

## 1. Scheduled Jobs (cronjob list)

### Job 1: monthly-skill-audit
- **job_id:** `15fe3aba1070`
- **schedule:** `0 11 * * 0` (Sundays at 11:00 BST)
- **skills:** `research-write`, `hermes-inbox-write`
- **deliver:** `origin`
- **last_run_at:** 2026-05-03T11:19:29+01:00
- **last_status:** ok
- **next_run_at:** 2026-05-10T11:00:00+01:00
- **state:** scheduled (enabled)

### Job 2: weekly-adhd-painpoints-research
- **job_id:** `a2faac7fb17e`
- **schedule:** `0 17 * * 1` (Mondays at 17:00 BST)
- **skills:** `web_search`, `reddit-pain-point-harvest`, `humanizer`, `terminal`
- **deliver:** `local`
- **workdir:** `/home/kyle/hermes_files/theo`
- **last_run_at:** never
- **last_status:** never
- **next_run_at:** 2026-05-11T17:00:00+01:00
- **state:** scheduled (enabled)

---

## 2. Installed Skills (105 total across 18 categories)

### apple (4)
apple-notes, apple-reminders, findmy, imessage

### autonomous-ai-agents (5)
claude-code, codex, hermes-agent, hermes-webui, opencode

### creative (16)
architecture-diagram, ascii-art, ascii-video, baoyu-comic, baoyu-infographic, claude-design, comfyui, design-md, excalidraw, humanizer, ideation, manim-video, p5js, pixel-art, popular-web-designs, pretext, sketch, songwriting-and-ai-music, touchdesigner-mcp

### data-science (1)
jupyter-live-kernel

### devops (3)
kanban-orchestrator, kanban-worker, webhook-subscriptions

### email (1)
himalaya

### gaming (2)
minecraft-modpack-server, pokemon-player

### github (6)
codebase-inspection, github-auth, github-code-review, github-issues, github-pr-workflow, github-repo-management

### mcp (1)
native-mcp

### media (5)
gif-search, heartmula, songsee, spotify, youtube-content

### mlops (13)
audiocraft-audio-generation, axolotl, dspy, evaluating-llms-harness, fine-tuning-with-trl, huggingface-hub, llama-cpp, obliteratus, outlines, segment-anything-model, serving-llms-vllm, unsloth, weights-and-biases

### note-taking (1)
obsidian

### productivity (10)
airtable, google-workspace, hermes-inbox-write, linear, maps, nano-pdf, notion, ocr-and-documents, powerpoint, research-write, skill-audit

### red-teaming (1)
godmode

### research (12)
arxiv, blogwatcher, duckduckgo-search, etsy-competitor-research, firecrawl, llm-wiki, pnp-agent-workflows, polymarket, pre-spec-market-research, product-opportunity-synthesis, pytrends, reddit-pain-point-harvest, research-dedup-check, research-paper-writing, review-mining

### smart-home (1)
openhue

### social-media (1)
xurl

### software-development (12)
debugging-hermes-tui-commands, hermes-agent-skill-authoring, node-inspect-debugger, plan, python-debugpy, requesting-code-review, spike, subagent-driven-development, systematic-debugging, test-driven-development, writing-plans

---

## 3. Hermes Doctor Output

```
✅ Python 3.11.15 — Virtual environment active
✅ All required packages present (OpenAI SDK, Rich, python-dotenv, PyYAML, HTTPX, Croniter)
✅ ~/.hermes/.env exists — API key configured
✅ ~/.hermes/config.yaml exists
⚠ Config version outdated (v22 → v23)
⚠ Nous Portal auth — not logged in
⚠ OpenAI Codex auth — not logged in
⚠ Google Gemini OAuth — not logged in
⚠ MiniMax OAuth — not logged in
✅ Directory structure intact (cron/, sessions/, logs/, skills/, memories/, SOUL.md)
✅ MEMORY.md exists (1276 chars)
✅ USER.md exists (1182 chars)
✅ state.db exists (35 sessions)
✅ Systemd linger enabled (gateway survives logout)
✅ git, ripgrep, Node.js, agent-browser, Playwright Chromium all present
✅ OpenRouter API connectivity confirmed
⚠ tinker-atropos submodule not found
⚠ browser-cdp / computer_use / homeassistant / image_gen / spotify — system dependencies not met
⚠ discord / discord_admin — missing DISCORD_BOT_TOKEN
⚠ rl — missing TINKER_API_KEY, WANDB_API_KEY
⚠ hermes-yuanbao — system dependency not met
⚠ Skills Hub — No GITHUB_TOKEN (60 req/hr rate limit)
```

**Summary:** 2 issues to address — config version migration (`hermes doctor --fix`) and missing optional API keys. Core functionality (OpenRouter, cron, browser, file tools, skills, memory) is fully operational.

---

## 4. Workspace Path Confirmation

- **Workspace path:** `/home/kyle/hermes_files/theo/` ✅ CONFIRMED
- **HERMES_INBOX.md:** `/home/kyle/hermes_files/theo/HERMES_INBOX.md` ✅ EXISTS (91,451 bytes, last modified May 9)

### Workspace Contents (top-level):
```
AGENTS.md, CLAUDE_TASKS.md, HERMES_INBOX.md, PNP_DESIGN.md, SOUL.md,
THEO_OPS.md, THEO_RUNLOG.md, THEO_CLI_CHEATSHEET.md,
ADHD_PLANNER_INFOGRAPHIC_SPEC.md, ETSY_GAP_ANALYSIS.md,
PNP_DESIGN_SYSTEM.excalidraw, source-etsey-gap-analysis.md, tailwind.theme.json,
memory/, notes/, prototypes/, research/, skills/, brain_out/, baoyu-infographic/
.stfolder/, .stignore, .gitignore, .DS_Store
```

---

## 5. Environment Details

- **ddgs (DuckDuckGo CLI):** `~/.hermes/hermes-agent/venv/bin/ddgs` ✅ EXISTS
- **FIRECRAWL key in .env:** ✅ CONFIRMED
- **OPENROUTER key in .env:** ✅ CONFIRMED
- **Current model:** `qwen3.6-plus` via OpenRouter (custom provider)
- **Timezone:** Europe/London (BST, UTC+1)
- **Hermes WebUI:** Installed at `~/hermes-webui/`, runs on Pi 5 at 0.0.0.0:8787
- **Syncthing:** `.stfolder/` and `.stignore` present — active sync to Mac (Side_Hustle/theo/)

---

## 6. Known Issues / Pre-Migration Notes

1. **Config version:** v22 → v23 migration available (`hermes doctor --fix`)
2. **Weekly ADHD job has never run** — verify firecrawl/ddgs connectivity on laptop before cutover
3. **Power/sleep:** Laptop must be configured to stay awake during overnight runs (Pop!_OS power settings)
4. **Syncthing topology change:** Pi ←→ Mac becomes Laptop ←→ Mac
5. **Cron jobs:** 2 jobs need recreation on laptop and manual test before enabling
6. **WebUI:** Currently on Pi 5 at 192.168.1.124:8787 — may need relaunch on laptop if desired

---

*Baseline generated: 2026-05-09 17:43 BST*
*Next step: Kyle and Claude complete Syncthing setup, then proceed with migration.*
