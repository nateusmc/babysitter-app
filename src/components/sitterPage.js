import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './sitterPage.css'
import Nav from './navBar';


 class Sitter extends Component {

  render() {
    const parents = this.props.parents.map((parents, index) => {
      return (
      <li key={index} className="localFamily">
              <div>Parent's Name: {parents.name}</div>
                <div>Child's Age: {parents.ageOfChild}</div>
                <div>Zipcode: {parents.zipcode}</div>
                <div>Date Needed: {parents.dateNeeded}</div>
                <div>Start Time: {parents.startTime}</div>
                <div>End Time: {parents.endTime}</div>
                <div>Email: <a href={`mailto:${parents.email}`}>{parents.email}</a></div>
                <div>Additional Information: {parents.additionalInfo}</div>
             </li>
           )
  })

    return (
      <div>
      <div>
        <Nav />
      </div>
      <ul id="parentsList">
            {parents}
          <Link to="/">
            <button className="button">Done</button>
          </Link>
      </ul>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  parents: state.parents,
})

export default connect(mapStateToProps)(Sitter);
