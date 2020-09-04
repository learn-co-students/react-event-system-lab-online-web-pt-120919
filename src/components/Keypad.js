// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    typing(){
        console.log("Entering password...")
    }
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.typing}></input>
            </div>
        );
    }
}

export default Keypad;