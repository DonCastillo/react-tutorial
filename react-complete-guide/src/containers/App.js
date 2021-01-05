import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';



// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;
    
//     &:hover {
//       background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//       color: black;
//     }`;

class App extends Component {

  state = {
    persons: [
      { id: 'a', name: 'Max', age: 28 },
      { id: 'b', name: 'Manu', age: 29 },
      { id: 'c', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    const newPersons = this.state.persons.slice();
    newPersons.splice(personIndex, 1); // removes the person at the specified index
    this.setState({persons: newPersons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const displayed = this.state.showPersons;
    this.setState({showPersons: !displayed})
  }



  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return (
                  <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
                )   
              })
            }
          </div>
      );
      
      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    } 
    
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>
              Toggle Persons
          </button>
          {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
