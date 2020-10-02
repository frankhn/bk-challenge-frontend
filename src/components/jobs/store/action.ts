import * as actionTypes from './types'

export const getJobs = () => ({
    type: actionTypes.GET_JOBS,
})

export const getJobsSuccess = (jobs: any) => ({
    type: actionTypes.GET_JOBS_SUCCESS,
    payload: jobs
})


export const getJobsApiError = (error: any) => ({
    type: actionTypes.GET_JOBS_API_ERROR,
    payload: error
})

export const createJob = (job:any) => ({
    type: actionTypes.CREATE_JOBS,
    payload: { job }
})

export const createJobSuccess = (job: any) => ({
    type: actionTypes.CREATE_JOBS_SUCCESS,
    payload: job
})


export const createJobApiError = (error: any) => ({
    type: actionTypes.CREATE_JOBS_API_ERROR,
    payload: error
})