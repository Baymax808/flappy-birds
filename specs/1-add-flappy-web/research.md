# research.md — Flappy Birds Web

**Feature**: 1-add-flappy-web
**Date**: 2025-10-29

## Decisions

Decision: Rendering model — Canvas + SVG hybrid
Rationale: Canvas offers deterministic per-frame rendering and good FPS for animations.
SVG is excellent for crisp scalable art and small filesize for icons/sprites. Using
SVG for art (inlined symbols) and Canvas for the main loop gives the best balance of
performance and visual fidelity.

Decision: Language and tooling — TypeScript + Vite
Rationale: TypeScript provides static checks for physics code; Vite offers fast dev
iteration and small production builds.

Decision: Testing — Jest + Playwright
Rationale: Jest for unit/logic tests, Playwright for cross-browser smoke and input
responsiveness tests in headless environments.

Decision: Asset format — SVG for visuals, OGG/MP3 for audio (small / optional)
Rationale: SVG is vector and small; audio compressed when needed. Keep audio optional
and lazy-loaded.

## Alternatives considered
- Full SVG rendering (SVG animations): simpler to implement for static scenes but can be
  less performant for dense per-frame updates — rejected in favor of Canvas for the
  main loop.
- Using a game engine (Phaser/Pixi): adds weight; preferred to implement minimal
  custom loop to keep bundle small.

## Open questions (resolved)
- Persistent storage: Browser localStorage / IndexedDB chosen as options; use localStorage
  for simplicity and fallback to sessionStorage if blocked.


