# Copilot Instructions for maybeenang

## Project Overview
This is a **React 19** application built with **Vite 7** and **TypeScript**.
It uses **pnpm** for package management and includes the **React Compiler** for optimization.

## Tech Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: TypeScript 5.9.3
- **Styling**: CSS modules / Plain CSS (currently `App.css`, `index.css`)
- **Linting**: ESLint 9 with `typescript-eslint`
- **Package Manager**: pnpm

## Architecture & Structure
- **Entry Point**: `src/main.tsx` mounts the app to `#root`.
- **Root Component**: `src/App.tsx`.
- **Assets**:
  - `public/`: Static assets served at root path (e.g., `/vite.svg`).
  - `src/assets/`: Imported assets processed by Vite (e.g., `react.svg`).
- **Configuration**:
  - `vite.config.ts`: Vite configuration (includes React Compiler plugin).
  - `tsconfig.json`: Main TypeScript config references `app` and `node` configs.

## Development Workflow
- **Start Dev Server**: `pnpm dev` (runs on `http://localhost:5173` by default).
- **Build for Production**: `pnpm build` (outputs to `dist/`).
- **Preview Build**: `pnpm preview`.
- **Lint Code**: `pnpm lint`.

## Coding Conventions
- **Components**: Use functional components with hooks.
- **React Compiler**: The project uses `babel-plugin-react-compiler`. You generally don't need `useMemo` or `useCallback` for optimization unless specifically required for referential stability in external libraries.
- **TypeScript**:
  - Use `interface` or `type` for props definitions.
  - Ensure strict type safety; avoid `any`.
- **Imports**:
  - Use absolute paths or relative paths consistent with the project structure.
  - CSS files are imported directly (e.g., `import './App.css'`).

## Key Files
- `src/main.tsx`: Application bootstrap.
- `vite.config.ts`: Build and plugin configuration.
- `eslint.config.js`: Linting rules.
