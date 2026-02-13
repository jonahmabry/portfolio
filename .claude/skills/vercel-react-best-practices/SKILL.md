---
name: vercel-react-best-practices
description: Best practices for Next.js and React development following Vercel conventions. Use when building components, setting up routing, or making architectural decisions.
---

## Next.js & React Best Practices

### Server vs Client Components
- Default to Server Components (no directive needed) — they fetch data, access backend resources, and reduce client JS
- Add `"use client"` only when you need: event handlers, useState/useEffect, browser APIs, or third-party client libraries
- Keep client components small and push them to the leaves of the component tree

### Data Fetching
- Use async Server Components with `fetch()` for data loading — no useEffect
- For static sites (`output: "export"`), all data is fetched at build time
- Use `{ next: { revalidate: false } }` for data that shouldn't change between builds

### App Router Conventions
- `page.tsx` — route entry point
- `layout.tsx` — shared UI wrapper (persists across navigations)
- `loading.tsx` — Suspense fallback
- `error.tsx` — error boundary (must be a client component)
- `not-found.tsx` — 404 page

### Metadata
- Export `metadata` object or `generateMetadata` function from `page.tsx`/`layout.tsx`
- Always set `title` and `description` for SEO

### Performance
- Use `next/image` for images (with `unoptimized: true` for static export)
- Use `next/font` for fonts (already configured with Geist in this project)
- Avoid importing large client-side libraries in Server Components
- Prefer CSS (Tailwind) over JS for animations and layout
