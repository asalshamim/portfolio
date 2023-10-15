import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        
          <ul className="permalinks">
          <li >
          <Link to="/" className="footerLink">Home</Link>
        </li>

        <li>
          <Link to="/project" className="footerLink">Projects</Link>
        </li>

        <li>
          <Link to="/about" className="footerLink">About</Link>
        </li>

        <li>
          <Link to="/contact" className="footerLink">Contact</Link>
        </li>
      </ul>
 
       
        <div className="right">
    
          <div className="social">

          <a
              href="https://github.com/asalshamim"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub
              size={30}
              style={{color:"#A3A5A5", marginRight:"1rem"}}
              />
              </a>

                <a
              href="https://www.linkedin.com/in/asal-s-6a19891b6"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin
              size={30}
              style={{color:"#A3A5A5", marginRight:"1rem"}}
                />
                </a>
             <a
              href="asalshamim8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
             
            <FaEnvelope
              size={30}
              style={{color:"#A3A5A5", marginRight:"1rem"}}
              />
              </a>
            
          </div>
          
        </div>

        

      </div>
    
  </div>
  );
};

export default Footer;
