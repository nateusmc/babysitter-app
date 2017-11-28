import { addParentsInfo } from '../actions'

const initalState = {
  firstName: null,
  lastName: null,
  ageOfChild: null,
  location: null,
  dateNeeded: null,
  additionalInfo: null
}

const parentsForm = (state = initalState, action) => {
  switch(action.type) {
    case 'ADD_PARENTS_INFO':
      return {}

    default:
      return state
  }
}

export default parentsForm;
