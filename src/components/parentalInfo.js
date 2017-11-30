import React, { Component } from 'react';
import { addParentsInfo } from '../actions'

class ParentalInfo extends Component {

  onSubmit(event) {
    event.preventDefault();
    const parent = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      ageOfChild: this.ageOfChild.value,
      zipcode: this.zipcode.value,
      dateNeeded: this.dateNeeded.value,
      additionalInfo: this.additionalInfo.value,
    }
    this.props.dispatch(addParentsInfo(parent))
    this.input.value= '';
  }

render() {
  return (
    <form className="parentalInfoForm" onSubmit={e => this.onSubmit(e)}>
      {this.props.visible && 
              <fieldset>
                <legend>Sign Up</legend>
                <div>
                    <label htmlFor="firstName">First Name: </label><input ref={input => this.firstName = input} id="firstName" name="firstName" type="text" />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name: </label><input ref={input => this.lastName = input} id="lastName" name="lastName" type="text" />
                  </div>
                  <div>
                    <label htmlFor="ageOfChild">Age of Child: </label><input ref={input => this.ageOfChild = input} id="ageOfChild" name="ageOfChild" type="text" />
                  </div>
                  <div>
                    <label htmlFor="zipcode">Zipcode: </label><input ref={input => this.zipcode = input} id="zipcode" name="zipcode" type="text" />
                  </div>
                  <div>
                    <label htmlFor="dateNeeded">Date Needed: </label><input ref={input => this.dateNeeded = input} id="dateNeeded" name="dateNeeded" type="text" />
                  </div>
                  <div>
                    <label htmlFor="additionalInfo">Additional Info: </label><input ref={input => this.additionalInfo = input} id="additionalInfo" name="additionalInfo" type="text" />
                  </div>
              </fieldset>
            } 
    </form>
  )
}
}

export default ParentalInfo;
