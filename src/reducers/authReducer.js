
const INIT_STATUS = {
    isSignedIn: null,
    user: null,
}

const authReducer =  (status=INIT_STATUS,{type,payload})=>{
    switch(type){
        case 'SIGN_IN':
            return {...status, isSignedIn: true, user:payload};
        case 'SIGN_OUT':
            return {...status,isSignedIn: false,user:payload};
        default:
            return status;
    }
}

export default authReducer;