import React, { Component } from "react";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <div className="about-page">
        <img
          src="https://scontent.fsof11-1.fna.fbcdn.net/v/t1.6435-9/81023588_1406856382799359_2603397673465675776_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OPiICSK4ZZIAX9dwUL9&_nc_ht=scontent.fsof11-1.fna&oh=7c04a414e8a5a402240178f092f8360a&oe=60988869"
          alt="Plamen Petrov"
          width="200"
          height="200"
          className="about-image"
        />
        <p>Hi, my name is Plamen Petrov and this is my project</p>
        <p>
          for the ReactJS - March 2021 Course at{" "}
          <span>
            <a href="https://softuni.bg/" target="_blank" rel="noreferrer">
              SoftUni
            </a>
          </span>
          .
        </p>
        <p>
          Feel free to contact me and leave your comments, bug fixes and ideas:
        </p>
        <p>
          <a
            title="My FB profile"
            href="https://www.facebook.com/biznetmen/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png"
              alt="Facebook"
              width="64"
              height="64"
              className="about"
            />
          </a>
          <a
            title="My Linkedin profile"
            href="https://www.linkedin.com/in/plamen5rov/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
              alt="Linkedin"
              width="64"
              height="64"
              className="about"
            />
          </a>

          <a
            title="My Instagram"
            href="https://www.instagram.com/plamen5rov/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              alt="Instagram"
              width="64"
              height="64"
              className="about"
            />
          </a>
        </p>
      </div>
    );
  }
}

export default About;
