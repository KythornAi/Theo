# Demand Scans — Upwork, Fiverr, Reddit

**Purpose:** Surface what services and problems people are actually paying for. Find opportunities for Kyle + Theo that have real demand.

## How this works

Cron jobs run regular scans of:
- **Upwork** — what freelancer services buyers are hiring for
- **Fiverr** — what services sell and at what price
- **Reddit** — what business problems people are stuck on and seeking help for

Results accumulate in `results/` with dated files. Weekly synthesis picks the best opportunities.

## Output format

Each scan produces a dated file: `results/upwork-YYYY-MM-DD.md`, `results/fiverr-YYYY-MM-DD.md`, `results/reddit-YYYY-MM-DD.md`

Each file contains:
- Top opportunities found
- Demand signal strength (high/medium/low — based on post frequency, budget, competition)
- Link to sources
- 1-2 sentence recommendation

## Cron jobs

| Job | Schedule | Scope |
|-----|----------|-------|
| `demand-scan-morning` | Mondays 08:00 | Upwork + Fiverr fresh scans |
| `demand-scan-afternoon` | Mondays 14:00 | Reddit + weekly synthesis |

Cadence was reduced from weekdays to Monday-only on 2026-06-15 after daily results stabilised. Reevaluate if Monday scans start showing larger week-to-week swings.

## Opportunities worth scanning for

- People looking for AI/automation services
- Freelancer pain points (invoicing, contracts, compliance, leads)
- Small business admin problems
- Data processing / research / scraping needs
- Content creation bottlenecks
- Technical setup help (hosting, domains, email, analytics)
- Process automation opportunities
- Tools/services people wish existed

## Current hot candidate

**ReadyForMTD.co.uk** — UK Making Tax Digital readiness checker. Already researched, domain owned, build brief ready at `~/theo/mtd/build-brief.md`.

