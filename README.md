# Kasim Saifi Portfolio

A minimal black-and-white personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui conventions, Prisma, and PostgreSQL.

## Getting Started

```bash
bun install
bun run db:generate
bun run dev
```

Open `http://localhost:3000` to view the site.

## Database

This project uses Prisma with PostgreSQL for portfolio profile, skills, and projects.

1. Copy `.env.example` to `.env`.
2. Update `DATABASE_URL`.
3. Set `DASHBOARD_PASSWORD` and `DASHBOARD_SESSION_SECRET`.
4. Run:

```bash
bun run db:migrate
```

The portfolio falls back to local placeholder content if the database is not configured yet.

## Routes

- `/` is the public portfolio.
- `/dashboard` manages profile, skills, and projects from Postgres.
- `/blog` is UI-only placeholder content for future blog data.

## Scripts

- `bun run dev` starts the development server.
- `bun run build` creates a production build.
- `bun run start` serves the production build.
- `bun run typecheck` runs TypeScript checks.
- `bun run db:generate` generates the Prisma client.
- `bun run db:migrate` runs Prisma migrations.
- `bun run db:studio` opens Prisma Studio.
# portfolio
