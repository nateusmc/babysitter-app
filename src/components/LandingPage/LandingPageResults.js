import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../../actions/views';
import { Redirect } from 'react-router-dom';

// need to import footer when done

import './LandingPageResults.css';

export class LandingPageResults extends Component {
    componentDidMount() {
        // will dispatch toggleView
    }

    render(){
        // need conditional to redirect to parent dash || sitter dash....

        // if(this.props.loggedIn){
        //     if(this.props.user.role === 'parent'){
        //         return <Redirect to='parent dashboard endpoint TBD'
        //     }
        //     else if(this.props.user.role === 'sitter'){
        //         return <Redirect to ='sitter dashboard endpoint TBD'
        //     }
        // }

        return(
            <div className="landingPageContainer">
                <div className="mainTagline">Find you next sitter or family now!
                </div>
            </div>
        )
    }
 }

 const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser,
  })
  
  export default connect(mapStateToProps)(LandingPageResults);