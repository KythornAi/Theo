#!/usr/bin/env python3
"""Stitch podcast segments with crossfades - two voices (Ryan + Sonia)."""

import os, sys

# Tell pydub where ffmpeg is
os.environ['PATH'] = '/tmp:' + os.environ.get('PATH', '')

from pydub import AudioSegment

SEGMENTS_DIR = "/home/kylemoore/theo/prototypes/podcast_segments"
OUTPUT_FILE = "/home/kylemoore/theo/prototypes/mnm_chp1_podcast_demo.mp3"

# Pause between speakers (ms)
SHORT_PAUSE = 200   # ~0.2s between turns
LONG_PAUSE = 600    # ~0.6s at transitions

def main():
    segments = sorted([
        f for f in os.listdir(SEGMENTS_DIR) if f.endswith('.mp3')
    ])
    print(f"Stitching {len(segments)} segments...")
    
    combined = AudioSegment.silent(duration=200)  # 200ms room tone intro
    
    for i, seg in enumerate(segments):
        path = os.path.join(SEGMENTS_DIR, seg)
        clip = AudioSegment.from_mp3(path)
        
        # Add small silence between speakers
        pause = LONG_PAUSE if i in (0, 10) else SHORT_PAUSE
        combined += clip
        combined += AudioSegment.silent(duration=pause)
    
    # Export
    combined.export(OUTPUT_FILE, format="mp3", bitrate="64k")
    dur_sec = len(combined) / 1000
    size_kb = os.path.getsize(OUTPUT_FILE) / 1024
    print(f"\nDone! {dur_sec:.1f}s podcast saved ({size_kb:.0f} KB)")
    print(f"File: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()