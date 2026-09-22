# Rishabh Sharma — Product Portfolio

A dark-themed React + Vite portfolio built for a 0→1 / AI product manager profile.
Metrics-forward hero, four deep case studies, a dedicated SQL/data section, live
projects, skills, and a certifications section ready for you to fill in.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite** (auto-detected). No extra config needed.
4. Deploy — Vercel builds with `npm run build` and serves `dist/`.

## Everything you need to edit lives in one file

Open `src/data/content.js`. All copy, metrics, case studies, experience,
projects, skills, and certifications are defined there as plain data — the
components just render it. Search the file for `TODO` to find every spot
that still needs a real value:

- **Live links**: `profile.linkedin`, `profile.github`
- **Project links**: each entry in `projects` has `liveUrl` and `githubUrl`
  placeholders — drop in the real SkillSprint and DDP URLs.
- **Certifications**: the `certifications` array is empty by default and the
  site shows a clean placeholder state until you add entries, e.g.:
  ```js
  { name: "Certified Scrum Product Owner", issuer: "Scrum Alliance", date: "2025", url: "https://..." }
  ```
- **Resume**: your resume PDF is already in `public/Rishabh_Sharma_Product.pdf`
  and linked from the nav bar — replace the file (keep the same name, or
  update `profile.resumeFile`) whenever you update your resume.

## Structure

```
src/
  data/content.js       ← all copy & data (edit here first)
  components/
    Nav.jsx
    Hero.jsx             ← metrics-forward hero with count-up animation
    CaseStudies.jsx       ← the 4 deep case studies
    Experience.jsx
    DataAnalytics.jsx     ← dedicated SQL / data section
    Projects.jsx          ← SkillSprint (featured, live) + DDP
    Skills.jsx
    Certifications.jsx
    Footer.jsx
  App.jsx
  index.css              ← design tokens + all styling
```

## Notes

- Built with React 18, Vite, and Framer Motion (for the hero entrance and
  count-up metrics — used sparingly elsewhere on purpose).
- No Tailwind / component library — a single `index.css` with CSS custom
  properties for the theme so it's easy to reskin.
- Fully responsive down to mobile; respects `prefers-reduced-motion`.
