import { combineReducers } from 'redux';

import parentsReducer from './parents';

const rootReducer = combineReducers({
  parents: parentsReducer
})

export default rootReducer;
