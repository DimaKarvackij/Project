import React, { Component } from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg" />
      {props.message}
      <div>
        <span>LIke</span>{props.LinkeCount}
      </div>
    </div>
  );
};
export default Post;
