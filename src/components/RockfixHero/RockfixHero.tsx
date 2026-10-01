import React from "react";
import "./RockfixHero.css";

import RockfixHeroimg from "../../assets/product-3.png";
import RockfixHeroimg2 from "../../assets/product-2.png";
import RockfixHeroimg3 from "../../assets/product-1.png";



import RockfixBg1 from "../../assets/rockfix-background.png";
import RockfixBg2 from "../../assets/rockfix-background2.png";
import RockfixBg3 from "../../assets/rockfix-background3.png";

import InteriorFloorImg from "../../assets/interior-floor.png";
import DryIndoorImg from "../../assets/dry-indoor.png";
import SmallMediumTilesImg from "../../assets/small-medium-tiles.png";
import LowTrafficImg from "../../assets/low-traffic.png";

import residentialflooring from "../../assets/residential-flooring.png";
import bathroomwallfloor from "../../assets/bathroom-wall-floor.png";
import balconyoutdoorarea from "../../assets/balcony-outdoor-area.png";
import commercialinterior from "../../assets/commercial-interior.png";

import largetiles from "../../assets/large-tiles.png";
import outdoorspace from "../../assets/outdoor-space.png";
import hightrafficarea from "../../assets/high-traffic-area.png";
import naturalstone from "../../assets/natural-stone.png";
import ApplicationProcess from "../ApplicationProcess/ApplicationProcess";

/* =========================================================
   TYPES
========================================================= */

interface ProductInfo {
  coverage: string;
  application: string;
  settingTime: string;
  packaging: string;
}

interface UseItem {
  title: string;
  image: string;
}

interface ProductData {
  id: number;
  productName: string;
  heroImage: string;
  heroBackground: string;
  heading: string;
  description: string;
  features: string[];
  info: ProductInfo;
  useItems: UseItem[];
}

/* =========================================================
   PRODUCT DATA
========================================================= */

const products: ProductData[] = [
  {
    id: 1,

    productName: "ROCKFIX 100",

    heroImage: RockfixHeroimg,

    heroBackground: RockfixBg1,

    heading: "Smart Choice for Basic Applications",

    description:
      "Cost-effective solution for standard tile fixing in low-load areas.",

    features: [
      "Budget Friendly",
      "Small Tiles",
      "Light Duty",
    ],

    info: {
      coverage: "XX sq.ft",
      application: "Small Tiles",
      settingTime: "XX min",
      packaging: "20kg",
    },

    useItems: [
      {
        title: "Interior Floor Tiles",
        image: InteriorFloorImg,
      },
      {
        title: "Dry Indoor Areas",
        image: DryIndoorImg,
      },
      {
        title: "Small to Medium Size Tiles",
        image: SmallMediumTilesImg,
      },
      {
        title: "Low Traffic Areas",
        image: LowTrafficImg,
      },
    ],
  },

  {
    id: 2,

    productName: "ROCKFIX 200",

    heroImage: RockfixHeroimg2,

    heroBackground: RockfixBg2,

    heading: "Balanced Strength & Performance",

    description:
      "Perfect mix of strength and flexibility for everyday construction needs.",

    features: [
      "Most Popular ⭐",
      "All-Rounder",
      "Wall & Floor",
    ],

    info: {
      coverage: "XX sq.ft",
      application: "Medium Tiles",
      settingTime: "XX min",
      packaging: "20kg",
    },

    useItems: [
      {
        title: "Residential Flooring",
        image: residentialflooring,
      },
      {
        title: "Bathroom Wall & Floor",
        image: bathroomwallfloor,
      },
      {
        title: "Balcony / Outdoor Area",
        image: balconyoutdoorarea,
      },
      {
        title: "Commercial Interior ",
        image: commercialinterior,
      },
    ],
  },

  {
    id: 3,

    productName: "ROCKFIX 300",

    heroImage: RockfixHeroimg3,

    heroBackground: RockfixBg3,

    heading: "Engineered for High Performance",

    description:
      "Perfect for large tiles, natural stone, and high-traffic applications.",

    features: [
      "Premium",
      "Heavy Duty",
      "Stone & Large Tiles",
    ],

    info: {
      coverage: "XX sq.ft",
      application: "Stone & Large Tiles",
      settingTime: "XX min",
      packaging: "20kg",
    },

    useItems: [
      {
        title: "Large Format Tiles",
        image: largetiles,
      },
      {
        title: "Natural Stone Application",
        image: naturalstone,
      },
      {
        title: "High Traffic Commercial Area",
        image: hightrafficarea,
      },
      {
        title: "Indoor + Outdoor Space",
        image: outdoorspace,
      },
    ],
  },
];

/* =========================================================
   REUSABLE PRODUCT SECTION
========================================================= */

const RockfixProductSection: React.FC<{
  product: ProductData;
}> = ({ product }) => {
  return (
    <section className="rockfix-section">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="rockfix-header">
        <div className="container-fluid">

          <h1 className="rockfix-title">
            {product.productName}
          </h1>

        </div>
      </div>


      {/* =================================================
          HERO
      ================================================= */}

      <div
        className="rockfix-hero"
        style={{
          backgroundImage: `url(${product.heroBackground})`,
        }}
      >

        <div className="container">

          <div className="row align-items-center g-4">

            {/* Product Image */}

            <div className="col-12 col-md-4 col-lg-3">

              <div className="product-wrapper">

                <img
                  src={product.heroImage}
                  alt={product.productName}
                  className="product-image"
                />

              </div>

            </div>


            {/* Content */}

            <div className="col-12 col-md-8 col-lg-9">

              <div className="rockfix-content">

                <h2>
                  {product.heading}
                </h2>

                <p className="rockfix-description">
                  {product.description}
                </p>

                <p className="rockfix-features">

                  {product.features.map(
                    (feature, index) => (
                      <React.Fragment key={feature}>

                        {feature}

                        {index <
                          product.features.length - 1 && (
                          <span>•</span>
                        )}

                      </React.Fragment>
                    )
                  )}

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          INFORMATION BAR
      ================================================= */}

      <div className="rockfix-info">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-12">

              <div className="info-items">

                <div className="info-item">

                  <span className="check">
                    ✓
                  </span>

                  <span>
                    Coverage:{" "}
                    <strong>
                      {product.info.coverage}
                    </strong>
                  </span>

                </div>


                <div className="info-item">

                  <span className="check">
                    ✓
                  </span>

                  <span>
                    Application:{" "}
                    <strong>
                      {product.info.application}
                    </strong>
                  </span>

                </div>


                <div className="info-item">

                  <span className="check">
                    ✓
                  </span>

                  <span>
                    Setting Time:{" "}
                    <strong>
                      {product.info.settingTime}
                    </strong>
                  </span>

                </div>


                <div className="info-item">

                  <span className="check">
                    ✓
                  </span>

                  <span>
                    Packaging:{" "}
                    <strong>
                      {product.info.packaging}
                    </strong>
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          WHERE TO USE
      ================================================= */}

      <section className="where-to-use">

        <div className="container-fluid">

          <h2 className="where-to-use-title">
            WHERE TO USE
          </h2>

          <div className="where-to-use-wrapper container">

            <div className="row g-5">

              {product.useItems.map(
                (item, index) => (

                  <div
                    className="col-12 col-sm-6 col-lg-3"
                    key={`${product.id}-${index}`}
                  >

                    <div className="use-card">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="use-card-image"
                      />

                      <div className="use-card-overlay">

                        <h3>
                          {item.title}
                        </h3>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

    </section>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

const RockfixHero: React.FC = () => {

  return (
    <>
      {products.map((product) => (
        <RockfixProductSection
          key={product.id}
          product={product}
        />
      ))}
      <ApplicationProcess product="tileAdhesive" />

    </>
  );
};

export default RockfixHero;
