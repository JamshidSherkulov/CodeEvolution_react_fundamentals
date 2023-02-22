import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMsg() {
        

        this.setState({
            message: 'Subscribed'
        })
    }

    render() {
        return(
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick={() => this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;