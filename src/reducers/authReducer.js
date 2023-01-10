
const INIT_STATUS = {
    isSignedIn: null,
    token: null,
}

const authReducer =  (status=INIT_STATUS,{type,payload})=>{
    switch(type){
        case 'SIGN_IN':
            return {...status, isSignedIn: true, token:payload};
        case 'SIGN_OUT':
            return {...status,isSignedIn: false,token:payload};
        default:
            return status;
    }
}

export default authReducer;