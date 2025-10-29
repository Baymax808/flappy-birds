---
description: "Task list generated from spec + plan for Flappy Birds web"
---

# Tasks: Flappy Birds — Web (1-add-flappy-web)

**Input**: `specs/1-add-flappy-web/spec.md` (feature spec)  
**Prerequisites**: `specs/1-add-flappy-web/plan.md` (implementation plan)

## Phase 1: Setup (Project initialization)

 - [X] T001 Create project layout and README at repository root (package.json, vite, tsconfig)
  - Path: `package.json`, `vite.config.ts`, `tsconfig.json`, `README.md`
 - [X] T002 [P] Initialize git branch files (ensure branch exists and tracks origin)
  - Path: workspace root (git)
 - [X] T003 [P] Create `src/` skeleton with placeholder files
  - Path: `src/`, create: `src/main.ts`, `src/index.html`, `src/assets/svg/`, `src/assets/audio/`
 - [X] T004 [P] Add linting/formatting and config files: ESLint, Prettier, EditorConfig
  - Path: `.eslintrc.cjs`, `.prettierrc`, `.editorconfig`
 - [X] T005 [P] Add testing tooling configs (Jest or Vitest) and Playwright setup
  - Path: `jest.config.js` or `vitest.config.ts`, `playwright.config.ts`
 - [X] T006 Create `package.json` scripts: `dev`, `build`, `test`, `e2e`, `lint`, `format`
  - Path: `package.json`
 - [X] T007 [P] Add initial GitHub Actions workflow skeleton for CI
  - Path: `.github/workflows/ci.yml`

## Phase 2: Foundational (blocking prerequisites)

 - [X] T008 Setup Canvas + SVG integration example (render a single SVG sprite onto Canvas)
  - Path: `src/rendering/canvas-loop.ts`, `src/assets/svg/bird.svg`
 - [X] T009 [P] Implement physics module skeleton with types and exported functions
  - Path: `src/physics/physics.ts`
 - [X] T010 [P] Implement input handler skeleton for mouse/keyboard/touch
  - Path: `src/input/input.ts`
 - [X] T011 [P] Implement persistence wrapper with fallback (localStorage → sessionStorage)
  - Path: `src/storage/persistence.ts`
 - [X] T012 Create HUD/UI skeleton (score display overlay) using SVG tokens
  - Path: `src/ui/hud.ts`, `src/assets/svg/ui.svg`
 - [X] T013 [P] Add unit test harness and a first failing test for physics module
  - Path: `tests/unit/physics.test.ts`
 - [X] T014 Add Playwright smoke test skeleton for page load and canvas present
  - Path: `tests/e2e/smoke.spec.ts`

## Phase 3: User Story 1 - Basic Gameplay (P1)

Goal: Implement the complete playable loop: start, flap, spawn pipes, score, game-over.

Independent Test Criteria: Manual or headless run can start game, flap, pass a pipe and see score increment.

- [ ] T015 [US1] Implement game state machine (idle → running → over) and tick loop
  - Path: `src/game/state.ts`, `src/main.ts`
- [ ] T016 [US1] Implement Bird entity and update logic (position, velocity, alive)
  - Path: `src/physics/bird.ts`
- [ ] T017 [US1] Implement PipePair spawner and movement system
  - Path: `src/physics/pipes.ts`
- [ ] T018 [US1] Implement collision detection between bird and pipes/ground/ceiling
  - Path: `src/physics/collision.ts`
- [ ] T019 [US1] Integrate renderer with game loop to draw bird and pipes to Canvas
  - Path: `src/rendering/canvas-loop.ts`, `src/rendering/renderer.ts`
- [ ] T020 [US1] Implement scoring logic when bird passes a PipePair (ensure single increment per pair)
  - Path: `src/game/score.ts`
- [ ] T021 [US1] Add unit tests for physics: gravity, flap impulse, collision
  - Path: `tests/unit/physics.test.ts`
- [ ] T022 [US1] Add integration E2E test to verify start → flap → pass pipe → score increment
  - Path: `tests/e2e/play.spec.ts`
- [ ] T023 [US1] Implement Restart flow and Game Over UI overlay
  - Path: `src/ui/overlays.ts`

## Phase 4: User Story 2 - Controls & Persistence (P2)

Goal: Ensure responsive controls on desktop and mobile; persist best score with fallback.

Independent Test Criteria: Input via mouse/keyboard/touch produce flap; best score persists across reload when supported.

- [ ] T024 [US2] Implement refined input handling: debouncing, edge-case rapid taps support
  - Path: `src/input/input.ts`
- [ ] T025 [US2] Implement keyboard support (space key) and accessibility hooks
  - Path: `src/input/keyboard.ts`, `src/ui/accessibility.ts`
- [ ] T026 [US2] Implement persistence integration for best score, with detection of persistent storage availability
  - Path: `src/storage/persistence.ts`, `src/game/score.ts`
- [ ] T027 [US2] Add unit tests for persistence wrapper (simulate missing localStorage)
  - Path: `tests/unit/persistence.test.ts`
- [ ] T028 [US2] Add E2E test for persistence: finish run, reload page, verify best score
  - Path: `tests/e2e/persistence.spec.ts`

## Phase 5: Polish & Cross-Cutting Concerns

- [ ] T029 [P] Optimize SVG assets and inline critical symbols to reduce requests
  - Path: `src/assets/svg/*`, update `index.html`
- [ ] T030 [P] Add audio (optional) with lazy-loading and small footprint (OGG/MP3)
  - Path: `src/assets/audio/`, `src/ui/audio.ts`
- [ ] T031 [P] Desktop and mobile accessibility improvements (contrast, keyboard navigation)
  - Path: `src/ui/accessibility.ts`
- [ ] T032 [P] Add performance measurement script (headless FPS counter + ci job)
  - Path: `scripts/perf-measure.js`, `.github/workflows/ci.yml`
- [ ] T033 [P] Add documentation and quickstart updates in `specs/1-add-flappy-web/quickstart.md`
  - Path: `specs/1-add-flappy-web/quickstart.md`
- [ ] T034 [P] Release checklist and deployment notes (rollout/rollback plan)
  - Path: `docs/release.md`

## Dependencies & Execution Order

- Foundational tasks (T008–T014) MUST complete before User Story phases (T015+).
- User Story 1 (T015–T023) is MVP and should be done first. User Story 2 (T024–T028)
  can proceed in parallel with UI polish but depends on T011 (persistence wrapper).
- Polishing tasks (T029–T034) are parallelizable and can run after a playable MVP exists.

## Parallel Opportunities

- Asset optimizations (T029), audio (T030), and accessibility improvements (T031)
  can be worked on in parallel with core implementation.
- Unit tests (T021, T027) can be written in parallel with implementation of their modules.

## Implementation Strategy

1. MVP first: finish Phase 3 (User Story 1) to deliver a playable game.
2. Add persistence and responsiveness for broader device support (Phase 4).
3. Polish visuals/audio and enforce CI gates (Phase 5). 

## Task Counts & Summary

- Total tasks: 34
- Tasks by story/phase:
  - Setup (Phase 1): 7
  - Foundational (Phase 2): 7
  - US1 (Phase 3): 9
  - US2 (Phase 4): 5
  - Polish (Phase 5): 6

## Where to run

Run dev:

```powershell
npm install
npm run dev
```

Run tests:

```powershell
npm test
npx playwright test
```

---

Generated by /speckit.tasks from `specs/1-add-flappy-web/spec.md` and `plan.md`.
