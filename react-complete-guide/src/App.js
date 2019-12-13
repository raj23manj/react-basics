import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
// class App extends Component {
//   // comes from component
//   state = {
//     persons: [
//       { name: 'Max', age: 23 },
//       { name: 'Manu', age: 24 },
//     ]
//   };

//   switchNameHandler = () => {
//     //console.log('was Clicked');
//     // don't do this
//     // this.state.persons[0] = "July";
//     this.setState({
//       persons: [
//         { name: 'july', age: 23 },
//         { name: 'Manu', age: 24 }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi yipee {50 * 40} </h1>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         {/* <Person name="Max" age="23" /> */}
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name="Bill" age="25">My Hobbies: Racing</Person>
//         {/* <Person></Person> */}
//       </div>
//     );

//     // return React.createElement('div', null, React.createElement('h1', null, 'Yipee React App !!!'));
//     //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Yipee React App !!!'))
//   }
// }




// React Hooks 

const App = props => {
  // comes from component
  const [personState, setPersonState] = useState(
    {
      persons: [
        { name: 'Max', age: 23 },
        { name: 'Manu', age: 24 },
      ],
      otherState: 'some Other state'
    }
  );
  // better way to manage other properties
  const [otherState, setOtherState] = useState({ otherState: 'some Other state' });

  console.log(personState, otherState);

  const switchNameHandler = () => {
    //console.log('was Clicked');
    // don't do this
    // this.state.persons[0] = "July";
    setPersonState({
      persons: [
        { name: 'july', age: 23 },
        { name: 'Manu', age: 24 }
      ]
      // not a good way
      //,otherState: personState.otherState // manually adding other states unlike in class based state
    })
  }

  return (
    <div className="App">
      <h1>Hi yipee {50 * 40} </h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      {/* <Person name="Max" age="23" /> */}
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name="Bill" age="25">My Hobbies: Racing</Person>
      {/* <Person></Person> */}
    </div>
  );

}
export default App;