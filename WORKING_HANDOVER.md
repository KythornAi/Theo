# Theo Support — Working Handover

<!-- Append only. Keep last 5 entries. Archive older entries to docs/handover-archive/YYYY-MM.md -->

---

### Session 40 — VS Code — 2026-06-06

**Done:**
- Fixed SSH tunnel LaunchAgent: plist was on external drive (launchd error 5); SSH key paths had spaces breaking `UserKnownHostsFile`. Moved plist to boot volume (`/Users/kylemoore/Library/LaunchAgents/`), copied key + known_hosts to `/Users/kylemoore/.ssh/` (no spaces). Tunnel is now launchd-managed, survives reboots, PID confirmed.
- Created Mission Control LaunchAgent (`com.kyle.mission-control`). Hit macOS TCC: LaunchAgents can't `open()` files on external volumes (EPERM); SIP-protected Python can't get FDA via GUI. Fixed by moving `mission-control/` to `/Users/kylemoore/mission-control/` (boot volume) with symlink at `~/Desktop/mission-control` for IDE access. Port 3737 auto-starts on login, launchd-managed.

**Next:** Morning reboot test — confirm both LaunchAgents start (Hermes tunnel 9119, Mission Control 3737). Then continue Mission Control build-out: panels with live data (crons, agent registry, inbox).

**Blockers for Kyle:** Reboot test on wake-up. Set up Gumroad account. Register groundedhumanity.co.uk.

---

### Session 39 — VS Code — 2026-06-06

**Done:**
- Fixed Kyle's wedged Finder (beachball, windows won't open, persisted across sessions). Root cause: home folder lives on external drive /Volumes/Home Ext; under heavy concurrent I/O (mission-control server + VS Code + Claude) Finder stalls waiting on disk and stays wedged until relaunched. Drive itself healthy (29% used, mounted clean). Fix: `killall Finder` — Kyle confirmed working again on screen.
- Confirmed last session's commands (SSH tunnel + mission-control Python server) did NOT cause this — they can't touch Finder. The hermes-tunnel LaunchAgent is harmless and was not even loaded.
- Saved feedback_finder_wedge_external_drive.md memory so future sessions recognise the pattern.

**Next:** Resume normal Theo support work. No Finder follow-up needed unless it recurs (then: `killall Finder`). Outstanding from S38: Kyle to hard-refresh body scan + Mission Control to confirm fixes; deploy MC to laptop.

**Blockers for Kyle:** none (Finder fixed). Standing items: hard-refresh body scan + MC to confirm S38 fixes; set up Gumroad account; register groundedhumanity.co.uk.

---

### Session 37 — VS Code — 2026-06-05

**Done:**
- Replaced geometric SVG body figure in body-stress-scan.html with real PNG silhouette (Human Body silluette for MNM.png) — mix-blend-mode:multiply makes white background disappear, clickable region paths redrawn in 780×1316 coordinate space. Committed 473c6f3.
- Diagnosed Save/continue completion flow — confirmed working fine (Kyle tested); no timer gate exists on the button.
- Hermes WebUI iframe: UFW not active (no firewall), auth removed by Kyle. Updated Mission Control to new WebUI at port 9119 (SSH-tunnelled). To use: `ssh -N -L 9119:127.0.0.1:9119 kylemoore@192.168.1.105` then refresh MC.

**Next:** Test Hermes WebUI iframe in Mission Control (should now work). Tighten legs region path if highlight looks too wide. Deploy MC to laptop (rsync + live data). Continue MNM HTML polish (affirmation previewer next).

**Blockers for Kyle:** Test Hermes tab in Mission Control. Set up Gumroad account. Register groundedhumanity.co.uk.

---

### Session 38 — VS Code — 2026-06-05

**Done:**
- Fixed body-stress-scan.html step transitions: renderScanStep now clears ALL area marks on every step so no previous colour bleeds into the next area (committed dfcf0ec to mission-control)
- Fixed Mission Control config.json: hermes_webui_url corrected from 100.126.155.50:8787 → 127.0.0.1:9119 so the Hermes WebUI panel loads correctly
- Created LaunchAgent at ~/Library/LaunchAgents/com.kyle.hermes-tunnel.plist for persistent SSH tunnel — will auto-start at next Mac login; SSH tunnel is already running on port 9119 this session

**Next:** Kyle to hard-refresh body scan (Cmd+Shift+R) and verify clean-slate step behaviour. Hard-refresh Mission Control (Cmd+Shift+R) and confirm Hermes WebUI tab loads. On next Mac restart the tunnel LaunchAgent should auto-start — check System Settings → General → Login Items if it doesn't.

**Blockers for Kyle:** Hard-refresh body scan to confirm fix. Hard-refresh MC to confirm Hermes tab. Approve LaunchAgent in System Settings if macOS prompts on next login. Set up Gumroad account. Register groundedhumanity.co.uk.

### Session 41 — VS Code — 2026-06-06

**Done:**
- Bootstrapped Mission Control (3737) and Hermes tunnel (9119) LaunchAgents — both plists existed but were never loaded; bootstrapped both, orphaned ssh process killed, LaunchAgents now cleanly own both services. http://127.0.0.1:3737 confirmed working.
- Switched Theo's default model from gpt-5.5 (ChatGPT Plus OAuth) to DeepSeek V4 Flash via OpenRouter; fallback changed to MiniMax M3 via OpenRouter. Hermes restarted on new config.
- Added §46 Execution Standard to SOUL.md: no placeholders, execute safe steps without asking, verify before reporting done (cron entry + manual run required before flagging complete), "Next move:" closing line. Committed df314a6.
- Sent [CLAUDE→THEO] notifying Theo of model switch and §46; committed and pushed f90a205 to Theo repo.

**Next:** Monitor Theo's first responses on DeepSeek V4 — check if execution standard holds on next task. Review MiniMax Daily Reset redesign at ~/theo/drafts/daily-reset-minimax-visual-redesign-2026-06-06/daily-reset-visual-redesign-copy.html. MC build-out: panels with live data (crons, agent registry, inbox).

**Blockers for Kyle:** Watch Theo's next task — report if still passive or noticeably more action-oriented. Set up Gumroad account. Register groundedhumanity.co.uk.

