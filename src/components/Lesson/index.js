import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./style.css";
import Posts from "./posts";
import posts from "./postsArray";

const Lesson = () => {
  const postsPerPage = 4;
  const arrayForHoldingPosts = [];
  const [postsToShow, setPostsToShow] = useState([]);
  const [count, setCount] = useState(1);
  const loopThroughPosts = (count) => {
    for (
      let i = count * postsPerPage - postsPerPage;
      i < postsPerPage * count;
      i++
    ) {
      if (posts[i] !== undefined) {
        arrayForHoldingPosts.push(posts[i]);
        // console.log(arrayForHoldingPosts);
      }
    }
    setPostsToShow(arrayForHoldingPosts);
  };
  // load the first set of posts when the page loads
  // and then set the value of count to 2
  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);

  const handleShowMorePosts = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };
  return (
    <div>
      <Posts postsToRender={postsToShow} />
      <h3></h3>
      <button onClick={handleShowMorePosts}>Load more</button>
    </div>
  );
};

export default Lesson;
