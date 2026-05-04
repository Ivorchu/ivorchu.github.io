# ivorchu.github.io

Personal portfolio website built with Vite, React, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS v3
- **Icons**: lucide-react
- **Deployment**: GitHub Pages via `gh-pages` branch

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build      # type-check + bundle → dist/
npm run preview    # serve dist/ locally
```

---

## Editing content

All site content lives in `src/data/` — no need to touch components:

| File | What to edit |
|------|-------------|
| `src/data/research.ts` | Research projects |
| `src/data/projects.ts` | Personal / class projects |
| `src/data/experience.ts` | Work and research roles |
| `src/data/courses.ts` | Coursework |

Contact links (GitHub, LinkedIn, email) are in `src/components/sections/Contact.tsx`.

### Adding your resume

Place your resume PDF at `public/resume.pdf`. The Resume section links automatically.

---

## Deployment to GitHub Pages

### Option A — Automated (recommended)

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.

1. Push the repo to GitHub (`ivorchu/ivorchu.github.io`).
2. In **Settings → Pages**, set **Source** to the `gh-pages` branch, root folder.
3. Push any commit to `main` — Actions will build and publish automatically.
4. Your site will be live at `https://ivorchu.github.io` within ~2 minutes.

### Option B — Manual deploy

```bash
npm run deploy
```

This runs `npm run build` then pushes `dist/` to the `gh-pages` branch using the `gh-pages` package.

Then configure GitHub Pages to serve from the `gh-pages` branch (see step 2 above).

---

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── sections/          # One file per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Research.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Courses.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   └── ui/                # Reusable primitives
│       ├── Tag.tsx
│       ├── SectionHeader.tsx
│       ├── ProjectCard.tsx
│       └── ResearchCard.tsx
├── data/                  # ← Edit your content here
│   ├── research.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── courses.ts
└── types/
    └── index.ts
public/
└── resume.pdf             # ← Drop your resume here
```
