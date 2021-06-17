import React from 'react';
// import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.js';
import {Greeting} from './Greeting.js';

export class ProfilePage extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <h2>{stringProps}</h2>
        <h3>pass in info prop test: this.props.firstName = {this.props.firstName}</h3>
        <p>I like movies and blah blah blah blah blah</p>
        {/* <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" /> */}

        <h4><Greeting name="GRAPPA"/></h4>
      </div>
    );
  }
}
