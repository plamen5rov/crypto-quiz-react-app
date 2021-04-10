import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import styles from "./Profile.module.css";

function Profile() {
  const usernameRef = useRef();
  const avatarURLRef = useRef();
  const history = useHistory();
  const {currentUser, updateUserProfile} = useAuth();
  console.log(currentUser.email);

  async function handleUpdateProfileSubmit(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const avatarURL = avatarURLRef.current.value;
    updateUserProfile(currentUser.email, username, avatarURL);
    history.push("/categories");
  }

  return (
    <div className={styles.profileWrapper}>
      <h1>User Profile Page</h1>
      {currentUser && <h4>Logged in as: {currentUser.email}</h4>}
      <form onSubmit={handleUpdateProfileSubmit}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder="Create username here"
            ref={usernameRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="avatarURL">avatarURL:</label>
          <input
            type="text"
            name="avatarURL"
            id="avatarURL"
            placeholder="Type URL here"
            ref={avatarURLRef}
          />
        </fieldset>

        <button type="submit">UPDATE PROFILE</button>
      </form>
    </div>
  );
}

export default Profile;
