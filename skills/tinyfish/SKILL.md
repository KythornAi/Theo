---
name: tinyfish
description: Web search and page fetch using TinyFish — live browser-rendered results, clean markdown output. Free and unlimited for search and fetch. API key pre-configured in ~/.hermes/.env. Use as primary search tool and for page-to-markdown conversion.
version: 1.0.0
author: Kyle/Claude
license: MIT
metadata:
  hermes:
    tags: [research, web-search, fetch, tinyfish, adhd, etsy, reddit]
    related_skills: [firecrawl, research-write]
---

# TinyFish

TinyFish gives you live, browser-rendered web search and clean page fetching. Both are free and unlimited — no credits consumed. API key is already configured in `~/.hermes/.env` as `TINYFISH_API_KEY`. No setup needed.

## When to Use

- Searching the web for any topic (primary search tool — replaces ddgs)
- Converting a URL into clean markdown for summarising or quoting
- Finding Reddit threads, Etsy listings, competitor pages by keyword
- Any task where you need source URLs before reading a page

## When to Use Firecrawl Instead

TinyFish handles the majority of search and fetch tasks. Use Firecrawl when:
- You need to crawl multiple linked pages from a single root URL
- A page requires login or form interaction (Firecrawl Agent/interact)
- TinyFish fetch returns empty or broken content for a specific URL

Firecrawl has a 500 credit/month limit — use TinyFish first and save Firecrawl credits for tasks it genuinely handles better.

## Default Workflow

1. **Search** — find relevant URLs
2. **Fetch** — read the pages you actually need
3. **Summarise** — write findings in your own words with source URLs

Never fetch blind. Search first, pick the best results, then fetch those.

## Search

Use to discover pages by topic. Returns ranked results with titles, snippets, and URLs.

```python
import os
from tinyfish import TinyFish

client = TinyFish()  # reads TINYFISH_API_KEY from environment automatically

response = client.search.query(
    query="ADHD planner daily reset site:reddit.com",
    location="GB",
    language="en"
)

for result in response.results:
    print(result.position, result.title, result.url)
    print(result.snippet)
```

**Parameters:**
- `query` — search string. Supports operators: `site:reddit.com`, `"exact phrase"`, `-exclude`
- `location` — country code, e.g. `GB`, `US`. Defaults to GB for this project.
- `language` — language code, e.g. `en`
- `page` — pagination, 0-indexed, max 10

**Response fields per result:** `position`, `title`, `snippet`, `url`, `site_name`

## Fetch

Use when you have a URL and need the full page as clean markdown. Handles JavaScript-heavy pages. Up to 10 URLs per call.

```python
import os
from tinyfish import TinyFish

client = TinyFish()

response = client.fetch.get_contents(
    urls=["https://www.reddit.com/r/ADHD/comments/example/"],
    format="markdown"
)

for result in response.results:
    print(result.url)
    print(result.text)  # clean markdown
```

**Parameters:**
- `urls` — list of URLs, up to 10 per call
- `output_format` — `"markdown"` (default), `"json"`, or `"html"`

## Cost Awareness

- Search and Fetch: **free, unlimited** — no credits used
- Agent and Browser: credit-based (500 free credits from signup). Do not use Agent or Browser without Kyle's instruction.
- If you hit a rate limit or error, note it in HERMES_INBOX.md Section 4 (Blocked) and stop.

## Output Standard for HERMES_INBOX.md

Every entry using TinyFish must include:
- Source URL (the actual page URL, not the TinyFish API URL)
- Date fetched
- Confidence rating (High / Medium / Low)
- Your summary in your own words — no verbatim page dumps in Section 1
