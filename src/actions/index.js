import {API_BASE_URL} from '../config';

export const fetchParent = () => dispatch => {
  
      dispatch(fetchParentRequest());
  
      fetch(`${API_BASE_URL}/api/parents`).then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
              return res.json();
          }).then(parent => {
              console.log(parent);
              return dispatch(fetchParentRequest(parent));
          }).catch(err => 
              dispatch(fetchParentError(err))
      )
  }

  export const FETCH_PARENT_SUCCESS = 'FETCH_PARENT_SUCCESS';
  export const fetchParentSuccess = parent => ({
      type: FETCH_PARENT_SUCCESS,
      parent
  })

  export const FETCH_PARENT_REQUEST = 'FETCH_PARENT_REQUEST';
  export const fetchParentRequest = () => ({
      type: FETCH_PARENT_REQUEST,
  })
  
  export const FETCH_PARENT_ERROR = 'FETCH_PARENT_ERROR';
  export const fetchParentError = error => ({
      type: FETCH_PARENT_ERROR,
  })
  
  export const ADD_PARENT_SUCCESS = 'ADD_PARENT_SUCCESS';
  export const addParentSuccess = parent => ({
      type: ADD_PARENT_SUCCESS,
      parent
  })
  

export const ADD_PARENT_INFO = 'ADD_PARENT_INFO';
export const addParentInfo = (parent) = dispatch => {
  dispatch(fetchParentRequest());
  return fetch(`${API_BASE_URL}/api/parents`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(parent)
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
      return res.json();
  }).then(
      parent => {
        dispatch(addParentSuccess(parent))
      }
  )
  .catch(err => dispatch(fetchParentError(err)))
}

// const addParentsInfo = (firstName, lastName, ageOfChild, zipcode, dateNeeded, additionalInfo) => ({
//   type: 'ADD_PARENTS_INFO',
//   firstName,
//   lastName,
//   ageOfChild,
//   zipcode,
//   dateNeeded,
//   additionalInfo
// });






// export default addParentsInfo;

