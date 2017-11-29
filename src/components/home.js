import React, { Component } from 'react';
import './home.css';
import Nav from './navBar'
import Footer from './footer'
import ParentalInfo from './parentalInfo.js'
// import { fetchParent } from '../actions';



class Home extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(this.input.value);
    const zip = this.input.value;
    console.log(zip)
    // this.props.dispatch(fetchParent(zip));
    this.input.value= '';
  }
  render() {

    const image = 'http://placehold.it/200x200'

    return (
      <div className="main">loading: false,
        <div>
          <Nav />
        </div>
        <div className="image">
          <img src={image} alt="babysitter"/>
        </div>
        <div>
          <form className="locationForm" onSubmit={e => this.onSubmit(e)}>
            <div>
              <label htmlFor="parent">I'm a Parent </label>
                <input value="parent" type="radio" id="parent" name="parent" />
            </div>
            <div>
            <label htmlFor="sitter">I'm a Sitter </label>
              <input value="sitter" type="radio" id="sitter" name="sitter"/>
            </div>
            <div>
              in <input ref={input => this.input = input} type="text"/>
                  <button type="submit">Search</button>
            </div>
            
          </form>
        </div>
        <div>
          <ParentalInfo />
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

export default Home;
