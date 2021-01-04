import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import React, { Component } from 'react';

class App extends React.Component {
  state = {
    username: 'Don'
  }

  changeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render = () => {
    return (
      <div>
        <UserInput 
          change={this.changeHandler.bind(this)}
          username={this.state.username}></UserInput>
        <UserOutput 
          username={this.state.username}>Lorem Ipsum</UserOutput>
        <UserOutput 
          username={this.state.username}>Lorem Ipsum</UserOutput>
        <UserOutput 
          username={this.state.username}>Lorem Ipsum</UserOutput>
      </div>
    );
  }
}

export default App;
