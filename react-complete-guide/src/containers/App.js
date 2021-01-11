import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'a', name: 'Max', age: 28 },
      { id: 'b', name: 'Manu', age: 29 },
      { id: 'c', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
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

  componentDidMount() {
    console.log('[App.js] component did mount');
  }



  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>;
    }

    return (
        <WithClass classes={classes.App}>
            <Cockpit title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
            {persons}
        </WithClass>
    );
  }
}

export default App;
