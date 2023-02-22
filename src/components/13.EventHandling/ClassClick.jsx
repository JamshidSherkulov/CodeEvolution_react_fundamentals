import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('class comp is clicked')
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>2.Click</button>
      </div>
    )
  }
}

export default ClassClick;