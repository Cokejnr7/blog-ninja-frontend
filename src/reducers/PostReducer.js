import { ACTION_TYPES } from "../actions/types"
const postReducer = (posts=[],{type,payload})=>{
    switch(type){
    case ACTION_TYPES.FETCH_POSTS:
        return payload
    // case ACTION_TYPES.FETCH_POST:
    //     return p
    default:
        return posts
}
}

export default postReducer;