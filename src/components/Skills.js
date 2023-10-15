import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiTypescript,
  SiCss3,
} from "react-icons/si";

import "./Skills.css";

function Skills() {
  const skillsArray = [
    { icon: <DiJavascript1 />, text: "JavaScript" },
    { icon: <DiReact />, text: "React" },
    { icon: <DiNodejs />, text: "Node.js" },
    { icon: <DiMongodb />, text: "MongoDB" },
    { icon: <DiGit />, text: "Git" },
    { icon: <SiFirebase />, text: "Firebase" },
    { icon: <SiSass />, text: "Sass" },
    { icon: <SiCss3 />, text: "CSS" },
    { icon: <SiHtml5 />, text: "HTML" },
    { icon: <SiTypescript />, text: "TypeScript" },
    { icon: <SiNextdotjs />, text: "Next.js" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "White" }}>
      <div className="skills-container">
        {skillsArray.map((skill, index) => (
          <Col xs={6} md={4} lg={3} className="tech-icons" key={index}>
          {skill.icon}
          <p className="tech-text">{skill.text}</p>
        </Col>
        ))}
      </div>
    </Row>
  );
}

export default Skills;
