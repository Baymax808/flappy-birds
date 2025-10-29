# Feature Specification: Flappy Birds — Web

**Feature Branch**: `1-add-flappy-web`
**Created**: 2025-10-29
**Status**: Draft
**Input**: 用户故事: "开发一个网页版的 Flappy Birds 的游戏，尽量还原原本的体验。"

## Summary

Create a web-based Flappy Birds game that closely reproduces the original gameplay
experience: single-tap/flap controls, side-scrolling gaps formed by pipes, simple
collision-based lives (game over on hit), scoring by passing pipes, progressive
difficulty, and responsive input on desktop and mobile browsers.

## Actors, Actions & Data

- Actors: Player (human), Browser (client)
- Actions: Tap/click/press to flap, hold to do nothing, restart game, view high score
- Data: Current score, best score (local persistence), game state (running/over),
  pipe positions, bird vertical position and velocity

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Play game (Priority: P1)

A casual player opens the web page and plays a single run.

**Why this priority**: Core game loop — must be implemented for a playable demo.

**Independent Test**: Manually or automated browser-based test can verify flaps
change vertical velocity and that scoring increments when passing a pipe.

**Acceptance Scenarios**:

1. **Given** the game is loaded and idle, **When** the player taps/clicks, **Then** the
   bird performs a flap impulse and the game starts running.
2. **Given** the game is running, **When** the bird passes between a pair of pipes,
   **Then** the score increments by 1 and is visibly updated in the UI.
3. **Given** the bird collides with a pipe or ground/ceiling, **When** collision occurs,
   **Then** the game transitions to Game Over and shows final score with an option to restart.

---

### User Story 2 - Responsive controls & persistence (Priority: P2)

The game must be playable on desktop and mobile; best score persists locally.

**Independent Test**: Verify input through mouse click, keyboard (space), and touch.
Local storage contains best score after game end and page reload.

**Acceptance Scenarios**:

1. **Given** a mobile browser, **When** user taps screen, **Then** bird flaps immediately.
2. **Given** a user finishes a run with score greater than stored best, **When** run ends,
   **Then** best score is updated in local storage and displayed.

---

### Edge Cases

- Game should handle rapid repeated input without crashing (debounce/throttle as needed).
- Recover gracefully if local storage is unavailable (e.g., private mode): show scores
  only for session.
- On very small viewports, ensure game canvas scales and controls remain accessible.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST start a new run when a flap input is received from idle state.
- **FR-002**: The bird's vertical motion MUST respond to a flap impulse and gravity simulation.
- **FR-003**: Passing between a pair of pipes MUST increment the player's score by 1.
- **FR-004**: Collision with pipes, ground, or ceiling MUST end the run and display Game Over.
- **FR-005**: The game MUST persist the best score locally and retrieve it on page load, if possible.
- **FR-006**: Controls MUST accept mouse click, keyboard (space), and touch input.
- **FR-007**: The game MUST maintain a stable frame experience (see Success Criteria for specifics).
- **FR-008**: The UI MUST present current score and best score during/after runs.

### Non-functional / Constraints

- **NC-001**: The game SHOULD be usable on modern desktop and mobile browsers.
- **NC-002**: The implementation SHOULD avoid heavy asset downloads; initial load
  SHOULD remain small for quick playability.

## Key Entities

- **Player/Bird**: position, velocity, alive flag, sprite/state
- **PipePair**: x-position, gap-y, gap-height, width
- **GameState**: running/idle/over, current score, best score
- **PhysicsConfig**: gravity, flap impulse, terminal velocity

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user can start and complete a playable run in under 10 seconds of page
  load on a modern device (no perceptible blocking during initial load).
- **SC-002**: 95% of user-triggered flap inputs result in a bird flap within 100 ms on
  a modern mobile device (measured via synthetic input tests or instrumentation).
- **SC-003**: The primary game view maintains a responsive feel (target: 50-60 FPS on
  modern desktop; gracefully degrade on low-end devices) — verified with a lightweight
  performance measurement during runs.
- **SC-004**: Best score persists across reloads in 95% of normal browser sessions
  (exceptions documented for restricted/private modes).
- **SC-005**: No crashes or uncaught exceptions during normal play across desktop and
  mobile browsers in automated smoke tests.

## Assumptions

- No server-side components are required; scores are stored locally in the browser.
- Visual and audio assets should aim to be faithful but are not required to be exact
  replicas of any proprietary asset (use original-style or public-domain assets).
- Accessibility basics (contrast, keyboard) will be implemented for core flows.

## Testing Strategy

- Unit tests for core physics logic (gravity, flap impulse, collision detection).
- Integration tests or headless browser tests for main user scenarios: start/run/score/game-over.
- Smoke tests for page load, input responsiveness, and local persistence.
- Optional manual QA for perceived difficulty and feel to align with the original experience.

## Implementation Notes

- Keep implementation modular: separate rendering, physics, input, and persistence layers.
- Provide a small debug mode to enable FPS and metrics overlay during development.

## Deliverables

- Playable web page with game canvas and controls
- Minimal assets (sprites, sound effects) and licensing notes
- Automated tests as described above
- README with how to run locally and how to build a production bundle

---

**Ready for planning**: YES
