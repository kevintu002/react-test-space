import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={this.props.src} alt="img links are dead"/>
      </div>
    );
  }
}