
const initalState = {
    currentQuestion: 0,
    score: 0,
    showscore: false
}

function counterReducer(state = initalState, action) {
    switch (action.type) {
        case 'INCREMENT_QUESTION_NO':
            return { ...state, currentQuestion: state.currentQuestion + action.payload };
        case 'DECREMENT_QUESTION_NO':
            return { ...state, currentQuestion: state.currentQuestion - action.payload };
        case 'INCREMENT_SCORE':
            return { ...state, score: state.score + action.payload };
        case 'DECREMENT_SCORE':
            return { ...state, score: state.score - action.payload };
        case 'SHOW_RESULT':
            return { ...state, showscore: action.payload }
        case 'RESET':
            return initalState
        default:
            return state;
    }
}
export default counterReducer