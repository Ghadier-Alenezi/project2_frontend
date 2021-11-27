import React from "react";
import YouTube from "react-youtube";
import { HiArrowCircleLeft } from "react-icons/hi";
import "./style.css";

const Songs = () => {
  const songs = ["D0Ajq682yrA", "N8yuyekP_So", "YnBfug6nnW0"];
  function videoPlay(e) {
    e.target.playVideo();
  }
  const opts = {
    height: "650px",
    width: "500px",
  };

  const closeVid = () => {
    window.open("/home", "_self");
  };
  return (
    <div className="video">
      <div className="song">
        {songs.map((item, i) => (
          <YouTube key={i} videoId={item} opts={opts} onPlay={videoPlay} />
        ))}
      </div>
      <button className="closeBtn" onClick={closeVid}>
        <HiArrowCircleLeft />
      </button>
    </div>
  );
};
export default Songs;
