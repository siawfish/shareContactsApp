import { Alert } from 'react-native'
let initState = {
    loggedIn:false,
    userCred:null,
    err:null,
}

export default function authReducer(state = initState, action){
    switch(action.type){
        case "Auth Success":
            Alert.alert('SUCCESS', 'You are successfully registered')
            return {
                ...state,
                loggedIn: true,
                userCred:action.user
            }
        case "Auth ERR":
            return {
                ...state,
                err:action.err
            }
        default:
            return state
    }
}