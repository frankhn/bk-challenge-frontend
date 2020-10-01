import { all } from 'redux-saga/effects';
import applicationsSaga from '../components/applications/store/saga';
import applySaga from '../components/applications/apply/store/saga';
import authenticationSaga from '../components/auth/store/saga';
import jobsSaga from '../components/jobs/store/saga';

//public

export default function* rootSaga() {
  yield all([
    //public
    jobsSaga(),
    authenticationSaga(),
    applicationsSaga(),
    applySaga()
  ]);
}
