import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const User = () => {
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setformPassword] = useState("");
  const [formPasswordVerify, setformPasswordVerify] = useState("");

  return (
    <>
      <div className="wrapper">
        <h3>Join Us</h3>
        <div className="inputs">
          <form>
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
              value={formPassword}
              onChange={(e) => setformPassword(e.target.value)}
            />
          </form>
        </div>

        <button>sign up</button>

        <div className="gap"></div>
        <h3>already have an account?</h3>
        <button>Sign In</button>
      </div>
    </>
  );
};

export default User;
