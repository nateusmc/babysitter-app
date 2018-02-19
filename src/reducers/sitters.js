import * as types from '../actions/actionType';

const initialState = {
	zipcodeSearches: [],
	localSitters: [],
	initialSearch: false,
	loading: false,
	error: false,
	createdBio: [],
	sitterBio: [],
};

const sittersReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_BIO_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				sitterBio: action.bios,
			});
		case types.ADD_SITTER_BIO_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				sitterBio: action.sitterBio,
			});
		case types.FETCH_BIO_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
			});
		case types.FETCH_BIO_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.err,
			});
		case types.FETCH_SITTERS_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
			});
		case types.FETCH_SITTERS_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.err,
			});
		case types.SEARCH_SITTERS_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				localSitters: action.sitters,
			});
		case types.SEARCH_SITTERS_BY_ZIP_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				zipcodeSearches: action.zipcodes,
			});
		case types.TOGGLE_INITIAL_SEARCH:
			return Object.assign({}, state, {
				initialSearch: action.boolean,
			});

		default:
			break;
	}
	return state;
};

export default sittersReducer;
