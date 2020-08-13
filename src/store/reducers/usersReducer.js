let initState = {
    user:null,
    contact:null,
}

export default function authReducer(state = initState, action){
    switch(action.type){
        case "User":
                    return {
                ...state,
                user:action.user,
            }
        case "Contact":
            return {
                ...state,
                contact:action.user
            }
        case "Clear Errors":
            return {
                ...state,
                contact:null
            }
        default:
            return state;
    }
}