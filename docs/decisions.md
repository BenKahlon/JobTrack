# JobTrack - Architecture Decisions

## 1. Purpose

This document records important technical and product decisions made during the development of JobTrack.

Each decision explains what was chosen and why it was chosen.

---

## Decision 1 - Start the MVP with localStorage

### Decision

The first version of JobTrack will store job applications in browser localStorage.

### Reason

The first development goal is to build and understand the frontend, business logic, repository pattern, and application behavior before introducing backend and database complexity.

Using localStorage allows the MVP to persist data in the browser while keeping the first implementation simple.

### Future Direction

The localStorage implementation will later be replaced by communication with the ASP.NET Core backend and PostgreSQL database.

---

## Decision 2 - Use React with TypeScript

### Decision

The JobTrack frontend will be built with React and TypeScript.

### Reason

React will be used to build the user interface using reusable components.

TypeScript adds static type checking, which helps detect data and programming errors during development and makes application models and interfaces clearer.

This is especially useful for structured data such as the JobApplication model.

---

## Decision 3 - Use C# and ASP.NET Core for the Backend

### Decision

The future JobTrack backend will be built with C# and ASP.NET Core.

### Reason

ASP.NET Core provides a structured framework for building REST APIs and supports clear separation between controllers, services, repositories, and models.

C# also provides strong type checking and is suitable for building a structured backend application.

### Future Direction

The backend will implement the API defined in api-spec.md and will later communicate with PostgreSQL for persistent data storage.

---

## Decision 4 - Use PostgreSQL for Persistent Storage

### Decision

The future JobTrack backend will use PostgreSQL as its relational database.

### Reason

JobTrack stores structured data such as job applications, statuses, dates, and interview information.

A relational database provides persistent and structured storage and will also support future relationships between users and their job applications.

### Future Direction

When user accounts are introduced, the database can include a Users table and connect job applications to users using a foreign key.

---

## Decision 5 - Store Waiting Start Time Instead of Waiting Days

### Decision

JobTrack will store waitingStartedAt instead of storing the calculated number of waiting days.

### Reason

The number of waiting days changes over time.

Storing waitingDays would cause the stored value to become outdated unless it was constantly updated.

By storing waitingStartedAt, the application can calculate the current waiting duration whenever it is needed.

### Status Change Rule

When an application enters Waiting, waitingStartedAt is set to the current time.

If the application leaves Waiting and later returns to Waiting, waitingStartedAt is reset to the new starting time.

---

## Decision 6 - No Authentication in the Initial MVP

### Decision

The initial MVP will not include user registration or login.

### Reason

Authentication is not required to validate the core JobTrack functionality.

The first version will focus on managing job applications, statuses, interviews, waiting time, and dashboard information.

Authentication will be introduced after the core full-stack application is working.

### Future Direction

A future version can introduce user accounts and associate each job application with a specific user.

---

## Decision 7 - Store Only the Next Interview

### Decision

The initial MVP will store only the next interview date and location for each job application.

### Reason

The main goal is to help the user understand what action or interview is coming next.

Maintaining a complete interview history would add additional models, storage, UI, and business logic that are not required for the initial MVP.

### Future Direction

A future version can introduce interview history if it provides enough value to users.

---

## Decision 8 - Separate Application Responsibilities

### Decision

JobTrack will separate UI, business logic, and data access responsibilities.

### Reason

UI components should focus on displaying information and handling user interaction.

Business rules should be handled by services instead of being placed directly inside UI components.

Data access should be handled separately through repositories.

This separation makes the code easier to understand, test, maintain, and extend.

### Future Direction

This structure will make it easier to replace localStorage with backend API communication without rebuilding the entire user interface.

## Decision 9 - Generate MVP Application IDs in the Service

### Decision

The Service will generate a numeric ID for each new job application using `Date.now()`.

The Repository will receive a complete `JobApplication` with an existing ID and will only be responsible for storing it.

### Reason

The initial MVP runs locally for a single user and does not use a backend or database.

Using `Date.now()` provides a simple numeric ID suitable for the MVP while keeping ID generation outside the UI and Repository.

When the application moves to ASP.NET Core and PostgreSQL, ID generation may move to the backend or database.

## Decision 10 - Use Vitest for Unit Testing

### Decision

Vitest will be used as the unit testing framework for the frontend.

### Reason

The frontend uses Vite, React, and TypeScript.

Vitest integrates well with the existing Vite setup and will be used to test repository behavior and business logic.

Automated tests will help verify existing behavior and detect regressions when the code changes.

---

## Version

Decisions version: `0.1`

Related documents:

- `spec.md v0.2`
- `architecture.md v0.2`
- `db-design.md v0.1`
- `api-spec.md v0.1`
- `tasks.md v0.1`

Project status:

Planning / Pre-development
