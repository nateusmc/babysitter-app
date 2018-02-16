import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../../actions';
import BioSitterForm from '../BioSitter/BioSitterForm';
import {searchParents} from '../../actions/parents';

import './DashboardSitter.css';

export class DashboardSitter extends Component{
	componentDidMount(){
			this.props.dispatch(actions.toggleView('sitter'));
			this.props.dispatch(searchParents(this.props.location));
	}

	render(){
		if(this.props.createdBios.length === 0){
			return(
				<div className="parentalBioForm">
					<BioSitterForm />
				</div>
			)
		}
		let localSitterList;
				localSitterList = this.props.localSitters.map((item, index) =>

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
				)
			return(
					<div></div>
			)
	}
}

const mapStateToProps = state => ({
	userId: state.auth.currentUser.id,
	createdBios: state.sitters.createdBio,
	location: state.sitters.zipcode  
})

export default connect(mapStateToProps)(DashboardSitter);
