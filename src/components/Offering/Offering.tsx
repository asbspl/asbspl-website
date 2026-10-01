import React from "react";
import "./Offering.css";

import Offeringimg1 from "../../assets/Offeringimg3.png";
import Offeringimg2 from "../../assets/Offeringimg2.png";
import Offeringimg3 from "../../assets/Offeringimg1.png";

interface OfferingItem {
  title: string;
  image: string;
}

const offerings: OfferingItem[] = [
  {
    title: "PROVIDING GOOD QUALITY",
    image: Offeringimg1,
  },
  {
    title: "REASONABLE COST",
    image: Offeringimg2,
  },
  {
    title: "SATISFIED CLIENT",
    image: Offeringimg3,
  },
];

const Offering: React.FC = () => {
  return (
    <section className="offering-section">
      <div className="container">
        {/* Section Heading */}
        <div className="offering-header">
          <span className="offering-eyebrow">OUR SERVICES</span>

          <h2>What We're Offering</h2>

          <div className="offering-line"></div>
        </div>

        {/* Cards */}
        <div className="offering-grid">
          {offerings.map((offering) => (
            <article className="offering-card" key={offering.title}>
              
              {/* Image Area */}
              <div className="offering-image-box">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="offering-image"
                />
              </div>

              {/* Title */}
              <div className="offering-content">
                <h3>{offering.title}</h3>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offering;
