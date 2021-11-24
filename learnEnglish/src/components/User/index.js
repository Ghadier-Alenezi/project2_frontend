import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

const User = () => {
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setformPassword] = useState("");
  const [formPasswordVerify, setformPasswordVerify] = useState("");

  async function signUp(e) {
    // to prevent reload the page
    e.prventDefault();

    const signUpData = {
      name: formName,
      age: formAge,
      email: formEmail,
      password: formPassword,
      passwordVerify: formPasswordVerify,
    };
    await axios.post(
     "" // link
      ,signUpData);
  }

  return (
    <>
      <div className="wrapper">
        <h3>Join Us</h3>
        <div className="inputs">
          <form onSubmit={signUp}>
            <label htmlFor="form-name">Name</label>
            <input
              id="form-name"
              type="name"
              placeholder="name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <label htmlFor="form-age">Age</label>
            <input
              id="form-age"
              type="age"
              placeholder="age"
              value={formAge}
              onChange={(e) => setFormAge(e.target.value)}
            />
            <label htmlFor="form-email">Email</label>
            <input
              id="form-email"
              type="email"
              placeholder="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <label htmlFor="form-password">Password</label>
            <input
              id="form-password"
              type="password"
              placeholder="password"
              value={formPassword}
              onChange={(e) => setformPassword(e.target.value)}
            />
            <label htmlFor="form-passwordVerify">Verify Password</label>
            <input
              id="form-passwordVerify"
              type="password"
              placeholder="password"
              value={formPasswordVerify}
              onChange={(e) => setformPasswordVerify(e.target.value)}
            />
            <button type="submit">sign up</button>
          </form>
        </div>

        <div className="gap"></div>
        <h3>
          already have an account?
          <Link to="/login">Login</Link>
        </h3>
      </div>
    </>
  );
};

export default User;
