import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';
import Nav from './navBar';
import { fetchParents } from '../actions';

class Home extends Component {
  onSubmit(e) {
    e.preventDefault();
    const zip = this.input.value;
    this.props.dispatch(fetchParents(zip));
    this.input.value= '';
  }

  render() {

    const image = 'https://www.sitterstars.com/images/banner.jpg'

    return (
      <div className="main">
        <div className="navBar">
          <Nav />
        </div>
        <div className="image">
          <img src={image} alt="babysitter"/>
        </div>
        <div>
          <h2>Sitter Finder</h2>
          <p>Sitter Finder's mission is to make child care more affordable and accessable to parents. 
            The technology we're building simplifies the process of finding a baby sitter for a special 
            occasion or if needed on a regular schedule. The technology will also allow parents to search 
            for certified sitters based on location.</p>
        </div>
        <div>
          <form className="zipCodeForm" onSubmit={e => this.onSubmit(e)}>
            <div>
             <label htmlFor="zipInput">I'm a babysitter looking for families in  </label>
             <input id="zipInput"ref={input => this.input = input} type="text" placeholder="Enter Zip Code"/>
            <button className="button" type="submit">Search</button>
            <br/>
              <br/>
            </div>
            </form>
            <div>
              <Link to="/parents">
                <button type="button" className="button">I'm a Parent Searching for a Sitter</button>
              </Link>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parents: state.parents,
  visible: state.visible,
})

export default connect(mapStateToProps)(Home);
