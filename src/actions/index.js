import {API_BASE_URL} from '../config';

export const fetchParents = (zipcode) => dispatch => {
      dispatch(fetchParentsRequest())

    return fetch(`${API_BASE_URL}/parents/zipcode`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({zipcode})
    })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText)
            }
                return res.json();
          }).then(
              parents => {
                  console.log(parents)
                dispatch(fetchParentsSuccess(parents))
              }
            )
              .catch(err => {
                console.log(err)
              dispatch(fetchParentsError(err))
              }
            )
  }

  export const FETCH_PARENTS_SUCCESS = 'FETCH_PARENTS_SUCCESS';
  export const fetchParentsSuccess = parents => ({
      type: FETCH_PARENTS_SUCCESS,
      parents
  })

  export const FETCH_PARENTS_REQUEST = 'FETCH_PARENTS_REQUEST';
  export const fetchParentsRequest = () => ({
      type: FETCH_PARENTS_REQUEST,

  })

  export const FETCH_PARENTS_ERROR = 'FETCH_PARENTS_ERROR';
  export const fetchParentsError = error => ({
      type: FETCH_PARENTS_ERROR,
  })

  export const ADD_PARENTS_SUCCESS = 'ADD_PARENTS_SUCCESS';
  export const addParentsSuccess = parents => ({
      type: ADD_PARENTS_SUCCESS,
      parents
  })


  export const TOGGLE_FORM = 'TOGGLE_FORM';
  export const toggleForm = () => ({
      type: TOGGLE_FORM,
  })

export const ADD_PARENTS_INFO = 'ADD_PARENTS_INFO';
export const addParentsInfo = (parents) => dispatch => {
  dispatch(fetchParentsRequest());
  return fetch(`${API_BASE_URL}/parents`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(parents)
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
      return res.json();
  }).then(
      parents => {
          window.location = '/'
        dispatch(addParentsSuccess(parents))
      }
  )

  .catch(err =>
    dispatch(fetchParentsError(err)))
}


// export const GET_PARENTS_BY_ZIP = 'GET_PARENTS_BY_ZIP';
// export const getParentsByZip = (zip) => dispatch => {

// }

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
