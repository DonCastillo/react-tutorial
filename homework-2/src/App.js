import './App.css';
import React from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends React.Component {

  state = {
    text: ''
  }

  getInput = (event) => {
    this.setState({text: event.target.value});
  }

  removeLetterHandler = (event, index) => {
    const { text } = { ...this.state };
    const textArray = text.split('');
    textArray.splice(index, 1);
    this.setState({text: textArray.join('')});
  }


  render = () => {
    let charList = null;
    if(this.state.text) {
      const textObj = { ...this.state }; // create a copy of the text obj
      const textArray = textObj.text.split('');

      charList = (
        <div>
          {
            textArray.map((character, index) => {
              return <Char clicked={(event) => this.removeLetterHandler(event, index)} 
                           letter={character}
                           key={index}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" 
               onChange={(event) => this.getInput(event)} 
               value={this.state.text}/>
        <p>Input text size:</p>
        <p>{this.state.text.length}</p>
        <Validation length={this.state.text.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
