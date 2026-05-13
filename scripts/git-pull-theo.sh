#!/bin/sh
# git-pull-theo.sh — Auto-pull Theo's repo on Mac so research outputs appear without manual steps.
# Run via crontab every 5 minutes.
# Logs to /tmp/git-pull-theo.log

REPO="/Volumes/Home Ext/Home Ext/Desktop/Side_Hustle/theo"
LOG="/tmp/git-pull-theo.log"

# Bail silently if drive isn't mounted
if [ ! -d "$REPO" ]; then
    exit 0
fi

cd "$REPO" && git pull --quiet >> "$LOG" 2>&1
echo "$(date '+%Y-%m-%d %H:%M') pull done" >> "$LOG"
