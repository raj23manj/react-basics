import React, { Component } from 'react';

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

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true; // this is important
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

    render() {
        console.log("person.js: Rendering")
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    // click={this.deletePersonHandler.bind(this, index)}
                    clicked={() => this.props.clicked(index)}
                    // important key property to detect change, give uniqu value
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            })
        );
    }

}

export default Persons;