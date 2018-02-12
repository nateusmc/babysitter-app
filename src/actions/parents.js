import * as types from './actionType';
import {API_BASE_URL} from '../config';


// Sync Actions
export const fetchParentsSuccess = parents => ({
    type: types.FETCH_PARENTS_SUCCESS,
    parents
})

export const fetchParentsRequest = () => ({
    type: types.FETCH_PARENTS_REQUEST,
})

export const fetchParentsError = error => ({
    type: types.FETCH_PARENTS_ERROR,
})

export const addParentsSuccess = parents => ({
    type: types.ADD_PARENTS_SUCCESS,
    parents
})

// not sure if I will need.

// export const fetchBioRequest = () => ({
//     type: types.FETCH_BIO_REQUEST,
// })

// export const fetchBioSuccess = (bios) => ({
//     type: types.FETCH_BIO_SUCCESS,
//     bios
// })
// Async Actions

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
    })
    .then(
        parents => {
            window.location = '/'
          dispatch(addParentsSuccess(parents))
        }
    )
    .catch(err =>
      dispatch(fetchParentsError(err)))
  }

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
			})
		.then(
				parents => {
						console.log("parents")
					dispatch(fetchParentsSuccess(parents))
				}
			)
		.catch(err => {
			console.log(err)
		dispatch(fetchParentsError(err))
		}
	)
}

// need an async action to create a parent bio


// need an async action to retrieve all parent bios
