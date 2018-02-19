import * as types from '../actions/actionType';

const initialState = {
	authToken: null,
	currentUser: '',
	loading: false,
	error: null,
};

export default function reducer(state = initialState, action) {
	if (action.type === types.SET_AUTH_TOKEN) {
		return Object.assign({}, state, {
			authToken: action.authToken,
		});
	} else if (action.type === types.CLEAR_AUTH) {
		return Object.assign({}, state, {
			authToken: null,
			currentUser: null,
		});
	} else if (action.type === types.AUTH_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
		});
	} else if (action.type === types.AUTH_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			currentUser: action.currentUser,
		});
	} else if (action.type === types.AUTH_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error,
		});
	}
	return state;
}
