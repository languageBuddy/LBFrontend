

import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import audioReducer from './audioReducer';
import examReducer from './examReducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter']
}

const rootReducer = combineReducers({
    counter: counterReducer,
    audio: audioReducer,
    exam: examReducer
});

export default persistReducer(persistConfig, rootReducer)