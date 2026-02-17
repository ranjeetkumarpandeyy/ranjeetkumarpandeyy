# Employee Overload Analytics Platform (Full Stack)

This repository now contains a **complete full-stack project structure** for a web app that helps HR identify overloaded employees, reduce burnout risk, and improve workload distribution.

## Problem This App Solves
- Employees may get too many tasks and feel overloaded.
- HR needs visibility into:
  - who has high workload,
  - who is at resignation risk,
  - what assignments are causing pressure,
  - which managers are over-assigning work.

## Core Modules
- **Employee Panel**
  - Login
  - View assigned tasks
  - View personal workload score
  - Submit stress/workload feedback
- **HR Panel**
  - Overload dashboard
  - High-risk employee list
  - Team/department heatmap
  - Reassignment actions
- **Admin Panel**
  - Manage users, roles, departments
  - Configure risk rules and thresholds
  - Audit logs and access control

## VS Code Project Structure
```txt
employee-overload-platform/
├─ apps/
│  ├─ web/                          # Frontend (React + Vite + TypeScript)
│  │  ├─ public/
│  │  ├─ src/
│  │  │  ├─ components/             # Shared UI components
│  │  │  ├─ layouts/                # Dashboard layouts
│  │  │  ├─ pages/
│  │  │  │  ├─ admin/               # Admin panel pages
│  │  │  │  ├─ hr/                  # HR panel pages
│  │  │  │  ├─ employee/            # Employee panel pages
│  │  │  │  └─ auth/                # Login / Signup / Reset pages
│  │  │  ├─ services/               # API calls
│  │  │  ├─ store/                  # Zustand/Redux state
│  │  │  ├─ styles/
│  │  │  ├─ App.tsx
│  │  │  └─ main.tsx
│  │  ├─ package.json
│  │  └─ vite.config.ts
│  │
│  └─ server/                       # Backend (Node.js + Express + Prisma)
│     ├─ prisma/
│     │  └─ schema.prisma
│     ├─ src/
│     │  ├─ config/                 # env/db/logger configs
│     │  ├─ controllers/            # Request handlers
│     │  ├─ routes/                 # API route definitions
│     │  ├─ services/               # Business logic & scoring
│     │  ├─ models/                 # DTO/types/domain models
│     │  ├─ middleware/             # Auth/RBAC/validation
│     │  ├─ jobs/                   # Scheduled scoring/reports
│     │  ├─ utils/
│     │  └─ index.ts
│     ├─ package.json
│     └─ tsconfig.json
│
├─ docs/
│  ├─ architecture.md               # System design + diagrams
│  ├─ api-contract.md               # API endpoint references
│  └─ risk-scoring.md               # Formula and threshold explanation
│
├─ .env.example
├─ docker-compose.yml
└─ README.md
```

## Suggested Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, React Router
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** JWT + Refresh token + Role-based access (ADMIN / HR / EMPLOYEE)
- **Charts:** Recharts / ECharts
- **Deployment:** Docker + Nginx + Render/Railway/AWS

## Main API Modules
- `POST /api/auth/login`
- `GET /api/employees/me/workload`
- `POST /api/employees/me/feedback`
- `GET /api/hr/dashboard`
- `GET /api/hr/high-risk-employees`
- `POST /api/hr/reassign-task`
- `GET /api/admin/users`
- `POST /api/admin/risk-rules`

## Sample Workload Risk Formula
```txt
risk_score =
  0.35 * task_volume_index +
  0.20 * overtime_hours_index +
  0.20 * deadline_pressure_index +
  0.15 * sentiment_stress_index +
  0.10 * leave_pattern_index
```

### Risk Bands
- `0 - 39`: Low
- `40 - 69`: Medium
- `70 - 100`: High (HR should act)

## Next Steps
1. Initialize `apps/web` with Vite React TypeScript.
2. Initialize `apps/server` with Express + Prisma.
3. Build auth and role-based route guards.
4. Implement overload scoring service.
5. Add dashboards for HR and Admin.
6. Add audit trail + notifications.

If you want, I can generate the **actual runnable starter code** for this structure in the next step.
