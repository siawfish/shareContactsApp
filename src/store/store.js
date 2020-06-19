import { createStore } from 'redux'
import authReducer from './reducers/authReducer'

let store = createStore(authReducer)

export default store