import React, { Component } from 'react';
import './App.css';
// import UserGreeting from './components/ConditionalRenderigng/UserGreeting';
import NameList from './components/ListRendering/NameList';
// import ClassClick from './components/13.EventHandling/ClassClick';
// import FunctionClick from './components/13.EventHandling/FunctionClick';
// import EventBinding from './components/14.EventBinding/EventBinding';
// import ParentComponent from './components/15.MethodsAsProps/ParentComponent';
// import Message from './components/10.State/Message';
// import Counter from './components/11.SetState/Counter';
// import Greet from './components/9.Props/Greets';
// import Welcome from './components/9.Props/Welcome';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* 9.Props****************** */}
        {/* <Greet name='Bruce' hero="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name='Clark' hero="Superman">
          <button>Submit</button>
        </Greet>
        <Greet name='Diana' hero="Wonder Woman"/>
        <Welcome name='Bruce' hero="Batman">
          <p>This is class component children</p>
        </Welcome>
        <Welcome name='Clark' hero="Superman"/>
        <Welcome name='Diana' hero="Wonder Woman"/> */}

        {/* 10.State****************** */}
        {/* <Message /> */}

        {/* 11.setState****************** */}
        {/* <Counter /> */}

        {/* 13.EventHandling****************** */}
        {/* <FunctionClick />
        <ClassClick /> */}

        {/* 14.EventBinding****************** */}
        {/* <EventBinding /> */}

        {/* 15.Methods as props****************** */}
        {/* <ParentComponent /> */}

        {/* 16.Conditional Rendering****************** */}
        {/* <UserGreeting /> */}

        {/* 17.List Rendering****************** */}
        <NameList />
      </div>
    )
  }
}

export default App;
