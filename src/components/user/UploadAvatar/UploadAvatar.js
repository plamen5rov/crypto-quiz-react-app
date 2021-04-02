import React, { useState } from "react"; 
import styles from "./UploadAvatar.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import ImageGrid from "../ImageGrid";

function UploadAvatar() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg','image/gif'];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
        setFile(null);
        setError("Please select a valid image file (png, jpeg or gif)!");
    }
  };

  return (
    <section className={styles.uploadAvatar}>
      <form>
        <label htmlFor="avatar">Upload picture:</label>
        
        <input type="file" name="avatar" id="avatar" onChange={changeHandler} />
        
        <div className={styles.output}>
            {error && <div className="error">{ error }</div>}
            {file && <div>{ file.name }</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}

        </div>

      </form>
      <ImageGrid />
    </section>
  );
}

export default UploadAvatar;
