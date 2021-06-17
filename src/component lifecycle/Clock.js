import React from 'react';
import {Button} from './Button';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), visible: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState({visible: !this.state.visible});
  }

  handlePreciseClick() {
    
  }

  render() {
    return (
      <div>
        <Button name="Toggle clock" onClick={this.handleToggleClick}/>
        <Button name="Toggle precise mode" onClick={this.handlePreciseClick}/>
        <br/>
        {
          this.state.visible 
          ? (
            this.props.isPrecise
            ? this.state.date.toISOString()
            : this.state.date.toLocaleTimeString()) 
          : ""
          }
      </div>
    );
  }

  componentDidMount() {
    this.startInterval();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);

    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startInterval() {
    let delay;
    if (this.props.isPrecise === true) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date()});
    }, delay);
  }
}
