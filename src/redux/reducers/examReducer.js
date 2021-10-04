
const initalState = []


function examReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_QUESTION':
            return {
                ...state,
                mcqs: action.payload
            };
        default:
            return state;
    }
}
export default examReducer