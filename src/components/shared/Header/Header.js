import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
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
      </ul>
    </nav>
  );
}
