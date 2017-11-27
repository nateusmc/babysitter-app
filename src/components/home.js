import React, { Component } from 'react';
import './home.css';
import Nav from './navBar'
import Footer from './footer'

class Home extends Component {

  render() {

    const image = 'http://cachevalleyfamilymagazine.com/wp-content/uploads/2015/04/babysitting.jpg'

    return (
      <div className="main">
        <div>
          <Nav />
        </div>
        <div className="image">
          <img src={image} alt="babysitter-image"/>
        </div>
        <div>
          <form>
            <input type="text">
            </input>
            <a href="#"><button>I'm a Parent</button></a>
            <a href="#"><button>I'm a Sitter</button></a>
          </form>
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
