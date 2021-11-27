import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";
const BASE_URL = "http://localhost:4000";

const Login = () => {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setformPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    setUser(JSON.parse(userStorage));
  }, []);

  async function login(e) {
    e.preventDefault();

    const loginData = {
      email: formEmail,
      password: formPassword,
    };
    try {
      const res = await axios.post(`${BASE_URL}/user/login`, loginData);
      console.log(res.data.existUser);
      localStorage.setItem(
        "user",
        JSON.stringify({ user: res.data.existUser })
      );
    } catch (error) {
      console.log(error);
    }
    navigate("/home");
  }

  return (
    <>
      <div className="auth-form">
        <p>Log In</p>
        <div className="inputs">
          <form className="form" onSubmit={login}>
            <label htmlFor="form-email">Email</label>
            <input
              id="form-email"
              type="email"
              placeholder="email"
              className="input"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <label htmlFor="form-password">Password</label>
            <input
              id="form-password"
              type="password"
              placeholder="password"
              className="input"
              value={formPassword}
              onChange={(e) => setformPassword(e.target.value)}
            />
            <button className="btn-submit" type="submit">
              Log In
            </button>
          </form>
        </div>

        <p>
          You don't have an account yet?
          <Link to="/register">Sign Up Here</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
