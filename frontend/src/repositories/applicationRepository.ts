import type { JobApplication } from '../models/JobApplication'

const STORAGE_KEY = 'jobtrack_applications'

export function getAll(): JobApplication[] { //load all applications from localStorage
  const storedApplications = localStorage.getItem(STORAGE_KEY)

  if (storedApplications === null) {
    return []
  }

  return JSON.parse(storedApplications)
}

export function saveAll(applications: JobApplication[]): void { // save all applications to localStorage
  const serializedApplications = JSON.stringify(applications)
  localStorage.setItem(STORAGE_KEY, serializedApplications)
}

export function add(application: JobApplication): void { //add a new application to localStorage and save it
  const applications = getAll()

  applications.push(application)
  saveAll(applications)
}

export function update(updatedApplication: JobApplication): void {
  const applications = getAll()

  const index = applications.findIndex(
    application => application.id === updatedApplication.id
  )

  if (index === -1) {
    return
  }

  applications[index] = updatedApplication
  saveAll(applications)
}

export function remove(id: number): void {
  const applications = getAll()

  const remainingApplications = applications.filter(
    application => application.id !== id
  )

  saveAll(remainingApplications)
}