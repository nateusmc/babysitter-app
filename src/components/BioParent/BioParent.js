import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BioParent';



export class BioParent extends Component{
	componentDidMount(){
		// this.props.dispatch(searchSitters(this.props.parentZip))
	}

	render() {

		

		return (

				<div>
					<p>Testing</p>
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