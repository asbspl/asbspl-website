import React from "react";
import "./BondingAgent.css";

import BondingAgentHeroImg from "../../assets/bonding-agent-img.png";
import BondingAgentBg from "../../assets/bonding-agent-bg.png";

import KeyBenefits from "../../components/KeyBenefits/KeyBenefits";
import WhereToUse from "../../components/WhereToUse/WhereToUse";
import ApplicationProcess from "../../components/ApplicationProcess/ApplicationProcess";

interface ProductInfo {
  coverage: string;
  application: string;
  // settingTime: string;
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

    productName: "ROCKSTAR BONDING AGENT",

    heroImage: BondingAgentHeroImg,

    heroBackground: BondingAgentBg,

    heading: "Bonding Agent",

    subHeading:
      "High-Performance Bonding Agent for Smooth Concrete Surfaces",

    description:
      "A specially formulated bonding agent used to create a strong mechanical grip on smooth concrete surfaces, especially for gypsum plaster applications.",

    info: {
      coverage: "50–70 sq.ft per kg",
      application: "RCC Surface, Wall & Ceiling",
      // settingTime: "XX min",
      packaging: "20 kg / 40 kg",
    },
  },
];

interface BondingAgentProductSectionProps {
  product: ProductData;
}

const BondingAgentProductSection: React.FC<
  BondingAgentProductSectionProps
> = ({ product }) => {
  return (
    <section className="bonding-agent-section">

      {/* =========================================
          HERO
      ========================================= */}

      <div
        className="bonding-agent-hero"
        style={{
          backgroundImage: `url(${product.heroBackground})`,
        }}
      >

        {/* Overlay */}

        <div className="bonding-agent-overlay"></div>


        <div className="container">

          <div className="row align-items-center g-0">

            {/* =================================
                PRODUCT IMAGE
            ================================= */}

            <div className="col-12 col-md-4 col-lg-4">

              <div className="bonding-agent-product-area">

                <img
                  src={product.heroImage}
                  alt={product.productName}
                  className="bonding-agent-product-image"
                />

              </div>

            </div>


            {/* =================================
                CONTENT
            ================================= */}

            <div className="col-12 col-md-8 col-lg-8">

              <div className="bonding-agent-content">

                <h1 className="bonding-agent-title">
                  {product.heading}
                </h1>

                <h3 className="bonding-agent-subtitle">
                  {product.subHeading}
                </h3>

                <p className="bonding-agent-description">
                  {product.description}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          PRODUCT INFORMATION
      ========================================= */}

      <div className="bonding-agent-info">

        <div className="container">

          <div className="row">

            <div className="col-12">

              <div className="bonding-agent-info-wrapper">

                {/* Coverage */}

                <div className="bonding-agent-info-item">

                  <span className="bonding-agent-check-icon">
                    ✓
                  </span>

                  <span>
                    Coverage:
                    <strong>
                      {product.info.coverage}
                    </strong>
                  </span>

                </div>


                {/* Application */}

                <div className="bonding-agent-info-item">

                  <span className="bonding-agent-check-icon">
                    ✓
                  </span>

                  <span>
                    Application:
                    <strong>
                      {product.info.application}
                    </strong>
                  </span>

                </div>


                {/* Setting Time */}

                {/* <div className="bonding-agent-info-item">

                  <span className="bonding-agent-check-icon">
                    ✓
                  </span>

                  <span>
                    Setting Time:
                    <strong>
                      {product.info.settingTime}
                    </strong>
                  </span>

                </div> */}


                {/* Packaging */}

                <div className="bonding-agent-info-item">

                  <span className="bonding-agent-check-icon">
                    ✓
                  </span>

                  <span>
                    Packaging:
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

    </section>
  );
};


const BondingAgent: React.FC = () => {

  return (
    <section>

      {/* =========================================
          BONDING AGENT HERO
      ========================================= */}

      <div>

        {products.map((product) => (
          <BondingAgentProductSection
            key={product.id}
            product={product}
          />
        ))}

      </div>


      {/* =========================================
          KEY BENEFITS
      ========================================= */}

      <div>

        <KeyBenefits product="bondingAgent" />

      </div>


      {/* =========================================
          WHERE TO USE
      ========================================= */}

      <div>

        <WhereToUse product="bondingAgent" />

      </div>


      {/* =========================================
          APPLICATION PROCESS
      ========================================= */}

      <div>

        <ApplicationProcess product="bondingAgent" />

      </div>

    </section>
  );
};

export default BondingAgent;