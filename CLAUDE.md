# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 portfolio site using TypeScript, Tailwind CSS v4, and the App Router.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **App Router** (`app/`) — file-based routing with `page.tsx` and `layout.tsx` conventions
- **Tailwind CSS v4** — configured via `@tailwindcss/postcss` plugin (no `tailwind.config` file; uses CSS-based config)
- **ESLint** — flat config in `eslint.config.mjs` extending `eslint-config-next`
- **Public assets** in `public/`
