import React from "react";
import ImageGrid from "../ImageGrid";
import UploadAvatar from "../UploadAvatar/UploadAvatar"; // eslint-disable-next-line
import style from "./Profile.module.css";

function Profile() {
  return (
    <div className="profile-wrapper">
      <h1 style={{ padding: 50 }}>User Profile Page</h1>
      <UploadAvatar />
      <p>Image Grid:</p>
      <ImageGrid />
    </div>
  );
}

export default Profile;
