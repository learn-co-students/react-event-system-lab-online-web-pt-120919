// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    render(){
        let focus= () => console.log('Good!');
        let blur= () => console.log('Hey! Eyes on me!');

        return(
            <button 
            onFocus={focus}
            onBlur={blur} />
        )
    }
}