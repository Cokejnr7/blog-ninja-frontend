import { useState } from "react";
import { signIn } from "../actions";
import { connect } from "react-redux";

const Register = (props)=>{
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        const auth = {email,username,password}
        // axios.posts()
        props.signIn(auth)
    }

    return (
        <>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value) } type="email" required autoComplete="on" />
            <label>Username</label>
            <input onChange={e => setUsername(e.target.value) } type="text" required autoComplete="on" />
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value) } type="password" required autoComplete="on" />
            <button onClick={handleSubmit}>sign up</button>
        </form>
        </>
    )
}


export default connect(null,{signIn})(Register);