import React, { useState } from "react"; // eslint-disable-next-line
import style from "./UploadAvatar.module.css";

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
    <section className="upload-avatar">
      <form>
        <label htmlFor="avatar">Upload picture:</label>
        <br />
        <br />
        <input type="file" name="avatar" onChange={changeHandler} />
        <br />
        <br />
        <div className="output">
            {error && <div className="error">{ error }</div>}
            {file && <div>{ file.name }</div>}
        </div>

      </form>
    </section>
  );
}

export default UploadAvatar;
