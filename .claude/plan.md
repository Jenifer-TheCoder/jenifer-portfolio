# Plan: Jenifer Rajendren Portfolio Website

## Context
Building a personal portfolio website from scratch for Jenifer Rajendren — CTO, Software Architect, and Founder of Aceinterview AI. The project directory exists but has no Next.js files yet. Requirements are defined in `CLAUDE.md`.

---

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS only (no inline styles, no CSS modules)
- TypeScript throughout
- Vercel deployment target

---

## Step 1 — Scaffold Next.js 14 Project

```
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Creates: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `public/`.

---

## Step 2 — Configure Tailwind (`tailwind.config.ts`)

- Dark mode: `class` strategy
- Extend theme with amber-600 (#D97706) as named accent

---

## Step 3 — Update `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { @apply bg-zinc-950 text-gray-100; }
```

---

## Step 4 — Update `app/layout.tsx`

- title: "Jenifer Rajendren — CTO & Software Architect"
- description: "Personal portfolio of Jenifer Rajendren, CTO, Software Architect, and Founder of Aceinterview AI."
- `lang="en"`, `className="dark"` on `<html>`

---

## Step 5 — Components in `/components`

| Component | Key Details |
|---|---|
| `Navbar.tsx` | Sticky top, amber "JR" logo, smooth-scroll links, mobile hamburger |
| `Hero.tsx` | `min-h-screen`, name/title/tagline, two CTA buttons |
| `About.tsx` | Two-column, skill badges, professional background |
| `Experience.tsx` | Vertical timeline: Aceinterview AI, Architect roles, YouTube |
| `Projects.tsx` | Featured Aceinterview AI card + Tansu AI card |
| `Contact.tsx` | Email, LinkedIn, YouTube, GitHub link buttons |

---

## Step 6 — Wire Up `app/page.tsx`

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
```

---

## File Map

| File | Action |
|---|---|
| `package.json` | Created by scaffolding |
| `tsconfig.json` | Created by scaffolding |
| `tailwind.config.ts` | Modified — dark mode + amber theme |
| `app/globals.css` | Modified — dark base + smooth scroll |
| `app/layout.tsx` | Modified — metadata |
| `app/page.tsx` | Replaced — all sections |
| `components/Navbar.tsx` | Created |
| `components/Hero.tsx` | Created |
| `components/About.tsx` | Created |
| `components/Experience.tsx` | Created |
| `components/Projects.tsx` | Created |
| `components/Contact.tsx` | Created |

---

## Design System

- Background: `bg-zinc-950`
- Cards: `bg-zinc-900 border border-zinc-800`
- Text primary: `text-gray-100`
- Text secondary: `text-gray-400`
- Accent: `text-amber-600` / `bg-amber-600` / `border-amber-600`

---

## Verification

1. `npm run dev` — site loads at localhost:3000
2. Dark background + amber accents visible
3. All 5 sections scroll correctly from navbar
4. Mobile responsive — navbar collapses
5. `npm run build` — no TS or lint errors
