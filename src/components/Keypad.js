// Code Keypad Component Here
import React, { Component } from 'react'
import EyesOnMe from './EyesOnMe.js'

export default class Keypad extends Component {
    render() {
        return <input type="password" onKeyUp={this.handleKeyUp}/>
    }

    handleKeyUp = (event) => {
        console.log('Entering password...')
    }
}