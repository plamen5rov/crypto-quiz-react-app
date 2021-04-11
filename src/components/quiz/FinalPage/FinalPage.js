import React from "react";
import './FinalPage.css';
import { useAuth } from "../../utils/AuthContext";

function FinalPage(props) {

    const {currentUser, updateUserScore} = useAuth();
    console.log('User is:',currentUser.email);
    const score = props.score;
    console.log("score is: ", score);

    updateUserScore(currentUser.email, score);





  return (
    <div className="finalPage">
      <h1>You have completed the quiz!</h1>
      <p>
        Your score is: {props.score} of 10
      </p>
      <p>Thank you!</p>
    </div>
  );
}

export default FinalPage;
