import * as types from '../actions/actionType';

const initialState = {
	parents: [],
	loading: false,
	error: null,
	visible: false,
	redirectToSitterPage: false,
	createdBio: [],
	zipcodeSearches: [],
	parentalInfo: [],
};

const parentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_BIO_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				parentalInfo: action.bios,
			});
		case types.SEARCH_PARENTS_BY_ZIP_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				zipcodeSearches: action.zipcodes,
			});
		case types.ADD_PARENTS_INFO_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
			});
		case types.ADD_PARENTS_INFO_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				parentalInfo: action.parentalInfo,
			});
		case types.ADD_PARENTS_INFO_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
			});
		case types.FETCH_PARENTS_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
			});
		case types.FETCH_PARENTS_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
			});
		case types.FETCH_PARENTS_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
			});
		case types.TOGGLE_FORM:
			return Object.assign({}, state, {
				visible: true,
			});
		default:
			break;
	}
	return state;
};

export default parentsReducer;
