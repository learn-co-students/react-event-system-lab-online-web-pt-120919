// Code EyesOnMe Component Here
import React from 'react';


class EyesOnMe extends React.Component {

good = () => {
    console.log("Good!")
}

hello = () => {
    console.log("Hey! Eyes on me!")
}

    render(){
        return(
            <div> Hello 
                <button onFocus={this.good} onBlur={this.hello}> My Button </button>
            </div>
        )
    }
}

export default EyesOnMe; 