// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  render() {
    return (
      <button onFocus={this.whenFocus} onBlur={this.whenBlur}></button>
    )
  }

  whenFocus = () => {
    console.log("Good!")
  }

  whenBlur = () => {
    console.log("Hey! Eyes on me!")
  }
}
