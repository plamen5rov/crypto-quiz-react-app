import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../../utils/firebaseConfig";

export default function Header() {
  const [error, setError] = useState();
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await auth.signOut();
      
      setError("");
    } catch {
      setError("Logout failed!");
      console.log(error);
    }
    console.log("LOGOUT SUCCESSFULL");
    history.push("/");
  }
  return (
    <nav className={styles.headerMenu}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>

        <li>
          <NavLink to="/hall-of-fame">Hall of fame</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li onClick={handleLogout}>
          <NavLink to="#">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}
