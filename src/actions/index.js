import { ACTION_TYPES } from "./types";
import axios from '../api/ninja'

export const fetchPost = id => async dispatch =>{
    const response = await axios.get(`/posts/${id}`);
    dispatch({type:ACTION_TYPES.FETCH_POST,payload:response.data})
}


export const fetchPosts = ()=> async dispatch=>{
    const response = await axios.get(`/posts`);
    dispatch({type:ACTION_TYPES.FETCH_POST,payload:response.data})
}

export const deletePost = id => async dispatch =>{
    const response = await axios.get(`/posts/${id}`);
    dispatch({type:ACTION_TYPES.DELETE_POSTS,payload:response.data})
}

export const editPost = id => async dispatch =>{
    const response = await axios.get(`/posts/${id}`);
    dispatch({type:ACTION_TYPES.EDIT_POSTS,payload:response.data})
}