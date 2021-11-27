import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import 'sweetalert2/src/sweetalert2.scss';
const BASE_URL = "http://localhost:4000";

const User = () => {
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setformPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    const signUpData = {
      name: formName,
      email: formEmail,
      password: formPassword,
      age: formAge,
    };
    try {
      const res = await axios.post(
        `${BASE_URL}/user/newUser`,
        signUpData
      );
      // .then((res) => console.log(res.data.message));
      if (res.data.message === "registerd successfully") {
        localStorage.setItem("user", JSON.stringify({ user: res.data.user }));
        setMessage("registerd successfully");
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="auth-form">
        <p>Join Us</p>
        <div className="inputs">
          <form onSubmit={signUp}>
            <label htmlFor="form-name">Name</label>
            <input
              id="form-name"
              type="name"
              placeholder="name"
              className="input"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <label htmlFor="form-age">Age</label>
            <input
              id="form-age"
              type="age"
              placeholder="age"
              className="input"
              value={formAge}
              onChange={(e) => setFormAge(e.target.value)}
            />
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
            <button type="submit">sign up</button>
          </form>
        </div>

        <p>
          already have an account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default User;
