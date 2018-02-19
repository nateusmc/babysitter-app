import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadAuthToken } from './local-storage';
import * as actions from './actions';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(actions.setAuthToken(token));
	store.dispatch(actions.refreshAuthToken());
}

// store.getState()

export default store;
