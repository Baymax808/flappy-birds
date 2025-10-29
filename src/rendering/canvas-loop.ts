export function startLoop(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!

  let last = performance.now()

  function tick(now: number) {
    const dt = (now - last) / 1000
    last = now

    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // placeholder bird
    ctx.fillStyle = '#ff0'
    ctx.fillRect(50, canvas.height / 2 - 10, 34, 24)

    requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}
