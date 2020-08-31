import React, { Component } from "react"
import { toughCookie } from "jsdom"

class EyesOnMe extends Component {

    onHandleFocus = () => (
        console.log("Good!")
    )

    onHandleBlur = () => (
        console.log("Hey! Eyes on me!")
    )

    render() {
        return (
            <div>
                <button onFocus={this.onHandleFocus} onBlur={this.onHandleBlur}>Focus/Blur</button>
            </div>
        )
    }
}

export default EyesOnMe