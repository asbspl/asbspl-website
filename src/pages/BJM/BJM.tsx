import React from "react";
import "./BJM.css";

import RockfixHeroimg from "../../assets/bjm-img.png";
import RockfixBg from "../../assets/bjm-bg.png";
import KeyBenefits from "../../components/KeyBenefits/KeyBenefits"
import ApplicationProcess from "../../components/ApplicationProcess/ApplicationProcess"
import WhereToUse from "../../components/WhereToUse/WhereToUse"
import Precautions from "../../components/Precautions/Precautions"

interface ProductInfo {
  coverage: string;
  application: string;
  settingTime: string;
  packaging: string;
}

interface ProductData {
  id: number;
  productName: string;
  heroImage: string;
  heroBackground: string;
  heading: string;
  subHeading: string;
  description: string;
  info: ProductInfo;
}

const products: ProductData[] = [
  {
    id: 1,
    productName: "ROCKSTAR BJM",
    heroImage: RockfixHeroimg,
    heroBackground: RockfixBg,

    heading: "Block Jointing Mortar",

    subHeading: "Strong Joints. Faster Construction. Better Finish.",

    description:
      "High-performance Block Jointing Mortar designed for AAC blocks, fly ash bricks, and concrete blocks.",

    info: {
      coverage: "XX sq.ft",
      application: "Wall & Block Work",
      settingTime: "XX min",
      packaging: "40kg",
    },
  },
];

interface RockfixProductSectionProps {
  product: ProductData;
}

const RockfixProductSection: React.FC<
  RockfixProductSectionProps
> = ({ product }) => {
  return (
    <section className="bjm-section">
      {/* HERO */}
      <div
        className="bjm-hero"
        style={{
          backgroundImage: `url(${product.heroBackground})`,
        }}
      >
        <div className="bjm-overlay"></div>

        <div className="container">
          <div className="row align-items-center g-0">

            {/* PRODUCT IMAGE */}
            <div className="col-12 col-md-4 col-lg-4">
              <div className="bjm-product-area">
                <img
                  src={product.heroImage}
                  alt={product.productName}
                  className="bjm-product-image"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-12 col-md-8 col-lg-8">
              <div className="bjm-content">

                <h1 className="bjm-title">
                  {product.heading}
                </h1>

                <h3 className="bjm-subtitle">
                  {product.subHeading}
                </h3>

                <p className="bjm-description">
                  {product.description}
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="bjm-info">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <div className="bjm-info-wrapper">

                <div className="bjm-info-item">
                  <span className="check-icon">✓</span>
                  <span>
                    Coverage:
                    <strong>{product.info.coverage}</strong>
                  </span>
                </div>

                <div className="bjm-info-item">
                  <span className="check-icon">✓</span>
                  <span>
                    Application:
                    <strong>{product.info.application}</strong>
                  </span>
                </div>

                <div className="bjm-info-item">
                  <span className="check-icon">✓</span>
                  <span>
                    Setting Time:
                    <strong>{product.info.settingTime}</strong>
                  </span>
                </div>

                <div className="bjm-info-item">
                  <span className="check-icon">✓</span>
                  <span>
                    Packaging:
                    <strong>{product.info.packaging}</strong>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const BJM: React.FC = () => {
  return (
    <section>
      <div>
        {products.map((product) => (
          <RockfixProductSection
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div>
        <KeyBenefits product="bjm" />

      </div>
      <div>
        <WhereToUse product="bjm" />
      </div>
      <div>
        <Precautions page="page1" />
      </div>
      <div>
        <ApplicationProcess product="bjm" />
      </div>

    </section>

  );
};

export default BJM;
