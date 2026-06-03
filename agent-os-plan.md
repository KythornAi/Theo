# Agent OS — Personal Command Centre Plan

## Context

Kyle wants a unified dashboard ("Agent OS") inspired by Julian Goldie's Hermes Agent OS YouTube demo. The goal is one place to talk to Theo, Claude models, Gemini, Codex, agy and see their status — instead of switching between terminal windows, Telegram, VS Code. Screenshots saved to `~/Desktop/Mindful Not Mythical - Project Files/Agentic OS screenshots/`.

## Scope decisions (confirmed by Kyle, 2026-06-03)

- **Purpose:** Personal command centre only. Not a content/SEO publishing machine.
- **Agent reach:** Embed real CLI terminals for Claude Code, Codex, agy (not just model-routed chat).
- **Hermes version:** Stay on v0.15.1, no update. Theme what exists. Update is a separate future task.
- **This session:** Plan only. No build started.

## What's already live on the laptop

| Service | Port | What it is |
|---------|------|-----------|
| `hermes-webui` | 8787 | Open-source 3-panel web UI for Hermes — sessions/chat/workspace. Pure Python + vanilla JS, themeable. Running as systemd service at `~/hermes-webui/` |
| `hermes dashboard` | 9119 | Official Hermes config/kanban dashboard |
| `hermes-gateway` | — | Theo's Telegram link |

The foundation is mostly done. `hermes-webui` is ~80% of the visible structure from the screenshots.

## Architecture approach

### Phase 1 — Theme + profiles (low risk, quick win)
1. **Earthtone re-theme** of `hermes-webui` — replace neon/dark-AI palette with GH earthtones (cream, sage, terracotta). Pure CSS edits to `~/hermes-webui/static/`.
2. **Add agent profiles** in Hermes config — one profile per agent: `theo` (default, gpt-5.5 via openai-codex), `claude` (claude-sonnet-4-6 via anthropic), `gemini` (gemini via agy or openrouter), `codex` (codex via openai-codex). Each appears as a named sidebar entry in the webui.
3. **Mission Control view** — hermes-webui already has session/status sidebar. May just need profile routing confirmed.

### Phase 2 — Terminal embedding (harder, flagged constraint)
Kyle wants *real* CLI terminals for Claude Code, Codex, agy embedded in the dashboard.

**The constraint:** Hermes supports an embedded TUI chat tab via `--tui` flag (WebSocket PTY). This works for Hermes/Theo sessions. Claude Code and Codex are separate auth systems with their own session managers — they can't be "embedded" the way Hermes profiles can.

**Realistic options:**
1. **xterm.js terminal panes** — embed actual SSH/pty terminals in the dashboard that spawn `claude` and `codex` CLI sessions. This is web-terminal work (xterm.js + node pty or similar backend).
2. **Launcher buttons** — styled buttons that open Claude Code / Codex in their native app (VS Code, Codex desktop). Simpler, honest, zero auth complexity.
3. **Hermes TUI tab** (already built-in) — works for Theo/Hermes chat. Use this for agent chat, accept that Claude Code stays in VS Code.

**Recommendation to discuss:** Option 1 (xterm.js) is possible but adds a Node backend layer. Option 3 is already there. Worth discussing which is the right tradeoff before building.

### Phase 3 — Panels / pages
From the screenshots, the useful panels for Kyle's use case are:
- **Mission Control** — status of all agents (running/offline/memory %)
- **Chat** per agent — already mostly there via Hermes profiles
- **Studio** — trigger Theo's cron skills (image gen, affirmations, agy tasks) manually from the UI
- **Kanban** — `hermes kanban` is built-in, already available
- **Notebook** — NotebookLM integration (Theo already has NotebookLM access)

## What Julian's "Agent OS" actually is (for reference)

It's Hermes + multiple profiles (Claude, OpenClaw, Hermes, Gemini, Antigravity, Codex, Free Claude Code, OpenJarvis) + the `hermes-webui` dashboard + Kanban + NotebookLM integration + Netlify publishing pipeline. The platform is standard Hermes, not custom code. Julian's "OS" is the configuration + workflows on top.

## Key files / paths

- WebUI root: `~/hermes-webui/` on laptop
- WebUI static CSS/JS: `~/hermes-webui/static/`
- WebUI config/service: `~/.hermes/.env`, `/home/kylemoore/.config/systemd/user/hermes-webui.service`
- Hermes profiles config: `~/.hermes/config.yaml` → `profiles:` section
- Agent OS screenshots reference: `~/Desktop/Mindful Not Mythical - Project Files/Agentic OS screenshots/`

## Next session checklist

1. View current hermes-webui at :8787 via SSH tunnel or Tailscale to see the baseline
2. Agree on terminal embedding approach (xterm.js vs launcher buttons vs Hermes TUI only)
3. Decide palette — GH earthtones (cream/sage/terracotta) or something new for the OS
4. Phase 1 spike: re-theme + add 2-3 agent profiles as a proof of concept

## Open questions for Kyle

- Terminal embedding: xterm.js panes, launcher buttons, or accept Hermes TUI for chat only?
- Does the OS need a domain/password (accessible from Mac via Tailscale) or localhost only?
- Should it share the GH brand palette or have its own identity as a personal tool?
