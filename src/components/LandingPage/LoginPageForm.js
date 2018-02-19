import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";

import { Link } from "react-router-dom";
import Input from "../Input";
import { login } from "../../actions/auth";
import { required, nonEmpty } from "../../validators";

import "./LoginPageForm.css";

export class LoginPageForm extends React.Component {
  onSubmit(values) {
    const { email, password } = values;
    return this.props.dispatch(login(email, password));
  }

  render() {
    if (this.props.loggedIn) {
      if (this.props.user.role === "parent") {
        return <Redirect to="/parent/dashboard" />;
      } else if (this.props.user.role === "Sitter") {
        return <Redirect to="/sitter/dashboard" />;
      }
    }

    let error;
    if (this.props.error) {
      error = (
        <div className="login-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="login-container">
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}

          <fieldset className="login-box">
            <legend>Log In</legend>
            <div className="fields-container">
              <label htmlFor="email" />
              <Field
                component={Input}
                type="text"
                name="email"
                id="email"
                placeholder="email"
                validate={[required, nonEmpty]}
              />
              <label htmlFor="password" />
              <Field
                component={Input}
                type="password"
                name="password"
                id="password"
                placeholder="password"
                validate={[required, nonEmpty]}
              />
              <button
                className="log"
                disabled={this.props.pristine || this.props.submitting}
              >
                Log in
              </button>
            </div>
          </fieldset>
          <p className="no-account">
            Don't have an account yet? Sign up{" "}
            <Link className="signup-here-link" to={"/signup"}>
              <span className="signup-here">Here</span>
            </Link>.
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser
});

export default (LoginPageForm = connect(mapStateToProps)(
  reduxForm({
    form: "login",
    onSubmitFail: (errors, dispatch) => dispatch(focus("login", "email"))
  })(LoginPageForm)
));
