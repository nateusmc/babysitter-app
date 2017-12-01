import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addParentsInfo} from '../actions';
import './parentalInfo.css';
import Nav from './navBar';

class ParentalInfo extends Component {

  onClick(e) {
    e.preventDefault();
    const parent = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      ageOfChild: this.ageOfChild.value,
      zipcode: this.zipcode.value,
      dateNeeded: this.dateNeeded.value,
      startTime: this.startTime.value,
      endTime: this.endTime.value,
      email: this.email.value,
      additionalInfo: this.additionalInfo.value
    }
    this.props.dispatch(addParentsInfo(parent))
    this.firstName.value = '';
    this.lastName.value = '';
    this.ageOfChild.value = '';
    this.zipcode.value = '';
    this.dateNeeded.value = '';
    this.startTime.value = '';
    this.endTime.value = '';
    this.email.value= '';
    this.additionalInfo.value = '';
  }

  render() {
    return (
      <div className="container">
        <div>
          <Nav />
        </div>
        <fieldset >
        <legend>Sign Up</legend>
          <form className="parentForm" onSubmit={e => this.onClick(e)}>
            <div className="formGroup">
              <label htmlFor="firstName">First Name:
              </label><input ref={input => this.firstName = input} id="firstName" name="firstName" type="text" placeholder="First Name" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="lastName">Last Name:
              </label><input ref={input => this.lastName = input} id="lastName" name="lastName" type="text" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="ageOfChild">Age of Child:
              </label><input ref={input => this.ageOfChild = input} id="ageOfChild" name="ageOfChild" type="text" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="zipcode">Zipcode:
              </label><input ref={input => this.zipcode = input} id="zipcode" name="zipcode" type="text" placeholder="5 Digit ZIP Code" minLength="5" maxLength="5"/>
            </div>
            <div className="formGroup">
              <label htmlFor="dateNeeded">Date Needed:</label>
              <input ref={input => this.dateNeeded = input} id="dateNeeded" name="dateNeeded" type="date" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="startTime">Start Time:
              </label><input ref={input => this.startTime = input} id="startTime" name="startTime" type="text" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="endTime">End Time:
              </label><input ref={input => this.endTime = input} id="endTime" name="endTime" type="text" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email:
              </label><input ref={input => this.email = input} id="emailAddress" name="email" type="email" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="additionalInfo">Additional Info:
              </label><input ref={input => this.additionalInfo = input} id="additionalInfo" name="additionalInfo" type="text"/>
            </div>
            <button type="submit" className="button">Post Job</button>
          </form>
        </fieldset>
      </div>
  )
  }
}
const mapStateToProps = ({
  parentsForm: state
}, props) => {
  return {parents: state.parents, visible: state.visible}
}

export default connect(mapStateToProps)(ParentalInfo);
