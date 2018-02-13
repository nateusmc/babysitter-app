import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from './actions'

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// store.getState()

export default store;
