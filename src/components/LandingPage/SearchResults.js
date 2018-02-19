import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import "./SearchResults.css";

export class SearchResults extends Component {
  render() {
    if (this.props.loading) {
      return <div>Loading....</div>;
    }

    let sitterList, resultHeader;

    sitterList = this.props.result.map((item, index) => {
      return (
        <div key={index}>
          <ul>
            <li className="sitterFirstName">
              Name: {item.sitterUserID.firstName}
            </li>
            <li className="sitterLocation">Location: {item.location}</li>
            {/* <Moment className="availability" format='MM/DD/YYYY'><li className="dateAvailable">Date Available: {item.dateAvailable}</li></Moment > */}
            <li className="sitterRate">Rate: {item.rate} </li>
            <li className="sitterHeader"> {item.sitterHeader}</li>
            <li className="individualSitter">Bio: {item.bio}</li>
            <li className="yearsExperience">
              Years Experience: {item.yearsExperience}
            </li>
          </ul>
          <button className="contactSitterButton">
            Sign Up to Contact Sitter
          </button>
        </div>
      );
    });

    if (this.props.result.length === 0 && this.props.initialSearch) {
      resultHeader = (
        <p className="noResultsFound">No sitters found in your area</p>
      );
    } else if (this.props.result.length > 0) {
      resultHeader = <h3>Sitters Near You:</h3>;
    }

    return (
      <ul className="sitterResultHeader">
        {resultHeader}
        <li className="sitterResultList">{sitterList}</li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.sitters.loading,
  result: state.sitters.zipcodeSearches,
  initialSearch: state.sitters.initialSearch
});
export default connect(mapStateToProps)(SearchResults);
