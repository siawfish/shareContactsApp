let initState = {
    user:null,
    contact:null,
}

export default function authReducer(state = initState, action){
    switch(action.type){
        case "User":
                    return {
                ...state,
                loggedIn: true,
                userInfo:action.user,
                err:''
            }
        case "Contact":
            return {
                ...state,
                info:action.user
            }
        default:
            return state;
    }
}