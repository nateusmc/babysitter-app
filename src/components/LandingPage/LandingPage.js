import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { searchSitters, toggleInitialSearch } from '../../actions/sitters';
import { toggleView } from '../../actions/views';
import { Redirect } from 'react-router-dom';

import Footer from './Footer';

import './LandingPage.css';

export class LandingPage extends Component {
    componentDidMount() {
        this.props.dispatch(toggleView('landing-page'));
    }

    handleSearch = (e) => {
        e.preventDefault();
        const value = this.input.value;
        this.props.dispatch(searchSitters(value));
        this.props.dispatch(toggleInitialSearch(true));
        this.input.value= '';
      }

    render() {
        // conditional to redirect to parent dash || sitter dash....

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
                <form className="zipCodeForm" onSubmit={e => this.handleSearch(e)}>
                    <legend>Search for a Sitter Near You</legend>
                    <div>
                        <label htmlFor="zipInput">I'm looking for a sitter in  </label>
                        <input 
                            className="searchSitterByZipInput"
                            id="zipInput"
                            name="zipInput"
                            type="text"       
                            placeholder="Enter Zip Code"
                            ref={input => this.input = input} 
                            />
                        <button className="button" type="submit">Search</button>
                    </div>
                </form>
                <SearchResults />
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