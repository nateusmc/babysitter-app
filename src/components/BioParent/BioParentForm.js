import React, { Component } from "react";
import { connect } from "react-redux";
import { addParentBio } from "../../actions/parents";
import { searchSitters } from "../../actions/sitters";
import "./BioParentForm.css";

export class BioParentForm extends Component {
  handleAdd = e => {
    console.log("e", e);
    e.preventDefault();
    const value = {
      dateNeeded: this.dateNeeded.value,
      startTime: this.startTime.value,
      endTime: this.endTime.value,
      numberOfChildren: this.numberOfChildren.value,
      ageOfChild: this.ageOfChild.value,
      location: this.location.value,
      additionalInfo: this.additionalInfo.value,
      id: this.props.currentUser.id
    };
    this.props.dispatch(addParentBio(value));
    this.props.dispatch(searchSitters(this.props.parentZip));
    this.dateNeeded.value = "";
    this.startTime.value = "";
    this.endTime.value = "";
    this.numberOfChildren.value = "";
    this.ageOfChild.value = "";
    this.location.value = "";
    this.additionalInfo.value = "";
  };
  render() {
    return (
      <div className="parentBio">
        <form className="parentBioForm" onSubmit={e => this.handleAdd(e)}>
          <legend>
            <h3>Please Describe Your Needs</h3>
          </legend>
          <label htmlFor="dateNeeded" />
          <input
            className="createBioInput"
            type="date"
            name="dateNeeded"
            id="dateNeeded"
            placeholder="Date Needed"
            ref={input => (this.dateNeeded = input)}
          />

          <label htmlFor="startTime" />
          <input
            className="startTime"
            type="text"
            name="startTime"
            id="startTime"
            placeholder="Start time"
            ref={input => (this.startTime = input)}
          />
          <label htmlFor="endTime" />
          <input
            className="endTime"
            type="text"
            name="endTime"
            id="endTime"
            placeholder="End Time"
            ref={input => (this.endTime = input)}
          />
          <label htmlFor="numberOfChildren" />
          <input
            className="numberOfChildren"
            type="number"
            name="numberOfChildren"
            id="numberOfChildren"
            placeholder="Number of Children in Household"
            ref={input => (this.numberOfChildren = input)}
          />
          <label htmlFor="ageOfChild" />
          <input
            className="ageOfChild"
            type="text"
            name="ageOfChild"
            id="ageOfChild"
            placeholder="How old is your child/ren"
            ref={input => (this.ageOfChild = input)}
          />
          <label htmlFor="location" />
          <input
            className="zipcode"
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="Zipcode"
            ref={input => (this.location = input)}
          />
          <label htmlFor="additionalInfo" />
          <input
            className="additionalInfo"
            type="text"
            name="additionalInfo"
            id="additionalInfo"
            placeholder="Additional information"
            ref={input => (this.additionalInfo = input)}
          />
          <button className="parentBioFormButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  parentZip: state.auth.currentUser.zipcode
});

export default connect(mapStateToProps)(BioParentForm);
