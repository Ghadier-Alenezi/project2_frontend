import React from "react";
import Logo from "../LandingPage/logoLearn.jpeg";
import { useNavigate } from "react-router";

import "./style.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="wrapper">
      <img id="logo" src={Logo} width="80" alt="logo" onClick={toHome} />
      </div>
    </>
  );
};

export default LandingPage;
