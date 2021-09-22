

import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import audioReducer from './audioReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    audio: audioReducer
});

export default rootReducer