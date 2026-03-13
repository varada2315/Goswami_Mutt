# Workspace

## Overview

pnpm workspace monorepo focused on frontend React + Vite applications.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19 + Vite 7 + Tailwind CSS

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── hotel-website/      # Primary React + Vite site
│   └── mockup-sandbox/     # Additional React + Vite sandbox
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, scripts)
├── tsconfig.base.json      # Shared TS options (bundler resolution, es2022)
├── tsconfig.json           # Root TS project references (empty)
└── package.json            # Root package with hoisted devDeps
```

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build` (no emit)

## Packages

### `artifacts/hotel-website` (`@workspace/hotel-website`)

Primary React + Vite website.

- `pnpm --filter @workspace/hotel-website run dev` — start dev server (defaults to port 8222; override with `PORT`)
- `pnpm --filter @workspace/hotel-website run build` — production build
- `pnpm --filter @workspace/hotel-website run serve` — preview build

### `artifacts/mockup-sandbox` (`@workspace/mockup-sandbox`)

Experimental React + Vite sandbox for UI exploration.

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`.
