import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/heroImg.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="hero" />
      </div>
      <div className="content">
        <p>HI, I'M A FRONTEND DEVELOPER</p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          
          <a href='https://asalshamim.vercel.app/' download className="btn btn-light">
             ONLINE CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
