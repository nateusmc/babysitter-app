import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';
import Nav from './navBar';
import Footer from './footer';
import { fetchParents } from '../actions';
import Sitter from './sitterPage';

class Home extends Component {
  onSubmit(e) {
    e.preventDefault();
    const zip = this.input.value;
    this.props.dispatch(fetchParents(zip));
    this.input.value= '';
  }

  render() {
    const image = 'https://placehold.it/200x200'
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
            <div>
              <Link to="/parents">
                <button type="button">I'm a Parent Searching for a Sitter</button>
              </Link>
            </div>
        </div>

        <div>
          <h2>About Us:</h2>
          <p>Baby Sitter App's mission is to make child care more affordable and accessable to parents.
            The technology we're building simplifies the process of finding a baby sitter for a special
            occasion or if needed on a regular schedule. The technology will also allow parents to search
            for certified sitters based on location.</p>
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
