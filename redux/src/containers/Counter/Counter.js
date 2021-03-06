import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import * as actionTypes from './../../store/actions';

import * as actionCreators from '../../store/actions/index';;

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler('inc')} /> */}
                {/* note the clicked property not passing a function */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => {
                        return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

// to get what part of the state i want from the store
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

// to get what kind of dispatch i want to dispatch
const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        // onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        // onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
        // onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
        // onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        // onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })

        // Async creators 
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))

    };
};

// connect here gives us an access to the state object with the container to be used as props, in this case
// as ctr
export default connect(mapStateToProps, mapDispatchToProps)(Counter);