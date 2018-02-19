import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleView } from "../../actions/views";
import Footer from "./Footer";
import "./LoginPage.css";

import LoginPageForm from "./LoginPageForm";

export class LoginPage extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView("login"));
  }

  render() {
    return (
      <div>
        <div>
          <LoginPageForm />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
