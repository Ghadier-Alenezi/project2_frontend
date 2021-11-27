import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./style.css";

const Nav = () => {
  let navigate = useNavigate();

  const toProfile = () => {
    navigate("/profile");
  };

  const toSignOut = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="linksBar">
        <ul>
          <li>
            <Link className="text-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-link" to="/lessons">
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
        <button onClick={toProfile}>
         Profile
        </button>
        <button onClick={toSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Nav;
