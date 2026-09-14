# JobTrack — Product Specification

## 1. Product Overview

JobTrack is a personal job application tracking system for students and job seekers.

The goal of the system is to help users manage their job search process in one place instead of relying on memory, spreadsheets, notes, or multiple browser tabs.

The first version focuses on simplicity and does not require user registration.

---

## 2. Target User

The primary target user is:

- A student or junior developer looking for a job
- Applying to multiple companies at the same time
- Wants to track application progress in an organized way
- Does not want to create an account before trying the product

---

## 3. Main User Problem

Job seekers often apply to multiple companies and have difficulty remembering:

- Where they applied
- When they applied
- The current application status
- How long they have been waiting for a response
- Whether they received an interview invitation
- When and where the next interview takes place

JobTrack provides a single place to manage this information.

---

## 4. Main User Story

As a job seeker,  
I want to see all of my job applications and their current status in one place,  
so that I can manage my job search process without having to remember everything manually.

---

## 5. MVP Features

### 5.1 Application List

The main screen displays all job applications.

Each application should display:

- Company name
- Job title
- Application date
- Current status
- Waiting duration, when the application is in `Waiting`
- Next interview date, when relevant
- Interview location, when relevant

---

### 5.2 Dashboard Summary

The main screen should display a summary of the user's current job search.

Example:

- Total Applications
- Waiting
- Interviews
- Rejected
- Offers / Hired

The dashboard should update automatically when application data changes.

---

### 5.3 Add Application

The user can create a new job application.

Required information:

- Company name
- Job title
- Application date
- Status

Optional information:

- Job posting URL
- Interview date
- Interview location

Interview information is relevant when the application reaches the Interview stage.

---

### 5.4 Edit Application

The user can edit an existing application.

Editable information includes:

- Company name
- Job title
- Application date
- Job posting URL
- Status
- Interview date
- Interview location

---

### 5.5 Delete Application

The user can delete an application.

The application should be removed from the application list and from dashboard calculations.

---

### 5.6 Waiting Timer

When an application enters the `Waiting` status, JobTrack should automatically track how long the application has remained in that status.

The application list should display the waiting duration.

Example:

`Waiting — 8 days`

The timer starts when the application enters the `Waiting` status, rather than always using the original application date.

This allows the timer to remain useful after later stages in the recruitment process.

Example:

`Applied → Waiting → Interview → Waiting`

After the interview, the new waiting period begins when the application returns to `Waiting`.

The waiting duration is calculated automatically and does not require the user to manually update a timer.

### Waiting Indicators

To make long waiting periods easier to identify, JobTrack may visually highlight applications based on their waiting duration.

Initial MVP thresholds:

- 0–6 days: Normal
- 7–13 days: Warning
- 14+ days: Attention

The exact UI colors and visual design will be defined later.

The MVP does not send notifications, emails, or reminders. It only provides a visual indication inside JobTrack.

---

## 6. Application Statuses

An application can have one of the following statuses:

### Applied

The application was submitted.

### Waiting

The user is currently waiting for a response or next step.

When an application enters this status, its waiting period begins.

If the application leaves `Waiting` and later returns to it, a new waiting period begins.

### Interview

The user has an upcoming interview.

For the MVP, only the next interview is stored.

Previous interview history is not stored.

### Offer

The company has made a job offer.

### Hired

The user accepted the offer and received the job.

### Rejected

The company rejected the application.

---

## 7. Interview Management

The MVP stores only the next upcoming interview.

Interview information includes:

- Interview date and time
- Interview location

The location may represent:

- A physical location
- An online meeting location or link

Interview history is intentionally excluded from the MVP to keep the product simple.

---

## 8. Guest Usage

The first version of JobTrack does not require registration.

A user can:

- Open the application
- Add job applications
- Edit applications
- Delete applications
- Track statuses
- View waiting durations
- View the dashboard

without creating an account.

Data should remain available when the user closes and reopens the application on the same browser.

---

## 9. Future Authentication

User accounts are not part of the initial MVP.

A future version may allow users to:

- Create an account
- Log in from different devices
- Save application data permanently
- Transfer locally stored guest data into the new account

Authentication implementation details are outside the scope of this specification.

---

## 10. MVP Acceptance Criteria

The MVP is considered complete when a user can:

1. Open JobTrack without creating an account.
2. Add a new job application.
3. View all saved applications.
4. See the company name, job title, status and application date.
5. Edit an existing application.
6. Delete an application.
7. Change the application's status.
8. Add next-interview information to an application.
9. See a dashboard summary of current applications.
10. Close the application and return later without losing locally stored information.
11. See how many days an application has been in `Waiting`.
12. Have the waiting period start automatically when an application enters `Waiting`.
13. Have the waiting period restart if an application leaves `Waiting` and later returns to it.
14. Visually identify applications that have remained in `Waiting` for an extended period.

---

## 11. Out of Scope for MVP

The following features are intentionally excluded from the first version:

- User registration
- Login
- Multiple-device synchronization
- Interview history
- Waiting history
- Email notifications
- Push notifications
- Automatic follow-up messages
- Automatic job scraping
- LinkedIn integration
- CV analysis
- AI recommendations
- Automated emails
- Advanced analytics
- Calendar integration

These features may be considered in future versions.

---

## 12. Product Principles

JobTrack should be:

### Simple

The user should immediately understand how to use the system.

### Focused

The application should focus on job application tracking and avoid unnecessary features.

### Fast

Adding or updating an application should require minimal effort.

### Actionable

The system should help the user identify applications that may require attention instead of only storing information.

### Expandable

The MVP should be designed so that future features such as authentication, APIs, databases and cloud deployment can be added without rebuilding the entire product.

---

## 13. Version

Specification version: `0.2`

Project status: Planning / Pre-development
