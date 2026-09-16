# JobTrack - Development Tasks

## 1. Purpose

This document breaks the JobTrack project into small development tasks.

Tasks are organized in implementation order so the project can be built, tested, and understood step by step.

---

## Phase 1 - Frontend Project Setup

- [ ] Create React + TypeScript project
- [ ] Create initial project folder structure
- [ ] Run the application locally
- [ ] Remove unnecessary starter code
- [ ] Verify the project builds successfully

---

## Phase 2 - Domain Model

- [ ] Create the JobApplication model
- [ ] Define the application status values
- [ ] Add required application fields
- [ ] Add optional interview fields
- [ ] Add waitingStartedAt
- [ ] Verify the model matches the project specification

---

## Phase 3 - Local Storage Repository

- [ ] Create the application repository
- [ ] Save applications to localStorage
- [ ] Load applications from localStorage
- [ ] Add a new application
- [ ] Update an existing application
- [ ] Delete an application
- [ ] Handle empty localStorage safely
- [ ] Test repository behavior

---

## Phase 4 - Business Logic and Services

- [ ] Create the application service
- [ ] Add application validation rules
- [ ] Implement application status changes
- [ ] Set waitingStartedAt when entering Waiting
- [ ] Reset waitingStartedAt when re-entering Waiting
- [ ] Calculate the number of waiting days
- [ ] Implement waiting warning thresholds
- [ ] Calculate dashboard statistics
- [ ] Add unit tests for business logic

---

## Phase 5 - User Interface

- [ ] Create the main application layout
- [ ] Build the dashboard summary
- [ ] Build the application list
- [ ] Build the add application form
- [ ] Build the edit application form
- [ ] Add delete application functionality
- [ ] Add status change controls
- [ ] Display interview information
- [ ] Display waiting duration
- [ ] Add waiting warning indicators
- [ ] Display validation errors
- [ ] Add empty state when no applications exist
- [ ] Improve basic responsive styling

---

## Phase 6 - Testing and MVP Verification

- [ ] Add unit tests for business logic
- [ ] Test waiting day calculations
- [ ] Test waiting status transitions
- [ ] Test application validation
- [ ] Test dashboard calculations
- [ ] Test repository operations
- [ ] Test application creation
- [ ] Test application editing
- [ ] Test application deletion
- [ ] Test localStorage persistence after page refresh
- [ ] Test empty and invalid input
- [ ] Verify all MVP acceptance criteria from spec.md
- [ ] Fix discovered bugs

---

## Phase 7 - ASP.NET Core Backend

- [ ] Create the ASP.NET Core project
- [ ] Create the backend JobApplication model
- [ ] Create application controllers
- [ ] Create application services
- [ ] Create repository interfaces
- [ ] Implement GET /applications
- [ ] Implement GET /applications/{id}
- [ ] Implement POST /applications
- [ ] Implement PUT /applications/{id}
- [ ] Implement DELETE /applications/{id}
- [ ] Add request validation
- [ ] Add error handling
- [ ] Add logging
- [ ] Add backend unit tests
- [ ] Add API integration tests
- [ ] Verify the API matches api-spec.md

---

## Phase 8 - PostgreSQL Database

- [ ] Set up PostgreSQL for development
- [ ] Configure the backend database connection
- [ ] Create the JobApplications table
- [ ] Map the JobApplication model to the database
- [ ] Add database migrations
- [ ] Implement the PostgreSQL repository
- [ ] Test creating applications in the database
- [ ] Test reading applications from the database
- [ ] Test updating applications in the database
- [ ] Test deleting applications from the database
- [ ] Verify the database matches db-design.md

---

## Phase 9 - Full-stack Integration

- [ ] Create a frontend API client
- [ ] Connect the application list to the backend API
- [ ] Connect application creation to the backend API
- [ ] Connect application editing to the backend API
- [ ] Connect application deletion to the backend API
- [ ] Replace localStorage persistence with API persistence
- [ ] Handle loading states
- [ ] Handle API errors in the UI
- [ ] Verify frontend and backend validation
- [ ] Test the complete application flow

---

## Phase 10 - Deployment

- [ ] Prepare the frontend for production
- [ ] Prepare the backend for production
- [ ] Configure the production database
- [ ] Configure environment variables
- [ ] Deploy the frontend
- [ ] Deploy the backend
- [ ] Deploy or connect the PostgreSQL database
- [ ] Verify the production application
- [ ] Test the deployed application

---

## Phase 11 - Portfolio and Documentation

- [ ] Create a professional README.md
- [ ] Add project setup instructions
- [ ] Document the final architecture
- [ ] Document the API
- [ ] Add application screenshots
- [ ] Add the deployed application link
- [ ] Review GitHub repository structure
- [ ] Review commit history
- [ ] Update CV project description
- [ ] Prepare a short project explanation for interviews

---

## Version

Tasks version: `0.1`

Related documents:

- `spec.md v0.2`
- `architecture.md v0.2`
- `db-design.md v0.1`
- `api-spec.md v0.1`

Project status:

Planning / Pre-development
