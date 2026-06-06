# MNM Four-App Value-Add Audit - 2026-06-06

## Executive summary
- Baseline principle: keep these as small, self-contained companion tools. No dashboards, no full planner vibes, no streaks/scores, no accounts, no AI claims, and no medical, therapy, cure, treatment, or coaching claims.
- The four current apps already cover the exercise mechanics well. The value gap is mostly not missing timers. It is missing the small before/after/context layers that make a tool feel complete even when the user skips the guided exercise.
- Highest-priority value lift across the set: add richer “what do I do with this afterwards?” outputs. Copyable text already exists in several apps; the next step is making those outputs more useful, printable, and chapter-specific.
- The best additions are lightweight choice layers: “why I’m here”, “how much capacity do I have”, “what kind of tilt is this”, or “what kind of recovery do I need”. These echo the ebook without becoming a planner.
- Body Stress Scan and 90-Second Emotional Pause should share a consistent body-map vocabulary, but not merge into one product. Body Stress Scan is stress/tension inventory; 90-Second Pause is emotion wave response.
- Balance Audit is closest to standalone commercial value because it already creates a tangible artefact. Its gap is follow-through: the Reset Card should feel more personally usable after the two-column audit.
- Recovery Menu Hub has the broadest bundle value, but also the highest overbuild risk. It should lean into “choose recovery instead of improvising”, not become a habit tracker, routine builder, or wellness dashboard.
- Codex CLI was available but blocked by the current ChatGPT-account model configuration (`gpt-5.3-codex` and `gpt-5` unsupported), so this audit was completed manually from the ebook/source docs and current HTML app files.

## Body Stress Scan
- Current app role: A chapter-one body tension inventory. It guides settling breaths, walks the user through seven body areas, records simple sensation labels, and ends with a copyable keepsake.
- Related ebook/chapter material found:
  - Chapter 1 frames stress as something that shows up in the body first: tightened muscles, shorter breath, racing heart, jaw/shoulder tension.
  - The exercise asks for three slow breaths, then attention to forehead, jaw, shoulders, arms, chest, stomach, and legs.
  - The book’s core instruction is observing where stress lands, not eliminating stress.
  - Closing phrase is explicitly: “Stress is here, but so am I.”
- Standalone value gap: If the user skips the scan, the current app is mostly an intro plus a keepsake shell. It does not yet help them choose why they are scanning, understand what the pattern might mean in plain language, or carry the awareness into the next five minutes. The app feels valid as a chapter companion, but slightly thin as a paid standalone unless the body-map result becomes more useful.
- Recommended additions, ranked 1-4:
  1. **Before-scan reason chooser**
     - What it is: A small pre-scan prompt: “What brought you here?” with 5-7 chips such as tight jaw, racing thoughts, hard email, scattered focus, after a meeting, before sleep, not sure.
     - Why it helps: It makes the app feel personalised without diagnosing anything. It also ties directly to Chapter 1’s digital overload, rumination loops, and stress-as-signal framing. The final keepsake can say “I came here because…” which creates a more complete artefact.
     - Complexity: low
     - Keep/cut note: Prioritise. This is the highest value-to-effort addition.
  2. **After-scan “carry it forward” micro-choice**
     - What it is: After the keepsake, offer one tiny next action: soften by five percent, unclench jaw once, drink water, step outside, close one tab, send later, or simply continue.
     - Why it helps: The ebook says awareness interrupts the loop and carries into the day. A tiny carry-forward choice makes the scan feel actionable without becoming a task list or plan.
     - Complexity: low
     - Keep/cut note: Prioritise, especially if it can be appended to the copyable keepsake.
  3. **Plain-language pattern sentence**
     - What it is: A generated but rule-based summary from selected areas, e.g. “Today the stress showed most in your upper body” or “Today the scan was mixed and quiet.” Avoid interpretation or advice.
     - Why it helps: Users perceive more value when the app reflects their input back in a coherent sentence. It makes the body-map feel less like tapping chips and more like a useful noticing tool.
     - Complexity: medium
     - Keep/cut note: Prioritise if implementation stays deterministic and humble. Avoid “this means…” language.
  4. **Screenshot-friendly body summary card**
     - What it is: A small visual card showing selected body areas plus the sensation words, designed for screenshot/copy rather than stored history.
     - Why it helps: Balance already has a tangible card. Giving Body Stress Scan a simple visual keepsake would make it feel more bundle-worthy and reuse the body silhouette as a brand asset.
     - Complexity: medium
     - Keep/cut note: Defer until the first three are chosen. Nice value, but more visual/QA work.
- Do not build yet:
  - Body history over time. It becomes dashboard-adjacent and invites interpretation.
  - “Stress type” results or nervous-system state labels. Too diagnostic and claim-risky.
  - Pain/body symptom guidance. This drifts into medical territory.

## Balance Audit Reset Card
- Current app role: A chapter-two audit and card maker. The user lists what steadies them and what tips them off balance, writes one small adjustment, then copies or exports a Reset Card.
- Related ebook/chapter material found:
  - Chapter 2 frames balance as built, not found, and losing balance as physics rather than failure.
  - The exercise asks for two columns: what steadies me and what tips me off balance, five items each.
  - It asks for one adjustment this week to lean into Column A.
  - The reset card has three lines: three breaths, name the tilt, one tiny steadying action.
- Standalone value gap: This app already has a strong tangible output. The gap is that the Reset Card is partly generic after the audit. If the user skips the full two-column work, they still need a quick way to create a useful card. If they complete the audit, the card should feel more directly shaped by their chosen steadier/tilter pair.
- Recommended additions, ranked 1-4:
  1. **Quick Card mode**
     - What it is: A “I only have one minute” path that asks for one tilter and one steadier, then generates the Reset Card without requiring full five-item columns.
     - Why it helps: This raises standalone value immediately. It preserves the chapter’s awareness-to-reset arc while giving overwhelmed users a low-friction path.
     - Complexity: medium
     - Keep/cut note: Prioritise. This is the strongest commercial addition for App 2.
  2. **Card personalisation line from Column A/B**
     - What it is: Add one optional line to the card: “When [tilter] shows up, I can reach for [steadier].” User chooses the pair from their entered items.
     - Why it helps: It turns the card from a generic mindfulness card into the user’s own reset card. It directly connects the audit to the artefact and increases perceived value without extra storage.
     - Complexity: low to medium
     - Keep/cut note: Prioritise.
  3. **Two export layouts: pocket and lock-screen use cases explained**
     - What it is: Keep the current PNG sizes but add clear use-case copy/previews: “Phone reminder” and “Notebook/wallet card”.
     - Why it helps: Buyers understand what they are getting. The value is not just “download image”; it is “a usable card for when things tilt.”
     - Complexity: low
     - Keep/cut note: Prioritise if export already works reliably.
  4. **Balance audit prompt bank**
     - What it is: A small expandable “if you’re stuck” prompt set: digital drains, body basics, boundaries, context switching, recovery moments.
     - Why it helps: Chapter 2 covers multitasking residue, emotional swings, freeze, always-on mode, boundary fuzziness, and skipped body basics. A prompt bank helps users complete the audit without inventing from a blank page.
     - Complexity: low
     - Keep/cut note: Defer after Quick Card and personalisation. Useful, but keep it small.
- Do not build yet:
  - Weekly review or recurring adjustment tracker. It becomes a planner/habit system.
  - Score-like balance meter. It gamifies a non-guilt exercise.
  - Stored card library. Nice later, but dashboard creep for now.

## Recovery Menu Hub
- Current app role: A duration chooser and guided timed sequence hub. It includes one-point focus, paced breathing, self-compassion reset, and fifteen-minute embodied reset, plus a copyable completion keepsake.
- Related ebook/chapter material found:
  - Chapter 6 defines recovery as practice, not personality, and says recovery choices should be visible so the user does not improvise while drained.
  - The Recovery Menu exercise includes micro choices under 10 minutes and macro choices over hours or days.
  - The hub also draws from Chapter 4’s self-compassion reset, Chapter 5’s embodied reset, and Chapter 7’s one-point focus practice.
  - The book emphasises that small rests are maintenance, not luxuries.
- Standalone value gap: The current app is useful if the user wants a timed session. If they do not, the menu’s original ebook idea, a visible personal recovery menu, is underused. The hub should feel like a small recovery decision aid, not only a timer launcher.
- Recommended additions, ranked 1-4:
  1. **Build your tiny recovery menu**
     - What it is: A compact optional section where the user picks or writes 3 micro options and 1 macro option, then copies/saves it as text.
     - Why it helps: This is the actual Chapter 6 exercise and would make the hub feel much more standalone. It adds value even when the user does not start a timer.
     - Complexity: medium
     - Keep/cut note: Highest priority for App 3. Keep it small and copyable, not stored as a dashboard.
  2. **“What kind of recovery do I need?” chooser**
     - What it is: A pre-menu chooser with four non-scored states: body tense, mind noisy, critic loud, attention scattered. It recommends one existing route but leaves all options available.
     - Why it helps: Users arriving drained often cannot decide. This matches the book’s “consult the menu instead of improvising” point and improves perceived intelligence without AI or scoring.
     - Complexity: medium
     - Keep/cut note: Prioritise if framed as “try this” not “you need this”.
  3. **Session-specific exit card**
     - What it is: Completion card tailored by route: one object noticed, kind phrase, body area moved/scanned, or next small action.
     - Why it helps: The current keepsake is calm but generic. Route-specific cards make the four sessions feel meaningfully different and closer to the source chapters.
     - Complexity: medium
     - Keep/cut note: Prioritise after the recovery menu builder.
  4. **No-timer recovery list**
     - What it is: A clearly labelled “I cannot do a session” list with five tiny options from the book: water, stretch, step outside, one breath, quick check-in.
     - Why it helps: This preserves the app’s value on low-capacity days and reinforces the anti-pressure brand. It turns the hub into a useful companion even when the user skips the timed exercises.
     - Complexity: low
     - Keep/cut note: Prioritise if simple. Do not let it expand into a library.
- Do not build yet:
  - Habit calendar, streaks, frequency logs, or recovery score. This conflicts with the book’s anti-pressure stance.
  - Large recovery library with categories, filters, and saved routines. Too dashboard-like.
  - Social/support workflows with reminders to contact people. Useful concept, but could imply coaching/support system complexity.

## 90-Second Emotional Pause
- Current app role: A guided strong-emotion pause. It walks the user through stop, name, locate, breathe for about 90 seconds, reopen, and copy a keepsake.
- Related ebook/chapter material found:
  - Chapter 8 frames emotions as signals, not problems to crush.
  - The exercise sequence is Stop, Name, Locate, Breathe, Reopen.
  - The body location list is chest, throat, stomach, jaw, with user-chosen location.
  - The 90-second wording must stay hedged: many people find the wave eases within about 90 seconds, but it varies.
- Standalone value gap: The app is already a complete acute-use tool. The gap is pre/post support: if the user is too activated for a full 90 seconds, or if they skip the breathing timer, there should still be a useful way to name the wave and choose a tiny next step.
- Recommended additions, ranked 1-4:
  1. **Fast “name and locate only” path**
     - What it is: A short path that lets the user name the emotion, tap body location, and copy a one-line pause card without starting the 90-second clock.
     - Why it helps: In real strong-emotion moments, the timer may feel like too much. This preserves the core chapter skill, naming and locating, even when the full exercise is skipped.
     - Complexity: medium
     - Keep/cut note: Prioritise. It increases standalone value without expanding scope.
  2. **Emotion word ladder**
     - What it is: A small optional “more specific words” expansion under common chips. Example: anger can branch to irritated, resentful, protective; sadness to disappointed, lonely, tender.
     - Why it helps: The ebook mentions emotional granularity in Chapter 2 and Chapter 8’s naming step benefits from specificity. This makes the app feel more helpful than a generic breathing timer.
     - Complexity: low to medium
     - Keep/cut note: Prioritise if the word list stays short and plain.
  3. **Next-wise-step chooser**
     - What it is: After breathing, offer small chips: drink water, wait before replying, step outside, write one sentence, ask for space, message one person, do nothing yet.
     - Why it helps: The final ebook prompt asks for the next wise step. Chips help a flooded user choose without turning it into planning.
     - Complexity: low
     - Keep/cut note: Prioritise. Strong fit and low effort.
  4. **Wave check-in after the clock**
     - What it is: One gentle post-timer prompt: “What is here now?” with chips such as softer, still strong, clearer, tired, not sure.
     - Why it helps: It adds perceived closure without claiming the emotion should change. It also keeps the hedged 90-second claim honest by allowing “still strong”.
     - Complexity: low
     - Keep/cut note: Keep if phrased carefully. Avoid before/after scoring.
- Do not build yet:
  - Emotion intensity rating or before/after score. It can feel like a test and invites gamified progress.
  - Advice trees by emotion. This drifts into coaching/therapy territory.
  - Crisis or mental-health triage content. Important in real life, but not appropriate for this tiny product without a separate safety/legal strategy.

## Cross-app baseline suggestions
- Add a small “quick path” to any app whose full exercise takes more than a minute. The quick path should preserve the chapter’s core move, not become a separate product.
- Standardise one pre-session prompt type: “What brought you here?” This creates personal relevance and better keepsakes without accounts or history.
- Standardise one post-session prompt type: “What is the smallest good next step?” This makes outputs more useful while staying anti-planner.
- Make every app’s copyable keepsake include three parts: context, noticed result, next tiny carry-forward. This would create bundle consistency.
- Use screenshot-friendly cards only where the exercise produces a tangible artefact. Balance definitely; Body Stress Scan possibly; Recovery and 90-Second Pause should mostly stay text-first.
- Keep all persistence optional and local-only. Prefer copy/export/screenshot over histories, calendars, libraries, or saved dashboards.

## Decision list for Kyle
- Approve first: Balance Audit **Quick Card mode** plus personalised “When [tilter], I can reach for [steadier]” line. Biggest perceived standalone value lift.
- Approve second: Recovery Menu **Build your tiny recovery menu**. This brings App 3 closer to the actual Chapter 6 exercise and makes it useful without starting a timer.
- Approve third: Body Stress Scan **Before-scan reason chooser** plus **carry it forward** micro-choice. Low effort, high warmth, better keepsake.
- Approve fourth: 90-Second Pause **fast name-and-locate path** plus **next-wise-step chips**. Makes the app usable when the full timer is too much.
- Approve fifth: Cross-app keepsake standard: context + noticed result + smallest next step, copyable by default.
