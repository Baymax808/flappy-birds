export function saveBestScore(score: number) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('flappy_best', String(score))
      return
    }
  } catch (e) {
    // localStorage may be unavailable
  }
  try {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('flappy_best', String(score))
    }
  } catch (e) {
    // ignore
  }
}

export function loadBestScore(): number | null {
  try {
    const v = (typeof localStorage !== 'undefined' && localStorage.getItem('flappy_best')) || null
    if (v) return parseInt(v, 10)
  } catch (e) {}
  try {
    const v = (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('flappy_best')) || null
    if (v) return parseInt(v, 10)
  } catch (e) {}
  return null
}
