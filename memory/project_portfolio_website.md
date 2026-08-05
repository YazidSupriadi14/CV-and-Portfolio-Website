---
name: portfolio-website-project
description: User is building a professional portfolio website — full source code generated, stack and structure documented here
metadata:
  type: project
---

Full portfolio website built in `c:\Users\user\Documents\cv and portfolio\portfolio\`.

**Stack:** Next.js 15, TypeScript, Tailwind CSS v3, Framer Motion v11, Lucide React

**Why:** User wants to target AI Engineer, Data Scientist, Business Analyst, Software Engineer roles — international recruiter audience, English-language content.

**How to apply:** When the user asks to modify the portfolio, all source files are under `portfolio/src/`. Data is centralized in `src/data/index.ts` — edit data there first before touching components.

## Key files
- `src/data/index.ts` — all copy, stats, projects, skills (single source of truth)
- `src/app/layout.tsx` — SEO metadata (title, OG, robots)
- `src/app/globals.css` — global styles + utility classes (`card-base`, `section-padding`, `container-base`, `text-gradient`)
- `src/components/sections/` — 9 section components, all `"use client"`
- `src/components/layout/Navbar.tsx` — sticky nav with active-section tracking via IntersectionObserver
- `src/components/ui/AnimatedCounter.tsx` — triggers on viewport entry via `useInView`

## Design system
- Background: `#050510`
- Accent gradient: `from-indigo-400 via-violet-400 to-purple-400`
- Cards: `bg-white/[0.03] border border-white/[0.08] rounded-2xl`
- Fonts: Inter (body) + JetBrains Mono (code/labels)

## Sections (in order)
Hero → About → CareerHighlights → Companies (interactive timeline) → Skills (category cards) → Projects (filter: All / AI & ML / Web Dev / Data Analytics) → Teaching → Education → Contact (mailto form + social cards)

## Deployment
Vercel — run `vercel --prod` from `portfolio/` directory. `vercel.json` already configured.

**Status (2026-06-25):** All 25 source files written. Needs `npm install` then `npm run dev` to test locally.
