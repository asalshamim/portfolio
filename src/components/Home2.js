import React from "react";
import "./Home2.css";




function Home2() {
  return (
    <div fluid className="home-about-section" >
      
        <div>
          <div md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a passionate software developer with a deep love for programming and a curiosity that drives me to constantly learn and improve. 🚀
              <br />
            
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </div>
      
        </div>
       
    </div>
  );
}
export default Home2;