# Theo's Capabilities for Paper N Pixels (PNP)

**Last updated:** 2026-04-29
**Current status:** Research + intelligence gathering (manual runs, Pi-limited)
**Target state:** Automated cadence, multi-agent, Mac Mini-powered ops

---

## What Theo Does for PNP

### Current Capabilities (Phase 1 — Now)

| Capability | What it does | Status |
|-----------|-------------|--------|
| **Etsy competitor research** | Deep-dive analysis of FutureADHD, DailyFocusClub, and other shops. Feature breakdowns, pricing, review mining, title patterns. | Active |
| **ADHD pain-point harvesting** | Reddit research (r/ADHD, r/adhdwomen, r/ADHDers) to extract real user frustrations about planning and productivity. Paraphrased insights with sources. | Active |
| **Pinterest keyword research** | Top-performing pin analysis, title patterns, hook types, keyword placement research. | Partially active (needs Pinterest research tool) |
| **Review mining** | Extracting competitor complaints from Etsy reviews, Reddit, blogs — paired with opportunity flags for how our product solves them. | Active |
| **Product spec ideation** | Analyzing competitor features to recommend must-haves, deliberate omissions, and launch product lineup. | Active |
| **HERMES_INBOX.md curation** | Central research repository with sectioned notes, spotted opportunities, competitor tracking, theme synthesis. | Active |
| **First-draft listing content** | Etsy listing text, tags, photo descriptions, SEO optimization based on market research. | Active |
| **Research synthesis** | Pulling together 15+ sources into structured, actionable reports with confidence ratings. | Active |
| **Scheduled research** | Cron-based daily/weekly scans for competitor changes, new listings, price changes. | Active (cron available) |

---

### Target Capabilities (Phase 2 — Mac Mini + Obsidian + Multi-agent)

| Capability | What it does | Notes |
|-----------|-------------|--------|
| **Automated daily Etsy scans** | Cron job runs daily. Alerts me to competitor listing updates, new entries, price changes, review count spikes. | Set up via cron — already possible, just needs active listings to watch |
| **Reddit listening bot** | Continuous monitoring. When new thread matches our keywords ("best planner for ADHD," "digital planner recommendation," "planner for adhd women"), flag it and pull insights. | Currently manual; automation possible with cron |
| **Pinterest auto-posting pipeline** | I generate pin titles + descriptions from research. Pipeline handles image creation and scheduling. Weekly review by Kyle. | Needs image gen active + Pinterest API integration |
| **Multi-agent research teams** | One agent finds competitor listings, another mines reviews, a third synthesizes findings into the inbox. Parallel work, not serial. | Hermes Teams feature — possible once we know the setup |
| **Obsidian vault integration** | Write research findings, product specs, competitor notes directly into structured vault. Search and reference past work. | Needs Local REST API plugin installed on Obsidian |
| **Canva + design pipeline** | Generate mockups for Etsy listings, pin designs, product preview images. | Needs browser automation + Canva integration |
| **Etsy listing generation** | Full auto-draft: title, description, tags, price suggestions from competitive analysis. Claude polishes. | Partially active — content generation works, need Etsy integration for posting |
| **Customer review monitoring** | Track our own listings once live. Monitor for complaints, feature requests, and satisfaction signals. | Future state |
| **Sales data analysis** | Once we have sales data, extract patterns: what listings convert, what times, what pricing works. | Future state |

---

## What Theo Can't Do on the Pi (Limitations)

- **Full browser automation** — Pi setup limits browser capabilities for complex web apps
- **Local desktop integrations** — Obsidian, Canva, design tools need local app access
- **Heavy image generation** — Pixel art, design exports, mockups are resource-intensive
- **Real-time multi-agent orchestration** — Pi has compute limits; multi-agent requires more resources
- **Vision/image analysis** — Pi setup restricts some vision tool capabilities

---

## Inspiration: androoAGI Model

androoAGI (TikTok: @androoAGI) runs a full autonomous Etsy store with AI agents including:

- Autonomous Etsy listing creation and monitoring
- Multi-agent team setup
- "Mission Control" dashboard showing agent activity visually
- Supplement side business automation
- Content workflow automation via Hermes Agent

**Key takeaway:** The approach is valid — autonomous agent teams running Etsy + content + monitoring. The "extreme" version has a control center with visual agent status. Our Phase 2 should aim for this level of automation, but we start with structured manual runs first.

---

## Next Steps to Enable Phase 2

1. **Move Hermes to Mac Mini** — enables full browser, desktop integrations, image gen
2. **Install Obsidian + Local REST API plugin** — enables Theo's direct vault access
3. **Set up Etsy listing automation cron** — competitor monitoring on schedule
4. **Enable multi-agent** — parallel research and content pipelines
5. **Connect Pinterest automation** — auto-post pipeline with weekly review

---

## PNP Product Lineup (Current Plan)

1. **Daily Plan** ($9-12) — Core web mini app, guided daily planner
2. **Weekly Reset Printable Pack** ($7-9) — Big picture planning, pen-on-paper
3. **Low Energy Day Pack** ($5-7) — Standalone printable for crash days
