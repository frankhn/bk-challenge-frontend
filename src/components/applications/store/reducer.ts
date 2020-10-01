import updateObject from '../../../helpers/updateObject';
import * as actionTypes from './types'


const initialState = {
    loading: false
}

export const applications = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_APPLICATOINS: return updateObject(state, {
            loading: true
        })
        case actionTypes.GET_APPLICATOINS_SUCCESS: return updateObject(state, {
            loading: false,
            applications: action.payload
        })
        case actionTypes.GET_APPLICATOINS_API_ERROR: return updateObject(state, {
            loading: true,
            error: action.payload
        })
        default: return state
    }
}