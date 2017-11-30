import React, { Component } from 'react';
import { connect } from 'react-redux';


 class Sitter extends Component {


  render() {

    const parents = this.props.parents.map((parents, index) => {
      return <li key={index}>
                <div>{parents.name}</div>
                <div>{parents.ageOfChild}</div>
                <div>{parents.zipcode}</div>
                <div>{parents.dateNeeded}</div>
                <div>{parents.additionalInfo}</div>

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
