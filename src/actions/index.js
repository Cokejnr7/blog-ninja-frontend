import { ACTION_TYPES } from "./types";
import axios from '../api/ninja'
import history from "../history";



export const fetchPost = (id,token) => async dispatch =>{
    const response = await axios.get(`/api/posts/${id}`,{
        headers: { Authorization: `Token ${token}` }
    });
    dispatch({type:ACTION_TYPES.FETCH_POST,payload:response.data})
}


export const fetchPosts = (token)=> async dispatch=>{
    const response = await axios.get(`/api/posts`,{
        headers: { Authorization: `Token ${token}` }
    });
    dispatch({type:ACTION_TYPES.FETCH_POSTS,payload:response.data.results})
}

export const createPost = (body,token) => async dispatch =>{
    const response = await axios.post(`/api/posts/`,{...body},{
        headers: { Authorization: `Token ${token}` }
    });
    dispatch({type:ACTION_TYPES.CREATE_POST,payload:response.data})
    history.push("/");
}

export const deletePost = id => async dispatch =>{
    await axios.delete(`/api/posts/${id}`);
    dispatch({ type: ACTION_TYPES.DELETE_STREAM, payload: id });
}

export const editPost = id => async dispatch =>{
    const response = await axios.get(`/api/posts/${id}`);
    dispatch({type:ACTION_TYPES.EDIT_POST,payload:response.data})
}

export const signIn = auth => async dispatch=> {
    const response =  await axios.post('http://127.0.0.1:8000/auth/login',{...auth})
    localStorage.setItem('token',JSON.stringify(response.data.token))
    dispatch({type:ACTION_TYPES.SIGN_IN,payload: response.data})
    history.push('/')
}


//SIGNS USER OUT
export const signOut = () => dispatch =>{
  localStorage.removeItem("token");
  dispatch({type:ACTION_TYPES.SIGN_OUT,payload: null})
  history.push('/login')
}

