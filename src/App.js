import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav  from './components/Nav';
import LandingPage  from './components/LandingPage/LandingPage';
import RegistrationPageForm from './components/LandingPage/RegistrationPageForm';
import RegistrationPage from './components/LandingPage/RegistrationPage';
import LoginPageForm  from './components/LandingPage/LoginPageForm';
import LoginPage from './components/LandingPage/LoginPage';
import BioParent from './components/BioParent/BioParent';
import BioParentForm from './components/BioParent/BioParentForm';
import DashboardParent  from './components/DashboardParent/DashboardParent';
import './index.css';




export class App extends Component {

  render () {

    return (
      <div className="App">
        <Nav />
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/signup" component={RegistrationPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/parent/dashboard" component={DashboardParent}/>
            <Route exact path="/parent/parentForm" component={BioParentForm}/>
        </Switch>
      </div>
    )
  }
}


export default withRouter(connect()(App))
