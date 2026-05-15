Two Theo repos on this machine: (1) ~/hermes_files/theo/ — Syncthing-synced workspace, uses github-theo SSH alias (not configured here), can't push from this machine. (2) ~/theo/ — second clone, uses git@github.com standard SSH auth, CAN push. Always commit to both; push from ~/theo/. Memory files: ~/.hermes/memories/USER.md (durable), backup to memory/ dir in both repos with 'memory:' commit type.

Paper and Pixels = ADHD productivity digital products on Etsy/Gumroad. Hero = Daily Reset browser-based Now/Later tool. Pricing £10-24. Key competitors: FutureADHD (dominant, 6k+ reviews, $17.28), Daily Focus Club (science-based, reMarkable niche), Manifestable (budget). Daily Reset architecture gap is unclaimed. Entire market is PDF/GoodNotes — zero browser-based = our differentiation. Undated beats dated (no skipped-day guilt). GoodNotes subscription change = competitor vulnerability. Validated ADHD pain points: 3-task rule, brain dump, warm-up tasks, low-energy mode, initiation > planning, friction > willpower. Pinterest is Month-1 traffic channel. Monthly skill audit (first Sunday). Cost threshold: £0.50 proceed, £2 flag, £5/day ask. UK English, no em-dashes, no AI Overviews as sources.

AGENTS.md v1.6: Syncthing = backup, Git = primary. Session rules: start with git pull, end with git commit + push after any output.

Active cron jobs (all load tinyfish as first skill, all deliver to chat, write to ~/hermes_files/theo/briefings/):
- daily-intel-sweep (7AM daily) → briefings/daily/
- content-hooks (Mon/Wed/Fri 2PM) → briefings/hooks/
- etsy-competitor-check (Mon/Thu 10AM) → briefings/etsy/
- weekly-adhd-painpoints-research (Mon 5PM) → briefings/painpoints/
- weekly-roundup (Sun 5PM) → briefings/weekly/ + video specs

Inbox (HERMES_INBOX.md) reserved for PNP core only — research output goes to briefings/ folders.

Model stack (3 tiers):
- Tier 1 — Routine chat: deepseek/deepseek-v4-flash via OpenRouter (default)
- Tier 2 — Cron jobs: pinned deepseek/deepseek-v4-flash (same model, pinned for reliability)
- Tier 3 — Deep thinking: Codex CLI (ChatGPT Plus subscription). Kyle says "use codex" or "deep think this" to invoke.
- Claude.ai = strategy + polish teammate, operates alongside this stack

Operating philosophy: "Crawl drops" — recurring research so Kyle never starts cold. 4 research domains:
1. Product Intel — pain points, competitors, reviews (feeds what to build next)
2. Social & Marketing Prep — Pinterest angles, content hooks, trend watch (ready-to-go content)
3. Etsy Store Prep — SEO keywords, category gaps, listing drafts
4. Business Health — token costs, weekly roundups

Cost target: ~$0.02-0.04 per cron run.

## Brain Vault (~/Brain/)

Full clone of Kyle's Obsidian vault (306 notes, PARA structure). Remote: `git@github-theo:KythornAi/brain-vault.git`.
Mac pushes changes; laptop auto-pulls every 30 minutes.

**Write rules:**
- New notes for Kyle → `~/Brain/00_Inbox/`
- Research summaries → `~/Brain/03_Resources/`
- Project-specific notes → `~/Brain/01_Projects/Paper and Pixels/`
- After writing: `git add`, `git commit -m "chore: Theo <description>"`, `git push`
- Do NOT touch `.obsidian/` files or Kyle's daily notes

**Theo workspace (~/theo/):** unchanged, git sync as before. The two repos are independent — Brain vault and theo workspace don't cross-write.
