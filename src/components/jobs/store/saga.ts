import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
    GET_JOBS,
} from './types';
import {
    getJobsSuccess,
    getJobsApiError
} from './action';
import { getRequest } from '../../../store/api';


function* getJobs({ type: GET_JOBS }: any) {
    try {
        const response = yield call(getRequest, '/jobs');
        yield put(getJobsSuccess(response.data));
    } catch (error) {
        yield put(getJobsApiError(error.response));
    }
}

export function* watchJobs() {
    yield takeEvery(GET_JOBS, getJobs);
}


function* jobsSaga() {
    yield all([
        fork(watchJobs),
    ]);
}

export default jobsSaga;
