export interface PhysicsConfig {
  gravity: number
  flapImpulse: number
  terminalVelocity: number
}

export interface BirdState {
  y: number
  vy: number
  alive: boolean
}

export function applyGravity(state: BirdState, cfg: PhysicsConfig, dt: number) {
  state.vy += cfg.gravity * dt
  if (state.vy > cfg.terminalVelocity) state.vy = cfg.terminalVelocity
  state.y += state.vy * dt
}

export function flap(state: BirdState, cfg: PhysicsConfig) {
  state.vy = -cfg.flapImpulse
}

export function detectCollision() {
  // placeholder: collision logic implemented later
  return false
}
