import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./style.css";

const Nav = () => {
  let navigate = useNavigate();

  const toRegister = () => {
    navigate("/register");
  };

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="linksBar">
        <ul>
          <li>
            <Link className="text-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-link" to="/lesson">
              Learn
            </Link>
          </li>
          <li>
            <Link className="text-link" to="/songs">
              Songs
            </Link>
          </li>
        </ul>
      </div>
      <div className="userBox">
        <button className="loginBtn" onClick={toLogin}>
          Log In
        </button>
        <button className="signBtn" onClick={toRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Nav;
