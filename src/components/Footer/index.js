import React from "react";
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebook } from "react-icons/ti";
import "./style.css";

const Footer = () => {
  return(

  <div className="footer">
    <p>Designed by Ghadier.Tuwaiq bootcamp - Qassim</p>
    <div className="socialMlogo">
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

  )
};

export default Footer;
