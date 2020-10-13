import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
    CREATE_JOBS,
    GET_JOBS,
} from './types';
import {
    getJobsSuccess,
    getJobsApiError, createJobSuccess, createJobApiError
} from './action';
import { getRequest, postRequest } from '../../../store/api';


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


function* createJob({ type: CREATE_JOBS, payload: { job } }: any) {
    try {
        const response = yield call(postRequest, '/jobs', job);
        yield put(createJobSuccess(response.data));
    } catch (error) {
        yield put(createJobApiError(error.response));
    }
}

export function* watchCreateJob() {
    yield takeEvery(CREATE_JOBS, createJob);
}


function* jobsSaga() {
    yield all([
        fork(watchJobs),
        fork(watchCreateJob)
    ]);
}

export default jobsSaga;
