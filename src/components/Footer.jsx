import React from "react";
import facebook from "../media/facebook.png";
import twitter from "../media/twitter.png";
import instagram from "../media/instagram.png";
import linkedin from "../media/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footercontent">
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="socialmedia">
            <div
              className="facebook"
              style={{ backgroundImage: `url(${facebook})` }}
            ></div>
            <div
              className="twitter"
              style={{ backgroundImage: `url(${twitter})` }}
            ></div>
            <div
              className="instagram"
              style={{ backgroundImage: `url(${instagram})` }}
            ></div>
            <div
              className="linkedin"
              style={{ backgroundImage: `url(${linkedin})` }}
            ></div>
          </div>
        </div>
        <h5 className="mt-5">All Copyrights Reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
