import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Nav  from './components/Nav';
import LandingPage  from './components/LandingPage/LandingPage';
import RegistrationPageForm from './components/LandingPage/RegistrationPageForm'
import LoginPageForm  from './components/LandingPage/LoginPageForm';
// import ParentalInfo from './components/parentalInfo';
// import Sitter from './components/sitterPage';

import './index.css';



export class App extends Component {

  render () {

    return (
      <div className="App">
        <Nav />
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/signup" component={RegistrationPageForm}/>
            <Route exact path="/login" component={LoginPageForm}/>
            {/* <Route exact path="/parents" component={ParentalInfo}/>
            <Route exact path="/sitters" component={Sitter}/> */}
        </Switch>
      </div>
    )
  }
}


export default withRouter(connect()(App))
