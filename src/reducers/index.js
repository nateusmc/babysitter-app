const initalState = {
  firstName: null,
  lastName: null,
  ageOfChild: null,
  location: null,
  dateNeeded: null,
  additionalInfo: null,
  // showParentalModal: false
  // view: "parentalInfo"
}
import { combineReducers } from 'redux';
import parentsForm from './parentsForm';

const rootReducer = combineReducers({
  parentsForm
})

export default rootReducer;
