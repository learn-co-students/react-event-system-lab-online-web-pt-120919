// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  render() {


    return (
      <input onKeyUp={this.consoleMessage} type="password" name="password" id="password" placeholder="Password"></input>
    )
  }

  consoleMessage = () => {
    console.log("Entering password...")
  }
}
