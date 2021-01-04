import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    inputTextLength: 0
  }

  getInputLength = (event) => {
    const textVal = event.target.value;
    this.setState({inputTextLength: textVal.length})
  }


  render = () => {
    return (
      <div className="App">
        <input type="text" 
               onChange={(event) => this.getInputLength(event)} />
        <p>Input text size:</p>
        <p>{this.state.inputTextLength}</p>
      </div>
    );
  }
}

export default App;
