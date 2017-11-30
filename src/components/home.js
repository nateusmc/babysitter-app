import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import Nav from './navBar';
import Footer from './footer';
import { fetchParents } from '../actions';
import ParentalInfo from './parentalInfo';
import Sitter from './sitterPage';

class Home extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(this.input.value);
    const zip = this.input.value;
    this.props.dispatch(fetchParents(zip));
    this.input.value= '';
  }

  render() {
    const image = 'http://placehold.it/200x200'

    return (
      <div className="main">
        <div>
          <Nav />
        </div>
        <div className="image">
          <img src={image} alt="babysitter"/>
        </div>
        <div>
          <form className="zipCodeForm" onSubmit={e => this.onSubmit(e)}>
            <div>
              I'm a babysitter looking for families in: <input ref={input => this.input = input} type="text" placeholder="Enter Zip Code"/>
            <button type="submit">Search</button>
            <br/>
              OR
              <br/>
            </div>
            </form>
            <ParentalInfo />
            <Sitter />
          {/* {this.props.parents !== [] && <sitterPage parents={this.props.parents}/>} */}
        </div>

        <div>
          <h2>About Us:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({parentsForm: state}, props) => {
  return {
  parents: state.parents,
  visible: state.visible,
}}

export default connect(mapStateToProps)(Home);
