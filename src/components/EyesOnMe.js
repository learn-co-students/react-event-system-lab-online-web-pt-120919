import React, { Component } from "react";

export default class EyesOnMe extends Component {
  eyesOn = () => {
    console.log("Hey! Eyes on me!");
  };
  focus = () => {
    console.log("Good!");
  };
  render() {
    return (
      <button onFocus={this.focus} onBlur={this.eyesOn}>
        Don't Click
      </button>
    );
  }
}
