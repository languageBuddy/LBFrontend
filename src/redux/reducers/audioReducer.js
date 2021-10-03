
const initialState = []


function audioReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_AUDIO':
            return {
                ...state,
                audios: action.payload
            }
        default:
            return state;
    }
}

export default audioReducer