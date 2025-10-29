import { startLoop } from './rendering/canvas-loop'

function mount() {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null
  if (!canvas) {
    console.error('Canvas not found')
    return
  }
  // size canvas to viewport
  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)
  resize()

  startLoop(canvas)
}

mount()
