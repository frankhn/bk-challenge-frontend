import * as actionTypes from './types'

export const getApplications = () => ({
    type: actionTypes.GET_APPLICATOINS,
})

export const getApplicationsSuccess = (jobs:any) => ({
    type: actionTypes.GET_APPLICATOINS_SUCCESS,
    payload: jobs
})


export const getApplicationsApiError = (error:any) => ({
    type: actionTypes.GET_APPLICATOINS_API_ERROR,
    payload: error
})