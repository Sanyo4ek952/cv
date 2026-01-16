# Personal Portfolio (Next.js + Tailwind)

Minimal, fast, and accessible portfolio for a React/TypeScript/Next.js developer.
All editable content lives in `src/content/site.ts`.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Run

```bash
npm run build
npm run start
```

## Deploy (Vercel)

- Push the repository to GitHub.
- Import the project in Vercel and deploy (defaults work out of the box).

## Project Structure

```
src/
  app/            # App Router pages (Home, Projects, Error, 404, SEO)
  components/     # Reusable UI components
  content/        # Single source of content data
  styles/         # Global styles (Tailwind)
public/           # Static assets
```

## Notes / Future Improvements
- Add more projects and screenshots.
- Replace placeholder contact links with real ones.
- Add analytics if needed (keeping bundle minimal).
