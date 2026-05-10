---
version: alpha
name: Paper N Pixels
description: ADHD-friendly productivity brand for digital planners and organizational tools
colors:
  primary: "#1E293B"  # Slate 800 - deep blue-gray for focus
  secondary: "#64748B"  # Slate 500 - medium gray for secondary text
  tertiary: "#3B82F6"  # Blue 500 - calming blue for primary actions
  accent: "#10B981"   # Emerald 500 - gentle green for completion/success
  warning: "#F59E0B"  # Amber 500 - soft amber for alerts/caution
  background: "#F8FAFC"  # Slate 50 - very light background
  surface: "#FFFFFF"   # Pure white for cards and surfaces
  on-primary: "#FFFFFF"  # White text on primary
  on-surface: "#1E293B"  # Dark text on surface
typography:
  h1:
    fontFamily: "Inter"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Inter"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.3
  h3:
    fontFamily: "Inter"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "Inter"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter"
    fontSize: "0.75rem"
    fontWeight: 500
    textTransform: "uppercase"
    letterSpacing: "0.08em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  xxl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  button-success:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  badge:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
---
## Overview

Paper N Pixels creates ADHD-friendly digital productivity tools that reduce cognitive load while maintaining aesthetic appeal. The design focuses on clarity, minimal distraction, and intuitive organization to support neurodivergent users in achieving their goals without overwhelm.

## Colors

- **Primary ({colors.primary}):** Deep slate blue for headers, important text, and focus elements. Provides strong contrast without the harshness of pure black.
- **Secondary ({colors.secondary}):** Medium gray for supporting text, icons, and subtle dividers. Reduces visual noise while maintaining readability.
- **Tertiary ({colors.tertiary}):** Calming blue for primary action buttons and interactive elements. Evokes trust and focus without overstimulation.
- **Accent ({colors.accent}):** Gentle green for success states, completion indicators, and positive feedback. Associated with accomplishment and progress.
- **Warning ({colors.warning}):** Soft amber for alerts, cautions, and attention-getting elements. Less jarring than red while still conveying importance.
- **Background ({colors.background}):** Almost-white page background that reduces glare and visual fatigue during extended use.
- **Surface ({colors.surface}):** Pure white for cards, modals, and elevated surfaces to create clear visual separation.
- **On-primary ({colors.on-primary}):** White text for optimal contrast on primary-colored backgrounds.
- **On-surface ({colors.on-surface}):** Dark text for maximum readability on surface backgrounds.

## Typography

Inter is used throughout for its excellent readability and neutral personality. The type scale emphasizes clear hierarchy without excessive variation that could distract ADHD users.

- **Headers:** Heavy weights for clear visual hierarchy and quick scanning
- **Body text:** Comfortable reading sizes with generous line height to reduce crowding
- **Labels:** Small, uppercase text for section headers and metadata with slight letter spacing for legibility

## Layout

The spacing scale uses 4px increments for consistent, predictable spacing that supports alignment and reduces visual clutter. Larger spacing values create clear visual breaks between sections to help with focus and task switching.

## Shapes

Rounded corners are modest — `xs` and `sm` on interactive elements, `md` on cards, `lg` on larger containers, and `full` reserved for avatars and pill badges.

## Components

- **Button-primary:** The main call-to-action with calming blue background
- **Button-secondary:** Secondary action with minimal visual weight
- **Button-success:** Green for positive completion actions
- **Input:** Clean, readable form fields
- **Card:** Simple elevated surfaces for grouping related content
- **Badge:** Small status indicators for tags, labels, and quick visual cues

This design system prioritizes reduced visual noise, clear affordances, and calming colors to support focus and reduce overwhelm for ADHD users while maintaining a professional, trustworthy aesthetic suitable for productivity tools.