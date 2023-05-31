import React, { Component } from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
