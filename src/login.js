import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ()=>{
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        const auth = {email,password}
        fetch('http://localhost:8000/api-auth/',{
            method: 'POST',
            body: JSON.stringify(auth),
            headers: { "content-Type": "application/json" },
         })
         .then(res =>{
            if (!res.ok) {
                throw Error('invalid credentials');
            }
            res.json()
         }
         )
         .then(data=>{ console.log(data)
            if(data.token){
            localStorage.setItem("token",JSON.stringify(data.token));
            history.push("/")
        }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input onChange={(e)=> setEmail(e.target.value) } type="email" required autoComplete="on" />
            <label>Password</label>
            <input onChange={(e)=> setPassword(e.target.value) } type="password" required autoComplete="on" />
            <button onClick={handleSubmit}>login</button>
        </form>
        </>
    )
}

export default Login;