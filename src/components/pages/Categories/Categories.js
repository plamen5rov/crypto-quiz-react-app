import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
//import useFirestore from "hooks/useFirestore";
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

  //const { docs } = useFirestore("categories");
  return (
    <div className={styles.categoryBox}>
      <h1>Categories</h1>

      <ul >
        {category.map((category) => (
          <li key={category.id}>
            {category.id}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
