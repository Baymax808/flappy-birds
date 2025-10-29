# data-model.md — Flappy Birds Web

**Feature**: 1-add-flappy-web

## Entities

### Bird
- id (internal)
- y (vertical position)
- vy (vertical velocity)
- alive (boolean)
- animationState (e.g., flap, falling)

### PipePair
- id
- x (horizontal position)
- gapY (vertical center of gap)
- gapHeight
- width

### GameState
- state ("idle" | "running" | "over")
- score (int)
- bestScore (int, optional persisted)
- tick (frame counter)

### PhysicsConfig
- gravity (number)
- flapImpulse (number)
- terminalVelocity (number)

## Relationships
- GameState contains Bird and a list of PipePair

## Validation Rules
- gapHeight >= minimumGap (computed based on viewport)
- score increments only once per PipePair passed

