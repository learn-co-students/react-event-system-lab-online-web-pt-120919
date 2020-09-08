// Code EyesOnMe Component Here
import React, { Component } from 'react'
import Keypad from './Keypad.js'

export default class EyesOnMe extends Component {
    render() {
        return <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
    }

    handleFocus = (event) => {
        console.log('Good!')
    }

    handleBlur = (event) => {
        console.log('Hey! Eyes on me!')
    }
}