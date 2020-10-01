import updateObject from '../../../helpers/updateObject';
import * as actionTypes from './types'


const initialState = {
    loading: false
}

export const jobs = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_JOBS: return updateObject(state, {
            loading: true
        })
        case actionTypes.GET_JOBS_SUCCESS: return updateObject(state, {
            loading: false,
            jobs: action.payload
        })
        case actionTypes.GET_JOBS_API_ERROR: return updateObject(state, {
            loading: false,
            error: action.payload
        })
        default: return state
    }
}