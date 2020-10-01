import { combineReducers } from 'redux';
import { jobs } from '../components/jobs/store/reducer'
import { authentication } from '../components/auth/store/reducer'
import { applications } from '../components/applications/store/reducer'
import { apply } from '../components/applications/apply/store/reducer'



const rootReducer = combineReducers({
  // public
  jobs,
  authenticated: authentication,
  applications,
  applied: apply
});

export default rootReducer;
