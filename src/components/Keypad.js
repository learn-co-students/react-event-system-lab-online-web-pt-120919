import React from 'react'

function Keypad(){

    function handleKeyUp(){
        console.log("Entering password...")
    }

    return(<input onKeyUp={handleKeyUp} type="password" />)
}

export default Keypad