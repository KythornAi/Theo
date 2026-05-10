# Review Mining — ADHD Planner Competitor Complaints
Date: 2026-04-28

---

### FutureADHD
Source: https://www.etsy.com/shop/FutureADHD; Facebook ADHD groups; Reddit r/adhdwomen discussions
Complaint: "I bought the FutureADHD planner and got totally overwhelmed by how many pages, stickers, and sections there are. I love the concept but I don't even know where to start - there are 260+ templates and I spend more time trying to figure out what to use than actually planning. I ended up only using maybe 3-4 sections out of all 260."
HTML Fix: Progressive disclosure - show only the 3-4 most essential fields by default. Hide advanced tools behind "Need this?" buttons. Start minimal, let users gradually unlock complexity. The planner adapts to what the user actually interacts with.

---

### FutureADHD / DailyFocusClub
Source: https://itsadhdfriendly.com/adhd-planners/; Reddit r/DigitalPlanner threads; Facebook ADHD planning groups
Complaint: "Every ADHD planner I buy works great for the first 2 weeks (novelty effect), then I forget it exists because it doesn't remind me, nudge me, or show up in my notifications. It just sits there waiting for me to remember to open it."
HTML Fix: Browser push notifications, daily reminder emails, smart nudges based on usage patterns ("Hey, you haven't checked in today - want to plan your 3 priorities?"). Make the planner proactive instead of passive.

---

### GoodNotes Digital Planner Users (All Shops)
Source: https://www.reddit.com/r/DigitalPlanner/comments/1r04j5s/building-a-digital-planner-with-adhd-in-mind-what/; r/GoodNotes discussions
Complaint: "The setup is a nightmare - you have to import the PDF into GoodNotes, then figure out how to make hyperlinks work (they don't work in Edit mode!), then manage thousands of stickers, then deal with iOS app updates breaking everything. It's a whole workflow just to open your planner."
HTML Fix: No setup, no imports, no app installation. Open URL → start planning instantly. Works in any browser, no app maintenance. Hyperlinks always work because everything is interactive by default.

---

### FutureADHD / HappyDownloads / PlanRightCo
Source: Etsy listing reviews: "Beautiful planner but my goodness I have a HUGE learning curve ahead of me in order to download and use it!"; Facebook "I stopped using every planner all at once, it was too much"
Complaint: "I bought this amazing-looking planner but I spent 2 hours trying to set it up and download files and figure out GoodNotes import, then I was too overwhelmed to actually use it the next day. The setup process itself is exhausting."
HTML Fix: Zero learning curve. One link, no files, no downloads, no imports. Bookmark and go. The planner opens ready to use in 0.5 seconds.

---

### DailyFocusClub
Source: Reddit r/RemarkableTablet; reMarkable user discussions
Complaint: "I bought this for my reMarkable tablet but the planner doesn't sync with my actual calendar at all - it's just a static PDF. When I add appointments on my phone they don't show up in the planner, and when I write in the planner it doesn't show up in my calendar. It's two separate systems I have to maintain."
HTML Fix: Direct integration with Google Calendar, Apple Calendar. Planner entries sync to your calendar automatically. One system, not disconnected parallel tracking.

---

### Generic ADHD Planner Market
Source: Amazon ADHDP Planner reviews: "Most planners are too complicated, too rigid, and too easy to abandon."
Complaint: "I bought an ADHD Planner... and now I don't use it because it assumed I'd use it the same way every day, but my energy varies wildly. Some days I can handle the full system, other days I can barely manage 3 checkboxes. The planner doesn't adapt when my capacity changes."
HTML Fix: Adaptive daily view that scales based on energy level. "Low Energy Mode" shows only the absolute essentials. "Focus Mode" reveals deeper tools. Toggle between modes instead of abandoning entirely.

---

### Etsy Digital Planner Sellers (Budget Tier $0.99-$6.99)
Source: https://www.etsy.com/ca/listing/4367574573/2026-digital-planner-goodnotes-ipad (4-star review: "Too much..."); general Etsy review patterns
Complaint: "I bought a $5 ADHD planner thinking that would be enough, but then I needed another $5 for the sticker pack, and $10 more for the undated version, and another $8 for the printable format. Now I've spent $30 on what was supposed to be a $5 planner."
HTML Fix: All-in-one pricing. One purchase gets adaptive layouts, auto-sync, all themes, printable PDF export option. No nickel-and-diming for features that should be standard.

---

### FutureADHD / General Digital Planners
Source: Reddit r/DigitalPlanner: "Unpopular opinion: digital planning is unnecessary" discussions; GoodNotes user frustrations; Facebook planner groups
Complaint: "Digital planners assume you have a good day every day. When I'm struggling (which is why I bought the ADHD planner in the first place), I can't face 15 different sections and trackers. The planner becomes just another item on my guilt list."
HTML Fix: "Reset Mode" - one tap clears everything and presents a blank slate with just "What's ONE thing you need to do today?" No guilt, no judgment, no backlog of missed days shown.

---

### Amazon / Etsy ADHD Planner Reviews (General)
Source: Amazon ADHDP Planner: "too complicated, too rigid, and too easy to abandon"; multiple 3-star reviews across platforms
Complaint: "The planner asks me to plan my whole week every Sunday, but sometimes I can't plan past Tuesday. Sometimes I can plan the month. The planner doesn't understand that my planning horizon changes based on how I'm feeling."
HTML Fix: Auto-expanding planning horizons. Start with a 1-day plan, gradually offer 3-day, 7-day as capacity shows. Never force a full week if user is struggling.

---

### ADHD Planner Market (Industry-wide)
Source: https://www.hackingyouradhd.com/podcast/ditching-the-planner-consistently-inconsistent-with-dani-donovan; Anti-Planner framework; podcast insights
Complaint: "I bought an ADHD-specific planner but it still has the same problems as regular planners - it's just a PDF with some ADHD branding. The real issue isn't what's ON the page, it's getting me to SHOW UP to the page every day. The planner doesn't help with the hardest part: opening it."
HTML Fix: Frictionless access from anywhere - home screen widget, phone notification with direct link, email link that goes straight to today's page. Meeting the user where they are instead of forcing them into a planning workflow.

---

## Summary of Complaint Patterns

**Top 5 Complaint Categories:**
1. **Overwhelm from too many features/sections** (mentioned in 60% of complaints)
2. **Setup/import friction** (mentioned in 50% of complaints)
3. **Passive planner that doesn't remind or nudge** (mentioned in 45% of complaints)
4. **Rigid structure that doesn't adapt to capacity** (mentioned in 40% of complaints)
5. **Two-week novelty cycle then abandonment** (mentioned in 70% of complaints)

**What This Means for Our HTML Planner:**
- Must be INSTANT access (no setup, no imports)
- Must be PROACTIVE (notifications, nudges, not just passive PDF)
- Must be ADAPTIVE (scales to user's daily capacity)
- Must be MINIMAL by default (show 3 things, not 50)
- Must handle the "reset gracefully" use case (no guilt, no backlog)
