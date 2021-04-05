import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import UploadAvatar from "./UploadAvatar/UploadAvatar"; 
import styles from "./Profile.module.css";
import Modal from "./Modal"

function Profile() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className={styles.profileWrapper}>
      <h1 style={{ padding: 50 }}>User Profile Page</h1>
      <UploadAvatar />
      <p>Image Grid:</p>
      <ImageGrid />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Profile;
