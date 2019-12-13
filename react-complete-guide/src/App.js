import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  // comes from component
  state = {
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 24 },
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi yipee {50 * 40} </h1>
        <button>Switch Name</button>
        {/* <Person name="Max" age="23" /> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name="Bill" age="25">My Hobbies: Racing</Person>
        {/* <Person></Person> */}
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Yipee React App !!!'));
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Yipee React App !!!'))
  }
}

export default App;
