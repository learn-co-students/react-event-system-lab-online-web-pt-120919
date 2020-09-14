// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    render(){
        let print = () => console.log('Entering password...');
        return (
            <input 
            onKeyUp={print} 
            type="password" />
        )

    }

}