import React from 'react';
// import ReactDOM from 'react-dom';
import {Clock} from './Clock';
import {Button} from './Button';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), visible: true, isPrecise: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handlePreciseClick = this.handlePreciseClick.bind(this);
  }

  handleToggleClick() {
    this.setState({visible: !this.state.visible});
  }

  handlePreciseClick() {
    this.setState({isPrecise: !this.state.isPrecise});
  }

  render() {
    return (
      <div>
        <Button name="Toggle clock" onClick={this.handleToggleClick}/>
        <Button name="Toggle precise mode" onClick={this.handlePreciseClick}/>
        <button onClick={this.handleToggleClick}>Toggle Clock2</button>
        <br />
        {this.state.visible && <Clock isPrecise={this.state.isPrecise}/>}
      </div>
    );
  }
}

// ReactDOM.render(
//   // <App />
//   document.getElementById('app')
// );
