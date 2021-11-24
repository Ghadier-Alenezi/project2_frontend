import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Nav = () => {
  return (
    <>
      <div className="navBar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/user">Sign Up</Link>
          <Link to="/lesson">Learn</Link>
          <Link to="/songs">Songs</Link>
          <Link to="/jokes">Jokes</Link>
        </ul>
      </div>
    </>
  );
};

export default Nav;
