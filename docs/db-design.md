# JobTrack - Database Design

## 1. Purpose

This document describes the planned database structure for JobTrack.

The MVP will initially use browser `localStorage`, but this design defines how the data should be structured when JobTrack later uses PostgreSQL.

---

## 2. Main Table

The main table will be:

`JobApplications`

Each row represents one job application.

---

## 3. JobApplications Table

| Column            | Type        | Required | Description                               |
| ----------------- | ----------- | -------- | ----------------------------------------- |
| id                | integer     | Yes      | Unique identifier for the application     |
| companyName       | text        | Yes      | Company name                              |
| jobTitle          | text        | Yes      | Job position title                        |
| status            | text        | Yes      | Current application status                |
| applicationDate   | date        | Yes      | Date the application was submitted        |
| jobUrl            | text        | No       | Link to the job posting                   |
| interviewDate     | date + time | No       | Date and time of the next interview       |
| interviewLocation | text        | No       | Interview location                        |
| waitingStartedAt  | date + time | No       | Time when the application entered Waiting |

---

## 4. Primary Key

The `id` column is the Primary Key.

It uniquely identifies each row in the `JobApplications` table.

Example:

```text
id = 1
companyName = Google

id = 2
companyName = Google
```

Both applications may belong to the same company, but their IDs are different.

---

## 5. Required Fields

The following fields must contain valid values:

- id
- companyName
- jobTitle
- status
- applicationDate

Fields such as `companyName` and `jobTitle` must not be empty.

---

## 6. Optional Fields

The following fields may be empty:

- jobUrl
- interviewDate
- interviewLocation
- waitingStartedAt

In PostgreSQL, missing optional values may be stored as `NULL`.

Example:

```text
interviewDate = NULL
interviewLocation = NULL
waitingStartedAt = NULL
```

---

## 7. Status Values

The allowed application statuses are:

- Applied
- Waiting
- Interview
- Offer
- Hired
- Rejected

Values outside this list are invalid.

Example:

```text
status = "Waiting"   // valid
status = "banana"    // invalid
```

---

## 8. Waiting Tracking

JobTrack will not store the number of waiting days directly.

Instead, it stores:

`waitingStartedAt`

Example:

```text
waitingStartedAt = 2026-09-10 14:30
```

The system calculates the waiting duration from:

```text
current time - waitingStartedAt
```

If an application leaves `Waiting` and later returns to `Waiting`, a new `waitingStartedAt` value is stored.

---

## 9. Interview Data

Interview information is optional because not every application has an interview.

When there is no interview:

```text
interviewDate = NULL
interviewLocation = NULL
```

When an interview is scheduled, those fields can contain values.

---

## 10. Future User Accounts

The MVP does not include user accounts.

Therefore, the initial design does not require a `Users` table or a Foreign Key.

In a future version, JobTrack may include:

```text
Users

id
name
email
...
```

Then `JobApplications` may include:

```text
userId
```

The `userId` field would be a Foreign Key that references:

```text
Users.id
```

This would connect each job application to its owner.

---

## 11. Future PostgreSQL Design

The exact PostgreSQL data types and constraints will be defined when the backend and database are implemented.

The current design focuses on the logical structure of the data.

---

## 12. Version

Database design version: `0.1`

Related documents:

- `spec.md v0.2`
- `architecture.md v0.2`

Project status:

Planning / Pre-development
