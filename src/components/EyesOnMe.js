// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    triggerFocus = () => {
        console.log('Good!')
    }

    triggerBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (<button onFocus={this.triggerFocus} onBlur={this.triggerBlur}> </button>)
    }
    
}