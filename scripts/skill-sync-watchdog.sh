#!/bin/bash
# skill-sync-watchdog.sh — Ensure Theo's critical skills are always in the Hermes runtime.
# Any skill in the synced workspace that's missing from ~/.hermes/skills/ gets reinstalled.
#
# Exit 0: no changes needed
# Exit 1: one or more skills were reinstalled

SYNCED_DIR="/home/kyle/hermes_files/theo/skills"
RUNTIME_DIR="/home/kyle/.hermes/skills"
REINSTALLED=()
MISSING=0

for skill_dir in "$SYNCED_DIR"/*/; do
    skill_name=$(basename "$skill_dir")
    # Check if SKILL.md exists in synced dir
    if [ ! -f "$skill_dir/SKILL.md" ]; then
        continue
    fi

    # Check if skill exists anywhere in runtime (search subdirectories)
    if ! find "$RUNTIME_DIR" -path "*/$skill_name/SKILL.md" -type f 2>/dev/null | grep -q .; then
        echo "[MISSING] $skill_name not found in runtime, reinstalling..."
        cp -r "$skill_dir" "$RUNTIME_DIR/"
        REINSTALLED+=("$skill_name")
        MISSING=$((MISSING + 1))
    fi
done

if [ $MISSING -gt 0 ]; then
    echo "Reinstalled ${#REINSTALLED[@]} skill(s): ${REINSTALLED[*]}"
    exit 1
else
    SYNCED_COUNT=$(find "$SYNCED_DIR" -name "SKILL.md" | wc -l)
    echo "All $SYNCED_COUNT synced skills present in runtime."
    exit 0
fi
