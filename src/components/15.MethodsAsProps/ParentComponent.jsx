import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parent: 'parents'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(children) {
    alert(`Hello to ${this.state.parent} from ${children}`) // children is coming from children component as props
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={ this.greetParent } />
      </div>
    )
  }
}

export default ParentComponent