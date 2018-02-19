import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm, focus } from "redux-form";
import { Link } from "react-router-dom";

import Input from "../Input";
import { login } from "../../actions/auth";
import { registerUser } from "../../actions/users";
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "../../validators";

import "./RegistrationPageForm.css";

export class RegistrationPageForm extends React.Component {
  onSubmit(values) {
    const { email, password, firstName, lastName, role, zipcode } = values;
    const user = { email, password, firstName, lastName, role, zipcode };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(email, password)));
  }

  render() {
    if (this.props.user.role === "parent") {
      return <Redirect to="/parent/dashboard" />;
    } else if (this.props.user.role === "Sitter") {
      return <Redirect to="/sitter/dashboard" />;
    }

    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="signup sigup-success">Signed up successfully</div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="signup signup-error">{this.props.error}</div>
      );
    }

    return (
      <div className="sign-container">
        <form
          className="registration-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {successMessage}
          {errorMessage}

          <fieldset className="registration-box">
            <legend>Sign Up</legend>
            <div className="fields-container-2">
              <label htmlFor="firstName" />
              <Field
                component={Input}
                type="text"
                name="firstName"
                placeholder="first name"
              />
              <label htmlFor="lastName" />
              <Field
                component={Input}
                type="text"
                name="lastName"
                placeholder="last name"
              />
              <label htmlFor="email" />
              <Field
                component={Input}
                type="text"
                name="email"
                placeholder="email"
                validate={[required, nonEmpty, isTrimmed]}
              />
              <label htmlFor="password" />
              <Field
                component={Input}
                type="password"
                name="password"
                placeholder="password"
                validate={[required, length({ min: 6, max: 72 }), isTrimmed]}
              />
              <label htmlFor="passwordConfirm" />
              <Field
                component={Input}
                type="password"
                name="passwordConfirm"
                placeholder="confirm password"
                validate={[required, nonEmpty, matches("password")]}
              />
              <label htmlFor="zipcode" />
              <Field
                component={Input}
                type="text"
                name="zipcode"
                placeholder="zipcode"
              />
              <Field
                component="select"
                type="role"
                name="role"
                validate={[required]}
              >
                <option value="Parent">Parent</option>
                <option value="Sitter">Sitter</option>
              </Field>

              <button
                className="sign"
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Sign Up
              </button>
            </div>
          </fieldset>
          <p className="no-account">
            Already have an account? Log in{" "}
            <Link className="log-in-here" to={"/login"}>
              <span className="log-in-here">Here</span>
            </Link>.
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   comes in as formReducer from redux-form
  selectedRole: state.form.registration.values.role,
  loggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser
});

RegistrationPageForm = connect(mapStateToProps)(RegistrationPageForm);

export default reduxForm({
  form: "registration",
  initialValues: { role: "parent" },
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationPageForm);
