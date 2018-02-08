import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../../actions/views';

import LoginPageForm from './LoginPageForm';

export class LoginPage extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('login'));
  }

  render() {
    return(
      <LoginPageForm />
    )
  }
}

export default connect()(LoginPage);