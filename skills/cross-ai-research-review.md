---
name: cross-ai-research-review
description: Cross-review research output with companion CLI tools. If Codex gave the brief, review with Claude Code CLI. If Claude gave the brief, review with Codex CLI. Iterate gaps → patch → re-review until solid.
version: 1.0.0
---

# Cross-AI Research Review Workflow

## When to use

Use this when research output needs to be hardened before it reaches the next AI or human. Any time a brief or research prompt comes from one AI (Codex or Claude) and the output needs to survive scrutiny from the other — or from a human — run this workflow.

## The core loop

```
Brief arrives (from Codex / Claude / user)
    ↓
Theo does initial research (web, TinyFish, Perplexity)
    ↓
CLI REVIEW → fire the OPPOSITE CLI tool at the output
  (Codex brief → Claude Code CLI review)
  (Claude brief → Codex CLI review)
    ↓
Gaps identified
    ↓
Theo does follow-up research on gaps
    ↓
Patch the research file(s)
    ↓
Re-review (same CLI tool) to confirm gaps closed
    ↓
Deliver to original requester
```

## Tool selection

| If brief came from | Review with | Model recommendation | Command |
|---|---|---|---|
| Codex CLI | Claude Code CLI | `--model opus --effort high` (deepest gap analysis) | `cat file.md \| claude --model opus --effort high --print -p "Review..."` |
| Codex CLI (deeper) | Claude Code CLI | `--model opus --effort xhigh` or Opus 4.8 medium thinking (catches subtler gaps) | `cat file.md \| claude --model opus --effort xhigh --print -p "..."` |
| Claude Code CLI | Codex CLI | Default (uses Claude under the hood) | Pipe to Codex with appropriate prompt |
| User (direct) | Both if complex | Start with Claude Opus --effort high for deeper review | Pick whichever is available |

**Opus with medium thinking:** For high-stakes research going to Codex or clients, Opus at high/xhigh effort consistently catches more gaps than Sonnet (verified 2026-06-17 — Sonnet missed GDPR nuances and churn-compounding math on first pass that Opus would have caught). When speed matters less than thoroughness, default to Opus.

## Claude Code CLI review commands

### First pass — full gap analysis

```bash
cat <research-file>.md | claude --model opus --effort high --print -p \
"You are a ruthless reviewer. Review the following research document. \
This will be handed to [Codex/another AI] to act on.

Identify:
1. **WEAK CLAIMS** — assertions without evidence, sourcing, or verification
2. **MISSING SOURCES** — factual claims without citation or methodology
3. **GAPS IN ANALYSIS** — things not considered (competition, risks, objections)
4. **ASSUMPTIONS THAT NEED TESTING** — pricing, demand, willingness-to-pay asserted without evidence
5. **FRAGILE SCENARIOS** — what could go wrong that isn't addressed
6. **FORMATTING / CLARITY** — things that would confuse the next AI or lead to bad decisions

Be blunt. Don't soften criticism."
```

### Second pass — verify gaps closed

```bash
cat <patched-file>.md | claude --model opus --effort high --print -p \
"I sent you this document earlier and you identified gaps. New sections were added. \
Review the FULL document again and tell me:
1. Which original gaps are now adequately addressed?
2. Which are still not fully fixed?
3. Any NEW issues you see?

Focus on the specific areas from the first review."
```

### Faster option (when Opus credits are limited)

Replace `--model opus` with `--model sonnet`. Sonnet is faster and cheaper but may miss subtler gaps. Use Sonnet for lighter reviews, Opus for high-stakes research going to Codex or clients.

## Codex CLI review commands

If the brief came from Claude and you need Codex to review:

```bash
cat <file>.md | codex --model claude-sonnet-4 -f -p \
"Review this document for gaps, weak claims, and missing analysis..."
```

(Codex uses its own provider — adjust model flag based on what's available.)

## Proven workflow (as executed 2026-06-17)

1. **Receive research prompt** — from Codex or Claude
2. **Theo does initial research** — web_search, TinyFish (free, unlimited), Perplexity sonar-pro for synthesis (sparingly), Firecrawl last (credit-limited, ~290 credits left until June 26 refresh).
   **Additional MCP tools available (light usage):**
   - **TrendsMCP** (`mcp_trends_mcp_*`) — trend data across 25+ platforms (Google, YouTube, TikTok, Reddit, Amazon, Wikipedia, etc.). Free tier: 100 requests/month. Tools: `get_trends`, `get_growth`, `get_top_trends`. Use for demand validation, keyword trend checks, and what's-trending-now feeds.
   - **Apify MCP** (`mcp_apify_*`) — 41K+ Actors for web scraping, data extraction, and automation. Key tools: `rag-web-browser` (browse + extract), `search-actors` (find scraping tools for any platform), `fetch-actor-details` (get input schema + pricing). Pay-per-event pricing (typically $0.001-0.003 per result). Use Apify's RAG Web Browser as a Firecrawl alternative for full-page extraction.
   Both are HTTP MCP servers configured in `~/.hermes/config.yaml`. No additional setup needed — they connect at gateway startup. Use sparingly to stay within free/light tiers.
3. **Set up task tracking** — use `todo` tool with 5-step plan:
   - Fire CLI review
   - Evaluate gaps
   - Follow-up research
   - Patch files
   - Re-review
4. **Run first Claude Code review** — pipe compiled file via `--print`
5. **Analyse gaps** — each gap gets a follow-up web_search
6. **Patch the compiled file** — targeted `patch` calls (not full rewrite)
7. **Re-review** — same CLI tool to verify fixes
8. **Commit and push** — research, THEO_RUNLOG.md entry

## Critical pitfalls from experience

- **Sole traders vs corporate subscribers (UK PECR):** If your research involves cold emailing UK businesses, check whether they're sole traders (need consent) or limited companies/LLPs (can cold email). This is easy to miss and legally important.
- **"No competition" claims are almost never true:** Always search for actual competitors in the space before stating a gap exists. E.g. "nobody offers X" is usually wrong — the real question is format/pricing differentiation.
- **Pain ≠ ability to pay:** A business with the most visible problem may have zero cash flow. Score prospects on both dimensions separately.
- **Currency conversion matters:** When comparing GBP pricing to USD competitors, always include the FX rate. A price that looks cheap in one currency may sit inside the competitor range in another.
- **Cold email response rates are 3-5%, not 33%:** Always check industry benchmarks before writing outreach assumptions into the research.
- **Free tools exist:** If your service competes with free built-in analytics (Shopify, Google Analytics), your value proposition must address "why pay for what you already have."
- **The re-review always finds MORE, not just a sign-off:** The second Claude pass consistently finds 2-3 issues the first pass missed — partially-fixed items, contradictions between old sections and new patches, and entirely new gaps. Treat the second pass as an equally valuable review, not a rubber stamp.

**Segment-to-segment reconciliation is mandatory:** After adding a new section (e.g. Section 7 on GDPR), scan every EXISTING section that references the same topic and update it to match. In the 2026-06-17 run, the pricing appendix still claimed "£147 is below Fiverr range" while the new Section 7.5 correctly showed it sits inside the range. Section 6 still targeted Shopify stores while Section 7.1 properly flagged them as sole traders who can't be cold-emailed. These contradictions are the most dangerous kind of error — they make the document give opposite instructions depending on which section you read.

**Categorise re-review output into three buckets:**
1. ✅ **Adequately addressed** — no further action (most items)
2. ⚠️ **Partially fixed** — fix these next (2-3 items per re-review)
3. ❌ **Not addressed** — rare, but flag for a separate research pass

**Patch order after re-review:** Fix contradictions first (they're the most dangerous), then fix remaining gaps, then remove now-inaccurate text from old sections (not just add new text).

## Model selection guidance

| Model | Best for | Cost | Speed |
|---|---|---|---|
| `--model opus` | Deep gap analysis, high-stakes research going to client or Codex | Higher | Slower |
| `--model sonnet` | Lighter reviews, iterative passes, speed-critical loops | Lower | Fast |
| `--effort high` | Default for review work — thorough without being slow | Same | Slightly slower |
| `--effort xhigh` | Very complex documents (30+ pages) | Same | Slower |
| `--effort max` | Rare — only if the review missed things at high | Same | Slowest |

## Companion skill

Load the `subagent-driven-development` skill when the initial research involves parallel workstreams (multi-topic research, competitive scans, prospect discovery).

## Verification checklist

After the final re-review and before delivery:
- [ ] No contradictions between old and new sections
- [ ] Pricing claims include currency conversion
- [ ] Legal/compliance issues (GDPR, PECR) checked if outreach is involved
- [ ] Competition acknowledged with real names
- [ ] Assumptions labelled as assumptions, not facts
- [ ] "1 of 3" style optimistic conversion rates flagged
- [ ] Prospect ranking accounts for ability to pay, not just pain
- [ ] Files committed and pushed to GitHub