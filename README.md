# Quality Inspection Tracker

A full-stack web application built for shop-floor supervisors to log, track, and resolve quality defects in manufacturing plants.

This project was developed as part of the Arvind Limited Full Stack Developer Hiring Assignment.

---

## Features

### Dashboard

- Summary cards displaying:
  - Total Inspections
  - Open Inspections
  - Resolved Inspections
  - Critical
  - Major
  - Minor

### Inspection Management

- Add new inspection
- Mandatory form validation using Zod
- View all inspections in a responsive Material UI DataGrid
- Sort and filter inspections
- Filter by
  - Severity
  - Status
  - Machine ID

### Resolve Inspection

- Resolve an inspection
- Mandatory Resolution Note
- Automatically refresh dashboard summary and inspection list
- View resolution remarks using tooltip

---

## Tech Stack

### Frontend

- React.js
- Vite
- Material UI
- React Hook Form
- Zod
- Axios
- React Hot Toast
- Day.js

### Backend

- Node.js
- Express.js
- PostgreSQL
- Zod

---

## Project Structure

### Backend

```
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validations/
│   ├── app.js
│   └── server.js
```

### Frontend

```
frontend/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   └── App.jsx
```

---

## Architecture Decisions

### Backend

The backend follows a layered architecture:

```
Route
    ↓
Controller
    ↓
Service
    ↓
Repository
    ↓
PostgreSQL
```

This separation keeps business logic independent from database operations, making the application easier to maintain and test.

---

### Frontend

The frontend follows a component-based architecture using custom React hooks.

```
Page
    ↓
Components
    ↓
Custom Hooks
    ↓
API Layer
    ↓
Backend API
```

Business logic and API communication are separated from UI components to improve reusability and maintainability.

---

## Validation

Client-side and server-side validation are implemented using **Zod**.

This ensures consistent validation rules across the application and prevents invalid data from being stored.

---

## API Endpoints

| Method | Endpoint                       | Description        |
| ------ | ------------------------------ | ------------------ |
| GET    | `/api/summary`                 | Dashboard summary  |
| GET    | `/api/inspections`             | Get inspections    |
| POST   | `/api/inspections`             | Create inspection  |
| PATCH  | `/api/inspections/:id/resolve` | Resolve inspection |

---

## Installation

---

## Database

Create PostgreSQL database

```
database-query.sql (only Database and table structure)

quality_tracker.sql (With Testing Data)
```

Execute the provided SQL script to create the inspections table with testing data.

### Clone Repository

```bash
git clone <repository-url>
```

---

### Backend

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=quality_inspection
DB_USER=postgres
DB_PASSWORD=your_password
```

Run

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Assumptions

- Machine ID is free-text as specified in the assignment.
- Resolution Note is mandatory before an inspection can be marked as resolved.
- Filtering is performed through backend APIs.

---

## What I Would Improve With More Time

- Date range filtering
- Docker Compose support
- Offline support using IndexedDB
- JWT Authentication only authorise user can action
- Export inspections to CSV/Excel

---

## Screenshots

Add application screenshots here.

---

## Author

**Prakash Dantani**

Senior Full Stack Developer

```

---

## ⭐ One suggestion

Before submitting, add **3–4 screenshots**:

```

README

Dashboard

Add Inspection Dialog

Resolve Inspection Dialog

Mobile View (390px)

```

A reviewer usually looks at screenshots before running the project, and they create a strong first impression.
```
