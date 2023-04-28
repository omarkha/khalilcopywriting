import React from "react";
import mypicture from "../media/mypicture2.jpg";

import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <section className="intro">
          <div className="leftside">
            <div
              className="mypicture"
              style={{ backgroundImage: `url(${mypicture})` }}
            ></div>
            <div>
              <h1 className="myname">
                {" "}
                Omar S. Khalil -{" "}
                <span>Copywriter, Software Developer and Entrepreneur</span>
              </h1>
            </div>
          </div>
          <div className="myinfo">
            <h2 className="display-3 text-light">
              Top-Notch Copywriting For Your Brand New Business!
              <br />
              <Link to="/landingpage" className="button-3">
                Click Here to Start
              </Link>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
