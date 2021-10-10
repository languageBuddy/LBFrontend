

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
    whitelist: ['counter', 'audio', 'exam', 'progress']
}

const appReducer = combineReducers({
    counter: counterReducer,
    audio: audioReducer,
    exam: examReducer,
    progress: progressReducer
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'USER_LOGGED_OUT') {
        state = undefined;
    }

    return appReducer(state, action);
};


export default persistReducer(persistConfig, rootReducer)