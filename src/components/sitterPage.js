import React, { Component } from 'react';
import { connect } from 'react-redux';


class Sitter extends Component {

render() {
    // let parentsArray = [];
    // let parentsArrayFinished = this.props.parents;
    // parentsArrayFinished.push(parentsArray)
    // parentsArray.push(parentsArray);
  return (
  //
  //   <div>
  //   <ul>
  //     {this.props.parents.map((parents, index) => (
  //           <li key={index}>
  //             {parents}
  //           </li>
  //       ))}
  //   </ul>
  // </div>
  // )
}
}

const mapStateToProps = ({parentsForm: state}, props) => {
  return {
  parents: state.parents,
}}

export default connect(mapStateToProps)(Sitter);
