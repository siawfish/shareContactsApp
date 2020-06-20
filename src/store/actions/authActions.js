import firebase from '../../firebase/confiq'

export function register({info}){
    return (dispatch) => {
        firebase
        .collection('users')
        .set(info)
        .then(()=>{
            firebase
            .auth()
            .createUserWithEmailAndPassword(info.email, info.pass)
            .then((res)=>{
                dispatch({
                    type:"Auth Success",
                    user: res.user
                })
            })
            .catch((err)=>{
                dispatch({
                    type:"Auth ERR",
                    err:err.message
                })
            })
        })
        .catch((err)=>{
            dispatch({
                type:"Auth ERR",
                err:err.message
            })
        })
    }
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