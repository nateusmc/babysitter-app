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
        
          <img src={image} />
        </div>
        <div>
          <Footer />
        </div>
      </div> 
    );
  }
}

export default Home;
