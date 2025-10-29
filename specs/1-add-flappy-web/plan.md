# Implementation Plan: Flappy Birds — Web

**Branch**: `1-add-flappy-web` | **Date**: 2025-10-29 | **Spec**: `specs/1-add-flappy-web/spec.md`

## Summary

Build a web-native Flappy Birds clone that prioritizes fidelity to original gameplay,
responsiveness on mobile and desktop, and small initial load. Implementation will use
a JavaScript/TypeScript front-end stack and SVG-based assets where feasible to
keep visuals sharp and small. Tests will include unit tests (logic), integration
(headless browser) smoke tests, and lightweight performance checks.

## Technical Context

**Language/Version**: TypeScript 5.x (primary), JavaScript for small helpers  
**Tooling / Bundler**: Vite (fast dev server + build)  
**Rendering**: HTML5 Canvas for performant frame-by-frame rendering of gameplay; SVG
assets used for sprites/elements (inlined or as symbols) and UI components for
scalability and crisp visuals. (Rationale: Canvas for per-frame animation; SVG for
iconography and scalable art).  
**Primary Dependencies**: None required for core loop; optional: Howler.js for audio,
Playwright for E2E tests, Jest for unit tests.  
**Testing**: Jest (unit), Playwright (headless/integration), Vitest is an acceptable
alternative if desired.  
**Target Platform**: Modern desktop and mobile browsers (Chrome, Edge, Safari, Firefox)
**Performance Goals**: Primary target 50–60 FPS on modern desktop; mobile should aim
for 30–60 FPS depending on device; input responsiveness p95 < 100 ms.
**Constraints**: No server-side requirement. Use local persistence for best score when
available. Keep production bundle < 1 MB compressed (goal) and ensure first-paint
under 2s on 3G-emulated throttling where possible.

## Constitution Check

Gates derived from repository constitution (`.specify/memory/constitution.md`) — these
MUST be satisfied before Phase 0 → Phase 1 transition.

- Code Quality: project will include TypeScript, ESLint, Prettier configuration.  
- Testing: Unit tests for physics and collision; Playwright smoke tests for main flows.  
- UX Consistency: Shared SVG tokens for UI; accessibility checks (keyboard, contrast).  
- Performance: Specify benchmarks for p95 input latency and FPS; plan includes lightweight
  perf measurements in CI (devtools timeline or simple FPS counter).  
- Observability & Release: Local metrics during dev/debug mode; release notes and
  rollback guidance for production deploys.

The plan below maps to these gates; Phase 0 will confirm tooling and any unmet gates.

## Project Structure

### Documentation (in `specs/1-add-flappy-web/`)

```text
specs/1-add-flappy-web/
├── spec.md            # feature spec (existing)
├── plan.md            # this file
├── research.md        # research decisions
├── data-model.md      # data model
├── quickstart.md      # how to run + build
├── contracts/         # optional API contracts
└── checklists/        # spec quality checklist
```

### Source Code (repository root)

We will use a single frontend project layout optimized for a small web game.

```text
package.json
vite.config.ts
tsconfig.json
public/                # static assets (favicon, manifest)
src/
├── main.ts            # app bootstrap (mount canvas, attach handlers)
├── index.html
├── assets/
│   ├── svg/           # inline-able SVG symbols/components
│   └── audio/         # optional audio files, lazy-loaded
├── rendering/
│   └── canvas-loop.ts # canvas rendering loop and renderer utilities
├── physics/
│   └── physics.ts     # gravity, flap impulse, collision detection
├── input/
│   └── input.ts       # mouse / touch / keyboard handling
├── ui/
│   └── hud.ts         # score display, overlays, accessibility hooks
├── storage/
│   └── persistence.ts # local/session storage wrappers
└── tests/
    ├── unit/          # Jest tests for physics and logic
    └── e2e/           # Playwright tests

tests/                 # test runner configs and helpers (optional)
```

### Dev & CI

- `package.json` scripts: `dev`, `build`, `test`, `e2e`, `lint`, `format`.
- CI: GitHub Actions workflow at `.github/workflows/ci.yml` to run lint, unit tests,
  Playwright smoke tests (headless), and a lightweight performance check.
- Tooling: ESLint, Prettier, TypeScript, Vitest/Jest, Playwright.

## Phase 0: Research & Decisions (deliverable: research.md)

Goals:
- Finalize rendering approach (Canvas + SVG hybrid confirmed).
- Choose test runner and CI strategy (Jest + Playwright + GitHub Actions suggested).
- Decide on asset pipeline for SVG (inline vs separate symbols) and audio format.

Phase 0 Tasks:
- T0-1 Research: Best approach for responsive input handling on touch and desktop.
- T0-2 Research: Small-footprint bundling with Vite and tree-shaking for audio/sprites.
- T0-3 Research: Accessibility checks appropriate for canvas-based games.

Acceptance: research.md documents choices and trade-offs. All NEEDS CLARIFICATION
items resolved.

## Phase 1: Design & Contracts (deliverables: data-model.md, contracts/, quickstart.md)

1. Data model: Game state, Bird, PipePair, PhysicsConfig (see data-model.md).  
2. Contracts: No required server APIs for MVP; create optional `/api/score` contract if
   later a leaderboard is desired. Contracts directory will include a minimal OpenAPI
   example for scoreboard POST/GET (optional).
3. Quickstart: commands to run dev server, build, and run tests (see quickstart.md).

## Phase 2: Implementation & Tests

Phase 2 Tasks (P1 first):
- T2-1 Implement core game loop (Canvas rendering) and simple state machine.
- T2-2 Implement physics module with unit tests (gravity, flap impulse, collision).
- T2-3 Implement SVG asset system and UI (score, best score) and inlined sprites.
- T2-4 Implement input handlers (mouse, keyboard, touch) and measure input latency.
- T2-5 Implement local persistence with graceful fallback.
- T2-6 Add Playwright smoke tests (start/run/score/game-over) and run in CI.
- T2-7 Add performance measurement scripts (simple FPS counter + headless run).

## Deliverables
- `src/` with modular code: `rendering/`, `physics/`, `input/`, `ui/`, `assets/`, `tests/`  
- `specs/1-add-flappy-web/research.md`  
- `specs/1-add-flappy-web/data-model.md`  
- `specs/1-add-flappy-web/quickstart.md`  
- Optional `contracts/score-api.yaml` if server scores are later desired

## Milestones
- M1 (Week 1): Phase 0 complete + skeleton app with Canvas and placeholder SVGs  
- M2 (Week 2): Core physics + unit tests + local persistence  
- M3 (Week 3): UI polish, Playwright smoke tests, CI integration  
- M4 (Week 4): Perf tuning and final QA

## Risks & Mitigations
- Large asset sizes → mitigation: optimize SVGs, compress audio, lazy-load non-critical assets.  
- Input lag on low-end devices → mitigation: throttle physics loop, simplify rendering.

## Estimated Effort
- 2–4 developer-weeks (single engineer) to reach playable MVP with tests and CI.


