import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
export class SearchResults extends Component {

	render() {
			// if (this.props.loading){
			// 		return (
			// 				<div>Loading....</div>
			// 		)
			// }
			
			let sitterList, resultHeader;

			sitterList = this.props.result.map((item, index) => {
				console.log('item.bio', item)
					return (
						<div key={index}>
							<ul  className="listOfSitters">
									<li className="sitterLocation">{item.location}</li>
									<li className="individualSitter">{item.bio}</li>
									<li className="dateAvailable">{item.dateAvailable}</li>
									<li className="yearsExperience">{item.yearsExperience}</li>
							</ul>
								<button className="contactSitterButton">Sign Up to Contact Sitter</button>
						</div>
					)
			})

			if(this.props.result.length === 0 && this.props.initialSearch){
					resultHeader = (
							<p className="noResultsFound">No sitters found in your area</p>
					)
			}
			else if (this.props.result.length > 0){
					resultHeader = (
							<h3>Sitters Near You</h3>
					)
			}
			
	return(
			<div className="sitterSearchResultsContainer">
					<ul className="sitterResultsUl">
							<li className="sitterResultLi">
									{resultHeader}
									{sitterList}
							</li>
					</ul>
			</div>
	)
	}
}

const mapStateToProps = state => ({
    loading: state.sitters.loading,
		result: state.sitters.zipcodeSearches,
		initialSearch: state.sitters.initialSearch,
})
export default connect(mapStateToProps)(SearchResults);