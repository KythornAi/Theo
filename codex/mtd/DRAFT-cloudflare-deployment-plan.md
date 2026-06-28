# Cloudflare Pages Deployment Plan — DRAFT
## ReadyForMTD.co.uk

**Status:** DRAFT — for review by Claude, Codex, Kyle before implementation
**Date:** 2026-06-28
**Purpose:** Technical deployment steps only. Traffic/revenue strategy covered separately in `ReadyforMTD_Traffic_and_Revenue_strategy.md`.

---

## What this document covers

The technical steps to deploy the static site to Cloudflare Pages and connect the `readyformtd.co.uk` domain.

What this does NOT cover (handled elsewhere):
- Affiliate programme applications (Sage, Coconut, QuickBooks, Xero) — see strategy doc
- Google AdSense setup — one-time task post-deployment
- Email opt-in backend integration — deferred until ICO registration complete
- Content creation (long-tail SEO posts, occupation-specific pages) — content strategy

---

## Pre-deployment checklist

Before starting Cloudflare setup, verify:

- [x] Domain purchased (ReadyForMTD.co.uk, confirmed owned 2026-05-25)
- [x] All HTML/CSS/JS files present in `mtd/` directory (8 pages + checker.js + styles.css)
- [x] SEO assets added (favicon.svg, og-image.png, sitemap.xml, robots.txt) — commit 2ef6397
- [x] codex/mtd/ synced with mtd/ — commit 82c49e2
- [ ] Tax professional review of HMRC claims/thresholds (BLOCKER — do not skip)
- [ ] Plausible analytics account created (or remove script tag until ready)
- [ ] FAQ structured data expanded from 3 to all 12 questions (currently incomplete)
- [ ] Professional email `hello@readyformtd.co.uk` configured (or update pages to remove reference)

---

## Cloudflare Pages deployment steps

### Step 1: Create Cloudflare Pages project

1. Log into Cloudflare dashboard (cloudflare.com)
2. Workers & Pages → Create → Pages → Connect to Git
3. Connect GitHub account (KythornAi)
4. Select repo: `The`o
5. Configure build settings:
   - **Framework preset:** None (static site)
   - **Build command:** Leave blank (no build process)
   - **Build output directory:** `mtd/`
   - **Root directory:** `/` (or leave blank if entire repo is the site)
   - **Environment variables:** None needed initially
6. Save and deploy — first deployment will build from `main` branch

**Note:** This creates a project like `readyformtd.pages.dev` (temporary URL) for testing before custom domain.

---

### Step 2: Test on Cloudflare subdomain

After first deployment completes (2–5 minutes):

1. Visit the Cloudflare-assigned URL (e.g., `readyformtd.pages.dev`)
2. Verify:
   - All 8 pages load correctly
   - Checker runs end-to-end (test a few scenarios)
   - OG tags render in social preview (use Facebook Sharing Debugger)
   - sitemap.xml and robots.txt are accessible
   - favicon.svg loads
   - Mobile responsive (test on phone or DevTools mobile view)
3. If anything broken, fix in repo and push — Cloudflare auto-redeploys on push to `main`

---

### Step 3: Connect custom domain (readyformtd.co.uk)

Once testing passes:

1. Pages project → Custom domains → Set up a custom domain
2. Enter: `readyformtd.co.uk`
3. Cloudflare will prompt DNS configuration:
   - **If domain is already on Cloudflare:** records added automatically
   - **If domain is elsewhere (Namecheap/Hostinger/etc.):** update DNS at registrar:
     - A record: `@` → `192.0.2.1` (Cloudflare will provide)
     - CNAME record: `www` → `<project>.pages.dev`
     - OR use Cloudflare's nameservers (recommended for full CDN benefits)
4. **SSL/TLS:** Enable "Full (strict)" mode in Cloudflare SSL/TLS settings
5. **Edge certificates:** Auto-provisioned by Cloudflare (takes 5–15 minutes)
6. **Minimum TLS version:** Set to 1.2 (security)
7. **Always use HTTPS:** Enable (redirects http:// to https://)

**Propagation time:** 1–24 hours depending on registrar, usually <1 hour.

---

### Step 4: Post-deployment tasks

Within 24 hours of domain going live:

1. **Google Search Console:**
   - Add property: `readyformtd.co.uk` (domain property)
   - Verify ownership (DNS TXT record or HTML file)
   - Submit sitemap: `https://readyformtd.co.uk/sitemap.xml`
   - Submit URLs manually via URL Inspection tool (speeds up indexing)

2. **Google AdSense:**
   - Apply for AdSense (site must be live with accessible privacy/disclaimer pages)
   - Copy-paste ad code into pages once approved
   - Or use Cloudflare-specific integration if available

3. **Plausible analytics:**
   - Create Plausible account (or self-host)
   - Verify `data-domain="readyformtd.co.uk"` matches in `<script>` tag across all pages
   - If using self-hosted Plausible, update script `src` URL

4. **Professional email:**
   - Set up `hello@readyformtd.co.uk` (Cloudflare Email Routing, or separate provider)
   - Test contact form / email opt-in (once backend is built)

---

## Deployment architecture decisions

### Branch/deployment strategy

**Recommended:** Single `main` branch, auto-deploy on push.

- Every push to `main` triggers automatic deployment (Cloudflare handles this)
- No staging/preview branches needed initially (site is static, low-risk)
- If preview deployments needed later: Cloudflare Pages supports branch-specific URLs automatically

**Alternative:** Use Cloudflare's "Preview deployments" feature (every PR gets a unique URL for testing before merge). Enable if Kyle wants to review changes before they go live.

---

### Caching and performance

Cloudflare Pages automatically:
- Caches static assets globally (no configuration needed)
- Serves from edge nodes close to visitors (UK visitors hit London/Manchester PoPs)
- Compresses HTML/CSS/JS (Brotli compression default)
- HTTP/2 enabled by default

**Optional enhancements:**
- **Cache rules:** Not needed — Pages handles this automatically
- **Page rules:** Not needed initially
- **Workers:** Not needed (static site, no server-side logic)
- **R2 storage:** Not needed (all assets in repo)

---

### Monitoring and alerts

Cloudflare provides:
- **Analytics dashboard** (traffic, bandwidth, requests, status codes) — free
- **Web Analytics** (privacy-focused, no JS needed) — optional add-on
- **Uptime monitoring** — Cloudflare Uptime (limited free tier)

**Recommended:**
- Enable Cloudflare Web Analytics (no code changes needed)
- Set up email alerts for:
  - 5xx errors (>1% of requests over 5 minutes)
  - High error rate on specific pages
  - SSL certificate expiry (30 days before)

---

## Rollback strategy

If deployment breaks production:

1. **Revert in git:**
   ```bash
   git revert <bad-commit>
   git push
   ```
   Cloudflare auto-deploys the revert within 2–5 minutes.

2. **Cloudflare rollback:**
   - Pages → Deployments → find last good deployment → "Rollback"
   - Restores previous deployment immediately

3. **DNS fallback:**
   - If Cloudflare has issues, DNS can be repointed anywhere (Namecheap, Vercel, Netlify)
   - Export static files: `mtd/` directory is self-contained, no build step needed

---

## Post-launch monitoring (first 30 days)

Check daily for first week, then weekly:

- [ ] Cloudflare analytics (traffic, top pages, referrers)
- [ ] Google Search Console (indexing status, crawl errors, search queries)
- [ ] Plausible analytics (user engagement, time on page, bounce rate)
- [ ] 404 errors (Cloudflare analytics → Security → WAF → check for high 404 rate)
- [ ] SSL certificate status (auto-renewed by Cloudflare, but verify no warnings)
- [ ] Checker functionality (test monthly — HMRC thresholds don't change mid-year, but logic should work)

---

## Open questions for Claude/Codex review

1. **Cloudflare account:** Does Kyle already have a Cloudflare account, or needs to create one? If one exists, any other projects on it?

2. **Domain registrar:** Where is `readyformtd.co.uk` registered? Namecheap? Hostinger? This affects DNS setup steps.

3. **Email hosting:** Cloudflare Email Routing (free, forwards to personal email) vs separate professional email provider? Recommendation: start with Email Routing, upgrade later if needed.

4. **Plausible analytics:** Self-hosted or Cloud-hosted? If self-hosted, where? (Hetzner, DigitalOcean, etc.) If not ready, remove script tag until account created.

5. **Preview deployments:** Enable Cloudflare's PR preview URLs? Useful if Kyle wants to review changes before they go live, but adds minor complexity.

6. **Branch protection:** Should `main` be protected (require PRs, no direct pushes)? Currently no branch protection on the repo.

7. **Environment variables:** None currently, but if future pages need API keys (e.g., email opt-in backend), how to manage those in Cloudflare Pages?

8. **Backup strategy:** Git is the backup. Cloudflare has no "download site" feature. Should we create a separate export script that zips `mtd/` directory for offline backup?

---

## What Claude should review

- DNS configuration details (registrar-specific)
- SSL/TLS edge cases (redirect www to non-www? or vice versa?)
- Cloudflare Workers if any server-side logic needed later (email opt-in, redirect rules)
- Security headers (CSP, X-Frame-Options, etc.) — currently not set, but good practice for trust-first site
- Performance optimization (image compression, lazy loading, critical CSS) — site is already lightweight, but worth checking og-image.png size (currently 84KB)

## What Codex should review

- Build settings confirmation (is `mtd/` definitely the right output directory?)
- Whether any build tooling is needed (currently none, but if future changes require it)
- Deployment testing checklist (anything missing from the verification steps?)
- Whether the static site structure (no build step) is sustainable long-term, or if Hugo/11ty/Astro would be better once content grows

---

## Next steps

1. Kyle/Claude review this draft — mark any sections unclear or missing
2. Resolve open questions above
3. Complete pre-deployment checklist (especially tax professional review)
4. Execute steps 1–4 in order
5. Update `BUILD_SUMMARY.md` with "Deployment completed" date and URL
6. Trigger "what to do this week" items from traffic strategy doc once live

---

**End of draft. Not for production use until reviewed and approved.**
