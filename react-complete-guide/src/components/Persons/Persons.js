import React, { Component, PureComponent } from 'react';

import Person from './Person/Person'

// const persons = (props) => {
//     console.log("person.js: Rendering")
//     return (
//         props.persons.map((person, index) => {
//             return <Person
//                 name={person.name}
//                 age={person.age}
//                 // click={this.deletePersonHandler.bind(this, index)}
//                 clicked={() => props.clicked(index)}
//                 // important key property to detect change, give uniqu value
//                 key={person.id}
//                 changed={(event) => props.changed(event, person.id)}
//             />
//         })
//     );
// }

// export default persons;

//class Persons extends PureComponent {
class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps Persons: ', props)
    //     return state;
    // }

    // removed 
    // componentWillRecieveProps(props) {
    //     console.log('[Persons.js] componentWillRecieveProps', props);
    // }

    // removed
    // componentWillUpdate() {

    // }
    // use this if we want to check specific propps changed, if want to change when all props chanhe then extend class from PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
        ; // this is important
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        // executes after render()
        return { message: 'SnapShot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    // clean up work, like ngDestroy
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log("person.js: Rendering")
        return this.props.persons.map((person, index) => {
            return (<Person
                name={person.name}
                age={person.age}
                // click={this.deletePersonHandler.bind(this, index)}
                clicked={() => this.props.clicked(index)}
                // important key property to detect change, give uniqu value
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}
            />)
        });

    }

}

export default Persons;