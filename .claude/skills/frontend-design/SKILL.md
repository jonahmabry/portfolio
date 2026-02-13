---
name: frontend-design
description: Guide for frontend design decisions in Next.js projects using Tailwind CSS. Use when making UI/layout choices, component structure decisions, or discussing visual design patterns.
---

## Frontend Design Principles

### Layout
- Use a centered `max-w-2xl` or `max-w-4xl` container with consistent horizontal padding (`px-6`)
- Stack sections vertically with generous spacing (`mb-16` to `mb-24`)
- Use flexbox for simple layouts, grid for card-based layouts

### Typography
- Use the project's configured font (Geist) via Tailwind's `font-sans` and `font-mono`
- Establish clear hierarchy: `text-4xl`/`text-5xl` for page titles, `text-2xl` for section headings, `text-sm`/`text-base` for body
- Use `tracking-tight` on headings, `leading-relaxed` on body text

### Color Strategy
- Use CSS custom properties (`text-foreground`, `bg-background`) for primary colors
- Use `text-neutral-600 dark:text-neutral-400` for secondary/muted text
- Always include both light and dark mode variants using `dark:` prefix
- Borders: `border-neutral-200 dark:border-neutral-800`

### Interactivity
- Add `transition-colors` to all hover states
- Use `group` and `group-hover:` for parent-child hover effects
- Keep animations subtle — color shifts and underlines, not transforms

### Responsiveness
- Design mobile-first, add `sm:` breakpoints for wider layouts
- Text sizes: use responsive variants like `text-4xl sm:text-5xl`
