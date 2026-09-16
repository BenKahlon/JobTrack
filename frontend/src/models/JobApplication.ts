export type ApplicationStatus = 
|'Applied' 
|'Waiting' 
|'Interview'
|'Offer'  
|'Hired' 
|'Rejected'

export interface JobApplication {
    id: number
    companyName: string
    jobTitle: string
    status: ApplicationStatus
    applicationDate: string
    jobUrl?: string
    interviewLocation?: string
    interviewDate?: string
    waitingStartedAt?: string
}

