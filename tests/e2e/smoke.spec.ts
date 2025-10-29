import { test, expect } from '@playwright/test'

test('page loads and has canvas', async ({ page }) => {
  await page.goto('http://localhost:5173')
  const canvas = await page.$('#game-canvas')
  expect(canvas).not.toBeNull()
})
