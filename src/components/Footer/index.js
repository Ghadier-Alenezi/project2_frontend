import React from "react";
import { BiCopyright } from "react-icons/bi";

import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        {" "}
        <p>
          <BiCopyright />
          2021 - Learn English. Tuwaiq Bootcamp
          </p>
      </div>
      <div>
      <h2 className="social">
        <TiSocialTwitter />
      </h2>
      <h2 className="social">
        <TiSocialInstagram />
      </h2>
      <h2 className="social">
        <TiSocialFacebook />
      </h2>
      </div>
      
    </div>
  );
};

export default Footer;
