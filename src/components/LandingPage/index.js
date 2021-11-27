import React from "react";
import Logo from "../LandingPage/logoLearn.jpeg";
import { useNavigate } from "react-router";
import Login from "../auth/Login";
import "./style.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          {" "}
          <img src={Logo} width="200" alt="logo" onClick={toHome} />
        </div>
      </div>
      <div className="login">
        <Login />
      </div>
    </>
  );
};

export default LandingPage;
