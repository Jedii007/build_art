Project Repository Workflow Guide
This document defines how we branch, build, commit, and merge work in this repository.
The goal is to experiment freely without breaking structure, and to design directly inside
the system.
1. Branching Strategy
Rule: Always work on a branch. Never work directly on main.
Branch Types
Prefix Purpose
wip/ Unfinished ideas, layout exploration, or uncertain direction
feat
/
Features we plan to ship
bug/ Bug fixes or technical experiments
junk
/
Throwaway tests or experiments (may never be merged)
Naming Format
type/short-description
Example:
feat/hero-section
wip/pricing-layout-exploration
bug/mobile-nav-overflow
●
●
●
●
●
●
●
●
●
2. How We Build
We do not separate design and development.
Core Principles
No wireframes
No throwaway HTML/CSS pages
No disconnected mockups
We design inside the system:
Real components
Real layout structure
Real data flow (when applicable)
Layouts can be rough at first, but they should always map to the final build.
3. Before You Start Coding
Before writing code, make sure you can answer:
What part of the UI am I touching?
What components are involved?
Is this exploratory or shippable?
Unsure?
Start with:
wip/
You can always refine or rename the branch later.
●
●
●
●
●
4. Commits
Keep commits small, clear, and intentional.
Commit Message Format
type: short description
Examples
feat: add hero layout
wip: explore pricing section
bug: fix mobile nav overflow
Avoid large “do-everything” commits.
5. Merging & Pull Requests
Rules
No direct pushes to main
All changes go through Pull Requests
PRs should represent usable checkpoints
PR Types
Draft PRs → for WIP or early feedback
Ready PRs → when a feature or fix is stable enough to review
6. Rule of Thumb
Experiment freely, but inside the system.
Ask when unsure — alignment > speed.
This workflow exists to keep creativity high without sacrificing structure or quality.