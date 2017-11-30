import React, { Component } from 'react';
import { connect } from 'react-redux';


 class Sitter extends Component {

  
  render() { 

    const parents = this.props.parents.map((parents, index) => {
      return <li key={index}> 
                <div>Parent's Name: {parents.name}</div>
                <div>Child's Age: {parents.ageOfChild}</div>
                <div>Location: {parents.zipcode}</div>
                <div>Date Needed: {parents.dateNeeded}</div>
                <div>Additional Information: {parents.additionalInfo}</div>
             </li>
  })
    return (
    
      <div>
      <ul id="parentsList">
            {parents}
      </ul>
    </div>
    )
  }
}

const mapStateToProps = ({parentsForm: state}, props) => {
  return {
  parents: state.parents,
}}

export default connect(mapStateToProps)(Sitter);
