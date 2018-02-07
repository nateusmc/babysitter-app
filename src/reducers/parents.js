import * as types from '../actions/actionType';

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
  redirectToSitterPage: false,
}

const parentsReducer = (state = initialState, action) => {
  switch (action.type){
    case types.FETCH_PARENTS_SUCCESS:
      return Object.assign({}, state, {
        parents: action.parents,
        redirectToSitterPage: true,
        loading: false,
        error: false,
      })
    case types.ADD_PARENTS_INFO:
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
    case types.ADD_PARENTS_SUCCESS:
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
    case types.FETCH_PARENTS_REQUEST: 
    return Object.assign({}, state, {
      loading: true,
      error: false,
    })
    case types.FETCH_PARENTS_ERROR: 
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
    case types.TOGGLE_FORM:
    return Object.assign({}, state, {
      visible: true
    })
    default: break;
  }
  return state
};


export default parentsReducer