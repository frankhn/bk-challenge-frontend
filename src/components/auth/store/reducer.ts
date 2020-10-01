import updateObject from '../../../helpers/updateObject';
import * as actionTypes from './types'


const initialState = {
    loading: false
}

export const authentication = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.REGISTER: return updateObject(state, {
            loading: true
        })
        case actionTypes.REGISTER_SUCCESS: return updateObject(state, {
            loading: false,
            user: action.payload
        })
        case actionTypes.REGISTER_API_ERROR: return updateObject(state, {
            loading: true,
            error: action.payload
        })
        default: return state
    }
}