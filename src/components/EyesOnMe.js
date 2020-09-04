// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
    onMe(){
        console.log("Good!")
    }

    offMe(){
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button onFocus={this.onMe} onBlur={this.offMe}></button>
            </div>
        );
    }
}

export default EyesOnMe;