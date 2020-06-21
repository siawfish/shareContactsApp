import { createStore, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfiq = {
    key:'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfiq, authReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)

export { store, persistor}