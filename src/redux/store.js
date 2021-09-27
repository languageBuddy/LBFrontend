import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer';
import { persistStore } from 'redux-persist'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store)

export {
    store,
    persistor
}