import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:4000";

const Lesson = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getAllLessons();
  }, []);

  const getAllLessons = async () => {
    const lessons = await axios.get(`${BASE_URL}/lesson`);
    console.log(lessons.data);
    setLessons(lessons.data);
  };
  return (
    <>
      <div className="snippet">
      {lessons.map((item, i) => (
          // console.log(item.lesson,"here")
          <img
            className="cardLesson"
            key={i}
            src={item.src}
            alt="lesson"
            width="30%"
          ></img>
        ))}

      </div>
    </>
  );
};

export default Lesson;
