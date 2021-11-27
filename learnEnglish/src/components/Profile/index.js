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

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
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
          <h3>Your Name is:</h3>
          <p>{user.user.name}</p>
          <hr></hr>
          <h3>Your Email is:</h3>
          <p>{user.user.email}</p>
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
