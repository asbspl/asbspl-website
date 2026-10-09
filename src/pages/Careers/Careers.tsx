
import React from "react";
import "./Careers.css";

import CareersBanner from "../../assets/careers-banner-bg.png";
import CareersForm from "../../components/CareersForm/CareersForm";

const Careers: React.FC = () => {
  return (
    <section className="careers-page">

      {/* Hero Banner */}
      <section className="careers-hero">

        <img
          src={CareersBanner}
          alt="Careers at A S Building Solutions Pvt Ltd"
          className="careers-hero-image"
        />

        {/* Hero Content */}
        <div className="careers-hero-overlay">
          <div className="careers-hero-content">

            <h1>Build Your Career With Us</h1>

            <p>
              Join the Rockstar team and be a part of a workplace where
              ideas, innovation and teamwork create something meaningful.
            </p>

            <span>
              Explore opportunities and grow with A S Building Solutions Pvt Ltd.
            </span>

          </div>
        </div>

      </section>

      {/* Careers Form */}
      <section className="careers-form-section">
        <div>
          <CareersForm />
        </div>
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
              <span>Please Send Resume : </span>
              <a href="mailto:Hr@asbspl.com">
                Hr@asbspl.com
              </a>
            </div>

          </div>
        </div>
      </section>

    </section>
  );
};

export default Careers;

