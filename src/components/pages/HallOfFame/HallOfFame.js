import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "./HallOfFame.css";


export default function HallOfFame() {
  
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


  const listUsers = winner.map((user) => (
    <li key={user.username}>
      <button className="hallOffFameBtn">{user.username} with score {user.score} out of 10</button>
    </li>
  ));

  return (
    <div className="hallOfFame">
      <h1>Hall of Fame Page</h1>
      <ol>{listUsers}</ol>
    </div>
  );
}
