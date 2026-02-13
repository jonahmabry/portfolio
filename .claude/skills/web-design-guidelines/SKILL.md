---
name: web-design-guidelines
description: General web design guidelines for building clean, accessible websites. Use when making design choices about layout, accessibility, or user experience.
---

## Web Design Guidelines

### Accessibility
- Use semantic HTML: `<main>`, `<section>`, `<nav>`, `<footer>`, `<h1>`-`<h6>`
- Maintain heading hierarchy (don't skip levels)
- All links must have descriptive text or `aria-label`
- External links should have `target="_blank"` with `rel="noopener noreferrer"`
- Ensure sufficient color contrast (4.5:1 for body text, 3:1 for large text)

### Dark Mode
- Support both light and dark via `prefers-color-scheme` media query or Tailwind `dark:` variants
- Use neutral grays for dark backgrounds (`neutral-900`, `neutral-950`) not pure black
- Reduce contrast slightly in dark mode — `neutral-400` for body text, not white

### Spacing & Rhythm
- Use consistent spacing scale (Tailwind's default: 4, 6, 8, 12, 16, 24)
- Generous whitespace between sections (80-120px / `py-20` to `py-30`)
- Tighter spacing within sections (16-32px / `gap-4` to `gap-8`)

### Links & CTAs
- Underline text links with `underline-offset-4` for readability
- Use hover color transitions, not hover underline toggles
- Make clickable areas large enough (minimum 44x44px tap target)

### Content
- Keep line lengths readable (max 65-75 characters / `max-w-2xl`)
- Use short paragraphs and clear section headings
- Front-load important information
