---
name: firecrawl
description: Web research using Firecrawl — search, scrape, and interact with live pages. API key is pre-configured in ~/.hermes/.env. Use for Reddit harvests, Etsy monitoring, competitor research, and any task requiring clean page content.
version: 1.0.0
author: Kyle/Claude
license: MIT
metadata:
  hermes:
    tags: [research, web-search, scraping, reddit, etsy, firecrawl]
    related_skills: [duckduckgo-search]
---

# Firecrawl

Firecrawl gives you fast, clean web content — search results, scraped page text, and live page interaction. API key is already configured in `~/.hermes/.env`. No setup needed.

## When to Use

- Finding Reddit posts, threads, or subreddit content
- Scraping Etsy listings, competitor shops, or product pages
- Getting clean text from any URL without HTML noise
- Searching the web when you need source URLs for HERMES_INBOX.md

## Default Workflow

Always follow this order:

1. **Search first** — discover relevant URLs before scraping
2. **Scrape** — extract clean content from the URLs you found
3. **Interact** — only when a page needs clicks or login (rare)

Never scrape blind. Search first, pick the best URLs, then scrape those.

## Search

Use when you need to discover pages or find Reddit/Etsy content by topic.

```json
POST https://api.firecrawl.dev/v2/search
Authorization: Bearer $FIRECRAWL_API_KEY

{
  "query": "site:reddit.com/r/ADHD daily planner overwhelm",
  "limit": 10
}
```

Returns a list of URLs with titles and snippets. Pick the most relevant before scraping.

## Scrape

Use when you have a URL and need the full page content.

```json
POST https://api.firecrawl.dev/v2/scrape
Authorization: Bearer $FIRECRAWL_API_KEY

{
  "url": "https://www.reddit.com/r/ADHD/comments/...",
  "formats": ["markdown"]
}
```

Returns clean markdown. Extract relevant quotes, upvote counts, and pain points. Do not paste raw output into HERMES_INBOX.md Section 1 — summarise in your own words with the source URL.

## Reddit

Firecrawl blocks Reddit scraping entirely ("unsupported site"). Do not attempt to scrape Reddit URLs directly — it will always fail.

For Reddit research: use the search endpoint to find posts by query, then work from the search result snippets. This is sufficient for pain-point harvesting and does not require scraping individual thread pages.

## Cost Awareness

- Firecrawl free tier: 500 credits/month. Each search = ~1 credit. Each scrape = ~1 credit.
- Keep scrapes targeted — do not crawl entire subreddits.
- If you hit a rate limit or credit error, note it in HERMES_INBOX.md Section 4 (Blocked) and stop.

## Output Standard for HERMES_INBOX.md

Every entry using Firecrawl must include:
- Source URL (the actual Reddit/Etsy/web page, not the Firecrawl API URL)
- Date fetched
- Confidence rating (High / Medium / Low)
- Your summary in your own words — no verbatim page dumps in Section 1
