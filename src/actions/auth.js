import jwtDecode from "jwt-decode";
import { SubmissionError } from "redux-form";
import * as types from "./actionType";

import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
import { saveAuthToken, clearAuthToken } from "../local-storage";

export const setAuthToken = authToken => ({
  type: types.SET_AUTH_TOKEN,
  authToken
});

export const clearAuth = () => ({
  type: types.CLEAR_AUTH
});

export const authRequest = () => ({
  type: types.AUTH_REQUEST
});

export const authSuccess = currentUser => ({
  type: types.AUTH_SUCCESS,
  currentUser
});

export const authError = error => ({
  type: types.AUTH_ERROR,
  error
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const login = (email, password) => dispatch => {
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      // Reject any requests which don't return a 200 status, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
        const { code } = err;
        const message =
          code === 401
            ? "Incorrect email or password"
            : "Unable to login, please try again";
        dispatch(authError(err));
        // Could not authenticate, so return a SubmissionError for Redux
        // Form
        return Promise.reject(
          new SubmissionError({
            _error: message
          })
        );
      })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};
