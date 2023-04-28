import React from "react";
import mypicture from "../media/mypicture2.jpg";

import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container bg-light">
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
        <section className="homepage-info">
          <br />
          <br />
          <div>
            <h3>
              We Provide You The Services You Need For Your Business To Succeed
            </h3>
            <p className="h5">
              By writing anything from landing-page copy, to home page copy, to
              sales letters and more, <br />
              <strong>Khalil's Marketing</strong> got you covered.
            </p>
          </div>
          <br />
          <br />
          <div>
            <h3>Low Budget? No Problem!</h3>
            <p className="h5">
              As a new startup ourselves, we take into consideration the needs
              and circumstances of all of our clients.
            </p>
          </div>
          <br />
          <br />
          <div>
            <h3>Unfamiliar with Marketing?</h3>
            <p className="h5">
              We will walk with you step by step to not only get sales but to
              understand how, why and what makes it happen.
            </p>
          </div>
          <br />
          <br />
          <Link to="/landingpage" className="button-3">
            Click Here To Start
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
