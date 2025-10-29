import { describe, it, expect } from 'vitest'
import { applyGravity, flap, BirdState, PhysicsConfig } from '../../src/physics/physics'

describe('physics', () => {
  it('applies gravity and flap', () => {
    const cfg: PhysicsConfig = { gravity: 1000, flapImpulse: 300, terminalVelocity: 1000 }
    const state: BirdState = { y: 0, vy: 0, alive: true }

    flap(state, cfg)
    expect(state.vy).toBe(-cfg.flapImpulse)

    applyGravity(state, cfg, 0.016)
    expect(state.y).not.toBe(0)
  })
})
