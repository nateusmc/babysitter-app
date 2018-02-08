import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

import Footer from './Footer';

import './LandingPage.css';

export class LandingPage extends Component {
    componentDidMount() {
        this.props.dispatch(actions.toggleView('landing-page'));
    }

    onSubmit(e) {
        e.preventDefault();
        const zip = this.input.value;
        // this.props.dispatch(fetchParents(zip));
        this.input.value= '';
      }

    render() {
        // need conditional to redirect to parent dash || sitter dash....

        if(this.props.loggedIn){
            if(this.props.user.role === 'parent'){
                return <Redirect to='/parent/dashboard' />
            }
            else if(this.props.user.role === 'sitter'){
                return <Redirect to ='/sitter/dashboard' />
            }
        }

        return(
            <div className="landingPageContainer">
                <div className="mainTagline">Sitter Finder's mission is to make child care more affordable and accessable to parents. The technology we're building simplifies the process of finding a baby sitter for a special occasion or if needed on a regular schedule. The technology will also allow parents to search for certified sitters based on location.
                </div>
                <form className="zipCodeForm" onSubmit={e => this.onSubmit(e)}>
                    <div>
                        <label htmlFor="zipInput">I'm looking for a sitter in  </label>
                        <input id="zipInput"ref={input => this.input = input} type="text"       placeholder="Enter Zip Code"/>
                        <button className="button" type="submit">Search</button>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
 }

 const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser,
  })
  
  export default connect(mapStateToProps)(LandingPage);