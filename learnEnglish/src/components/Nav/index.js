import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Nav = () => {
  return (
    <>
      <div className="navBar">
        <ul>
          <Link to="/lessom">Learn</Link>
          <Link to="/user">Sign Up</Link>
          <Link to="/jokes">Songs</Link>
          <Link to="/songs">Jokes</Link>
        </ul>
      </div>
    </>
  );
};

export default Nav;
