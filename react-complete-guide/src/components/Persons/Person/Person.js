import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import PropTypes from 'prop-types';


class Person extends Component {

    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        return (
            <Aux>
            <div className = {classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name} 
                        ref={(inputEl) => {this.inputElement = inputEl}} />
            </div> 
            </Aux>
        )
    }

};

export default Person;