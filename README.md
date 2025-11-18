# Beyond Vitality — Admin Dashboard

A modern, high-performance dashboard built with Next.js 16, Tailwind CSS v4, and shadcn/ui.  
This application will serve as the internal system for Beyond Vitality, handling admin tools, analytics, user accounts, and future app integrations.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- shadcn/ui (Radix + CVA components)
- TypeScript
- ESLint + Prettier

Future Integrations:
- Prisma ORM
- PostgreSQL (NeonDB / Supabase)
- Auth.js / NextAuth
- API Routes for backend logic

---

## Getting Started

Install dependencies:

npm install

Start the development server:

npm run dev

Then open your browser at:
http://localhost:3000

---

## Project Structure

src/
 ├─ app/                # Next.js routes & layouts  
 ├─ components/         
 │   └─ ui/             # shadcn/ui components  
 ├─ lib/                # utilities (e.g., cn helper)  
 └─ styles/             # globals.css & Tailwind layers  

---

## UI System

This project uses:

- Tailwind v4 with custom theme tokens (OKLCH)
- shadcn/ui components generated via CLI
- A scalable design system for dashboard-level UI

---

## Development Commands

npm run dev       - start local dev server  
npm run build     - create production build  
npm run start     - run production server  
npm run lint      - lint the project  

---

## Deployment

Deployment is handled through Vercel.

To deploy the latest changes:

1. Push to GitHub  
2. Vercel will automatically rebuild and redeploy  

---

## Roadmap

Phase 1 — Project Scaffold  
- Next.js + TailwindCSS 4 + shadcn UI installed  
- GitHub repo created  
- Base UI components working  

Phase 2 — Database & Auth  
- Prisma setup  
- PostgreSQL (NeonDB / Supabase)  
- User authentication  

Phase 3 — Dashboard Layout  
- Sidebar navigation  
- Protected admin routes  
- Cards, tables, forms  

Phase 4 — Analytics & Tools  
- Dashboard analytics  
- Internal admin tools  
- App service integrations  

---

## License

This project is private and proprietary to Beyond Vitality.

---

## Author

Sean Connolly  
Lead Developer — Beyond Vitality
