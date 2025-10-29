export function createHUD() {
  const div = document.createElement('div')
  div.style.position = 'fixed'
  div.style.top = '8px'
  div.style.left = '8px'
  div.style.color = '#fff'
  div.style.font = '16px sans-serif'
  div.style.zIndex = '1000'
  div.id = 'hud'
  div.textContent = 'Score: 0 | Best: 0'
  document.body.appendChild(div)

  return {
    setScore(s: number) {
      const best = div.textContent?.split('|')[1]?.trim() || 'Best: 0'
      div.textContent = `Score: ${s} | ${best}`
    },
    setBest(b: number) {
      const score = div.textContent?.split('|')[0]?.trim() || 'Score: 0'
      div.textContent = `${score} | Best: ${b}`
    }
  }
}
