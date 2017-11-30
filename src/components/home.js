import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import Nav from './navBar'
import Footer from './footer'
import { addParentsInfo } from '../actions/index'
import { fetchParents, toggleForm} from '../actions';

class Home extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(this.input.value);
    const zip = this.input.value;
    this.props.dispatch(fetchParents(zip));
    this.input.value= '';
  }

  onTap(e) {
    this.props.dispatch(toggleForm())
  }

  onClick(e) {
    e.preventDefault();
    const parent = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      ageOfChild: this.ageOfChild.value,
      zipcode: this.zipcode.value,
      dateNeeded: this.dateNeeded.value,
      additionalInfo: this.additionalInfo.value,
    }
    this.props.dispatch(addParentsInfo(parent))
    this.firstName.value= '';
    this.lastName.value= '';
    this.ageOfChild.value= '';
    this.zipcode.value= '';
    this.dateNeeded.value= '';
    this.additionalInfo.value= '';
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
              <div>
            <button type="button" onClick={e => this.onTap(e)}>I'm a Parent Searching for a Sitter</button>
            </div>
            </div>
            </form>
            {this.props.visible &&
              <fieldset>
                <form>
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
                  <button type="submit" onClick={e => this.onClick(e)}>Post Job</button>
                  </form>
              </fieldset>
            }

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
