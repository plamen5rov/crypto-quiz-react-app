import React, { useRef, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  console.log("Dashboard started");

  const collectionRef = useRef();
  const questionNumberRef = useRef();
  const questionRef = useRef();
  const answerARef = useRef();
  const answerBRef = useRef();
  const answerCRef = useRef();
  const answerDRef = useRef();
  const rightAnswerRef = useRef();

  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleDashboardSubmit(e) {
    e.preventDefault();

    console.log(collectionRef.current.value);
    console.log(questionNumberRef.current.value);
    console.log(questionRef.current.value);

    const collection = collectionRef.current.value;
    const questionNumber = questionNumberRef.current.value;
    const question = questionRef.current.value;
    const answerA = answerARef.current.value;
    const answerB = answerBRef.current.value;
    const answerC = answerCRef.current.value;
    const answerD = answerDRef.current.value;
    const rightAnswer = rightAnswerRef.current.value;

    const data = {
      text: question,
      A: answerA,
      B: answerB,
      C: answerC,
      D: answerD,
      rightAnswer: rightAnswer,
    };

    db.collection(collection)
      .doc(questionNumber)
      .set(data)
      .then(() => {
        console.log("Document successfully written!");
        history.push("/admin");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    setLoading(false);
    history.push("/categories");
  }
  return (
    <div className="dashboardForm">
      <h1>Admin's Dashboard</h1>
      <form onSubmit={handleDashboardSubmit}>
        <fieldset>
          <label htmlFor="collection">Collection:</label>
          <input
            type="text"
            name="collection"
            id="collection"
            required
            placeholder="Collection name"
            ref={collectionRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="questionNumber">Question number:</label>
          <input
            type="text"
            name="questionNumber"
            id="questionNumber"
            required
            placeholder="Q1...Q10"
            ref={questionNumberRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="question">Question:</label>
          <textarea
            rows="2"
            cols="50"
            name="question"
            id="question"
            required
            placeholder="Your question here"
            ref={questionRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="answerA">Answer A:</label>
          <textarea
            rows="2"
            cols="50"
            name="answerA"
            id="answerA"
            required
            placeholder="Answer A here"
            ref={answerARef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="answerB">Answer B:</label>
          <textarea
            rows="2"
            cols="50"
            name="answerB"
            id="answerB"
            required
            placeholder="Answer B here"
            ref={answerBRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="answerC">Answer C:</label>
          <textarea
            rows="2"
            cols="50"
            name="answerC"
            id="answerC"
            required
            placeholder="Answer C here"
            ref={answerCRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="answerD">Answer D:</label>
          <textarea
            rows="2"
            cols="50"
            name="answerD"
            id="answerD"
            required
            placeholder="Answer D here"
            ref={answerDRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="rightAnswer">Right answer is:</label>
          <input
            type="text"
            name="rightAnswer"
            id="rightAnswer"
            required
            placeholder="A1, B1, C1 or D1!"
            ref={rightAnswerRef}
          />
        </fieldset>
        <button type="submit" disabled={loading}>
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Dashboard;