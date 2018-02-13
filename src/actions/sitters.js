import * as types from './actionType';
import {API_BASE_URL} from '../config';

// Sync Actions

export const fetchSittersRequest = () => ({
    type: types.FETCH_SITTERS_REQUEST,
});

export const fetchSittersError = (err) => ({
    type: types.FETCH_SITTERS_ERROR,
    err,
});

export const fetchSittersSuccess = () => ({
    type: types.FETCH_SITTERS_SUCCESS,
});

// search sitters by zipcode
export const searchSittersSuccess = (sitters) => ({
    type: types.FETCH_SITTERS_SUCCESS,
    sitters,
});

export const searchSittersByZipSuccess = (zipcodes) => ({
    type: types.SEARCH_SITTERS_BY_ZIP_SUCCESS,
    zipcodes,
})

export const toggleInitialSearch = (boolean) => ({
    type: types.TOGGLE_INITIAL_SEARCH,
    boolean,
})

// Async Actions

// Search sitters by zipcode
export const searchSitters = zipcode => (dispatch) => {
    dispatch(fetchSittersRequest());
    return fetch(`${API_BASE_URL}/sitters/${zipcode}`)
    .then(res => res.json())
    .then(sitters => dispatch(searchSittersByZipSuccess(sitters)))
    .catch((err) => {
        dispatch(fetchSittersError(err));
    });
};


