import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import './index.css';
import Home from './components/home';
import ParentalInfo from './components/parentalInfo';
import Sitter from './components/sitterPage';
import Nav from './components/navBar';
import { connect } from 'react-redux';

class Routes extends Component {
  render () {
    return (
      <Router>
        <div>
          {this.props.redirectToSitterPage ? <Redirect to="/sitters"/> : ''}
          <Route exact path="/" component={Home}/>
          <Route exact path={"/parents"} component={ParentalInfo}/>
          <Route exact path={"/sitters"} component={Sitter}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({parentsForm: state}, props) => {
  return {
    redirectToSitterPage: state.redirectToSitterPage
  }
}

export default connect(mapStateToProps)(Routes)
