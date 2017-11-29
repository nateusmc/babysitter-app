import { ADD_PARENTS_SUCCESS, FETCH_PARENTS_ERROR, FETCH_PARENTS_REQUEST, FETCH_PARENTS_SUCCESS, ADD_PARENTS_INFO } from '../actions'

const initialState = {
  parents: [],
  firstName: null,
  lastName: null,
  ageOfChild: null,
  zipcode: null,
  dateNeeded: null,
  additionalInfo: null,
  loading: false,
  error: null,
  radioParent: false,
  radioSitter: false,
}

export default (state = initialState, action) => {
  if (action.type === FETCH_PARENTS_SUCCESS) {
    return Object.assign({}, state, {
      parents: action.parentsparent
    })
  }


  if (action.type === ADD_PARENTS_INFO) {
    return Object.assign({}, state, {
      firstName: action.firstName,
      lastName: action.lastName,
      ageOfChild: action.ageOfChild,
      zipcode: action.zipcode,
      dateNeeded: action.dateNeeded,
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