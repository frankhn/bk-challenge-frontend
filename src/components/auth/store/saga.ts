import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
    REGISTER,
} from './types';
import {
    registerSuccess,
    registerApiError
} from './action';
import { postRequest } from '../../../store/api';


function* getJobs({ type: REGISTER, payload: { user } }: any) {
    try {
        const response = yield call(postRequest, '/auth/register', user);
        yield put(registerSuccess(response.data));
    } catch (error) {
        yield put(registerApiError(error.response));
    }
}

export function* watchJobs() {
    yield takeEvery(REGISTER, getJobs);
}


function* authenticationSaga() {
    yield all([
        fork(watchJobs),
    ]);
}

export default authenticationSaga;
