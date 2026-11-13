# Zelalem Getnet — Portfolio (Next.js)

Modern portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Features

- Clean dark theme
- Fully responsive
- SEO-friendly metadata
- Fast performance with Server Components
- Sections: Hero, About, Projects, Skills, Education, Contact

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Deploy — it works out of the box

### Static export (optional)

Add this to `next.config.ts`:

```ts
const nextConfig = {
  output: 'export',
};
```

Then run `npm run build` and deploy the `out` folder.

## Customize

- Update project GitHub & Live Demo links in `src/app/page.tsx`
- Edit colors in `src/app/globals.css`
- Change metadata in `src/app/layout.tsx`

---

Built by Zelalem Getnet · 2026
