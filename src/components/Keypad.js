import React, { Component } from "react";

export default class Keypad extends Component {
  passwordEnter = () => {
    console.log("Entering password...");
  };
  render() {
    return <input type="password" onKeyUp={this.passwordEnter} />;
  }
}
