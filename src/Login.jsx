import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setIsLoggedIn}) =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const validEmail = "Mohsinali@gmail.com";
    const validPassword = "mohsin0987"

    const login = (e)=>{
        e.preventDefault();
        if ( email === validEmail && password === validPassword ) {
          localStorage.setItem("isLoggedIn", "true"); 
          setIsLoggedIn(true);
          navigate("/");
        } else {
            alert("All fields are mandatory");
          }
    };

    return(
        <>
      <div className="main-div">
        <div className="main-heading">
        <h1>TODOs</h1>
        </div>
        <div className="login-form">    
        <h2 className="heading-sm">Login</h2>
        <form className="new-form" onSubmit={login} autoComplete="off" >
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          className="newInput"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          className="newInput"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="newButton">Login</button>
      </form>                    
      <span> Doesn't have an account?</span>
      </div>
      </div>
        </>
    )
}


export default Login;


