import React from "react";
import "./AboutRockstar.css";

import AboutHeroImg from "../../assets/aboutpage-img.png";
import AboutBuildingImg from "../../assets/highlight-img-bg.png";
import rockstarlogo from "../../assets/header-logo.png"

const AboutRockstar: React.FC = () => {
  return (
    <main className="about-page">
      {/* =========================
          Hero Section
      ========================== */}
      {/* =========================
    Hero Section
========================== */}
      <section
        className="about-hero"
        aria-labelledby="about-hero-title"
      >
        <div className="container-fluid p-0">
          <div className="about-hero-image-wrapper">

            <img
              src={AboutHeroImg}
              alt="Rockstar construction materials manufacturing facility"
              className="about-hero-image"
              loading="eager"
              fetchPriority="high"
            />

            {/* Gradient Overlay */}
            <div className="about-hero-overlay">
              <div className="about-hero-content">
                <h1 id="about-hero-title">
                  About Us
                </h1>

                <p>
                  We are a trusted manufacturer, exporter, and supplier of high-quality
                  construction materials, delivering reliable solutions for modern
                  construction needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          About Section
      ========================== */}
      <section
        className="about-rockstar-section"
        aria-labelledby="about-rockstar-title"
      >
        <div>
          <div className="row g-0 align-items-stretch about-rockstar-wrapper">

            {/* Left Image */}
            <div className="col-lg-6">
              <div className="about-content-image">
                <img
                  src={AboutBuildingImg}
                  alt="Modern construction building representing Rockstar construction solutions"
                  className="img-fluid"
                  loading="lazy"
                />

                <div className="rockstar-logo" aria-hidden="true">
                  <img className="rockstar-logo-img" src={rockstarlogo} alt="rockstarlogo logo" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <article className="about-content">
                <h2 id="about-rockstar-title">
                  About Rockstar
                </h2>

                <p>
                  <strong>
                    Rockstar
                    <sup style={{ fontSize: "10px", verticalAlign: "super" }}>®</sup>
                  </strong>{" "}
                  is a leading construction materials brand by
                  <strong> A S Building Solutions Pvt Ltd</strong>, focused on
                  delivering high-performance dry-mix solutions for modern
                  construction.
                </p>

                <p>
                  Our products are designed to enhance strength, durability,
                  and efficiency across a wide range of building applications.
                </p>

                <p>
                  With a strong commitment to quality and innovation, Rockstar
                  helps builders, engineers, and contractors achieve reliable
                  and long-lasting results on every project.
                </p>
              </article>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutRockstar;
