import React, { Component } from 'react';
import { connect } from 'react-redux';

// import  {createParentBio} from '../../actions/parents'
import './BioParentForm';

export class BioParentForm extends Component {
	handleAdd = (e) => {
			e.preventDefault();
			const value = {
				dateNeeded: this.dateNeeded.value,
				jobDuration: this.jobDuration.value,
				numberOfChildren: this.numberOfChildren.value,
				childAge: this.childAge.value,
				location: this.location.value,
				additionalInfo: this.additionalInfo.value,
				id: this.props.currentUser.id,

			}
			// this.props.dispatch(createParentBio(value));
			this.dateNeeded.value= '';
			this.jobDuration.value= '';
			this.numberOfChildren.value= '';
			this.childAge.value= '';
			this.location.value= '';
			this.additionalInfo.value= '';

	}
	render(){
			return(
					<div className="parentBio">
						<form className="parentBioForm" onSubmit={e=> this.handleAdd(e)}>
							<legend><h3>Please Describe Your Needs</h3></legend>
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
								className="location"
								type="number"
								name="location"
								id="location"
								placeholder="Location"
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

export default connect(mapStateToProps)(BioParentForm)