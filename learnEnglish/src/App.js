import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Lesson from "./components/Lesson";
// import Jokes from "./components/Jokes";
// import Footer from "./components/Footer";
import Songs from "./components/Songs";
import Jokes from "./components/Jokes";
import Login from "./components/Login";

function App() {

  
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/lesson" element={<Lesson />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/songs" element={<Songs />} />
        <Route exact path="/jokes" element={<Jokes />} />

      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
