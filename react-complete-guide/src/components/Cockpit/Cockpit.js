import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // executes for every render cycle of cockpits
    // can have multiple useEffects
    useEffect(() => {
        // component did mount and componentDidEffect together
        console.log('[cockpit.js] useEffect');
        // http request

        setTimeout(() => {
            alert('saved data to cloud')
        });
        return () => {
            console.log('Cockpit.js cleanup work in effect');
        }
    }, [props.persons]); // if need to run only once then add [] after render and unmounted

    useEffect(() => {
        console.log('[cockpit.js] 2nd useEffect');
        return () => {
            console.log('Cockpit.js cleanup work in 2nd effect'); // will run always
        }
    });

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