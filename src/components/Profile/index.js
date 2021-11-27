import React, { useState } from "react";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import { useNavigate } from "react-router";
import "./style.css";

const Profile = () => {
  // to update profile
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  // console.log(user);
const toUpdate = ()=>{
  navigate("/update");
}
  return (
    <div className="container">
      <div className="card">
        <img
          src={user.user.img}
          alt="userImg"
          className="img-radius"
          height="150px"
        />

        <div className="infoCard">
          <p className="profileP">Your Name is:</p>
          <p className="profileP">{user.user.name}</p>
          <hr></hr>
          <p className="profileP">Your Email is:</p>
          <p className="profileP">{user.user.email}</p>
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
        <button onClick={toUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Profile;
