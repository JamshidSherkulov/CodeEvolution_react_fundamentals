import React, { Component } from "react";


class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    increment() {
        // ***** In callback value we can do sth after state renders
        // 1st method
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count)
        // })

        // 2nd method 
        this.setState((prevState, props) => ({
            count: prevState.count + 5    
        }))
    }


    render() {
        return(
            <div>
                <h1>Counter - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter;