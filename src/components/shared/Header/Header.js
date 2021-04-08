import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../../utils/firebaseConfig";
import { useAuth } from "../../utils/AuthContext";

export default function Header() {
  const [error, setError] = useState();
  const history = useHistory();
  const { currentUser } = useAuth();
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
        {!currentUser && (
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        )}
        {!currentUser && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}

        {currentUser && (
          <li onClick={handleLogout}>
            <NavLink to="#">Logout</NavLink>
          </li>
        )}
        {currentUser && (currentUser.email==='admin@quiz.com') && (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
