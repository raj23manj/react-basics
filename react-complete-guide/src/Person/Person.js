
import React, { Component } from 'react';

// function person() {
//     return <h1></h1>;
// }

// also referred to as "containers", "smart" or "stateful" components
// class Person extends Component {
//     render() {
//         return <p> I'm a Person name: {props.name} </p>
//     }
// }


// Best practise also referred to as "presentational", "dumb" or "stateless"
const person = (props) => {
    return (
        <div>
            <p>I'm a Person name: {props.name}, age: {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;