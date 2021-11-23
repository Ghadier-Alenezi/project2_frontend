import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Nav from "./components/Nav";
// import Jokes from "./components/Jokes";
import LandingPage from "./components/LandingPage";
// import Footer from "./components/Footer";
import axios from "axios";

function App() {

  
  return (
    <>
      <h1>Learn English</h1>
      <Nav />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/lesson" element={<LandingPage />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
