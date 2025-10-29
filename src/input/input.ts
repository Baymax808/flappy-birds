export function setupInput(onFlap: () => void) {
  function handler() {
    onFlap()
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') handler()
  })
  window.addEventListener('mousedown', handler)
  window.addEventListener('touchstart', handler)

  return () => {
    window.removeEventListener('keydown', handler as any)
    window.removeEventListener('mousedown', handler as any)
    window.removeEventListener('touchstart', handler as any)
  }
}
