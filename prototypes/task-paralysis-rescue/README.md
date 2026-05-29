# Task Paralysis Rescue Button — Experimental Prototype

**Status:** experimental, not customer-facing. Built by Theo on 2026-05-29.

## What it is

A single-file HTML prototype for a low-friction ADHD task-initiation lead magnet. It is designed for moments where the user knows something needs doing but cannot start.

The flow deliberately avoids planner language:

1. Pick current energy.
2. Dump one stuck task or thought.
3. Get a gentle first action, a two-minute rescue option, and an "if that still feels too much" fallback.
4. Save a first win locally.

## Why it might be useful

This is bigger than another worksheet because it turns a validated PNP pain point into a usable interaction pattern:

- task initiation paralysis
- low-energy mode
- planner abandonment
- needing relief before structure

It can become:

- a lead magnet
- a Daily Reset companion tool
- a product page demo
- a Pinterest/blog conversion asset

## How to run

Open `index.html` in a browser. No build step, no external services, no tracking, no API calls.

## Notes for Kyle / Claude

- The copy is deliberately warm and low-shame.
- It uses localStorage only for first-win history.
- It includes export-to-text so testers can copy their result.
- It should be reviewed for tone before customer use.

## Not included yet

- Customer-facing branding polish
- Accessibility audit beyond basic semantic controls
- Analytics or email capture
- Etsy/Gumroad delivery wrapper
