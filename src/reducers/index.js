import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import parentsReducer from './parents';
import authReducer from './auth';
import viewReducer from './views'

const rootReducer = combineReducers({
  parents: parentsReducer,
  auth: authReducer,
  view: viewReducer,
  form: formReducer,
  
})

export default rootReducer;
