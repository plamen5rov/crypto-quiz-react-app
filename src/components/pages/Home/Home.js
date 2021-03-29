import React, { Component } from "react"; // eslint-disable-next-line
import style from "./Home.module.css";
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <article className="left-box">
          <h1>CRYPTO QUIZ</h1>
          <h2>TEST YOUR KNOLEDGE NOW</h2>
          <h3>
            <p>10 CATEGORIES WITH 10 QUESTIONS EACH</p>
            <p>REGISTER NOW AND START PLAYING</p>
            <p>TO PUT YOUR NAME IN THE HALL OF FAME!</p>
          </h3>
          <Link to="/register"><button className="home-btn-register">REGISTER NOW</button></Link>
        </article>
        <article className="right-box">
          <img src="bitcoin-coin.png" alt="bitcoin" className="home-image" />
        </article> 
      </div>
    );
  }
}

export default Home;
