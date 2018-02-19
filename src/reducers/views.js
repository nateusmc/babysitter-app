import * as types from '../actions/actionType';

const initialState = {
	selectedView: 'landing-page',
	modalToggle: false,
};

const viewReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_VIEW:
			return Object.assign({}, state, {
				selectedView: action.selectedView,
			});
		case types.TOGGLE_MODAL:
			return Object.assign({}, state, {
				modalToggle: action.boolean,
			});
		default:
			break;
	}
	return state;
};

export default viewReducer;
