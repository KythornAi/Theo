# NotebookLM Skill

## What this is

Access to Google NotebookLM via the `notebooklm` MCP server. Lets you ingest research sources into a notebook and query them using Gemini 2.5 grounded on those sources.

Authenticated with Kyle's secondary Google account. Free tier: 50 queries/day.

## When to use

- Kyle asks you to save research findings to a notebook
- Kyle asks you to query or synthesise content from a notebook
- You want to ask cross-cutting questions across multiple research sources
- Kyle asks for an Audio Overview of a notebook topic

## Important: notebooks must exist first

You cannot create notebooks. Kyle creates them at notebooklm.google.com (secondary account), then gives you the share URL. You register it once with `add_notebook`, then it is in your local library permanently.

If you need a notebook and none exists for the topic, ask Kyle: "Can you create a NotebookLM notebook for [topic] and give me the share URL?"

## Core workflow

### 1. Health check (do this first)
```
tool: get_health
```
If `authenticated: false`, tell Kyle — he needs to re-run auth on the laptop.

### 2. Find or register your notebook
```
tool: list_notebooks          # see what is already registered
tool: search_notebooks        # query: "pain points" / "research" / etc
tool: add_notebook            # register a new one by share URL
  url: <share URL from Kyle>
  name: "Paper N Pixels — Pain Points"
  description: "ADHD pain point research for Daily Reset Board"
```

### 3. Select the notebook
```
tool: select_notebook
  id: <notebook id from list/search>
```

### 4. Add sources
```
tool: add_source
  source_type: url
  url: https://reddit.com/r/ADHD/...
  
tool: add_source
  source_type: text
  text: <your research findings as plain text>
  title: "Pain Point Harvest Run 5 — 2026-05-18"
```
Sources are indexed asynchronously — wait 10-30 seconds before querying.

### 5. Ask questions
```
tool: ask_question
  question: "What are the strongest positioning insights for the Daily Reset Board?"
  
# Save the session_id from the response and reuse it for follow-ups:
tool: ask_question
  question: "Which of these are most relevant to evening fatigue?"
  session_id: <id from previous response>
```

## Research-to-notebook pattern

When completing a research run, add a text source summarising key findings:

```
tool: add_source
  source_type: text
  title: "ADHD Pain Points Run 5 — 2026-05-18"
  text: <paste your PAINPOINTS or research file content here>
```

Then ask a synthesis question:
```
tool: ask_question
  question: "Synthesise the top 5 product positioning insights across all sources."
```

## Audio Overview

Generate a podcast-style overview of all notebook sources:
```
tool: generate_audio          # triggers async generation (2-10 min)
tool: get_audio_status        # poll every 30s until status: "ready"
tool: download_audio
  destination_dir: /home/kylemoore/theo/research/audio/
```

## Tool reference

| Tool | Purpose |
|------|---------|
| `get_health` | Check auth status |
| `list_notebooks` | List all registered notebooks |
| `search_notebooks` | Search by name/topic |
| `add_notebook` | Register a notebook by share URL |
| `select_notebook` | Set active default notebook |
| `update_notebook` | Edit notebook name/description |
| `remove_notebook` | Remove from local library (does not delete on NotebookLM) |
| `ask_question` | Query notebook with Gemini 2.5 |
| `add_source` | Add URL or text to notebook |
| `list_sessions` | See active browser sessions |
| `reset_session` | Clear chat history, keep session id |
| `close_session` | End a session |
| `generate_audio` | Trigger Audio Overview (async) |
| `get_audio_status` | Poll audio generation status |
| `download_audio` | Save completed audio to disk |
| `re_auth` | Wipe and redo auth (Kyle must run on laptop) |

## Constraints

- 50 queries/day on free tier — use sessions to stay in context rather than repeating context in new questions
- `add_source` does not support file uploads or YouTube in v2.0 — use URLs or text only
- Session timeout: ~15 min idle — close sessions when done
