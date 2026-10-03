import React from "react";
import "./ProductBrochures.css";

import BrochureBg from "../../assets/brochures-bg.png";

import BJMImage from "../../assets/brochure-bjm-img.png";
import PremixImage from "../../assets/Premix-bread.png";
import BondingAgentImage from "../../assets/brochure-bonding-agent-img.png";
import HackingAgentImage from "../../assets/hackoplast-img.png";
import TileAdhesiveImage from "../../assets/TileAdhesive-bread.png";
import StuccoPlasterImage from "../../assets/stucco-plaster.png";

import BJMBrochure from "../../assets/rockstar product brochure_BJM.pdf";
import PremixBrochure from "../../assets/rockstar product brochure_primix_plaster.pdf";
import BondingAgentBrochure from "../../assets/rockstar product brochure_BONDING_AGENT.pdf";
import HackingAgentBrochure from "../../assets/rockstar product brochure_HACKOPLAST.pdf";
import TileAdhesiveBrochure from "../../assets/rockstar product brochure_tile_adesive.pdf";
import StuccoPlaster from "../../assets/rockstar product brochure_STUCCO_PLASTER.pdf";

interface ProductBrochure {
  id: number;
  name: string;
  image: string;
  pdf: string;
}

const productBrochures: ProductBrochure[] = [
  {
    id: 1,
    name: "BJM",
    image: BJMImage,
    pdf: BJMBrochure,
  },
  {
    id: 2,
    name: "PREMIX PLASTER",
    image: PremixImage,
    pdf: PremixBrochure,
  },
  {
    id: 3,
    name: "BONDING AGENT",
    image: BondingAgentImage,
    pdf: BondingAgentBrochure,
  },
  {
    id: 4,
    name: "HACKING AGENT",
    image: HackingAgentImage,
    pdf: HackingAgentBrochure,
  },
  {
    id: 5,
    name: "TILE ADHESIVE",
    image: TileAdhesiveImage,
    pdf: TileAdhesiveBrochure,
  },
  {
    id: 6,
    name: "Stucco Plaster",
    image: StuccoPlasterImage,
    pdf: StuccoPlaster,
  },
];

const ProductBrochures: React.FC = () => {
  const openBrochure = (pdf: string) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="product-brochures"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.48),
          rgba(0, 0, 0, 0.48)
        ), url(${BrochureBg})`,
      }}
    >
      <div className="container">
        <div className="product-brochures-container">

          {/* Heading */}
          <h2 className="product-brochures-title">
            Products Brochures
          </h2>

          {/* Products */}
          <div className="product-brochures-grid">
            {productBrochures.map((product) => (
              <button
                key={product.id}
                type="button"
                className="brochure-card"
                onClick={() => openBrochure(product.pdf)}
                aria-label={`Open ${product.name} brochure`}
              >
                <div
                  className={`brochure-image-wrapper ${
                    product.id === 6 ? "stucco-plaster-image" : ""
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="brochure-image"
                  />
                </div>

                <div className="brochure-overlay">
                  <span className="brochure-name">
                    {product.name}
                  </span>

                  <span className="brochure-view">
                    View Brochure
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductBrochures;