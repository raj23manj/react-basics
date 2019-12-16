
import React, { Component } from 'react';
//import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div` 
{
     width:60%;
     margin: auto;
     border: 1px solid #eee;
     box-shadow: 0 2px 3px #eee;
     padding: 16px;
     text-align: center;
} 
@media (min-width: 500px) {
   width: 450px;   
}`
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
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            < p onClick={props.click} > I'm a Person name: {props.name}, age: {props.age}</p>
            < p > {props.children}</p >
            <input text="text" onChange={props.changed} value={props.name} />
        </StyledDiv >
    );
};

// export default Radium(person);
export default person;