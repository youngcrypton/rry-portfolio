<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# AGENTS.md

## Project Overview

This repository contains rry's personal portfolio website.

The website is a premium personal portfolio focused primarily on:

- AI
- Markets

The site should communicate rry's work through content, research,
distribution, storytelling, strategy, and related creative work.

Do not broaden the primary positioning into generic technology,
crypto, Web3, or unrelated categories unless the user explicitly
requests it.

---

# Core Development Principles

This is an existing project.

Before changing anything:

1. Inspect the existing implementation.
2. Understand the current architecture.
3. Inspect related components.
4. Inspect the global CSS.
5. Inspect package.json.
6. Inspect existing dependencies.
7. Inspect existing image assets.
8. Check git status.
9. Reuse existing systems whenever possible.

Do not blindly rewrite existing code.

Do not replace working implementations simply because another
implementation is possible.

Make the smallest coherent change required to complete the task.

Never modify unrelated sections unless the modification is required
to preserve compatibility.

---

# Technology Stack

Use the technologies already established in this repository.

Expected stack:

- Next.js
- React
- TypeScript
- CSS
- shadcn/ui where appropriate
- Motion for React for animation

Do not introduce another framework.

Do not introduce another animation library when Motion can handle
the requirement.

Do not add dependencies without a clear reason.

If a new dependency is genuinely required, explain why before
adding it.

---

# Design Direction

The website should feel:

- premium
- minimal
- digital native
- modern
- editorial
- slightly futuristic
- polished
- atmospheric
- visually rich
- intentional

The visual language should combine:

- dark purple
- cream
- soft gradients
- subtle glow
- liquid glass
- restrained blur
- layered depth
- drop shadows
- reflections
- ambient light
- smooth motion

The website should NOT feel like:

- a generic SaaS template
- a generic developer portfolio
- a Web3 template
- an overdone glassmorphism template
- a template clone
- a visually noisy landing page

Reference websites and screenshots are sources of visual direction,
not instructions to copy their layouts literally.

The final website must maintain its own identity.

---

# Global Card System

This is a permanent rule for the project.

Every card created from this point forward must use the established:

LIQUID GLASS + DROP SHADOW

visual system.

Do not create a separate card style for individual sections.

Cards should generally include some combination of:

- translucent surface
- backdrop blur
- subtle border
- layered shadow
- internal highlight
- soft reflection
- controlled glow
- depth

The exact implementation should reuse the existing global card
system whenever possible.

If the existing card system needs improvement, improve the shared
system rather than creating multiple competing card systems.

Do not duplicate large amounts of CSS for every card.

---

# Motion System

Motion should feel intentional and premium.

Use Motion for React where animation is appropriate.

Preferred animation patterns include:

- scroll reveal
- fade and slide entrance
- subtle hover elevation
- animated reflections
- moving light
- ambient background motion
- animated counters
- subtle scale transitions
- staggered entrances

Avoid:

- excessive bouncing
- unnecessary rotation
- aggressive movement
- distracting parallax
- constant animation on every element
- cheap looking effects

Animations should support hierarchy and interaction.

Respect prefers-reduced-motion.

If the user has reduced motion enabled, animations should either
be disabled or significantly reduced.

---

# Responsive Design

Every section must work properly across:

- mobile
- tablet
- laptop
- desktop
- large desktop displays

Do not design only for the desktop screenshot.

Check:

- text wrapping
- card widths
- spacing
- image scaling
- navigation
- button sizing
- section height
- overflow
- horizontal scrolling

Never introduce accidental horizontal overflow.

---

# Architecture

Keep the website modular.

Prefer a structure similar to:

components/
    SplashScreen.tsx
    Hero.tsx
    About.tsx
    Focus.tsx
    Numbers.tsx
    Work.tsx
    ...

The page should compose sections rather than containing the complete
implementation of every section.

Avoid turning page.tsx into a giant component.

Shared functionality should become reusable components when it is
actually reused.

Do not create abstractions prematurely.

---

# Existing Portfolio Sections

The portfolio currently contains or is establishing these sections:

1. Splash
2. Hero
3. About
4. Focus
5. Highlights
6. Work

Future sections must visually belong to the same design system.

Do not redesign completed sections simply because a new section is
being added.

---

# Splash Screen

The splash screen should feel like a premium introduction to the
website.

It should:

- have a strong visual presence
- use the user's avatar as a key visual asset
- show the avatar subtly before the reveal
- transition smoothly into the portfolio
- last approximately three seconds
- feel atmospheric rather than like a loading screen

Do not turn the splash screen into a generic loader.

---

# Hero

The Hero is the primary visual introduction.

The current positioning is:

AI / MARKETS

The hero should communicate:

- who rry is
- what rry works on
- the relationship between AI, markets, content, and distribution
- a clear path to view work
- a clear path to connect

The avatar is an important visual element.

Do not remove the avatar unless explicitly requested.

Do not invent another identity or character.

---

# About

The About section should use a smaller centered liquid glass card.

The card should:

- use the global liquid glass system
- use the global drop shadow system
- have subtle depth
- have controlled glow
- have a moving edge/light treatment where appropriate
- remain readable
- avoid becoming a giant full-width text block

Do not add an avatar inside the About card unless explicitly requested.

---

# Focus

The Focus section communicates areas of work and expertise.

The section should use the same:

- typography
- spacing
- liquid glass
- shadows
- motion
- visual hierarchy

as the rest of the site.

Do not introduce a completely different card system.

---

# Highlights

The Highlights section contains animated statistics.

The established target values are:

12m+ impressions

500k+ engagements

20k+ bookmarks

2+ years in ai & crypto

The numbers must animate from an initial value toward the final
target when the section enters the viewport.

The counter should not restart unnecessarily every time the section
is scrolled past.

Use a performant animation approach.

Do not change the established values unless the user explicitly
provides new values.

---

# Work

The Work section is a featured work section.

The currently established projects are:

## 01

claude productivity guide

Description:

practical workflows for getting more out of claude while avoiding
usage limits.

## 02

jeff yan & hyperliquid

Description:

a deep dive into the builder behind hyperliquid and how one of
crypto's fastest-growing exchanges came to life.

Do not invent additional projects.

Do not invent project statistics.

Do not invent clients.

Do not invent URLs.

Do not fabricate case studies.

If a real project URL is required but has not been provided,
ask the user for it rather than inventing one.

The Work cards should use the global liquid glass and drop shadow
system.

---

# Content Accuracy

Never fabricate:

- projects
- clients
- statistics
- achievements
- URLs
- testimonials
- companies worked with
- social media results
- case studies
- partnerships

If information is missing, preserve the existing content or ask
the user when the missing information is necessary.

Do not silently fill gaps with assumptions.

---

# Images and Assets

Before using an image:

1. Check that the image actually exists.
2. Confirm the exact filename.
3. Confirm the file extension.
4. Confirm the correct path.
5. Reuse existing assets when appropriate.

For files inside:

public/images/

the Next.js public URL should normally be:

/images/<filename>

Do not guess image filenames.

Do not change .png to .jpeg or .jpeg to .png based on assumption.

If an image is missing, report it instead of creating a fake path.

---

# CSS Rules

The global CSS is part of the site's design system.

Do not rewrite globals.css wholesale.

Before modifying global CSS:

1. Search for the existing selector.
2. Understand what it controls.
3. Check whether another section depends on it.
4. Make the smallest required modification.

Do not create duplicate selectors unnecessarily.

Do not leave conflicting declarations.

Do not paste TypeScript or JSX into CSS files.

Do not paste CSS into TypeScript or TSX files.

Maintain valid CSS syntax.

After modifying CSS, check for:

- unmatched braces
- invalid selectors
- duplicate conflicting rules
- accidental global styles
- responsive regressions

---

# Component Rules

Components should remain focused.

Prefer:

"use client";

only when client-side behavior is actually required.

Use server components by default where possible.

Client components are appropriate for:

- Motion animations
- browser APIs
- IntersectionObserver
- interactive state
- event handlers

Do not make the entire application a client component unnecessarily.

---

# Motion and Browser APIs

If using browser APIs such as:

- IntersectionObserver
- window
- document
- requestAnimationFrame

make sure the code only executes in the browser.

Avoid hydration mismatches.

Clean up observers, animation frames, and event listeners when
components unmount.

---

# Accessibility

Maintain basic accessibility standards.

Interactive elements must be keyboard accessible.

Images must have meaningful alt text where appropriate.

Decorative elements should use aria-hidden when appropriate.

Do not rely on color alone to communicate meaning.

Buttons and links should remain understandable.

Respect reduced motion preferences.

---

# shadcn/ui

Use shadcn/ui when it provides a useful reusable primitive.

Do not force shadcn components into places where a custom component
is more appropriate.

Customize shadcn components to match the portfolio design system.

Do not allow default shadcn styling to make the portfolio look like
a default shadcn template.

---

# Existing Code Protection

When implementing a new section:

DO NOT:

- rewrite the entire page
- rewrite all global CSS
- replace existing components unnecessarily
- rename unrelated files
- remove working functionality
- change existing copy without instruction
- change established statistics
- change existing project content
- remove existing animations without reason

Only touch the files necessary for the task.

If an existing component must be changed because the new section
depends on it, make the smallest safe change.

---

# Before Every Task

First run:

git status

Then inspect the repository.

Determine whether the working tree already contains user changes.

Never discard user changes.

Never use destructive git commands such as:

git reset --hard

git clean -fd

unless the user explicitly requests that exact action.

---

# Development Workflow

For every significant task, follow this sequence:

## Step 1: Inspect

Understand the existing implementation before editing.

## Step 2: Plan

Identify:

- files to modify
- files to create
- existing components to reuse
- existing styles to reuse
- possible risks

## Step 3: Implement

Implement only the requested feature or section.

## Step 4: Validate

Run the available checks.

At minimum, inspect package.json to determine the project's
available scripts.

Typical checks may include:

npm run lint

npm run build

and TypeScript checking where configured.

Do not claim the project is working without validating it.

## Step 5: Review

Inspect the resulting code for:

- TypeScript errors
- CSS errors
- broken imports
- incorrect paths
- responsive issues
- hydration issues
- animation issues
- accidental changes to existing sections

## Step 6: Report

After implementation, report:

FILES CHANGED

WHAT CHANGED

VALIDATION RESULTS

REMAINING ISSUES

Do not hide errors.

---

# Testing

Before declaring a task complete:

1. Run lint if available.
2. Run build if available.
3. Run type checking if available.
4. Fix errors caused by the implementation.
5. Clearly report any pre-existing errors.

A successful visual implementation is not enough.

The project must also remain technically valid.

---

# Git Workflow

Do not commit automatically after every tiny edit.

For a completed stable milestone:

1. Check git status.
2. Review the diff.
3. Ensure unrelated files are not included.
4. Commit the milestone.

Use descriptive commit messages.

Examples:

build work section

fix highlights counters

refine liquid glass cards

add connect section

Do not create vague commits such as:

update

changes

stuff

---

# Important Git Safety Rule

Never overwrite unrelated work.

Never force push.

Never use:

git push --force

unless the user explicitly asks for it.

Never delete branches or rewrite history without explicit
instruction.

---

# Task Scope

If the user asks to build one section, build one section.

Do not automatically continue into other sections.

For example:

If asked to build Work:

Build Work.

Do not also build:

- AI
- Markets
- Clients
- Connect
- Footer

unless explicitly requested.

---

# When Requirements Are Ambiguous

If the repository already contains enough information to make a
reasonable implementation, proceed.

Do not ask unnecessary questions.

However, if a missing piece of information would require inventing
content, credentials, URLs, statistics, or assets, stop and ask the
user for that specific information.

---

# Final Quality Standard

The finished website should feel like a deliberately designed
personal brand, not an AI-generated template.

Every new section must feel like it belongs to the same system.

Prioritize:

1. visual quality
2. consistency
3. usability
4. performance
5. accessibility
6. maintainability

Do not sacrifice the existing visual system for speed of
implementation.

When choosing between two implementations, prefer the one that
preserves the existing design system and requires less unnecessary
code.