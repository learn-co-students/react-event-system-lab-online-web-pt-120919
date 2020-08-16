import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    simulate = () => {
        console.log("Good!")
    }

    render() {
        return (
            <button onFocus={this.simulate} onBlur={function(){console.log("Hey! Eyes on me!")}}></button>
        )
    }
}