import React from "react";
import "./Solutionbreadcrumb.css";
import { Link } from "react-router-dom";

interface ConstructionStage {
  label: string;
  href: string;
}

const constructionStages: ConstructionStage[] = [
    {
    label: "Surface Preparation",
    href: "#block-work",
  },
  {
    label: "Block Work",
    href: "#block-work",
  },
  {
    label: "Plastering",
    href: "#plastering",
  },
  {
    label: "Tile Fixing",
    href: "#tile-fixing",
  },
  {
    label: "Finishing",
    href: "#finishing",
  },
];

const Solutionbreadcrumb: React.FC = () => {
  return (
    <section
      className="solution-breadcrumb"
      aria-labelledby="solution-breadcrumb-title"
    >
      <div className="container-fluid p-0">
        {/* Hero */}
        <div className="solution-breadcrumb__hero">
          <div
            className="solution-breadcrumb__image"
            aria-hidden="true"
          />

          <div
            className="solution-breadcrumb__overlay"
            aria-hidden="true"
          />

          <div
            className="solution-breadcrumb__panels"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="container solution-breadcrumb__container">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-md-8 col-lg-10">
                <div className="solution-breadcrumb__content">

                  <h2 id="solution-breadcrumb-title">
                    Smart Construction Solutions for Every Stage
                  </h2>

                  <p className="solution-breadcrumb__description">
                    Complete material solutions for every stage of
                    construction.
                  </p>

                  <div className="solution-breadcrumb__actions">

                    <Link className=" solution-breadcrumb__btn solution-breadcrumb__btn--primary" to="/products/TileAdhesive">
                      Explore products 
                    </Link>

                     <Link className=" solution-breadcrumb__btn solution-breadcrumb__btn--secondary" to="/contact">
                      Get Expert Advice
                    </Link>
                  </div>

                  <p className="solution-breadcrumb__tagline">
                    Build stronger, faster, and better with our advanced
                    materials.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Breadcrumb / stages */}
        <nav
          className="solution-breadcrumb__nav"
          aria-label="Construction stages"
        >
          <div className="container">
            <ul className="solution-breadcrumb__list">
              {constructionStages.map((stage, index) => (
                <React.Fragment key={stage.label}>
                  <li className="solution-breadcrumb__item">
                    <a href={stage.href}>
                      <span
                        className="solution-breadcrumb__icon"
                        aria-hidden="true"
                      >
                        <span />
                      </span>

                      <span>{stage.label}</span>
                    </a>
                  </li>

                  {index < constructionStages.length - 1 && (
                    <li
                      className="solution-breadcrumb__separator"
                      aria-hidden="true"
                    >
                      |
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Solutionbreadcrumb;
