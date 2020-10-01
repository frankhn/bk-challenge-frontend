import updateObject from '../../../../helpers/updateObject';
import * as actionTypes from './types'


const initialState = {
    loading: false
}

export const apply = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.APPLY: return updateObject(state, {
            loading: true
        })
        case actionTypes.APPLY_SUCCESS: return updateObject(state, {
            loading: false,
            applies: action.payload
        })
        case actionTypes.APPLY_API_ERROR: return updateObject(state, {
            loading: true,
            error: action.payload
        })
        default: return state
    }
}