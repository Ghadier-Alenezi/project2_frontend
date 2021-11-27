import React from "react";
const Posts = ({ postsToRender }) => {
  return (
    <ul>
      {postsToRender.map((post, i) => (
        <li key={i}>
          <strong>{post.id}</strong>
        </li>
      ))}
    </ul>
  );
};
export default Posts;
