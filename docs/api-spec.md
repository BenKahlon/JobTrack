# JobTrack - API Specification

## 1. Purpose

This document describes the planned API for the future JobTrack backend.

The API will allow the React frontend to communicate with the ASP.NET Core backend.

The MVP initially uses localStorage, so this API will be implemented when the backend is introduced.

---

## 2. Base Resource

The main API resource is:

`/applications`

It represents job applications managed by JobTrack.

---

## 3. Get All Applications

### Request

```http
GET /applications
```

### Purpose

Returns all job applications.

### Successful Response

Status:

```text
200 OK
```

Example response:

```json
[
  {
    "id": 1,
    "companyName": "Google",
    "jobTitle": "Junior Developer",
    "status": "Waiting",
    "applicationDate": "2026-09-10"
  },
  {
    "id": 2,
    "companyName": "Microsoft",
    "jobTitle": "Backend Developer",
    "status": "Interview",
    "applicationDate": "2026-09-12"
  }
]
```

---

## 4. Get One Application

### Request

```http
GET /applications/{id}
```

Example:

```http
GET /applications/12
```

### Purpose

Returns one job application using its unique ID.

### Successful Response

```text
200 OK
```

### Application Not Found

```text
404 Not Found
```

---

## 5. Create Application

### Request

```http
POST /applications
```

### Purpose

Creates a new job application.

Example request body:

```json
{
  "companyName": "Google",
  "jobTitle": "Junior Developer",
  "status": "Applied",
  "applicationDate": "2026-09-15",
  "jobUrl": null,
  "interviewDate": null,
  "interviewLocation": null
}
```

### Successful Response

```text
201 Created
```

The response should contain the newly created application, including its generated ID.

### Invalid Request

```text
400 Bad Request
```

Examples of invalid data include:

- Missing company name
- Missing job title
- Invalid status
- Missing application date

---

## 6. Update Application

### Request

```http
PUT /applications/{id}
```

Example:

```http
PUT /applications/12
```

### Purpose

Updates an existing job application.

Example request body:

```json
{
  "companyName": "Google",
  "jobTitle": "Junior Developer",
  "status": "Interview",
  "applicationDate": "2026-09-15",
  "jobUrl": null,
  "interviewDate": "2026-09-20T10:00:00",
  "interviewLocation": "Tel Aviv"
}
```

### Successful Response

```text
200 OK
```

### Invalid Request

```text
400 Bad Request
```

### Application Not Found

```text
404 Not Found
```

---

## 7. Delete Application

### Request

```http
DELETE /applications/{id}
```

Example:

```http
DELETE /applications/12
```

### Purpose

Deletes an existing job application.

### Successful Response

```text
200 OK
```

### Application Not Found

```text
404 Not Found
```

---

## 8. Application Status Values

The API accepts the following application statuses:

- Applied
- Waiting
- Interview
- Offer
- Hired
- Rejected

Other status values are invalid.

---

## 9. Waiting Status Rule

When an application enters the `Waiting` status, the system sets:

`waitingStartedAt`

The client does not provide the calculated number of waiting days.

The waiting duration is calculated from `waitingStartedAt`.

If an application leaves `Waiting` and later returns to `Waiting`, a new waiting period begins.

---

## 10. Data Format

The frontend and backend communicate using JSON.

Example:

```json
{
  "id": 12,
  "companyName": "Google",
  "jobTitle": "Junior Developer",
  "status": "Waiting"
}
```

---

## 11. HTTP Methods

The API follows standard CRUD operations:

| Operation | HTTP Method | Endpoint             |
| --------- | ----------- | -------------------- |
| Create    | POST        | `/applications`      |
| Read All  | GET         | `/applications`      |
| Read One  | GET         | `/applications/{id}` |
| Update    | PUT         | `/applications/{id}` |
| Delete    | DELETE      | `/applications/{id}` |

---

## 12. HTTP Status Codes

Initial API status codes:

| Status                    | Meaning                              |
| ------------------------- | ------------------------------------ |
| 200 OK                    | Request completed successfully       |
| 201 Created               | New application created successfully |
| 400 Bad Request           | Request contains invalid data        |
| 404 Not Found             | Application does not exist           |
| 500 Internal Server Error | Unexpected server error              |

---

## 13. Future Authentication

The initial API design does not include authentication.

When user accounts are introduced, API endpoints will be updated so users can only access their own job applications.

---

## 14. Version

API specification version: `0.1`

Related documents:

- `spec.md v0.2`
- `architecture.md v0.2`
- `db-design.md v0.1`

Project status:

Planning / Pre-development
