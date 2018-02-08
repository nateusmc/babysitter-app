import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../../actions/views';

import RegistrationPageForm from './RegistrationPageForm';

export class RegistrationPage extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('signup'));
  }

  render() {
    return(
      <RegistrationPageForm />
    )
  }
}

export default connect()(RegistrationPage);