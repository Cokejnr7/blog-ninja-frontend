import { useState } from "react";
import { signIn } from "../actions";
import { connect } from "react-redux";
import axios from "axios";

const Register = (props) => {
  const [authDetails, setAuthDetails] = useState({
    email: "",
    username: "",
    password: "",
  });

  //   const [error, setError] = useState({
  //     email: "",
  //     username: "",
  //     password: "",
  //   });

  const handleChange = (e) => {
    authDetails[e.target.name] = e.target.value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authDetails.email = authDetails.email.toLowerCase();
    console.log(authDetails);
    const response = await axios.post(
      "https://web-production-4ea1.up.railway.app/auth/register",
      authDetails
    );
    const auth = {
      username: authDetails.email,
      password: authDetails.password,
    };
    props.signIn(auth);
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          required
          name="email"
          autoComplete="on"
        />
        <label>Username</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          required
          autoComplete="on"
        />
        <label>Password</label>
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          required
          autoComplete="on"
        />
        <button onClick={handleSubmit}>sign up</button>
      </form>
    </>
  );
};

export default connect(null, { signIn })(Register);
