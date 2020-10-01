import * as actionTypes from './types'

export const apply = (user: any, jobid:any) => ({
    type: actionTypes.APPLY,
    payload: { user, jobid }
})

export const applySuccess = (response: any) => ({
    type: actionTypes.APPLY_SUCCESS,
    payload: response
})


export const applyApiError = (error: any) => ({
    type: actionTypes.APPLY_API_ERROR,
    payload: error
})