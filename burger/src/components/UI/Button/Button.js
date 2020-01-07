import React from 'react';
import classes from './Button.css';

// dynamic css assigning
const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
    >{props.children}</button>
);

export default button;