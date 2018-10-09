// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount
  }

  timer = () => this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

  render() {
    return (
      <div>{this.timer()}</div>
    );
  }
}
