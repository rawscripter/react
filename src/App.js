import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons : [
      { name: 'shuvo', age : 13},
      { name: 'Goswami', age : 24},
      { name: 'Kumar', age : 33}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World </h1>
  
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am Special</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> </Person>
      </div>
    );
  }
}

export default App;
