import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {

  state = {
    persons: [
      { id: '1231', name: 'i', age: 13 },
      { id: '123123', name: 'am', age: 24 },
      { id: '1231231', name: 'shuvo', age: 33 },
      { id: '12312311', name: 'Kumar', age: 33 }
    ],
    showPerson: false
  }

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({ persons: persons });
  }

  toggolePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });

  }

  render() {

    const divStyle = {
      padding: ' 10px 20px',
      backgroundColor: 'green',
      marginBottom: '10px',
      columns: '#000',
      cursor: 'pointer',
      color: '#fff',
      ':hover': 'orange'
    };



    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={this.deleteNameHandler.bind(this, index)}
              name={person.name}
              nameChange={(event) => this.nameChangeHandler(event, person.id)}
              age={person.age}></Person>
          })}
        </div>
      );
      divStyle.backgroundColor = '#000';
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hello World </h1>
        <p className={classes.join(' ')}>Hey I am Goswami</p>
        <button style={divStyle} onClick={this.toggolePersonHandler}>Show List</button>
        {persons}
      </div>
    );
  }
}

export default App;