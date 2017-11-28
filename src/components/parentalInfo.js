import React, { Component } from 'react';
import { addParentInfo } from '../actions'

class ParentalInfo extends Component {

  onSubmit(event) {
    event.preventDefault();
    const parent = {
      firstName: this.input.value,
      lastName: this.input.value,
      ageOfChild: this.input.value,
      zipcode: this.input.value,
      dateNeeded: this.input.value,
      additionalInfo: this.input.value,
    }
    this.props.dispatch(addParentInfo(parent))
    this.input.value= '';
  }

render() {
  return (
    <form className="parentalInfoForm" onSubmit={e => this.onSubmit(e)}>
      <fieldset>
        <legend>Sign Up</legend>
        <div>
            <label htmlFor="firstName">First Name: </label><input id="firstName" name="firstName" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label><input id="lastName" name="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="ageOfChild">Age of Child: </label><input id="ageOfChild" name="ageOfChild" type="text" />
          </div>
          <div>
            <label htmlFor="zipcode">Zipcode: </label><input id="zipcode" name="zipcode" type="text" />
          </div>
          <div>
            <label htmlFor="dateNeeded">Date Needed: </label><input id="dateNeeded" name="dateNeeded" type="text" />
          </div>
          <div>
            <label htmlFor="additionalInfo">Additional Info: </label><input id="additionalInfo" name="additionalInfo" type="text" />
          </div>
      </fieldset>
    </form>
  )
}
}

export default ParentalInfo;
