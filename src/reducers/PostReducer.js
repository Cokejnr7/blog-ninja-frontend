import _ from 'lodash';
import { ACTION_TYPES } from "../actions/types";

const postReducer = (state={},{type,payload})=>{
    switch(type){
    case ACTION_TYPES.FETCH_POSTS:
        return {...state, ..._.mapKeys(payload,'id')};
    case ACTION_TYPES.FETCH_POST:
        return {...state,[payload.id]:payload};
    case ACTION_TYPES.CREATE_POST:
            return {...state,[payload.id]:payload};
    case ACTION_TYPES.EDIT_POST:
        return {...state,[payload.id]:payload};
    case ACTION_TYPES.DELETE_POST:
        return _.omit(state,payload)
    default:
        return state
}
}

export default postReducer;