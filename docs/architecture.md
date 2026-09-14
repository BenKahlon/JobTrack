# JobTrack — Architecture

## 1. Purpose

This document describes the high-level architecture of JobTrack.

The goal is to keep the first version simple while separating responsibilities
so the project can later grow into a full-stack application.

---

## 2. MVP Architecture

The first version of JobTrack will run in the browser.

The main flow will be:

User
↓
UI / Frontend
↓
Service / Business Logic
↓
Repository
↓
localStorage

Each part has a different responsibility.

---

## 3. Frontend

The frontend is the part of JobTrack that runs in the user's browser.

Planned technologies:

- React
- TypeScript

The frontend is responsible for displaying:

- Dashboard
- Job applications
- Forms
- Statuses
- Waiting indicators
- Interview information

The UI should focus on displaying information and handling user interaction.

Business rules should not be placed directly inside UI components.

---

## 4. Business Logic / Services

The business logic contains the rules of JobTrack.

Examples:

- A company name is required when creating an application.
- When an application enters `Waiting`, the waiting start time is saved.
- The waiting duration is calculated automatically.
- Dashboard statistics are calculated from the applications.

Services will coordinate actions that use these rules.

Example:

When the user changes an application from `Interview` to `Waiting`:

1. The UI requests the status change.
2. The service changes the status.
3. The service sets `waitingStartedAt`.
4. The repository saves the updated application.

---

## 5. JobApplication Model

A `JobApplication` represents one job application in the system.

It contains information about the application itself.

Initial fields:

- id
- companyName
- jobTitle
- applicationDate
- jobUrl
- status
- interviewDate
- interviewLocation
- waitingStartedAt

UI information such as colors or button styles does not belong in this model.

The exact data design will be defined later in `db-design.md`.

---

## 6. Repository

The repository is responsible for accessing stored application data.

The rest of the application can ask the repository to:

- Get applications
- Save an application
- Update an application
- Delete an application

The repository is not the storage itself.

For the MVP:

Repository
↓
localStorage

In a future version:

Repository
↓
API
↓
Backend
↓
Database

This separation makes it easier to change how data is stored without rewriting
the entire UI.

---

## 7. Local Storage

The MVP will use the browser's `localStorage`.

This allows users to close JobTrack and return later on the same browser
without immediately requiring a user account or backend.

`localStorage` is the storage location.

The repository is responsible for accessing it.

---

## 8. Waiting Timer

JobTrack will not store a timer that continuously runs.

Instead, when an application enters `Waiting`, the system stores:

`waitingStartedAt`

The waiting duration is calculated using the current time and
`waitingStartedAt`.

Example:

waitingStartedAt: September 10  
current date: September 18  
waiting duration: 8 days

If the application leaves `Waiting` and later returns to it,
a new waiting period begins.

---

## 9. Future Full-Stack Architecture

After the MVP, JobTrack is planned to grow into a full-stack application.

Planned architecture:

Frontend
↓
API
↓
Backend
↓
Database

Planned technologies:

Frontend:

- React
- TypeScript

Backend:

- C#
- ASP.NET Core

Database:

- PostgreSQL

The backend and database are not required for the first MVP.

---

## 10. Future Backend Responsibilities

The future backend will be responsible for tasks such as:

- Receiving API requests
- User authentication
- Server-side business logic
- Accessing the database
- Validation
- Error handling
- Logging

The exact API design will be defined later in `api-spec.md`.

---

## 11. Testing Direction

Business logic should be testable separately from the UI.

Examples of logic that should have unit tests:

- Waiting duration calculation
- Status changes
- Validation
- Dashboard calculations

Backend and database integration tests will be added when those parts of the
system are introduced.

---

## 12. Main Architecture Principle

Each part of JobTrack should have a clear responsibility.

UI:
Displays information and interacts with the user.

Business Logic / Services:
Handles application rules and actions.

Repository:
Handles access to stored data.

Storage:
Stores the actual data.

The project should remain simple and understandable while allowing future
expansion.

---

## 13. Version

Architecture version: `0.2`

Related specification:

`spec.md v0.2`

Project status:

Planning / Pre-development
