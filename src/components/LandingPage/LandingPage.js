import React, { Component } from 'react';
import { connect } from 'react-redux';
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

	handleSearch = e => {
		e.preventDefault();
		const value = this.input.value;
		this.props.dispatch(searchSitters(value));
		this.props.dispatch(toggleInitialSearch(true));
		this.input.value = '';
	};

	render() {
		// conditional to redirect to parent dash || sitter dash....

		if (this.props.loggedIn) {
			if (this.props.user.role === 'parent') {
				return <Redirect to="/parent/dashboard" />;
			} else if (this.props.user.role === 'sitter') {
				return <Redirect to="/sitter/dashboard" />;
			}
		}

		return (
			<div className="landingPageContainer">
				<div className="Site-Content">
					<div className="imgWrapper">
						<img
							className="babysitterImg"
							src={'https://i.imgur.com/5co1gtF.jpg'}
							alt="babysitter-playing-with-child"
						/>
					</div>
					<div className="descriptionWrapper">
						<div className="description">
							Sitter Finder's mission is to make child care more affordable and accessable to parents. The
							technology we're building simplifies the process of finding a baby sitter for a special
							occasion or if needed on a regular schedule. The technology will also allow parents to
							search for certified sitters based on location.
						</div>
						<div className="searchForm">
							<form className="zipCodeForm" onSubmit={e => this.handleSearch(e)}>
								<legend className="legend">Search for a Sitter Near You</legend>
								<div>
									<label htmlFor="zipInput" className="label">
										I'm looking for a sitter in
									</label>
									<input
										className="searchSitterByZipInput"
										id="zipInput"
										name="zipInput"
										type="text"
										placeholder="Enter Zip Code"
										ref={input => (this.input = input)}
									/>
									<button className="searchButton" type="submit">
										Search
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<SearchResults />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	user: state.auth.currentUser,
});

export default connect(mapStateToProps)(LandingPage);
