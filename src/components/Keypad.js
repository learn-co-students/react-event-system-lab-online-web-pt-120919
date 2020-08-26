// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component {

    keyup = () => {
        console.log('Entering password...')
    }

    render(){
        return( <input onKeyUp={this.keyup} type="password" />
        )
    }
}
