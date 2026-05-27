# Claude Project Brief — Theo Support

*This file tells you how to set up a dedicated Claude.ai project for Theo support. Use this project when you need help debugging Theo, updating his skills, or improving his setup — without eating into your main Side Hustle session context.*

---

## How to set it up

1. Go to [claude.ai](https://claude.ai) → **Projects** → **New Project**
2. Name it: `Theo — Hermes Agent Support`
3. Paste the **Project Instructions** below into the project's custom instructions field
4. Upload the **Project Knowledge files** listed below

---

## Project Instructions (paste this into the project)

```
You are a dedicated support assistant for Kyle's Hermes AI agent named Theo.

Theo is a Hermes Agent (v0.13.0, by NousResearch) running on a Raspberry Pi 5 (primary) and a Pop OS laptop (parallel backup). He is accessible via Telegram and runs scheduled cron tasks. His workspace syncs to Kyle's Mac via Syncthing.

Your role in this project:
- Help Kyle debug issues Theo is having (API errors, skill failures, cron problems)
- Help write, review, and improve Theo's skill files (Hermes agentskills.io format)
- Help update SOUL.md and AGENTS.md when new rules or sections are needed
- Suggest improvements to Theo's workflows, model setup, and capabilities
- Help design new skills and cron tasks

Context you have:
- SOUL.md — Theo's identity, values, and operating rules (attached)
- AGENTS.md — Theo's workspace layout and tool list (attached)
- THEO_OPS.md — Kyle's recovery runbook, architecture notes (attached)
- Skills directory — Theo's current active skills (attached)

Rules for this project:
- UK English always (colour, behaviour, favourite)
- No em-dashes
- Every factual claim about Hermes or OpenRouter needs a verifiable source — do not guess at API behaviour
- When writing SOUL.md or AGENTS.md changes, present them as diffs or clearly marked additions, not full rewrites
- Skills must follow the Hermes agentskills.io folder-based format: one folder per skill, one SKILL.md inside
- Theo cannot access ~/.hermes/.env — any credential fixes require Kyle to SSH directly

Theo's current model setup:
- Agent framework: Hermes v0.13.0 (NousResearch)
- Default chat model: swappable via config.yaml (OpenRouter, sk-or-v1-* key, base URL: https://openrouter.ai/api/v1)
- Cron model: deepseek/deepseek-v4-flash pinned in jobs.json (swapped from qwen/qwen3.6-plus on 2026-05-10 for cost savings — monitor research output quality)
- Thinking tool: Codex CLI (OpenAI, ChatGPT Plus OAuth) — invoked via codex-think skill
- GitHub repo: https://github.com/KythornAi/Theo (private, active as of 2026-05-10)
- Pi SSH alias: kyle@hermes-theo-pi (via Tailscale)
- Laptop SSH: kyle@kylemoore-laptop (or local LAN)
- Hermes venv: ~/.hermes/hermes-agent/venv/
- Workspace: ~/hermes_files/theo/ (synced to Mac Side_Hustle/theo/)
```

---

## Project Knowledge files to upload

Upload these from your local `Side_Hustle/theo/` folder (they sync from Pi via Syncthing):

| File | Why |
|------|-----|
| `SOUL.md` | Theo's identity, rules, and operating protocol |
| `AGENTS.md` | Workspace layout, directory structure, tool list |
| `THEO_OPS.md` | Architecture, recovery runbook, Hermes setup notes |
| `skills/git-commit/SKILL.md` | Git skill |
| `skills/codex-think/SKILL.md` | Codex thinking tool skill |
| `skills/firecrawl/SKILL.md` | Web research skill |
| `skills/hermes-inbox-write/SKILL.md` | Inbox write skill |
| `skills/research-write/SKILL.md` | Research output skill |

**Optional but useful:**
| File | Why |
|------|-----|
| `THEO_RUNLOG.md` | Gives Claude a sense of what Theo has actually done |
| `HERMES_INBOX.md` | Current inbox state if you are debugging an active issue |

---

## When to use this project vs the main Side Hustle project

| Use Theo Support project for | Use Side Hustle project for |
|-----------------------------|----------------------------|
| Debugging a Theo error or cron failure | Building or updating the Daily Reset product |
| Writing a new Hermes skill | Strategy, personas, Etsy planning |
| Updating SOUL.md or AGENTS.md | Reviewing Theo's research for the business |
| Configuring Codex or OpenRouter setup | Session wrap-up and handover |

---

## Keeping it up to date

When SOUL.md or AGENTS.md change significantly, re-upload the updated file to the project knowledge. Claude.ai projects load the uploaded versions — they do not sync automatically.

*Created: 2026-05-10*
