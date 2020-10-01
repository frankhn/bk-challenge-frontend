import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
    APPLY,
} from './types';
import {
    applySuccess,
    applyApiError
} from './action';
import { postRequest } from '../../../../store/api';


function* getJobs({ type: APPLY, payload: { user, jobid } }: any) {
    try {
        const response = yield call(postRequest, `/applications/${jobid}`, user);
        yield put(applySuccess(response.message));
    } catch (error) {
        yield put(applyApiError(error.response));
    }
}

export function* watchJobs() {
    yield takeEvery(APPLY, getJobs);
}


function* applySaga() {
    yield all([
        fork(watchJobs),
    ]);
}

export default applySaga;
