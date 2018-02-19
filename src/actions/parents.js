import * as types from "./actionType";
import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

// Sync Actions
export const fetchBioSuccess = bios => ({
  type: types.FETCH_BIO_SUCCESS,
  bios
});

export const fetchBioError = err => ({
  type: types.FETCH_BIO_ERROR,
  err
});

export const fetchParentsSuccess = parents => ({
  type: types.FETCH_PARENTS_SUCCESS,
  parents
});

export const fetchParentsRequest = () => ({
  type: types.FETCH_PARENTS_REQUEST
});

export const fetchParentsError = error => ({
  type: types.FETCH_PARENTS_ERROR
});

export const addParentsSuccess = parents => ({
  type: types.ADD_PARENTS_SUCCESS,
  parents
});

export const addParentsInfoRequest = () => ({
  type: types.ADD_PARENTS_INFO_REQUEST
});

export const addParentsInfoSuccess = parentalInfo => ({
  type: types.ADD_PARENTS_INFO_SUCCESS,
  parentalInfo
});

export const addParentsInfoError = error => ({
  type: types.ADD_PARENTS_INFO_ERROR,
  error
});

export const searchParentsByZipSuccess = zipcodes => ({
  type: types.SEARCH_PARENTS_BY_ZIP_SUCCESS,
  zipcodes
});

// Async Actions

export const fetchEnrolledParentBio = id => dispatch => {
  dispatch(fetchParentsRequest());
  return fetch(`${API_BASE_URL}/parents/bio/${id}`)
    .then(res => res.json())
    .then(bio => dispatch(fetchBioSuccess(bio)))
    .catch(err => {
      dispatch(fetchBioError(err));
    });
};

export const addParentBio = values => (dispatch, getState) => {
  dispatch(fetchParentsRequest());
  return fetch(`${API_BASE_URL}/parents/bio/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(values)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(parentalInfo => dispatch(addParentsInfoSuccess(parentalInfo)))
    .catch(err => dispatch(fetchParentsError(err)));
};

export const fetchParents = zipcode => dispatch => {
  dispatch(fetchParentsRequest());
  return fetch(`${API_BASE_URL}/parents/zipcode`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ zipcode })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(parents => {
      console.log("parents");
      dispatch(fetchParentsSuccess(parents));
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchParentsError(err));
    });
};

export const searchParents = zipcode => dispatch => {
  dispatch(fetchParentsRequest());
  return fetch(`${API_BASE_URL}/parents/${zipcode}`)
    .then(res => res.json())
    .then(parents => dispatch(searchParentsByZipSuccess(parents)))
    .catch(err => {
      dispatch(fetchParentsError(err));
    });
};
