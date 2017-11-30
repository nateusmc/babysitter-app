import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import Nav from './navBar'
import Footer from './footer'
// import ParentalInfo from './parentalInfo.js'
import { fetchParents, toggleForm} from '../actions';

class Home extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(this.input.value);
    const zip = this.input.value;
    this.props.dispatch(fetchParents(zip));
    this.input.value= '';
  }

  onChange(e) {
    const value = e.target.value;
    console.log('++++', value);
    this.props.dispatch(toggleForm())
  }

  
  render() {
console.log(this.props.toggleForm)
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
              <label htmlFor="radioParent">I'm a Parent </label>
                <input value="radioParent" type="radio" id="radioParent" name="customerType" onChange={e => this.onChange(e)} />
            </div>
            <div>
            <label htmlFor="radioSitter">I'm a Sitter </label>
              <input value="radioSitter" type="radio" id="radioSitter" name="customerType" onChange={e => this.onChange(e)} />
            </div>
            <div>
              in <input ref={input => this.input = input} type="text"/>
                  <button type="submit">Search</button>
            </div>

            {this.props.visible && 
              <fieldset>
                <legend>Sign Up</legend>
                <div>
                    <label htmlFor="firstName">First Name: </label><input ref={input => this.firstName = input} id="firstName" name="firstName" type="text" />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name: </label><input ref={input => this.lastName = input} id="lastName" name="lastName" type="text" />
                  </div>
                  <div>
                    <label htmlFor="ageOfChild">Age of Child: </label><input ref={input => this.ageOfChild = input} id="ageOfChild" name="ageOfChild" type="text" />
                  </div>
                  <div>
                    <label htmlFor="zipcode">Zipcode: </label><input ref={input => this.zipcode = input} id="zipcode" name="zipcode" type="text" />
                  </div>
                  <div>
                    <label htmlFor="dateNeeded">Date Needed: </label><input ref={input => this.dateNeeded = input} id="dateNeeded" name="dateNeeded" type="text" />
                  </div>
                  <div>
                    <label htmlFor="additionalInfo">Additional Info: </label><input ref={input => this.additionalInfo = input} id="additionalInfo" name="additionalInfo" type="text" />
                  </div>
              </fieldset>
            } 
          </form>
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
  console.log(state)
  return {
  parents: state.parents,
  visible: state.visible,
}}

export default connect(mapStateToProps)(Home);
