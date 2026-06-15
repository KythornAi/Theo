# Lessons Learned — Data Analysis Reporting Lane (2026-06-12)

This note captures the feedback from the sample report exercise. Not as a scolding — as a reference so future runs don't hit the same pitfalls.

## The Team Division (per Kyle)

| Role | Strength | Responsibility |
|------|----------|---------------|
| **Theo** | Data gathering, processing, cleaning, competitive research, automation | Raw analysis, data prep, intelligence gathering |
| **Claude** | Narrative writing, business copy, report polish | Turns data into a compelling story |
| **Kyle** | Business judgment, commercial insight, quality gate | Reviews output, adds real business wisdom, decides what's valuable |
| **Together** | Theo + Claude + Kyle = something none of us could do alone | Production-quality deliverables |

## Sample Report Failures

1. **Used a textbook dataset** (UCI Online Retail, 2010-2011). Generic data produces generic insights. If we're proving the concept, use data that's current, relevant, and tells an interesting story.

2. **Analysis was mechanical, not insightful**. Rules-engine approach (if X < 30%, flag Y) is not business analysis. Real insight requires someone to *think about what the numbers mean* for that specific business.

3. **Format was a markdown file**. A £147 report can't look like a GitHub README. It needs proper design: visual hierarchy, data viz, layout that signals value before you read a word.

4. **Processed before understanding**. I jumped to coding the pipeline instead of first asking: "what would make someone pay £147 for this? What does 'valuable' actually look like in this format?"

## Research Depth Requirements

For future competitive analysis and market research:

1. **Start with Perplexity sonar-pro** — not web_search. Web_search gives snippets. Perplexity gives synthesised answers with citations.
2. **Firecrawl actual competitor pages** — not just search results. Scrape their pricing pages, service descriptions, gig packages.
3. **Understand their traffic sources** — are they on Fiverr/Upwork only? Do they have a website? Landing page? Ads? Pinterest? SEO? Knowing HOW they get customers is as important as WHAT they offer.
4. **Don't stop at 1-2 competitors** — find 5-10, map their full pricing tiers, what's included at each tier, and what they DON'T offer (that's our gap).
5. **Verify surprising claims** — if something seems off, fetch the actual source page. Don't rely on search snippets.

## What a Good Report Needs

- Real, current, relevant data — not a tutorial dataset
- A compelling narrative — "here's what's happening in your business"
- Specificity — not "your repeat rate is low" but "you lost £X last month because of Y"
- Design — proper visual layout, charts, clean sections
- The human layer — Kyle's commercial judgment is the differentiator
- Claude's writing quality — narrative prose, not bullet vomit

## Pivot for Next Time

Instead of Theo trying to produce the full report, the better workflow is:

1. Theo: gather data, clean it, run analysis, extract findings → hand to Claude
2. Claude: write the narrative report in natural, compelling language → hand to Kyle
3. Kyle: review, add business insight, make final calls on content and positioning
4. Theo + Claude: incorporate feedback, polish, deliver