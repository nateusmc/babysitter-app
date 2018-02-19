import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleView } from "../../actions/views";
import Footer from "./Footer";
import "./RegistrationPage.css";

import RegistrationPageForm from "./RegistrationPageForm";

export class RegistrationPage extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView("signup"));
  }

  render() {
    return (
      <div>
        <div>
          <RegistrationPageForm />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect()(RegistrationPage);
