import React from 'react';
// import { LilButton } from './LilButton';

export class BigButton extends React.Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}


// // Example 1
// <BigButton>
//   I am a child of BigButton.
// </BigButton>


// // Example 2
// <BigButton>
//   <LilButton />
// </BigButton>

//undef
// // Example 3
// <BigButton />