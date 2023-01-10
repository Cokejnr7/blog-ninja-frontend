import { useState } from "react";
import { signIn } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = (props)=>{
    const [email,setEmail] = useState("");
    const [password,setPassword]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        const auth = {"username":email.toLowerCase(),password}
        props.signIn(auth)
    }

    return (
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value) } type="email" required autoComplete="on" />
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value) } type="password" required autoComplete="on" />
            <p>Dont have an account?<Link to="/register" >sign up</Link></p>
            <button onClick={handleSubmit}>login</button>
        </form>
        </>
    )
}


export default connect(null,{signIn})(Login);