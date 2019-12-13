
import React, { Component } from 'react';
import './Person.css';
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
        <div className="Person">
            <p onClick={props.click}>I'm a Person name: {props.name}, age: {props.age}</p>
            <p>{props.children}</p>
            <input text="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default person;