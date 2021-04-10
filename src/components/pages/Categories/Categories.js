import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import styles from "./Categories.module.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
//import { motion } from "framer-motion";

function Categories() {
  const [category, setCategory] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("categories").get();
      setCategory(data.docs.map((doc) => doc.data()));
    };

    fetchData();

    return () => {
      setCategory([]);
    };
  }, []);

  function categoryClickHandler(e) {
    e.preventDefault();
    console.log(e.target.innerText, " was clicked!");
  }

  const listItems = category.map((category) => (
    <li key={category.name}>
      <button
        className={styles.categoryBtn}
        onClick={categoryClickHandler}
        disabled={!currentUser}
      >
        {category.name}
      </button>
    </li>
  ));

  return (
    <div className={styles.categoryBox}>
      {currentUser && <h3>Click on a category to start the quiz!</h3>}

      {!currentUser && <h3>REGISTER to start the quiz!</h3>}
      <ul>{listItems}</ul>
    </div>
  );
}
export default Categories;
