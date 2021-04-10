import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import styles from "./Categories.module.css";
//import { motion } from "framer-motion";

function Categories() {
  const [category, setCategory] = useState([]);

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

  const listItems = category.map((category) => (
    <li key={category.name}>
      <button className={styles.categoryBtn}>{category.name}</button>
    </li>
  ));

  return (
    <div className={styles.categoryBox}>
    <h2>Click on a category to start quiz!</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
export default Categories;
