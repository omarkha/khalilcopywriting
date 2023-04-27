import React from "react";

const Portfoliopage = () => {
  return (
    <div className="portfoliopage">
      <div className="container bg-light">
        <section className="portfolio">
          <h1 className="text-dark">
            Get a better idea of my copywriting abilities
          </h1>
          <h2 className="h3 text-dark">
            Listed below are Copywriting pieces I've worked on
          </h2>
          <p className="h6 text-dark">
            Some of these pieces were for courses I was enrolled in, others are
            for my own businesses, others for clients and so on.
          </p>
          <div className="copypiece">
            <div>
              <h3>'Safespex' Home Page</h3>
              <p className="h5 text-dark">
                This is a home page copy that I wrote as part of my course with
                Marcia Yudkin. It's for an Electrical Appliances Testing Company
                in New Zealand.
              </p>
              <p className="text-muted mt-4">April, 2023</p>
              <a
                className="button-2 mt-4"
                href="https://docs.google.com/document/d/1_9OfT9tRdE9cf3XO64SwhGhOOyUjAHIFInx_QJ9aI54/edit?usp=sharing"
                target="_blank"
              >
                View Copy
              </a>
            </div>
          </div>
          <div className="copypiece">
            <div>
              <h3>'Queen of Clean' Sales Letter</h3>
              <p className="h5 text-dark">
                This is a sales letter I wrote as part of my course with Marcia
                Yudkin. It's a sales letter for a cleaning business.
              </p>

              <br />
              <p className="text-lead">April, 2023</p>
              <a
                className="button-2 mt-4"
                href="https://docs.google.com/document/d/1O059QjUnVyqBL-j6XASYP76Hr66ItFSG-2oXiA16BjE/edit?usp=sharing"
                target="_blank"
              >
                View Copy
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfoliopage;
