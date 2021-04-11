import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "./HallOfFame.css";
//import { useAuth } from "../../utils/AuthContext";

export default function HallOfFame() {
  //const { currentUser } = useAuth();
  const [winner, setWinner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users")
      .orderBy('score', 'desc')
      .limit(10).get();
      setWinner(data.docs.map((doc) => doc.data()));
    };

    fetchData();

    return () => {
      setWinner([]);
    };
  }, []);

  console.log("Winners are: ", winner);

  const listUsers = winner.map((user) => (
    <li key={user.username}>
      <button className="hallOffFameBtn">`User {user.username} with score of: {user.score}</button>
    </li>
  ));

  return (
    <div className="hallOfFame">
      <h1>Hall of Fame Page</h1>
      <ul>{listUsers}</ul>
    </div>
  );
}
