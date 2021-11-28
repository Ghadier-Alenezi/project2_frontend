import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import Logo from "../Home/logoLearn.jpeg";
import "./style.css";
const BASE_URL = "http://localhost:4000";

const Lesson = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getAllLessons();
  }, []);

  const getAllLessons = async () => {
    const lessons = await axios.get(`${BASE_URL}/lesson`);
    // console.log(lessons.data);
    setLessons(lessons.data);
  };
  return (
    <>
      <Nav />
      <div className="logo">
          <img src={Logo} width="150" alt="logo" />
        </div >
      <div className="lessonsP">
        
        <div  className="snippet">
          {lessons.map((item, i) => (
            // console.log(item.lesson,"here")
            <img
              className="cardLesson"
              key={i}
              src={item.src}
              alt="lesson"
              width="28%"
            ></img>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lesson;
