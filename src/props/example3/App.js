import React from 'react';
// import ReactDOM from 'react-dom';
import { List } from './List';
// import {BigButton} from './BigButton';

export class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>

        {/* <BigButton /> */}
      </div>
    );
  }
}

// ReactDOM.render(
//   <App />, 
//   document.getElementById('app')
// );