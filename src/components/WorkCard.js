import "./WorkCardStyles.css";
import movie from "../assets/Movie.png";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      <div className="project-card">
       
        <img src={movie} alt="movie" />
        <h2 className="project-title">Project Title</h2>
        <div className="pro-details">
          <p>This is</p>
          <div className="pro-btns">
            <NavLink to="url.com" className="btn">
              View
            </NavLink>
            <NavLink to="url.com" className="btn">
              Source
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  </div>;
};

export default WorkCard;
