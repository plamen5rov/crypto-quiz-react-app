import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import styles from "./Categories.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
//import { motion } from "framer-motion";

function Categories() {
  const [category, setCategory] = useState([]);
  const [currentCollection, setCurrentCollection] = useState();
  const { currentUser } = useAuth();
  const history = useHistory();

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

  

  async function categoryClickHandler(e) {
    e.preventDefault();
    const collection = e.target.innerHTML;
    setCurrentCollection(collection);

    // console.log(e.target.innerHTML, " was clicked!");
    // console.log(collection, " collection");

    console.log("Current collection is: ", currentCollection);
    history.push("/quiz")
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
      {currentUser && <h2>Click on a category to start the quiz!</h2>}

      {!currentUser && <h2>REGISTER to start the quiz!</h2>}
      <ul>{listItems}</ul>
    </div>
  );
}
export default Categories;
