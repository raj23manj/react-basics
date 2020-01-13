import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            // copy old object 
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            // both above method and this method is fine
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // array push manipulates the old array, hence concat returns a new array
                // immutable way of updating an array by adding an item 293
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            // this mutates not good
            //state.results.splice(id, 1)
            // in this case if induvudualt elements are objects, they will still point to old objects, only if deleting
            // this can be used, as we are removing the referrence of the objects
            // const newArray = [...state.results];
            // newArray.results.splice(id, 1)
            // another way and common, and gives a new array, if we return true return for every element with new array
            // const updatedArray = state.results.filter(result => true);
            const updatedArray = state.results.filter((result) => result.id !== action.resultElId);

            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}

export default reducer;