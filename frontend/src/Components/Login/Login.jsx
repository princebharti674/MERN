import React, { useState } from "react";
import "./Login.css";
import {useDispatch} from "react-redux";

import { login } from "../../Actions/User";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password));
    };

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="forget">
            <a href="#">Forget Password ?</a>
            <a href="#">New User ?</a>
          </div>
        </form>
      </div>
    );
};

export default Login;