import firebase from '../../firebase/confiq'

export function register({info}){
    
} 

export function login({cred}){
    return (dispatch) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(cred.email, cred.pass)
        .then((res)=>{
            dispatch({
                type:"Auth Success",
                user: res.user
            })
        })
        .catch((err)=>{
            dispatch({
                type:"Auth ERR",
                err: err.message
            })
        })
    }
}