#!/usr/bin/env python3
"""
Podcast demo: two voices discussing Chapter 1 of Mindful, Not Mythical.
Generates individual segments via Hermes TTS, then stitches them together.
"""

import os, subprocess, json, wave, struct, shutil

SEGMENTS_DIR = "/home/kylemoore/theo/prototypes/podcast_segments"
OUTPUT_FILE = "/home/kylemoore/theo/prototypes/mnm_chp1_podcast_demo.wav"

# Podcast script — Host (Ryan) and Guest/Expert (Sonia)
script = [
    # Intro
    ("Ryan", "Welcome back to Grounded Minds. I'm your host, and today we're talking about something I think a lot of us can relate to — the gap between knowing mindfulness is good for us and actually being able to do it."),
    ("Sonia", "And I'm Sonia. We're going to dig into the first chapter of a new book called Mindful, Not Mythical. And honestly, the opening line says it all — this is for anyone who's ever picked up a mindfulness book and felt like it was written in a language they couldn't quite live by."),
    
    # The stress trap
    ("Ryan", "That hit home for me. Chapter One is about something called the Stress Trap. And one thing that stood out is how our phones blur the line between work and rest. It's not just an annoyance — the book cites a Stanford study showing heavy multitaskers actually perform worse on memory and attention tasks."),
    ("Sonia", "Right, and I love the framing here. The book doesn't tell you to throw your phone away. It talks about creating 'small islands of presence' — like pausing to notice your breath before opening your inbox, or putting your phone in another room while you cook dinner. These micro-breaks act like little levees against the tide of digital noise."),
    
    # The amygdala
    ("Ryan", "Levees — I like that. The chapter also explains what's happening in the brain. There's this region called the amygdala — basically a smoke detector. It fires before your rational brain even gets a say. That's why stress feels like it floods you out of nowhere."),
    ("Sonia", "And here's the useful part — the chapter talks about how you can soften that alarm just by naming it. There's research showing that when people put their feelings into words — 'this is anger,' 'this is fear' — the amygdala actually calms down. It gives the brain a foothold. That's not just theory — the book walks through real examples: the professional in a tense meeting, the student on exam day, the caregiver waiting for test results."),
    
    # Rumination
    ("Ryan", "Then there's rumination — the book calls it 'gasoline on the fire.' The cycle where your mind replays the same worry over and over. It feels like problem-solving, but it's just running in place on a mental treadmill."),
    ("Sonia", "And mindfulness offers a way off that treadmill. Not by silencing the mind — that's the myth — but by noticing the loop when it starts and refusing to fuel it. The book says each time you notice, you're a little less caught."),
    
    # The mindset shift
    ("Ryan", "The chapter ends with a powerful reframe — stress itself isn't the enemy. It's our relationship to stress that makes it heavier. That dashboard light analogy: a flashing fuel light isn't a moral failing, it's information. Something needs attention."),
    ("Sonia", "There's also a practical exercise — the Body Stress Scan. Just three slow breaths, scanning from forehead to feet, labelling tension without judgement. Not about eliminating stress, just observing where it lands in your body. And the closing reminder: 'Stress is here, but so am I.'"),
    ("Ryan", "That's the whole ethos of the book, isn't it? Not about perfection. It's about progress. About finding calm without needing to escape your life, and clarity without myths that don't resonate."),
    ("Sonia", "If this sounds like something you need, Mindful, Not Mythical is available now. Thanks for listening, and we'll see you next time."),
    ("Ryan", "Take care of yourselves."),
]

os.makedirs(SEGMENTS_DIR, exist_ok=True)

print("Generating podcast segments...")
segment_files = []

for i, (speaker, text) in enumerate(script):
    output = f"{SEGMENTS_DIR}/seg_{i:02d}.mp3"
    
    # Use Python to call edge-tts directly for more control
    voice = "en-GB-RyanNeural" if speaker == "Ryan" else "en-GB-SoniaNeural"
    
    # Build a Python script for this segment
    gen_script = f"""
import asyncio
import edge_tts

async def main():
    tts = edge_tts.Communicate(
        text={repr(text)},
        voice="{voice}",
        rate="-10%" if "{speaker}" == "Ryan" else "+0%",
    )
    await tts.save({repr(output)})
    print(f"Done: seg_{i:02d} - {speaker}")

asyncio.run(main())
"""
    result = subprocess.run(
        ["python3", "-c", gen_script],
        capture_output=True, text=True, timeout=120
    )
    if result.returncode != 0:
        print(f"  seg_{i:02d} failed: {result.stderr[:200]}")
        continue
    
    segment_files.append(output)
    print(f"  seg_{i:02d}: {speaker} ✓")

print(f"\nGenerated {len(segment_files)}/{len(script)} segments")
print(f"\nSegments saved to {SEGMENTS_DIR}/")
print(f"To stitch them together and add crossfades:")
print(f"  python3 stitch_podcast.py")