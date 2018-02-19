import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import * as actions from "../../actions";
import { searchSitters } from "../../actions/sitters";
import BioParentForm from "../BioParent/BioParentForm";

import "./DashboardParent.css";

export class DashboardParent extends Component {
  componentDidMount() {
    this.props.dispatch(actions.toggleView("parent"));
    this.props.dispatch(actions.fetchEnrolledParentBio(this.props.userId));
    this.props.dispatch(searchSitters(this.props.location));
  }

  render() {
    if (this.props.createdBios.length === 0) {
      return (
        <div className="parentalBioForm">
          <BioParentForm />
        </div>
      );
    }
    let localSitterList;
    localSitterList = this.props.localSitters.map((item, index) => (
      <div key={index}>
        <ul>
          <li className="sitterFirstName">
            Name: {item.sitterUserID.firstName}
          </li>
          <li className="sitterLocation">Location: {item.location}</li>
          <Moment className="dateAvailable" format="MM/DD/YYYY">
            <li className="dateAvailable">
              Date Available: {item.dateAvailable}
            </li>
          </Moment>
          <li className="sitterRate">Rate: {item.rate} </li>
          <li className="sitterHeader"> {item.sitterHeader}</li>
          <li className="individualSitter">Bio: {item.bio}</li>
          <li className="yearsExperience">
            Years Experience: {item.yearsExperience}
          </li>
        </ul>
        <button className="contactSitterButton">Contact Sitter</button>
      </div>
    ));
    return <div>{localSitterList}</div>;
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  createdBios: state.parents.parentalInfo,
  location: state.auth.currentUser.zipcode,
  localSitters: state.sitters.zipcodeSearches
});

export default connect(mapStateToProps)(DashboardParent);
