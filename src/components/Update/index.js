import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import "./style.css";

const Update = () => {
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setformPassword] = useState("");

  async function signUp(e) {
    e.preventDefault();
    const signUpData = {
      name: formName,
      email: formEmail,
      password: formPassword,
      age: formAge,
    };
    if(formName.length >0 )
   await axios
      .post(`http://localhost:4000/user/newUser`, signUpData)
      .then((res) => console.log(res));
  }

  return (
      <div className="auth-form">
        <h3>Join Us</h3>
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
        </div>
  );
};

export default Update;