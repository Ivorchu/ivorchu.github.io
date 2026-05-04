# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

`npm` is not on the system PATH by default. Prepend the node directory:

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
```

| Task | Command |
|------|---------|
| Dev server | `npm run dev` → http://localhost:5173 |
| Type-check + bundle | `npm run build` |
| Lint | `npm run lint` |
| Preview production build | `npm run preview` |
| Deploy to GitHub Pages | `npm run deploy` |

There are no tests.

## Architecture

Single-page portfolio. No routing — all sections are in-page anchors (`#home`, `#about`, etc.) with `scroll-behavior: smooth`.

**Content is decoupled from layout.** To update what the site says, only touch `src/data/`:

- `research.ts` — `ResearchItem[]`
- `projects.ts` — `Project[]` (includes optional `period` field shown as subtitle on cards)
- `experience.ts` — `ExperienceItem[]`
- `courses.ts` — `Course[]`
- `skills.ts` — `languages: string[]` and `tools: SkillGroup[]`

Shared TypeScript interfaces for all data shapes live in `src/types/index.ts`.

**Reusable UI primitives** (`src/components/ui/`):
- `Tag` — pill chip with `default` (slate) or `accent` (indigo) variant
- `SectionHeader` — title + optional subtitle + indigo gradient bar; accepts `centered` prop
- `ProjectCard` / `ResearchCard` — consume `Project` / `ResearchItem` directly
- `BrandIcons` — inline SVG for `GithubIcon` and `LinkedinIcon`; lucide-react v1 removed brand icons, so **do not import `Github` or `Linkedin` from lucide-react**

**Section components** (`src/components/sections/`) are one file each, import their data directly from `src/data/`, and are assembled in order in `src/App.tsx`.

## Styling

Tailwind CSS v3 via PostCSS (config: `tailwind.config.js`, `postcss.config.js`). Dark-mode only — `bg-slate-950` body, slate surface scale, indigo accent (`indigo-400`/`indigo-500`), cyan for gradients. Inter loaded from Google Fonts in `index.html`.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main` and deploys `dist/` to the `gh-pages` branch. GitHub Pages must be configured to serve from the `gh-pages` branch in repo settings.

Resume PDF goes in `public/resume.pdf` — the Resume section links to `/resume.pdf` automatically.

Contact links (GitHub, LinkedIn, email) are hardcoded in `src/components/sections/Contact.tsx`.
