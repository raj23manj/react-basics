// import React, { Component, useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Radium, { StyleRoot } from 'radium';
class App extends Component {
  // comes from component
  state = {
    persons: [
      { id: '1', name: 'Max', age: 23 },
      { id: '2', name: 'Manu', age: 24 },
    ],
    otherState: 'some other state',
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   //console.log('was Clicked');
  //   // don't do this
  //   // this.state.persons[0] = "July";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 23 },
  //       { name: 'Manu', age: 24 }
  //     ]
  //   });
  // }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // return a new array like copy
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    console.log('id', id);
    console.log(event.target.name);
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id
    });
    // always get the copy
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                // click={this.deletePersonHandler.bind(this, index)}
                click={() => this.deletePersonHandler(index)}
                // important key property to detect change, give uniqu value
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }

          {/* <Person name="Max" age="23" /> */}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            change={this.nameChangedHandler}
          />
          <Person
            name="Bill"
            age="25"
            click={this.switchNameHandler.bind(this, 'july!')}
          >
            My Hobbies: Racing
            </Person> */}
          {/* <Person></Person> */}
        </div>
      );
    }

    let pClass = 'green';
    if (this.state.persons.length <= 1) {
      pClass = ['red', 'bold'].join(' ');
    }

    return (
      // <StyleRoot> radium
      <div className="App">
        <h1>Hi yipee {50 * 40} - state: {this.state.otherState}</h1>
        <p className={pClass}>Dynamic Parargraph</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'july')}>Switch Name</button> */}
        {/* not recommended and is in-efficient */}
        {/* <button style={style} onClick={() => this.switchNameHandler('july')}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div >
      // </StyleRoot>
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Yipee React App !!!'));
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Yipee React App !!!'))
  }
}




// React Hooks 

// const App = props => {
//   // comes from component
//   const [personState, setPersonState] = useState(
//     {
//       persons: [
//         { name: 'Max', age: 23 },
//         { name: 'Manu', age: 24 },
//       ],
//       otherState: 'some Other state'
//     }
//   );
//   // better way to manage other properties
//   const [otherState, setOtherState] = useState({ otherState: 'some Other state' });

//   console.log(personState, otherState);

//   const switchNameHandler = () => {
//     //console.log('was Clicked');
//     // don't do this
//     // this.state.persons[0] = "July";
//     setPersonState({
//       persons: [
//         { name: 'july', age: 23 },
//         { name: 'Manu', age: 24 }
//       ]
//       // not a good way
//       //,otherState: personState.otherState // manually adding other states unlike in class based state
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi yipee {50 * 40} </h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       {/* <Person name="Max" age="23" /> */}
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name="Bill" age="25">My Hobbies: Racing</Person>
//       {/* <Person></Person> */}
//     </div>
//   );
// }
// use raium for pseudo classes , like hover

export default Radium(App);

//export default App;