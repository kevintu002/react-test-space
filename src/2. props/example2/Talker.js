import React from 'react';
// import ReactDOM from 'react-dom';
import { Button } from './Button';

export class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handeClick}/>;
  }
}

// ReactDOM.render(
//   <Talker />,
//   document.getElementById('app')
// );