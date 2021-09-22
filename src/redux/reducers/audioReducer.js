
const initialState = [
    {
        moduleId: 1, submodule: [
            { submoduleId: 1 },
            { submoduleId: 2 }
        ]
    },
    {
        moduleId: 2, submodule: [
            { submoduleId: 1 },
            { submoduleId: 2 }
        ]
    },
    {
        moduleId: 3, submodule: [
            { submoduleId: 1 },
            { submoduleId: 2 }
        ]
    }
]

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