import { ADD_PARENT_SUCCESS, FETCH_PARENT_ERROR, FETCH_PARENT_REQUEST, FETCH_PARENT_SUCCESS, addParentInfo, ADD_PARENT_INFO } from '../actions'

const initialState = {
  firstName: null,
  lastName: null,
  ageOfChild: null,
  zipcode: null,
  dateNeeded: null,
  additionalInfo: null,
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  if (action.type === FETCH_PARENT_SUCCESS) {
    return Object.assign({}, state, {
      firstName: action.firstName,
      lastName: action.lastName,
      ageOfChild: action.ageOfChild,
      zipcode: action.zipcode,
      dateNeeded: action.dateNeeded,
      additionalInfo: action.additionalInfo
    })
  }

  if(action.type === ADD_PARENT_SUCCESS) {
    return Object.assign({}, state, {   
      firstName: action.firstName,
      lastName: action.lastName,
      ageOfChild: action.ageOfChild,
      zipcode: action.zipcode,
      dateNeeded: action.dateNeeded,
      additionalInfo: action.additionalInfo
    })
  }

  if(action.type === FETCH_PARENT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  }

  if(action.type === FETCH_PARENT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
  }
    return state
}

// const parentsForm = (state = initalState, action) => {
//   switch(action.type) {
//     case 'ADD_PARENTS_INFO':
//       return {}

//     default:
//       return state
//   }
// }