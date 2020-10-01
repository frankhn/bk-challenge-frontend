import * as actionTypes from './types'

export const register = (user: any) => ({
    type: actionTypes.REGISTER,
    payload: { user }
})

export const registerSuccess = (user: any) => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload: user
})


export const registerApiError = (error: any) => ({
    type: actionTypes.REGISTER_API_ERROR,
    payload: error
})