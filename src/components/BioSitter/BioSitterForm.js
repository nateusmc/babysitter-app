import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BioSitterForm';

export class BioSitterForm extends Component {
	handleAdd = (e) => {
			e.preventDefault();
			const value = {
				sitterHeader: this.sitterHeader.value,
				bio: this.bio.value,
				yearsExperience: this.yearsExperience.value,
				rate: this.rate.value,
				location: this.location.value,
				id: this.props.currentUser.id,

			}
			// this.props.dispatch(createSitterBio(value));
			this.rate.value='';
			this.yearsExperience.value='';
			this.sitterHeader.value='';
			this.bio.value='';
			this.dateNeeded.value= '';
			this.location.value= '';
	}

	render(){
			return(
					<div className="sitterBio">
						<form className="sitterBioForm" onSubmit={e=> this.handleAdd(e)}>
							<legend><h3>Please Describe Yourself </h3></legend>
							<label htmlFor="sitterBioForm"></label>
							<input  
								className="dateNeeded"
								type="date"
								name="dateNeeded"
								id="dateNeeded"
								placeholder="Date Needed"
								ref={input => this.dateNeeded = input}
								/>

							<label htmlFor="rate"></label>
							<input
								className="sitterRate"
								type="number"
								name="rate"
								id="rate"
								placeholder="Hourly Rate"
								ref={input => this.rate = input}
								/>
							<label htmlFor="yearsExperience"></label>
							<input
								className="yearsExperience"
								type="number"
								name="yearsExperience"
								id="yearsExperience"
								placeholder="Years of Experience"
								ref={input => this.yearsExperience = input}
								/>
							<label htmlFor="sitterHeader"></label>
							<input	
								className="sitterHeader"
								type="text"
								name="sitterHeader"
								id="sitterHeader"
								placeholder="Header"
								ref={input => this.sitterHeader = input}
								/>
							<label htmlFor="location"></label>
							<input	
								className="zipcode"
								type="text"
								name="zipcode"
								id="zipcode"
								placeholder="Zipcode"
								ref={input => this.location = input}
								/>
							<label htmlFor="additionalInfo"></label>
							<input	
								className="bio"
								type="text"
								name="bio"
								id="bio"
								placeholder="Additional information"
								ref={input => this.bio = input}
								/>	
								<button className="sitterBioFormButton"type="submit">Submit</button>
						</form>

					</div>
			)
	}
}


const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(BioSitterForm)