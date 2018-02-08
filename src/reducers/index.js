import { combineReducers } from 'redux';
import parentsReducer from './parents';
import authReducer from './auth';

const rootReducer = combineReducers({
  parents: parentsReducer,
  auth: authReducer,
})

export default rootReducer;
