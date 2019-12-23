// import React, { Component, useState } from 'react';
import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium, { StyleRoot } from 'radium';
//import styled from 'styled-components';
// import WithClass from '../hoc/WithClass';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;

//     &:hover {
//       background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//       color: black;
//     }`;

class App extends Component {

  constructor(props) {
    super(props);
    console.log("App.js Constructor");
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 23 },
        { id: '2', name: 'Manu', age: 24 },
      ],
      otherState: 'some other state',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true; // this is important
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    // executes after render()
    return { message: 'SnapShot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: ', props)
    return state;
  }

  componentDidMount() {
    console.log("App.js : componentDidiMount");
  }

  // comes from component
  // this in the back creates a constructor and does same as above
  // state = {
  //   persons: [
  //     { id: '1', name: 'Max', age: 23 },
  //     { id: '2', name: 'Manu', age: 24 },
  //   ],
  //   otherState: 'some other state',
  //   showPersons: false
  // };


  deletePersonHandler = (index) => {
    console.log('delete');
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // return a new array like copy
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
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
    // (107)set state though called synchronously is not gaurenteed 
    // to execute and finish it immediately
    // this is is ok if no other component is depending on the change, if multiple component depends then
    // pass a function
    // this.setState({
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1
    // });
    // below approach is better when we depend on old state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    console.log("coming in");
    this.setState({ authenticated: true });
  };

  render() {
    console.log('App.js render');
    let persons = null;

    if (this.state.showPersons) {
      // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
      persons = (
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );


    }

    return (

      // <StyleRoot> radium
      //< WithClass classes={classes.App} > // one way see 106 for when to use which
      // use with withClass(App, classes.App) approach when we need to add google analytics or some js code to be executed
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit ?
          <Cockpit showPersons={this.state.showPersons}
            otherState={this.state.otherState}
            toggel={this.togglePersonHandler}
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            login={this.loginHandler} /> : null}
        {persons}
      </Aux>
      //</WithClass >
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
// use radium for pseudo classes , like hover

//export default Radium(App);

export default withClass(App, classes.App);