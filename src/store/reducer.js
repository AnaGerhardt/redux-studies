const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return { 
                ...state,
                counter: state.counter - 1 
            }
        case 'ADD':
            return { 
                ...state,
                counter: state.counter + action.val 
            }
        case 'SUBSTRACT':
            return { 
                ...state,
                counter: state.counter - action.val 
            }
        case 'STORE_RESULT':
            return { 
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}) //keep elements of old array and push a new element
            }
        case 'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(el => el.id !== action.id)
            return { 
                ...state,
                results: updatedArray
            }
        default: return state;
    }
}

export default reducer;