import { Alert } from 'react-native'
let initState = {
    loggedIn:false,
    creds:null,
    err:null
}

export default function authReducer(state = initState, action){
    switch(action.type){
        case "Auth Success":            
            Alert.alert('SUCCESS', 'You are successfully registered')
            return {
                loggedIn: true,
                creds:action.user
            }
        case "Auth ERR":
            return {
                ...state,
                err:action.err
            }
        case "Signed Out":
            return {
                loggedIn:false,
                creds:null,
                err:null
            }
        case "Clear Errors":
            return {
                ...state,
                err:null,
            }
        default:
            return state
    }
}