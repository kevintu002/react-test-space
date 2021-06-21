import React from 'react';
// import ReactDOM from 'react-dom';
import { colorStyles } from './facebookStyles';

const divStyle = {
  backgroundColor: colorStyles.darkBlue,
  color: colorStyles.white
};

export class Wow extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
}

// ReactDOM.render(
// 	<Wow />, 
// 	document.getElementById('app')
// );