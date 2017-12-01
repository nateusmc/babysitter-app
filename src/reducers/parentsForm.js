import {TOGGLE_FORM, ADD_PARENTS_SUCCESS, FETCH_PARENTS_ERROR, FETCH_PARENTS_REQUEST, FETCH_PARENTS_SUCCESS, ADD_PARENTS_INFO } from '../actions'

const initialState = {
  parents: [],
  firstName: null,
  lastName: null,
  ageOfChild: null,
  zipcode: null,
  dateNeeded: null,
  startTime: null,
  endTime: null,
  email: null,
  additionalInfo: null,
  loading: false,
  error: null,
  visible: false,
}

export default (state = initialState, action) => {
  if (action.type === FETCH_PARENTS_SUCCESS) {
    return Object.assign({}, state, {
      parents: action.parents
    })
  }

  if(action.type === TOGGLE_FORM) {
    return Object.assign({}, state, {
      visible: true
    })
  }


  if (action.type === ADD_PARENTS_INFO) {
    return Object.assign({}, state, {
      firstName: action.firstName,
      lastName: action.lastName,
      ageOfChild: action.ageOfChild,
      zipcode: action.zipcode,
      dateNeeded: action.dateNeeded,
      startTime: action.startTime,
      endTime: action.endTime,
      email: action.email,
      additionalInfo: action.additionalInfo
    })
  }

  if(action.type === ADD_PARENTS_SUCCESS) {
    return Object.assign({}, state, {
      firstName: action.firstName,
      lastName: action.lastName,
      ageOfChild: action.ageOfChild,
      zipcode: action.zipcode,
      dateNeeded: action.dateNeeded,
      startTime: action.startTime,
      endTime: action.endTime,
      email: action.email,
      additionalInfo: action.additionalInfo
    })
  }

  if(action.type === FETCH_PARENTS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  }

  if(action.type === FETCH_PARENTS_ERROR) {
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
