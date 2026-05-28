# Theo Support — Working Handover

<!-- Append only. Keep last 5 entries. Archive older entries to docs/handover-archive/YYYY-MM.md -->

---

### Session 20 — VS Code — 2026-05-26

**Done:**
- SOUL.md full path cleanup: all remaining `~/hermes_files/theo/` references replaced with `~/theo/` across §7, §22, §23, §24, §34, §37 (×2), §40
- Added §45 Co-builder mode: formalises the partnership rule ("move mountains in thinking, ask before moving furniture, never demolish walls without Kyle")
- [CLAUDE→THEO] notification sent and acknowledged by gateway; 3 commits pushed

**Next:** MTD build session on pause (~1 week). PNP web app is Kyle's current active workstream (separate session).

**Blockers for Kyle:** Submit 4 affiliate applications (Sage, Coconut, QuickBooks, Xero) before MTD build session.

---

### Session 21 — VS Code — 2026-05-27

**Done:**
- Verified memory-watchdog deployment: confirmed in user crontab (`0 */6 * * *`), not Hermes cron or systemd timer
- Fixed Q3 gap: watchdog now auto-commits and pushes `MEMORY.md` to `~/theo` origin/main after any successful trim (commit `1e17ca3`)
- [CLAUDE→THEO] notification written, committed and pushed (commit `3691e3a`)

**Next:** No outstanding Theo infrastructure work. MTD build session when domain + affiliate blockers cleared. Telegram alert thresholds (70%/85%) unverified — check `/tmp/memory-watchdog.log`.

**Blockers for Kyle:** Submit 4 affiliate applications (Sage, Coconut, QuickBooks, Xero) before MTD build session.

---

### Session 22 — VS Code — 2026-05-27

**Done:**
- Ran vault-health planning session: INDEX.md approach adopted over mass-copy-to-vault
- Revised `project_vault_north_star.md` memory; added `feedback_fix_the_bottleneck.md` memory
- Plan written and approved at `~/.claude/plans/ok-no-worries-wobbly-phoenix.md`

**Next:** Execute the plan — INDEX.md, legacy tidy, PNP handover archival, sync tighten.

**Blockers for Kyle:** Submit 4 affiliate applications (Sage, Coconut, QuickBooks, Xero) before MTD build session.

---

### Session 23 — VS Code — 2026-05-28

**Done:**
- Created INDEX.md at ~/theo/ root — navigation table for 7 active folders, 6 core docs, archive — commit f1c6dfc
- Archived 16 legacy files from ~/theo/ root to archive/2026-05/ — commit 0b328c0
- Archived 41 PNP session handovers (S8–S59) from Brain vault into handover-archive/2026-04/ and 2026-05/ — commit 05fe761
- Tightened laptop Brain sync cron from */30 to */5 (worst-case lag: ~40 min → ~15 min)
- Created `feedback_vault_sprawl.md` memory; `project_vault_north_star.md` already current from S22
- Restored CLAUDE_TASKS.md (empty), notes/, prototypes/, brain_out/ — accidentally archived; all referenced by SOUL.md/AGENTS.md as write paths — commit 3221e31

**Next:** [CLAUDE→THEO] notification needs Kyle approval then write to HERMES_INBOX.md and push. Memory watchdog Telegram alert thresholds (70%/85%) still unverified — check /tmp/memory-watchdog.log. MTD build session when domain + affiliate blockers cleared.

**Blockers for Kyle:** Approve [CLAUDE→THEO] notification draft (shared in session). Submit 4 affiliate applications (Sage, Coconut, QuickBooks, Xero) before MTD build session.

---

### Session 24 — VS Code — 2026-05-28

**Done:**
- Diagnosed Theo silence: internet outage caused Telegram to hit 10 consecutive connection failures and self-pause the gateway
- Confirmed laptop internet restored, restarted hermes-gateway — Theo back up at 20:11 BST
- Baseline check: Python 3.12.3 (latest for Pop!_OS noble), Node v24.15.0 via nvm lts/krypton — both current, no action needed

**Next:** [CLAUDE→THEO] notification from Session 23 still needs Kyle approval then write to HERMES_INBOX.md and push. Memory watchdog Telegram alert thresholds (70%/85%) still unverified. MTD build session when domain + affiliate blockers cleared.

**Blockers for Kyle:** Approve [CLAUDE→THEO] notification draft from Session 23. Submit 4 affiliate applications (Sage, Coconut, QuickBooks, Xero) before MTD build session.
