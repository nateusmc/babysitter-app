import * as types from "./actionType";
import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

// Sync Actions

export const fetchBioSuccess = bios => ({
  type: types.FETCH_BIO_SUCCESS,
  bios
});

export const fetchBioRequest = () => ({
  type: types.FETCH_BIO_REQUEST
});

export const fetchBioError = err => ({
  type: types.FETCH_BIO_ERROR,
  err
});

export const addSitterBioSuccess = sitterBio => ({
  type: types.ADD_SITTER_BIO_SUCCESS,
  sitterBio
});
export const fetchSittersRequest = () => ({
  type: types.FETCH_SITTERS_REQUEST
});

export const fetchSittersError = err => ({
  type: types.FETCH_SITTERS_ERROR,
  err
});

export const fetchSittersSuccess = () => ({
  type: types.FETCH_SITTERS_SUCCESS
});

// search sitters by zipcode
export const searchSittersSuccess = sitters => ({
  type: types.FETCH_SITTERS_SUCCESS,
  sitters
});

export const searchSittersByZipSuccess = zipcodes => ({
  type: types.SEARCH_SITTERS_BY_ZIP_SUCCESS,
  zipcodes
});

export const toggleInitialSearch = boolean => ({
  type: types.TOGGLE_INITIAL_SEARCH,
  boolean
});

// Async Actions

// Fetches all bios created by logged in sitter
export const fetchEnrolledSitterBio = id => dispatch => {
  dispatch(fetchSittersRequest());
  return fetch(`${API_BASE_URL}/sitters/bio/${id}`)
    .then(res => res.json())
    .then(bio => dispatch(fetchBioSuccess(bio)))
    .catch(err => {
      dispatch(fetchBioError(err));
    });
};

// Search sitters by zipcode
export const searchSitters = zipcode => dispatch => {
  dispatch(fetchSittersRequest());
  return fetch(`${API_BASE_URL}/sitters/${zipcode}`)
    .then(res => res.json())
    .then(sitters => dispatch(searchSittersByZipSuccess(sitters)))
    .catch(err => {
      dispatch(fetchSittersError(err));
    });
};

export const addSitterBio = values => (dispatch, getState) => {
  dispatch(fetchBioRequest());
  return fetch(`${API_BASE_URL}/sitters/bio/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(values)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(sitterBio => dispatch(addSitterBioSuccess(sitterBio)))
    .catch(err => dispatch(fetchBioError(err)));
};
