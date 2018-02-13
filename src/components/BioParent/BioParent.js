import React, { Component } from 'react';
import { connect } from 'react-redux';
import BioParentForm from './BioParentForm'
import './BioParent'

export class BioParent extends Component{
	componentDidMount(){
		this.props.dispatch(searchSitters(this.props.parentZip))
	}

	reducer() {
			
		if(this.props.parentBio === 0){
			return (
			<div className="parentalBioForm">
				<p className="bioFormCaption">Please Describe Your Needs</p>
				<BioParentForm />
			</div>
			)
		}
		
		let localSitterList;

		localSitterList = this.props.localSitters.map((item, index) => {
			<div key={index}>
					<ul>
						<li className="sitterFirstName">Name: {item.sitterUserID.firstName}</li>
						<li className="sitterLocation">Location: {item.location}</li>
						{/* <Moment className="availability" format='MM/DD/YYYY'><li className="dateAvailable">Date Available: {item.dateAvailable}</li></Moment > */}
						<li className="sitterRate">Rate: {item.rate}  </li>
						<li className="sitterHeader"> {item.sitterHeader}</li>	
						<li className="individualSitter">Bio: {item.bio}</li>
						<li className="yearsExperience">Years Experience: {item.yearsExperience}</li>
					</ul>
						<button className="contactSitterButton">Sign Up to Contact Sitter</button>
			</div>
		})

		return (

				<div>
						{localSitterList}
				</div>
		)
	}
}

const mapStateToProps = state => ({
	parentBio: state.parents.createdBio,
	userId: state.auth.currentUser,
	parentZip: state.parents.zipcode,
	localSitters: state.sitters.localSitters,
})

export default connect(mapStateToProps)(BioParent);