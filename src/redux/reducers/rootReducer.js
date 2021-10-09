

import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import audioReducer from './audioReducer';
import examReducer from './examReducer';
import progressReducer from './progressReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter', 'audio', 'exam']
}

const rootReducer = combineReducers({
    counter: counterReducer,
    audio: audioReducer,
    exam: examReducer,
    progress: progressReducer
});

export default persistReducer(persistConfig, rootReducer)