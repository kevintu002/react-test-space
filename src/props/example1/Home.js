import React from 'react';
// import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

export class Home extends React.Component {
  render() {
    return <Welcome name='Wolfgang Amadeus Mozart' />;
  }
}

// ReactDOM.render(
//   <Home />, 
//   document.getElementById('app')
// );