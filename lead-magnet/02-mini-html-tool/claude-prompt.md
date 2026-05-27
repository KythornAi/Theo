# Lead Magnet Option 2: "The Brain Dump" — Interactive Mini HTML Tool

**Effort:** Medium (★★★)
**Format:** Single HTML file, 1 screen, browser-based
**Capture method:** Modal at first open or after 3 uses asking for email
**Product spec reference:** Daily Reset's brain dump module (Module 2)

---

## What it is

A single-screen interactive HTML tool that does one thing well: **get thoughts out of your head, fast.** It's a limited, free version of the Daily Reset's brain dump + sort flow. One screen. No navigation. Just dump, sort, done.

## Why this format

The PRODUCT_SPEC says the brain dump is the most loved feature across all competitor reviews. Giving people a free taste of this one feature naturally leads them to want the full Daily Reset (which adds mood check, task planning, stuck support, timer, close-out).

## What to build

Claude — please build a single HTML file. Tailwind CDN for styling. Vanilla JS. localStorage. No build step.

### The one-screen flow:

**Screen state — "Empty brain"** (first visit):
- Big text area with placeholder: "What's stuck in your head right now? Type anything. Nobody's judging."
- Below it: a "Park it" button (disabled until text is entered)

**After typing + "Park it":**
- The text appears as a card below with a small 🅿️ icon
- A new empty text area appears above
- Counter in corner: "3 thoughts parked" (soft cap of 10)
- Each card has a small "✓ Done" button (moves it off screen with a gentle animation) and a "✕ Release" (deletes it)

**When 10 thoughts hit:**
- "Your parking lot is full for now. That's plenty. Take a breath."
- A CTA: "Want the tool that helps you sort these into a real plan? →" linking to the paid Daily Reset

**After closing the browser and returning:**
- The parked thoughts are still there (localStorage)
- Header: "Welcome back. Still carrying these?"
- Option to clear all with one click: "Start fresh" (with a 3-second undo window)

### Styling:
- PNP brand: warm linen (#DFD3B8) bg, dark card (#FFFFFF on warm bg), earthy accents
- Rounded corners, soft shadows (pnp-surface shadow style from S58)
- Mobile-first, works on any screen
- No branding noise — just the tool. Small "Paper N Pixels" in footer.
- Font: system sans-serif

### Once built:
1. Host at papernpixelshop.com/demo or on GitHub Pages
2. Add the email-gate modal: after 3 uses or on first "Park it", show a small non-blocking prompt: "Like this? Get the full Daily Reset + weekly planner free →" with email field
3. Link from Etsy listing description (demo trust builder)
4. Pin to Pinterest as "Free ADHD brain dump tool"

### Email capture approach:
Use ConvertKit/Kit's API or a simple Gumroad freebie redirect. Simplest: after 3 uses, show a slide-up banner: "Free ADHD tools? Join 200+ readers →" → email → redirect to a "Thanks, here's the PDF version too" page.

### Conversion path:
Free Brain Dump → "Want to sort these into a real plan?" → Daily Reset product page (Gumroad) → upsell to Bundle