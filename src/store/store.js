import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import usersReducer from './reducers/usersReducer'
import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfiq = {
    key:'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfiq, authReducer)

const rootReducer = combineReducers({
    persistedReducer:persistedReducer,
    usersReducer:usersReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

let persistor = persistStore(store)

export { store, persistor}