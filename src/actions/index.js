import {API_BASE_URL} from '../config';

export const fetchParents = (zipcode) => dispatch => {
      dispatch(fetchParentsRequest());
      console.log('[][][][]')
    return fetch(`${API_BASE_URL}/api/parents`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
        
    })
        .then(res => {
            console.log('++++++')
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

  export const FETCH_PARENTS_SUCCESS = 'FETCH_PARENT_SUCCESS';
  export const fetchParentsSuccess = parents => ({
      type: FETCH_PARENTS_SUCCESS,
      parents
  })

  export const FETCH_PARENTS_REQUEST = 'FETCH_PARENT_REQUEST';
  export const fetchParentsRequest = () => ({
      type: FETCH_PARENTS_REQUEST,
  })
  
  export const FETCH_PARENTS_ERROR = 'FETCH_PARENT_ERROR';
  export const fetchParentsError = error => ({
      type: FETCH_PARENTS_ERROR,
  })
  
  export const ADD_PARENTS_SUCCESS = 'ADD_PARENT_SUCCESS';
  export const addParentsSuccess = parents => ({
      type: ADD_PARENTS_SUCCESS,
      parents
  })


export const ADD_PARENTS_INFO = 'ADD_PARENTS_INFO';
export const addParentsInfo = (parents) => dispatch => {
  dispatch(fetchParentsRequest());
  return fetch(`${API_BASE_URL}/api/parents`, {
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
        dispatch(addParentsSuccess(parents))
      }
  )
  .catch(err => dispatch(fetchParentsError(err)))
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

