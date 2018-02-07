import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './components/home';
import ParentalInfo from './components/parentalInfo';
import Sitter from './components/sitterPage';

import './index.css';

export class App extends Component {

  render () {

    return (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/parents" component={ParentalInfo}/>
          <Route exact path="/sitters" component={Sitter}/>
      </Switch>
    )
  }
}


export default withRouter(connect()(App))
