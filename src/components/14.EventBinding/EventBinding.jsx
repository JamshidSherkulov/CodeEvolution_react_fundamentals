import React, { Component } from "react";

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello',
      }

      // 3rd binding method in constructor
      this.clickHandler = this.clickHandler.bind(this)
    }

    // 1, 2, 3 method
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye',
    //     })    
    // }

    // 4th binding method with arrow function
    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    }


    render() {
        return(
            <div>
                <h1>{ this.state.message }</h1>
                {/* 1st binding method  */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* 2nd binding method with arrow function  */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* 3rd binding method with in constructor  */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* 4th binding method with arrow function  */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding;