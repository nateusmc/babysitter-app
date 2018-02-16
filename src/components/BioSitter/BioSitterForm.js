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
				additionalInfo: this.additionalInfo.value,
				id: this.props.currentUser.id,

			}
			// this.props.dispatch(createSitterBio(value));
			this.rate.value='';
			this.yearsExperience.value='';
			this.sitterHeader.value='';
			this.bio.value='';
			this.dateNeeded.value= '';
			this.location.value= '';
			this.additionalInfo.value= '';

	}

	render(){
			return(
					<div className="sitterBio">
						<form className="sitterBioForm" onSubmit={e=> this.handleAdd(e)}>
							<legend><h3>Please Describe Your </h3></legend>
							<label htmlFor="dateNeeded"></label>
							<input  
								className="createBioInput"
								type="date"
								name="dateNeeded"
								id="dateNeeded"
								placeholder="Date Needed"
								ref={input => this.dateNeeded = input}
								/>

							<label htmlFor="duration"></label>
							<input
								className="jobDuration"
								type="number"
								name="jobDuration"
								id="jobDuration"
								placeholder="Hours Needed"
								ref={input => this.jobDuration = input}
								/>
							<label htmlFor="numberOfChildren"></label>
							<input
								className="numberOfChildren"
								type="number"
								name="numberOfChildren"
								id="numberOfChildren"
								placeholder="Number of Children in Household"
								ref={input => this.numberOfChildren = input}
								/>
							<label htmlFor="childAge"></label>
							<input	
								className="childAge"
								type="text"
								name="childAge"
								id="childAge"
								placeholder="How old is your child/ren"
								ref={input => this.childAge = input}
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
								className="additionalInfo"
								type="text"
								name="additionalInfo"
								id="additionalInfo"
								placeholder="Additional information"
								ref={input => this.additionalInfo = input}
								/>
								<button className="parentBioFormButton"type="submit">Submit</button>
						</form>

					</div>
			)
	}
}


const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(BioSitterForm)