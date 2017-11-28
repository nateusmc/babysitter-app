const addParentsInfo = (firstName, lastName, ageOfChild, location, dateNeeded, additionalInfo) => ({
  type: 'ADD_PARENTS_INFO',
  firstName,
  lastName,
  ageOfChild,
  location,
  dateNeeded,
  additionalInfo
});

export default addParentsInfo;
