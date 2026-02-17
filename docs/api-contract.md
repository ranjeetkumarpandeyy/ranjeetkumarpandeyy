# API Contract (Initial Draft)

## Auth
- POST `/api/auth/login`
- POST `/api/auth/refresh`

## Employee
- GET `/api/employees/me/assignments`
- GET `/api/employees/me/workload`
- POST `/api/employees/me/feedback`

## HR
- GET `/api/hr/dashboard`
- GET `/api/hr/high-risk-employees`
- POST `/api/hr/reassign-task`

## Admin
- GET `/api/admin/users`
- PATCH `/api/admin/users/:id/role`
- POST `/api/admin/risk-rules`
