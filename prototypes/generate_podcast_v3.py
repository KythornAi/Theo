#!/usr/bin/env python3
"""
V3 Podcast Generator — NotebookLM-style two-voice podcast.
Uses the exact banter patterns from the real transcript:
- Host 1: curious fact-finder (Ryan - slower, thoughtful)
- Host 2: grounded connector (Sonia - warmer, relatable)
- Natural interruptions, confirmers, callbacks
- Analogy-driven openings, practical takeaways
"""

import os, sys
os.environ['PATH'] = '/tmp:' + os.environ.get('PATH', '')

from pydub import AudioSegment

OUTPUT_FILE = "/home/kylemoore/theo/prototypes/mnm_chp1_v3_notebooklm_style.mp3"

# ── V3 Script: Authentic NotebookLM banter ────────────────────────────
script = [
    # --- OPENING: Relatable analogy ---
    ("Sonia", "You know how when a massive fire alarm goes off in a building, there's that split second before anyone actually moves?"),
    ("Ryan", "Oh yeah — everyone just kind of freezes."),
    ("Sonia", "Right. The noise is deafening, strobe lights flashing, your heart jumps into your throat."),
    ("Ryan", "That's pure unfiltered biology taking over. Your sympathetic nervous system is screaming at you — move now, survival is on the line."),
    ("Sonia", "Exactly. But then you look around and realise someone just burned their toast in the break room. The actual threat isn't real."),
    ("Ryan", "But your body doesn't know that yet."),
    ("Sonia", "No, it's still completely hijacked by that blaring alarm. Your hands are shaking, pulse racing, and you can't just logically command your biology to calm down."),

    # --- INTRODUCE THE BOOK ---
    ("Ryan", "Because the chemical flood has already happened. And that's exactly where we're starting today — a deep dive into Chapter One of a book called Mindful, Not Mythical."),
    ("Sonia", "And the mission is to bridge the gap between hard science and human reality. Stripping away the intimidating mysticism of ancient traditions, finding practical tools you can actually use."),
    ("Ryan", "Love that. The whole framework pivots on a brilliant observation from William James: the greatest weapon against stress is our ability to choose one thought over another."),
    ("Sonia", "Okay, let's unpack that. Because choosing your thoughts sounds great on a motivational poster."),
    ("Ryan", "Right, but in practice?"),
    ("Sonia", "In practice, when you're in the trenches of a brutal week, it feels impossible. Most mindfulness guides feel like reading an instruction manual for a life you don't even lead."),
    ("Ryan", "They really do. They demand 45 minutes on a linen cushion clearing your mind. If you're a parent or a caregiver or juggling three projects, that's not reality."),

    # --- DIGITAL OVERLOAD ---
    ("Sonia", "So we're aiming for progress, not perfection. Micro shifts. A single breath before answering an aggressive email."),
    ("Ryan", "And to even begin choosing our thoughts, we have to examine the modern environment — because it is aggressively strip mining our attention."),
    ("Sonia", "Strip mining — that's exactly what it is."),
    ("Ryan", "Our devices buzz more than our own thoughts now. The boundary between work and home hasn't blurred, it's collapsed."),
    ("Sonia", "But we wear multitasking like a badge of honour. Look at me, I can do everything at once."),
    ("Ryan", "We do. But Stanford looked at over 250 adults and found heavy multitaskers — people constantly toggling between tabs, phones, conversations — actually performed worse on memory and attention tasks."),
    ("Sonia", "Wait, really? So the people who practice juggling the most are the worst at it?"),
    ("Ryan", "Yes. Counter-intuitive, right? But the brain can't process two high-level tasks simultaneously. It's not multitasking, it's rapid task switching, and there's a biological cost."),
    ("Sonia", "What kind of cost?"),
    ("Ryan", "Every time you shift attention, your brain burns glucose. Worse, it leaves behind attention residue — a piece of your cognitive bandwidth stays stuck on that previous email."),
    ("Sonia", "So checking emails at midnight while watching TV isn't doing two things at once. It's a slow leak of mental energy."),

    # --- AMYGDALA + AFFECT LABELING ---
    ("Sonia", "Okay, but how does this connect to actual stress? We can't throw our phones away."),
    ("Ryan", "We can't. So the book uses this image of building small islands of presence — little levees against the tide. Phone in another room while you cook. Ten minutes of fiercely protected attention."),
    ("Sonia", "And those levees matter because fractured attention links directly to physiological stress. When you're in constant hyperarousal, your body starts interpreting digital noise as a physical threat."),
    ("Ryan", "Wait — just information triggers the same circuitry as a predator?"),
    ("Sonia", "Exactly. An email from your boss at 10pm fires the same biological circuitry as a tiger in the bushes. Stress always lands in the body first — heart rate drops, muscles tighten, breathing shifts."),
    ("Ryan", "And the central processor for all of this is the amygdala. The brain's internal smoke detector."),
    ("Sonia", "Spot on. It's incredibly fast and completely bypasses logic. Sensory input hits the amygdala before it ever reaches the prefrontal cortex."),
    ("Ryan", "So by the time I've consciously registered the email, the cortisol flood has already happened."),
    ("Sonia", "Yes. But here's where it gets really interesting — we are not helpless against that flood. Neuroimaging shows that when people simply put their feelings into words — this is anger, this is fear — the amygdala calms down."),
    ("Ryan", "Just by saying it out loud?"),
    ("Sonia", "Just by naming it. And simultaneously, the right ventrolateral prefrontal cortex lights up."),
    ("Ryan", "So naming the feeling is like hitting snooze on the smoke detector."),
    ("Sonia", "That's exactly it. You force the higher-order language centres online, buying your logical brain the few seconds it needs to check if there's an actual fire."),

    # --- REAL EXAMPLES ---
    ("Ryan", "And real people use this every day. A caregiver in a waiting room whispers 'this is worry' and feels their chest unclench."),
    ("Sonia", "A student on exam day labels their nerves as anxiety instead of spiralling into panic. It gives them a foothold."),
    ("Ryan", "Okay, but what happens when you name the emotion, it works for a second, and the thought just immediately returns?"),
    ("Sonia", "That's the critical distinction — between initial reaction and prolonged suffering. If stress is the spark, rumination is the gasoline."),
    ("Ryan", "Rumination is the gasoline. That's going to stick with me."),
    ("Sonia", "It's that loop where you replay the same worry endlessly. You replay a curt email and with each pass it feels sharper. But the brain tricks you into thinking it's productive, like you're problem-solving."),

    # --- MINDSET SHIFT ---
    ("Ryan", "So how does mindfulness actually break this? We're not trying to empty our minds."),
    ("Sonia", "No linen cushions required. Mindfulness here is simply metacognition — thinking about your thinking. You notice the loop, say 'ah, here's the replay again,' and refuse to pour more gasoline on the spark."),
    ("Ryan", "And if fighting the stress makes it worse, how do we reframe it?"),
    ("Sonia", "The book uses a dashboard light analogy. A flashing fuel light isn't a moral failing, it's data. Stress is the same — just a signal that something needs attention."),

    # --- BODY SCAN EXERCISE ---
    ("Ryan", "Okay but if I'm about to walk into a big presentation and my heart is pounding, how do I practically convince myself it's just information?"),
    ("Sonia", "That's the challenge. When cognitive reframing isn't enough, you have to work from the body up. There's a protocol called the body stress scan."),
    ("Ryan", "Walk me through it."),
    ("Sonia", "Find a quiet spot — even a parked car works. Three slow breaths, longer exhale than inhale. That long exhale is the physiological brake pedal."),
    ("Ryan", "That sends a signal that we're not running from a tiger."),
    ("Sonia", "Exactly. Then you scan your body. Forehead — notice any tightness, and here's the trick — you soften it by just 5%."),
    ("Ryan", "Only 5%? Not completely relax?"),
    ("Sonia", "Because if you command a stressed brain to completely relax, it detects the lie. 5% bypasses the brain's BS detector entirely. It's a mathematically achievable micro goal."),
    ("Ryan", "That is brilliant. Progress, not perfection."),
    ("Sonia", "Exactly. Then jaw, shoulders, down through your body. Wherever you find tension, label it without narrative. 'Tight.' 'Buzzing.' 'Heavy.' You're reading the dashboard light without judgment."),

    # --- CLOSING ---
    ("Ryan", "And the closing mantra after the scan — 'Stress is here, but so am I.'"),
    ("Sonia", "That's the whole book in one sentence. It acknowledges the reality without letting it consume you. You're making room for it in the passenger seat, but you're not letting it drive."),
    ("Ryan", "If this resonated, Mindful, Not Mythical is available now. Use those micro shifts this week. Build the levees. And we'll catch you on the next deep dive."),
    ("Sonia", "Take care of yourselves out there."),
]

os.makedirs(os.path.dirname(OUTPUT_FILE) or ".", exist_ok=True)
print("Generating V3 NotebookLM-style podcast...")

import subprocess

segments = []
for i, (speaker, text) in enumerate(script):
    voice = "en-GB-RyanNeural" if speaker == "Ryan" else "en-GB-SoniaNeural"
    out = f"/tmp/pod_v3_seg_{i:02d}.mp3"
    
    # Rate tweaks for personality
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

silence_short = AudioSegment.silent(duration=120)   # ~0.12s between quick back-and-forth
silence_medium = AudioSegment.silent(duration=280)   # ~0.28s at topic shifts
silence_long = AudioSegment.silent(duration=500)     # ~0.5s at major transitions

# Mark topic shift segments for variable pauses
topic_shifts = {0, 8, 16, 24, 32, 37, 44, 49}

for idx, (seg_i, sp, path) in enumerate(segments):
    clip = AudioSegment.from_mp3(path)
    combined += clip
    
    if seg_i in topic_shifts:
        combined += silence_long
    elif seg_i % 2 == 0:
        combined += silence_medium
    else:
        combined += silence_short
    
    os.remove(path)

combined.export(OUTPUT_FILE, format="mp3", bitrate="64k")
dur = len(combined) / 1000
size_mb = os.path.getsize(OUTPUT_FILE) / (1024 * 1024)
print(f"\nDone! {dur:.1f}s podcast ({size_mb:.1f} MB)")
print(f"Saved: {OUTPUT_FILE}")