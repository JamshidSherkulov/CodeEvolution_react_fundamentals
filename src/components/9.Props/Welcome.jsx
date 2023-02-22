import React, { Component } from "react";

class Welcome extends Component {
    render() {
        // Destructuring in class component
        const{ name, hero, children } = this.props

        return(
            <React.Fragment>
                <h1>Hello { name } and { hero }</h1>
                { children }
            </React.Fragment>
        )
    }
}

export default Welcome;