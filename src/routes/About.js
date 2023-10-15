import React from "react";
import "../components/AboutContentStyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Skills from "../components/Skills";


const About = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
    <AboutContent />
    <h1 className="project-heading">
          Professional <strong className="projectSkills">Skillset </strong>
        </h1>
    <Skills/>
    <Footer/>
  </div>;
};

export default About;
