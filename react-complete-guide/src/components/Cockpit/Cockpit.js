import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    let btnClass = [classes.button];

    let pClass = classes.green;

    if (props.persons.length <= 1) {
        pClass = [classes.red, classes.bold].join(' ');
    }

    if (props.showPersons) {
        btnClass.push(classes.red);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi yipee {50 * 40} - state: {props.otherState}</h1>
            <p>This is getting passed from index.js : {props.title}</p>
            <p className={pClass}>Dynamic Parargraph</p>
            {/* <button onClick={this.switchNameHandler.bind(this, 'july')}>Switch Name</button> */}
            {/* not recommended and is in-efficient */}
            {/* <button style={style} onClick={() => this.switchNameHandler('july')}>Switch Name</button> */}
            {/* <StyledButton style={style} onClick={this.togglePersonHandler} alt={this.state.showPersons}>
            Switch Name
            </StyledButton> */}
            <button className={btnClass.join(' ')} onClick={props.toggel} >
                Switch Name
            </button>
        </div>
    );
};

export default cockpit;