#!/usr/bin/env python3
"""
Generate a NotebookLM-style dynamic podcast from Chapter 1.
Two voices: Alex (curious, analytical) + Sam (grounded, relatable)
"""

import os, sys
os.environ['PATH'] = '/tmp:' + os.environ.get('PATH', '')

from pydub import AudioSegment

OUTPUT_DIR = "/home/kylemoore/theo/prototypes"
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "mnm_chp1_notebooklm_style.mp3")

# Script in NotebookLM style — Alex + Sam
script = [
    # --- INTRO ---
    ("Sonia", "Welcome to Mindful, Not Mythical — the audio companion. I'm Sam."),
    ("Ryan", "And I'm Alex. Sam, before we even get into this — the title alone made me pause. Mindful, Not Mythical. Because haven't we all read those mindfulness books that feel like they were written for someone who already has their life together?"),
    ("Sonia", "Oh, a thousand percent. And that's exactly where this book starts. The author says — and I'm paraphrasing — 'If you've ever picked up a mindfulness book and felt like it was written in a language you couldn't quite live by, this one is for you.' And I was like — okay, you've got my attention."),
    ("Ryan", "Right, because most mindfulness advice lands as either super clinical — here's the neuroscience — or super mystical — here's the ancient secret. And neither helps you when you're stressed at 10pm on a Tuesday."),

    # --- THE STRESS TRAP ---
    ("Sonia", "Exactly. Chapter 1 is called The Stress Trap. And the first thing they hit you with is digital overload. There's this Stanford study they cite — over 250 adults — and it found that heavy multitaskers actually perform worse on memory and attention tasks."),
    ("Ryan", "Mm-hmm. The more you juggle, the more scattered your attention gets. But here's what I loved — the book doesn't tell you to throw your phone in the bin. It talks about creating what it calls 'small islands of presence.'"),
    ("Sonia", "Islands of presence — that's such a good phrase."),
    ("Ryan", "Right? Like pausing to notice your breath before you open your inbox. Putting your phone in another room while you cook dinner. Tiny little levees against the tide. It's not about being perfect — it's about building micro-moments."),

    # --- AMYGDALA ---
    ("Sonia", "Okay, and then they get into what stress actually does in the body. There's this part about the amygdala — which is basically your brain's smoke detector."),
    ("Ryan", "Smoke detector — I love that analogy."),
    ("Sonia", "It fires before your rational brain even gets a say. That curt email comes in, boom — alarm's blazing. But here's the kicker — there's research showing that if you just name the feeling — 'this is irritation,' 'this is fear' — the amygdala calms down."),
    ("Ryan", "Wait — really? Just putting words to it?"),
    ("Sonia", "Yeah. It gives your brain a foothold. Like flipping a switch from pure reaction to something steadier. The book walks through real examples — the professional in a tense meeting, the student on exam day, the caregiver waiting for test results."),
    ("Ryan", "That's the kind of practical thing I can actually use. Not 'meditate for 20 minutes' — just... name it. Three seconds."),

    # --- RUMINATION ---
    ("Sonia", "Exactly. Then they hit rumination — and the way they describe it is brilliant."),
    ("Ryan", "Let me guess — 'gasoline on the fire'?"),
    ("Sonia", "Yes! If stress is the spark, rumination is the gasoline. It's that loop where your mind replays the same worry over and over. Feels like problem-solving, but it's really just running on a mental treadmill."),
    ("Ryan", "And you can't just tell someone to stop ruminating — that never works. So what's the alternative?"),
    ("Sonia", "Mindfulness here isn't about silencing the mind. It's about noticing the loop — 'ah, here's the replay again' — and that act of noticing creates enough space to step off the treadmill."),
    ("Ryan", "Each time you notice, you're a little less caught. I can work with that."),

    # --- MINDSET SHIFT + BODY SCAN ---
    ("Sonia", "And the chapter ends with a really powerful reframe. Stress itself isn't the enemy — it's our relationship to it that amplifies it."),
    ("Ryan", "The dashboard light analogy."),
    ("Sonia", "Yes! A flashing fuel light isn't a moral failing — it's information. Something needs attention. That reframe alone changes everything."),
    ("Ryan", "There's also the Body Stress Scan at the end of the chapter. Three slow breaths, scan from forehead to your feet, label whatever tension you find without judgement. Not about eliminating stress — just observing where it lands."),
    ("Sonia", "And the closing line: 'Stress is here, but so am I.' That's the whole book in one sentence, isn't it?"),
    ("Ryan", "It really is. Look, if this sounds like something you need — and honestly, when was the last time you didn't need it — Mindful, Not Mythical is available now. We'll be back with Chapter 2 soon."),
    ("Sonia", "Take care of yourselves out there."),
]

os.makedirs(OUTPUT_DIR, exist_ok=True)
print("Generating NotebookLM-style podcast...")

import subprocess

segments = []
for i, (speaker, text) in enumerate(script):
    voice = "en-GB-RyanNeural" if speaker == "Ryan" else "en-GB-SoniaNeural"
    out = f"/tmp/pod_seg_{i:02d}.mp3"
    
    # Rate + pitch tweaks for personality
    rate = "-8%" if speaker == "Ryan" else "+2%"
    
    code = f"""
import asyncio, edge_tts
async def main():
    tts = edge_tts.Communicate(text={repr(text)}, voice="{voice}", rate="{rate}")
    await tts.save({repr(out)})
    print(f"seg_{i:02d} ok")
asyncio.run(main())
"""
    r = subprocess.run(["python3", "-c", code], capture_output=True, text=True, timeout=120)
    if r.returncode != 0:
        print(f"  seg_{i:02d} FAILED: {r.stderr[:150]}")
        continue
    segments.append((i, speaker, out))
    print(f"  seg_{i:02d}: {speaker} ✓")

print(f"\nStitching {len(segments)} segments...")

combined = AudioSegment.silent(duration=300)

for idx, (seg_i, sp, path) in enumerate(segments):
    clip = AudioSegment.from_mp3(path)
    combined += clip
    
    # Dynamic pauses: longer at topic shifts, shorter between back-and-forth
    is_topic_shift = seg_i in (3, 7, 11, 15, 17)
    pause_ms = 400 if is_topic_shift else 150
    combined += AudioSegment.silent(duration=pause_ms)
    
    # Clean up temp file
    os.remove(path)

combined.export(OUTPUT_FILE, format="mp3", bitrate="64k")
dur = len(combined) / 1000
size = os.path.getsize(OUTPUT_FILE) / 1024
print(f"\nDone! {dur:.1f}s podcast ({size:.0f} KB)")
print(f"Saved: {OUTPUT_FILE}")