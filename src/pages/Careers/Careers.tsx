import React from "react";
import "./Careers.css";

import CareersBanner from "../../assets/careers-banner.png";
import CareersForm from "../../components/CareersForm/CareersForm";

const Careers: React.FC = () => {
  return (
    <><section className="careers-page">

      {/* Hero Banner */}
      <section className="careers-hero">
        <img
          src={CareersBanner}
          alt="Careers at A S Building Solutions"
          className="careers-hero-image" />
      </section>

      {/* Careers Content */}
      <section className="careers-content">
        <div className="container">
          <div className="careers-description">

            <p>
              You're curious, collaborative, and excited about tackling hard
              problems. You're inspired knowing that your ideas, design and
              code will result in the largest platform supporting small
              business owners success across the globe. Together we create
              great products, fueled by the tools and technologies that make
              things faster, easier and better for our customers.
            </p>

            <p>
              Join the Rockstar team, Take risks, Create, Inspire, Solve for
              millions of small business owners across the globe today.
            </p>

            <div className="careers-resume-box">
              <span>Please Send Resume :  </span>{" "}
              <a href="mailto:Hr@asbspl.com">
                Hr@asbspl.com
              </a>
            </div>

          </div>
        </div>

      </section>
    </section><section>
        <div>
          <CareersForm />
        </div>
      </section></>
  );
};

export default Careers;