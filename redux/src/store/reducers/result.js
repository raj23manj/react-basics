import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // No Executin async code here in reducers only sync code
            // to execute async code we have to do it with actionCreators
            return {
                ...state,
                // array push manipulates the old array, hence concat returns a new array
                // immutable way of updating an array by adding an item 293
                // both the redcures will be merged as one hence we can get state.counter, but can access directly
                // hence pass it as action
                results: state.results.concat({ id: new Date(), value: action.result })
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