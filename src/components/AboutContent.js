import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import About from "../assets/about.img";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm Asal and I’m a frontend Developer, currently I live in Gothenburg. </p>
        <p>
        As a frontend Developer, I bring a broad and user-oriented perspective, as well as a burning passion for code. Now, I'm looking to join a team where I can continue to leverage my skills and grow my expertise in coding, working my way towards contributing to the creation of magical user experiences.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>

      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={About} alt="true" className="img" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutContent;
