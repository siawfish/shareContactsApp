import { Alert } from 'react-native'
let initState = {
    loggedIn:false,
    userCred:null,
    err:null,
    userInfo:null
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
        case "Login Success":
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
        case "Signed Out":
            return {
                loggedIn:false,
                userCred:null,
                err:null,
                userInfo:null
            }
        case "Clear Errors":
            return {
                ...state,
                err:null
            }
        default:
            return state
    }
}