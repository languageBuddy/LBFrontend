
const initalState = {
    counter: 10
}

function counterReducer(state = initalState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}
export default counterReducer