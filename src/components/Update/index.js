import React, { useState } from "react";
import Nav from "../Nav";
import axios from "axios";
import Footer from "../Footer";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";
// import { useForm } from "react-hook-form";
const Update = () => {
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setformPassword] = useState("");
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  async function update(e) {
    e.preventDefault();
    const updateData = {
      name: formName,
      email: formEmail,
      password: formPassword,
      age: formAge,
    };
    if (formName.length > 0)
      await axios
        .put(`http://localhost:4000/user/${user.user._id}`, updateData)
        // console.log(user.user._id);
        .then((res) => console.log(res));
  }

  return (
    <>
      <Nav />
      <div className="auth-form">
        <p className="profileP">Update your profile</p>
        <div className="inputs">
          <form onSubmit={update} className="form">
            <label htmlFor="form-name">Name</label>
            <input
              id="form-name"
              type="name"
              placeholder="name"
              className="input"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <label htmlFor="form-age">Age</label>
            <input
              id="form-age"
              type="age"
              placeholder="age"
              className="input"
              value={formAge}
              onChange={(e) => setFormAge(e.target.value)}
            />
            <label htmlFor="form-email">Email</label>
            <input
              id="form-email"
              type="email"
              placeholder="email"
              className="input"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <label htmlFor="form-password">Password</label>
            <input
              id="form-password"
              type="password"
              placeholder="password"
              className="input"
              value={formPassword}
              onChange={(e) => setformPassword(e.target.value)}
            />
            <button>Save Changes</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Update;
