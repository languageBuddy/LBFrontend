
const initalState = []
<<<<<<< HEAD
=======
    

   
>>>>>>> 23c6584742391f456bbeb320e5e3810fcab2c499


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