// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component {

    passy = () => {
        console.log("Entering password...")
    }

    render(){
        return(
            <div>My Name is: 
                <input type="password" onKeyUp={this.passy} />
            </div>
        )
    }
};

export default Keypad; 