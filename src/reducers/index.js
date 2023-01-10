import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from './PostReducer'


export default combineReducers({
    auth: authReducer,
    posts: postReducer
});