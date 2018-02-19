import React, { Component } from "react";
import { connect } from "react-redux";
import { addSitterBio } from "../../actions/sitters";
import { searchParents } from "../../actions/parents";
import "./BioSitterForm.css";

export class BioSitterForm extends Component {
  handleAdd = e => {
    e.preventDefault();
    const value = {
      sitterHeader: this.sitterHeader.value,
      bio: this.bio.value,
      yearsExperience: this.yearsExperience.value,
      rate: this.rate.value,
      location: this.location.value,
      dateAvailable: this.dateAvailable.value,
      hoursAvailable: this.hoursAvailable.value,
      id: this.props.currentUser.id
    };
    this.props.dispatch(addSitterBio(value));
    this.props.dispatch(searchParents(this.props.sitterZip));
    this.rate.value = "";
    this.yearsExperience.value = "";
    this.sitterHeader.value = "";
    this.bio.value = "";
    this.dateAvailable.value = "";
    this.hoursAvailable.value = "";
    this.location.value = "";
  };

  render() {
    return (
      <div className="sitterBio">
        <form className="sitterBioForm" onSubmit={e => this.handleAdd(e)}>
          <legend>
            <h3>Please Describe Yourself </h3>
          </legend>
          <label htmlFor="dateAvailable" />
          <input
            className="dateAvailable"
            type="date"
            name="dateAvailable"
            id="dateAvailable"
            placeholder="Date Needed"
            ref={input => (this.dateAvailable = input)}
          />

          <label htmlFor="rate" />
          <input
            className="sitterRate"
            type="number"
            name="rate"
            id="rate"
            placeholder="Hourly Rate"
            ref={input => (this.rate = input)}
          />
          <label htmlFor="yearsExperience" />
          <input
            className="yearsExperience"
            type="number"
            name="yearsExperience"
            id="yearsExperience"
            placeholder="Years of Experience"
            ref={input => (this.yearsExperience = input)}
          />
          <input
            className="hoursAvailable"
            type="number"
            name="hoursAvailable"
            id="hoursAvailable"
            placeholder="Hours Available"
            ref={input => (this.hoursAvailable = input)}
          />
          <label htmlFor="sitterHeader" />
          <input
            className="sitterHeader"
            type="text"
            name="sitterHeader"
            id="sitterHeader"
            placeholder="Header"
            ref={input => (this.sitterHeader = input)}
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
          <label htmlFor="bio" />
          <input
            className="bio"
            type="text"
            name="bio"
            id="bio"
            placeholder="Additional information"
            ref={input => (this.bio = input)}
          />
          <button className="sitterBioFormButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  sitterZip: state.auth.currentUser.zipcode
});

export default connect(mapStateToProps)(BioSitterForm);
