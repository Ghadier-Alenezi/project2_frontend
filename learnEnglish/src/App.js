import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Lessons from "./components/Lessons";
import Lesson from "./components/Lesson";
import Songs from "./components/Songs";
import Profile from "./components/Profile";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import  Update  from "./components/Update";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/update" element={<Update />} />
        <Route exact path="/lessons" element={<Lessons />} />
        <Route exact path="/lesson" element={<Lesson />} />
        <Route exact path="/songs" element={<Songs />} />
        <Route exact path="/jokes" element={<Jokes />} />
      </Routes>
    </>
  );
}

export default App;
