# A/B Rebuild — MNM MiniMax M3 (2026-06-05)

Two single-file candidates built on top of the 2026-06-03 MiniMax originals.
Same product logic, fresh visual direction. This is **foundation clay**, not
final brand polish. The point is to test whether a richer, more editorial
visual treatment still reads as "calm Mindful, Not Mythical" before the team
commits the new direction into the final builds.

## Files in this folder

| File | Origin | What it is |
|------|--------|------------|
| `body-stress-scan.html` | rebuild of `prototypes/minimax-m3-mnm-body-stress-scan-2026-06-03.html` | Chapter 1 body stress scan, new visual direction |
| `recovery-menu-hub.html` | rebuild of `prototypes/minimax-m3-mnm-recovery-menu-hub-2026-06-03.html` | Chapter 6 recovery menu, new visual direction |
| `AB-README.md` | this file | comparison, guardrails, what to inspect first |

## Why these two (and not the other two)

The other two MNM candidates are the **Balance Audit + Reset Card** (App 2) and
the **90-Second Emotional Pause** (App 4). They were also rebuilt, but Kyle
asked for **two** A/B candidates this round, not four.

The default pick is the pair the brief called out:

- **Body Stress Scan** — the brief flagged it as coherent but visually plain,
  and noted that a clearer intro and visual elevation would help.
- **Recovery Menu Hub** — the broad, complex hub, easiest to over-polish. A
  good stress test for the new prompt: if it survives this direction without
  feeling busy, the direction is safe to apply to the rest of the bundle.

## What changed in this candidate

The product logic (areas, feelings, session data, breath clock, keepsake,
localStorage, clipboard, focus rings, reduced-motion, ARIA) is unchanged.
What is different is the **visual direction** and the **type system**.

### Palette

The 2026-06-03 build leaned hard on sage and cream. This candidate uses a
small accent palette while still keeping the warm cream page. The hint ink
was also darkened to keep it AA-compliant on the slightly-warmed card
surface (the previous build's hint failed AA on the card for 15px italic).

| Token | Hex | Where it shows |
|-------|-----|----------------|
| `--cream` | `#f4ede0` | page background |
| `--warm` | `#ece1cc` | primary card surface |
| `--warm-soft` | `#efe7d6` | nested card surface, chip background |
| `--ink` | `#322133` | body ink (aubergine) |
| `--ink-heading` | `#2a3a2f` | heading ink (deep forest) |
| `--ink-hint` | `#4a523a` | hint ink, AA on cream and on card |
| `--aubergine` | `#6a3a52` | italic display accents, drop cap, pull-quote glyph |
| `--terracotta` | `#b04a2c` | focus rings, eyebrow dot, "you are here" |
| `--ochre` | `#876228` | figure region fill for "buzzing" (darkened from the first pass so it passes 3:1 non-text on the warm card) |
| `--teal` | `#4a7572` | figure region fill for "numb" |
| `--dusty-rose` | `#a86868` | figure region fill for "nothing" |
| `--forest` | `#2a3a2f` | primary action, figure region fill for "calm" |
| `--focus` / `--breath` / `--compassion` / `--embodied` | `#2a3a2f` / `#556347` / `#8a4848` / `#b04a2c` | per-session accent for the Recovery Menu cards. Sage and rose were darkened from the first pass so cream text on the active phase chip passes AA on both cream and the warm card. |

The warm cream page is preserved. Accent colour is added to figure region
fills (Body Stress Scan) and to menu card top stripes plus active phase
chips (Recovery Menu Hub). Body text never sits on an accent below 4.5:1
contrast.

### Typography

A more characterful type scale, more contrast in weight, more rhythm.

- **Display serif** is now **Fraunces** (with a graceful fallback to
  Cormorant Garamond / Iowan Old Style / Georgia). `font-variation-settings`
  uses `opsz 96` and `SOFT 50` to bring out the optical italic on hero
  numbers and headlines. Headings are weight **400**, not bold. The hero
  italic accent word ("sit", "have", "noticed", "showed up") uses
  `font-weight: 300` with `SOFT 100` for the softest cut.
- **Body** is still **Inter** at 17px, 1.55 line-height.
- **Eyebrow** is a tracked small-caps sans (11.5px, 0.18em), prefixed with a
  small terracotta dot and an italic serif descriptor ("&middot; the recovery
  menu").
- **Hero numerals** (the "1", "3", "10", "15" on the menu cards) are 56px
  Fraunces with `font-variation-settings: "opsz" 144, "SOFT" 50` and a
  negative letter-spacing. The minutes unit is a small italic adjacent to
  the number, not a second line.
- **Timer numerals** use `font-variant-numeric: tabular-nums` so the digits
  don't shift while counting.
- **Editorial details** that earn their place: a serif drop cap on the Body
  Stress Scan intro, an open-quote glyph in the keepsake card, a
  numbered-list with decimal-leading-zero counters on the "what you will
  do" intro, and a divider with an italic serif mark in the middle.

### Layout details

- The figure card in the Body Stress Scan now has a thin top accent stripe
  made of all five feeling colours at low opacity, so the visual rhymes
  with the colour chips on the right.
- The Recovery Menu cards each carry a single-colour accent stripe at the
  top (forest / sage / dusty rose / terracotta), plus the chapter label
  on the right of the time. The active phase chip in a session echoes
  the same accent.
- The phase timer numerals are 52px serif with tabular nums, in place of
  the previous build's 44px serif with default kerning.
- The hero headings on the intro and menu screens use one italic accent
  word, so the title reads as editorial copy rather than as a label.

## What Claude / Kyle should inspect first

1. **Open `body-stress-scan.html` in a mobile-width browser (around 390px
   wide).** Walk the full flow: intro -> three breaths -> all seven body
   areas -> close. Watch the body figure for colour fill on each tap.
2. **Open `recovery-menu-hub.html` in a mobile-width browser.** Tap each of
   the four menu cards and notice the accent stripe and the active phase
   chip. The breath phase should show a different ring colour per session
   (forest / sage / dusty rose / terracotta).
3. **Try the `prefers-reduced-motion` setting** in DevTools (Rendering tab
   -> "Emulate CSS media feature"). Both apps should fall back to text-only
   breath cycles. No layout shift, no missing labels.
4. **Type-check both files.** `node --check` is in the verification block
   below.
5. **Spot the hint colour.** The hint ink is `#4a523a`, which passes WCAG AA
   on both cream and the card surface. The previous build's hint (`#5a6849`)
   was AA on cream but failed on card for 15px italic.

## Guardrails and accessibility caveats

These are guardrails the new direction **must** keep passing, not things
to relax:

- **No em-dashes (U+2014) in user-visible copy.** The HTML escaping is
  intact. Placeholders and aria-labels are em-dash-free. The verification
  block below does a content grep.
- **No external URLs.** No CDN, no fonts loaded from a server, no remote
  images. Everything is inline.
- **No medical, therapy, cure, diagnosis, treatment, or coaching claims.**
  "Self-guided reflection, not medical advice" footer is intact on both
  files.
- **No streak, no score, no keeping count.** Both apps remain export-only
  by design; localStorage is used only for the in-progress session
  (Recovery Menu only) and the in-progress scan (Body Stress Scan keeps it
  in JS memory only).
- **Reduced motion:** breath ring animation is dropped. The cycle still
  moves on text alone ("Breathe in", "Hold", "Breathe out", "Paused").
- **Keyboard:** every control is reachable. Areas on the figure have
  `role="button"`, `tabindex="0"`, and an `aria-label`. Menu cards are
  buttons. Pause / Exit / Next / Save are buttons. The textarea in the
  write phase is a real `<textarea>`.
- **Focus rings:** terracotta 2px outline, 3px offset. Visible on every
  focused control. No suppression of the focus ring for any element.
- **Type contrast:** hint ink `#4a523a` was specifically chosen to pass
  WCAG AA on both the cream page and the warm card surface. If the team
  decides to push the card surface cooler or warmer, the hint ink will
  need a re-check (use `scripts/wcag-contrast.py` if it ships with the
  repo, or a manual `luminance` calc).
- **Aubergine** (`#6a3a52`) is used as italic display accent and as the
  pull-quote glyph. It is **not** used as body text. It is AA on cream
  (~7.3:1) so it would pass, but we keep body text in `--ink` (`#322133`)
  for maximum legibility.

## What was deliberately deferred

These are not blockers. They are reserved for the final polish pass and
should not block the A/B decision.

- Real `GroundedHumanity_FullLogo_Transparent_2400w.png` in the brand
  slot. The current brand-slot is a serif italic wordmark with hairline
  rules on either side.
- A `GH_Icon_TreeOnly_Transparent_1024.png` watermark in the corner.
- A tactile haptic on figure-region tap (`navigator.vibrate`, mobile only,
  behind a feature check).
- A user-toggle for breath ratio (4/6 is the book default).
- A "save scan" history to localStorage (the brief calls for export-only
  by design).
- A `verify-html-prototype.py`-style scan: the bundle skill lists a
  Python verifier, but no such script ships in `scripts/` of this repo
  (only `git-pull-theo.sh`, `memory-watchdog.sh`, `skill-sync-watchdog.sh`).
  Verification is done inline below.

## Verification done in this folder

Run from the `theo/` workspace root, with the candidate files in
`drafts/mnm-minimax-ab-redo-2026-06-05/`.

1. **File listing** — both files exist, are non-empty, and are well under
   the previous originals' line count where it makes sense.
2. **JS parse** — extracted the inline `<script>` block from each file and
   ran `node --check` on it. Both pass.
3. **External URL scan** — `grep -E 'https?://'` on both files. Only the
   `xmlns` declarations and aria/role attributes hit (no real external URL).
4. **Em-dash scan** — `grep -P '\xE2\x80\x94'` on both files. Zero hits in
   user-visible content. (There is one CSS `content: "\201C"` left-curly
   double quote and several italic em equivalents, but **em-dashes** are
   zero.)
5. **Banned-framing scan** — `grep -i` for `therapy`, `cure`, `diagnosis`,
   `treatment`, `medical`, `coaching`, `streak`, `score`. Zero hits except
   for the literal "not medical advice" disclaimer line and the word
   "diagnosis" inside the design retro comment (not user-visible).
6. **Open question for the team** — the design-retro comment block at the
   top of each file is the foundation-clay rationale. Kyle can choose to
   keep it in the final files or strip it down.
