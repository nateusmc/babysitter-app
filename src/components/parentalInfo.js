import React, { Component } from 'react';

class ParentalInfo extends Component {

render() {
  return (
  <div>
    <form>
      <label htmlFor="firstName">First Name: </label><input id="firstName" name="firstName" type="text" />
      <label htmlFor="lastName">Last Name: </label><input id="lastName" name="lastName" type="text" />
      <label htmlFor="ageOfChild">Age of Child: </label><input id="ageOfChild" name="ageOfChild" type="text" />
      <label htmlFor="location">Location: </label><input id="location" name="location" type="text" />
      <label htmlFor="dateNeeded">Date Needed: </label><input id="dateNeeded" name="dateNeeded" type="text" />
      <label htmlFor="additionalInfo">Additional Info: </label><input id="additionalInfo" name="additionalInfo" type="text" />
    </form>
  </div>
  )
}
}

export default ParentalInfo;
