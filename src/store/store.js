import { createStore, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore} from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

let store = createStore(authReducer, 
        compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, { attachAuthIsReady: true})
        )
    )

export default store