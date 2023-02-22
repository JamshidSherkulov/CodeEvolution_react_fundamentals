import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 3rd method with ternary, with ternary we can use in jsx
    // ************************
    return this.state.isLoggedIn ? (
      <div>User is Logged in</div>
    ) : (
      <div>Log in</div>
    );

    // 2nd method with variable************************

    // let message

    // if(this.state.isLoggedIn) {
    //     message = <div>User is Logged in</div>
    // } else {
    //     message = <div>Log In</div>
    // }

    // return <div>{ message }</div>

    // 1st method************************
    // if(this.state.isLoggedIn) {
    //     return <div>User is Logged in</div>
    // } else {
    //     return <div>Log in</div>
    // }
  }
}

export default UserGreeting;
