// Code EyesOnMe Component Here
import React from 'react'
 //the react library
 //exporting this class that extends from the react library

export default class EyesOnMe extends React.Component{
    blurListener = () => {
        console.log('Hey! Eyes on me!')
    }
   
    focusListener = () => {
       console.log('Good!')
    }
    render()
{
    return(<button onFocus = {this.focusListener} onBlur = {this.blurListener} >Button</button> )
}
}