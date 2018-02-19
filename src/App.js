import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import RegistrationPage from './components/LandingPage/RegistrationPage';
import LoginPage from './components/LandingPage/LoginPage';
import BioParentForm from './components/BioParent/BioParentForm';
import BioSitterForm from './components/BioSitter/BioSitterForm';
import DashboardParent from './components/DashboardParent/DashboardParent';
import DashboardSitter from './components/DashboardSitter/DashboardSitter';
import './index.css';

export class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/signup" component={RegistrationPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/parent/dashboard" component={DashboardParent} />
					<Route exact path="/sitter/dashboard" component={DashboardSitter} />
					<Route exact path="/parent/parentForm" component={BioParentForm} />
					<Route exact path="/sitter/sitterForm" component={BioSitterForm} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect()(App));
