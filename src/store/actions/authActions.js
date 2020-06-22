import firebase from '../../firebase/confiq'

export function register(info){
    return async (dispatch)=>{
        try {
            const user = await firebase
                .auth()
                .createUserWithEmailAndPassword(info.email, info.pass)
            await firebase
                .firestore()
                .collection('users')
                .doc(user.user.uid)
                .set(info)
                .then(()=>{
                    dispatch({
                        type:"Auth Success",
                        user
                    })
                })
                .catch((err)=>{
                    dispatch({
                        type:"Auth ERR",
                        err: err.message
                    })
                })
        } catch (err) {
            dispatch({
                type:"Auth ERR",
                err: err.message
            })
        }
    }
} 

export function login(email, pass){
    return async (dispatch) => {
        await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then((res)=>{
            dispatch({
                type:"Login Success",
                user:res.user
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

export function logout(){
    return async (dispatch) => {       
        await firebase
        .auth()
        .signOut()        
        dispatch({
            type:"Signed Out"
        })
    }
}

export function clearErr(){
    return (dispatch)=> {
        dispatch({
            type:"Clear Errors"
        })
    }
}

export function syncUser(){
    return async(dispatch)=>{
        await firebase
        .firestore()
        .collection('users')
        .onSnapshot((snapshot)=>{
            let user = snapshot.docs.map((doc)=>{
                return {
                    ...doc.data(),
                    uid:doc.id
                }
            })
            dispatch({
                type:"User",
                user
            })
        })
    }
}