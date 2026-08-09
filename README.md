# Rohit Prajapati — Portfolio

A fully responsive, animated portfolio built with **React + JavaScript**, **Vite**, **Tailwind CSS** and **Framer Motion** — styled like a code editor / terminal, since that's the world a full-stack + AI engineer actually lives in.

## Highlights

- Hero section that types itself out like a real code editor (respects `prefers-reduced-motion`)
- **⌘K / Ctrl+K command palette** to jump to any section or open your GitHub/LinkedIn/LeetCode/email instantly
- Experience shown as a `git log` timeline, skills as a `package.json`, achievements as terminal output
- Scroll-triggered reveals, hover micro-interactions, active-tab indicator in the nav
- Fully responsive from mobile to ultra-wide, visible keyboard focus states throughout
- All your resume content lives in one file: `src/data/portfolioData.js` — edit it and every section updates

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).

**Option B — GitHub import (recommended)**
1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Rohit88435/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import that repo.
3. Vercel auto-detects Vite — just click **Deploy**. `vercel.json` is already included for correct routing.

## Editing your content

Everything text-based (name, bio, experience, projects, skills, achievements, links) lives in:

```
src/data/portfolioData.js
```

Change it there and it flows through the whole site — no need to touch any component.

## Project structure

```
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/portfolioData.js      ← your resume content
│   ├── hooks/useTypewriter.js
│   └── components/
│       ├── Navbar.jsx
│       ├── CommandPalette.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Achievements.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```
