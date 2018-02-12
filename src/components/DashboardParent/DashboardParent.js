import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import * as actions from '../../actions';
import './DashboardParent.css';

export class DashboardParent extends Component{
	componentDidMount(){
			this.props.dispatch(actions.toggleView('parent'));
			// this.props.dispatch(searchSitters(value));
	}

	render(){
			return(
					<div></div>
			)
	}
}

