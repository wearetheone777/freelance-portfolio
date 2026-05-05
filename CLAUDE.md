# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Development server on localhost:3000
npm run build    # Static export build (output: "export")
npm run start    # Serve the static build
npm run lint     # ESLint (eslint-config-next)
```

No test framework is configured yet.

## Architecture

**Pure static site** 鈥?no backend, no database, no API routes. All content lives in TypeScript files under `src/data/`. The site is deployed as a static export (`output: "export"` in next.config.ts).

**Stack**: Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript + Framer Motion + Lucide React.

### Routing (App Router, file-based)

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage: Hero, Services, Projects, Testimonials, ContactCTA |
| `/projects` | `src/app/projects/page.tsx` | Full project showcase |
| `/services` | `src/app/services/page.tsx` | Service pricing details |
| `/testimonials` | `src/app/testimonials/page.tsx` | All client testimonials |
| `/contact` | `src/app/contact/page.tsx` | Contact form + social links |

### Layout hierarchy

`RootLayout` (`src/app/layout.tsx`) 鈫?`ClientLayout` (`src/components/layout/ClientLayout.tsx`) 鈫?pages.

`ClientLayout` wraps everything in `LanguageProvider` and renders `Navbar` + `<main>` + `Footer`. The entire app is a client component because of the language context 鈥?there are no Server Components in practice.

### i18n (zh/en)

Custom Context-based i18n, no external library. Core types and translations are in [`src/utils/i18n.ts`](src/utils/i18n.ts):
- `I18nText` type: `{ zh: string; en: string }` 鈥?used across all data models
- `translations` object: all UI strings keyed by section
- `t(text, locale)` helper to resolve an `I18nText` to a string
- `useLanguage()` hook from [`src/hooks/useLanguage.ts`](src/hooks/useLanguage.ts) provides `{ locale, toggleLocale }`

All data types (`Project`, `Service`, `Testimonial`) use `I18nText` for user-facing strings, defined in [`src/types/index.ts`](src/types/index.ts).

### Data flow

Static data arrays in `src/data/*.ts` 鈫?imported by page and card components 鈫?rendered with i18n resolution. No fetching, no state management library.

### Shared utilities

- `cn(...inputs)` in [`src/utils/cn.ts`](src/utils/cn.ts): `clsx` + `tailwind-merge` for conditional class merging. Always use `cn()` instead of raw template literals for className.
- `useScrollAnimation(threshold)` in [`src/hooks/useScrollAnimation.ts`](src/hooks/useScrollAnimation.ts): returns `{ ref, isVisible }` using IntersectionObserver for scroll-triggered entrance animations.

### Shared components

- `GradientButton`: 3 variants (`primary`, `secondary`, `outline`), 3 sizes, used everywhere
- `LanguageSwitch`: toggles zh/en, placed in Navbar
- `ProjectCard`, `ServiceCard`, `TestimonialCard`: reusable card components with Framer Motion animations

### Styling

Tailwind CSS 4 with custom theme variables defined in [`src/app/globals.css`](src/app/globals.css) (`--color-background: #0f172a`, `--color-foreground: #e2e8f0`). Design uses dark theme with cyan/pink gradient accents, glassmorphism cards, and scroll-triggered animations via Framer Motion.

Custom CSS animations (`animate-float`, `animate-glow`) are defined in globals.css for use anywhere.
