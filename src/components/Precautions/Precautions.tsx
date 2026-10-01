import React from "react";
import "./Precautions.css";

// ============================================
// PAGE 1 IMAGES
// ============================================

import page1Precaution1 from "../../assets/precaution1.png";
import page1Precaution2 from "../../assets/precaution2.png";
import page1Precaution3 from "../../assets/precaution3.png";
import page1Precaution4 from "../../assets/precaution4.png";
import page1Precaution5 from "../../assets/precaution5.png";
import page1Precaution6 from "../../assets/precaution6.png";

// ============================================
// PAGE 2 IMAGES
// ============================================

import page2Precaution1 from "../../assets/precaution1.png";
import page2Precaution2 from "../../assets/precaution1.png";
import page2Precaution3 from "../../assets/precaution1.png";
import page2Precaution4 from "../../assets/precaution1.png";
import page2Precaution5 from "../../assets/precaution1.png";
import page2Precaution6 from "../../assets/precaution1.png";

// ============================================
// TYPES
// ============================================

interface PrecautionItem {
  title: string;
  image: string;
}

interface PrecautionsProps {
  page?: "page1" | "page2";
  heading?: string;
}

// ============================================
// COMPONENT
// ============================================

const Precautions: React.FC<PrecautionsProps> = ({
  page = "page1",
  heading = "PRECAUTIONS",
}) => {
  // ============================================
  // PAGE 1 DATA
  // ============================================

  const page1Items: PrecautionItem[] = [
    {
      title: "Store in a cool and dry place",
      image: page1Precaution1,
    },
    {
      title: "Keep away from moisture",
      image: page1Precaution2,
    },
    {
      title: "Use clean equipment",
      image: page1Precaution3,
    },
    {
      title: "Keep container tightly closed",
      image: page1Precaution4,
    },
    {
      title: "Protect from rain and water",
      image: page1Precaution5,
    },
    {
      title: "Follow all safety instructions",
      image: page1Precaution6,
    },
  ];

  // ============================================
  // PAGE 2 DATA
  // ============================================

  const page2Items: PrecautionItem[] = [
    {
      title: "Keep the product away from direct sunlight",
      image: page2Precaution1,
    },
    {
      title: "Avoid contact with water",
      image: page2Precaution2,
    },
    {
      title: "Always use clean tools",
      image: page2Precaution3,
    },
    {
      title: "Close the container after use",
      image: page2Precaution4,
    },
    {
      title: "Do not use during heavy rain",
      image: page2Precaution5,
    },
    {
      title: "Wear suitable protective equipment",
      image: page2Precaution6,
    },
  ];

  // ============================================
  // SELECT DATA
  // ============================================

  const items = page === "page1" ? page1Items : page2Items;

  // ============================================
  // UI
  // ============================================

  return (
    <section className="precautions-section">
      {/* Heading */}
      <div className="precautions-heading">
        <h2>{heading}</h2>
      </div>

      {/* Cards */}
      <div className="precautions-container">
        <div className="container">
          <div className="row g-0 justify-content-center">
            {items.map((item, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-2"
                key={`${item.title}-${index}`}
              >
                <div className="precaution-item">
                  {/* Image Card */}
                  <div
                    className={`precaution-card ${
                      index === 0 ? "precaution-card" : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="precaution-image"
                    />
                  </div>

                  {/* Title below card */}
                  <div className="precaution-title">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precautions;
