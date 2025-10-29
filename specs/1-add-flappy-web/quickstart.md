# quickstart.md — Flappy Birds Web

## Development (requires Node.js 18+)

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Run unit tests

```powershell
npm test
```

4. Run Playwright smoke tests (headless)

```powershell
npx playwright test
```

5. Build for production

```powershell
npm run build
```

Notes:
- The project uses Vite and TypeScript by default. SVG assets are inlined under `src/assets/svg`.
- See `package.json` scripts for exact commands.
