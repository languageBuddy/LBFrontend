
const initialState = {
    uuid: '',
    progressData: {
    }
}

function progressReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            return {
                ...state,
                uuid: action.payload.uuid
            }
        }
        case 'FETCH_DATA':
            return {
                ...state,
                uuid: action.payload.uuid,
                progressData: action.payload.progressData
            }
        case 'MODULE_FIELD':
            return {
                ...state,
                progressData: {
                    ...state.progressData,
                    [action.payload.module_id]: {
                        'module_id': action.payload.module_id,
                        'percentage': 0,
                        'played': {
                            '0': true
                        }
                    }
                }
            }
        case 'INCREMENT_PROGRESS':
            return {
                ...state,
                progressData: {
                    ...state.progressData,
                    [action.payload.module_id]: {
                        ...state.progressData[action.payload.module_id],
                        percentage: state.progressData[action.payload.module_id].percentage + action.payload.percent,
                        played: {
                            ...state.progressData[action.payload.module_id].played,
                            [action.payload.audio_id]: true
                        }
                    }
                }
            }
        default:
            return state
    }
}

export default progressReducer