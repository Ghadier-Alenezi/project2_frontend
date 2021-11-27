import React from "react";
import YouTube from "react-youtube";
import { HiArrowCircleLeft } from "react-icons/hi";
import Logo from "../Home/logoLearn.jpeg";
import Nav from "../Nav";
import Footer from "./../Footer";
import "./style.css";

const Songs = () => {
  function videoPlay(e) {
    e.target.playVideo();
  }

  const closeVid = () => {
    window.open("/home", "_self");
  };
  return (
    <>
      <div className="logo">
        <img src={Logo} width="150" alt="logo" />
      </div>
      <div className="video">
        <Nav />
        <div className="song">
          <YouTube videoId="D0Ajq682yrA" onPlay={videoPlay} />
        </div>
        <button className="closeBtn" onClick={closeVid}>
          <HiArrowCircleLeft />
        </button>
        <Footer />
      </div>
    </>
  );
};
export default Songs;
