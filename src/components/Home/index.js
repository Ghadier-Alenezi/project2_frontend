import React from "react";
import Nav from "../Nav";
import Logo from "../Home/logoLearn.jpeg";
import { useNavigate } from "react-router";
import Footer from "../Footer";
import "./style.css";

const Home = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };
  return (
    <div className="mainBody">
      <div className="logo">
        {" "}
        <img src={Logo} width="150" alt="logo" onClick={toHome} />
      </div>
      <Nav className="footer" />
      {/* <div>
        <div className="circleCard">
          <p>Lessons</p>
        </div>
        <div className="circleCard">
          <p>Songs</p>
        </div>
        <div className="circleCard">
          <p>Jokes</p>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
