import React, { Component } from "react"; 
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className={styles.homeWrapper}>
        <article className={styles.leftBox}>
          <h1>CRYPTO QUIZ</h1>
          <h2>TEST YOUR KNOWLEDGE TODAY</h2>
          <h3>
            <p>10 CATEGORIES WITH 10 QUESTIONS EACH</p>
            <p>REGISTER NOW AND START PLAYING</p>
            <p>TO PUT YOUR NAME IN THE HALL OF FAME!</p>
          </h3>
          <Link to="/register"><button className={styles.homeBtnRegister}>REGISTER NOW</button></Link>
        </article>
        <article className={styles.rightBox}>
          <img src="bitcoin-coin.png" alt="bitcoin" className={styles.imgBitcoin} />
        </article> 
        
      </div>
    );
  }
}

export default Home;