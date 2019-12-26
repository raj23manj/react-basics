
import React, { Component } from 'react';
//import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';
import classes from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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
// const person = (props) => {
//     const style = {
//         '@media (min-width: 500px)': {
//             width: '450px'
//         }
//     };
//     return (
//         // <div className="Person" style={style}>
//         // <StyledDiv>
//         <div className={classes.Person}>
//             < p onClick={props.clicked} > I'm a Person name: {props.name}, age: {props.age}</p>
//             < p > {props.children}</p >
//             <input text="text" onChange={props.changed} value={props.name} />
//         </div>
//         // </StyledDiv >
//     );
// };


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        // return (
        //     <div className={classes.Person}>
        //         < p onClick={this.props.clicked} > I'm a Person name: {this.props.name}, age: {this.props.age}</p>
        //         < p > {this.props.children}</p >
        //         <input text="text" onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // );
        // 102
        //   return [,]
        // <React.Fragment></React.Fragment> or <Fragment></Fragment> by importing from {Fragment} from 'react'
        // does same as AUX 
        return (<Aux>
            { /*<AuthContext.Consumer>
                {(context) =>
                    context.authenticated ?
                        <p>Authenticated</p>
                        :
                        <p>Please Log In</p>
                }
            </AuthContext.Consumer> */}
            {this.context.authenticated ?
                <p>Authenticated</p>
                :
                <p>Please Log In</p>}

            < p onClick={this.props.clicked} > I'm a Person name: {this.props.name}, age: {this.props.age}</p>
            < p > {this.props.children}</p >
            <input text="text"
                onChange={this.props.changed}
                //ref={(inputEl) => { this.inputElement = inputEl }}
                ref={this.inputElementRef}
                value={this.props.name} />
        </Aux>
        );
    }

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// export default Radium(person);
// export default person;
export default withClass(Person, classes.Person);