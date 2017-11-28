import React, { Component } from 'react';
import './home.css';
import Nav from './navBar'
import Footer from './footer'
import ParentalInfo from './parentalInfo.js'

class Home extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.customerType.value);
  }
  render() {

    const image = 'http://cachevalleyfamilymagazine.com/wp-content/uploads/2015/04/babysitting.jpg'

    return (
      <div className="main">
        <div>
          <Nav />
        </div>
        <div className="image">
          <img src={image} alt="babysitter"/>
        </div>
        <div>
          <form className="locationForm" onSubmit={e => this.onSubmit(e)}>
            <label htmlFor="parent">I'm a Parent </label><input value="parent" type="radio" id="parent" name="parent"/>
            <label htmlFor="sitter">I'm a Sitter </label><input value="sitter" type="radio" id="sitter" name="sitter"/>
            in <input type="text"/>
          <button type="submit">Search</button>
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
