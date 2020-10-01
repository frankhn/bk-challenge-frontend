import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
    GET_APPLICATOINS,
} from './types';
import {
    getApplicationsSuccess,
    getApplicationsApiError
} from './action';
import { getRequest } from '../../../store/api';


function* getApplications({ type: GET_APPLICATOINS}: any) {
    try {
        const response = yield call(getRequest, '/applications');
        yield put(getApplicationsSuccess(response.data));
    } catch (error) {
        yield put(getApplicationsApiError(error.response));
    }
}

export function* watchApplications() {
    yield takeEvery(GET_APPLICATOINS, getApplications);
}


function* applicationsSaga() {
    yield all([
        fork(watchApplications),
    ]);
}

export default applicationsSaga;
