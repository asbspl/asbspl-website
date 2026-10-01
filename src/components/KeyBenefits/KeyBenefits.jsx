import "./KeyBenefits.css";

import KeyBenefit1 from "../../assets/key-benefits1.png";
import KeyBenefit2 from "../../assets/key-benefits2.png";
import KeyBenefit3 from "../../assets/key-benefits3.png";
import KeyBenefit4 from "../../assets/key-benefits4.png";
import KeyBenefit5 from "../../assets/key-benefits5.png";
import KeyBenefit6 from "../../assets/faster-construction.png"
import KeyBenefit7 from "../../assets/thin-joint.png"


const KeyBenefits = ({ product }) => {
  // All pages data
  const benefitsData = {
    tileAdhesive: [
      {
        image: KeyBenefit1,
        title: "High Bond Strength",
      },
      {
        image: KeyBenefit2,
        title: "Crack Resistant",
      },
      {
        image: KeyBenefit3,
        title: "Easy Application",
      },
      {
        image: KeyBenefit4,
        title: "Time Saving",
      },
      {
        image: KeyBenefit5,
        title: "Cost Effective",
      },
    ],

    bjm: [
      {
        image: KeyBenefit1,
        title: "High Bond Strength",
      },
      {
        image: KeyBenefit6,
        title: "Faster Construction",
      },
      {
        image: KeyBenefit7,
        title: "Thin Joint",
      },
      {
        image: KeyBenefit4,
        title: "Time Saving",
      },
      {
        image: KeyBenefit5,
        title: "Cost Effective",
      },
    ],

    tileGrout: [
      {
        image: KeyBenefit1,
        title: "Water Resistant",
      },
      {
        image: KeyBenefit2,
        title: "Stain Resistant",
      },
      {
        image: KeyBenefit3,
        title: "Easy Mixing",
      },
      {
        image: KeyBenefit4,
        title: "Quick Application",
      },
      {
        image: KeyBenefit5,
        title: "Durable Finish",
      },
    ],

    waterproofing: [
      {
        image: KeyBenefit1,
        title: "Excellent Waterproofing",
      },
      {
        image: KeyBenefit2,
        title: "Crack Resistant",
      },
      {
        image: KeyBenefit3,
        title: "Easy Application",
      },
      {
        image: KeyBenefit4,
        title: "Long Lasting",
      },
      {
        image: KeyBenefit5,
        title: "Cost Effective",
      },
    ],

    repairMortar: [
      {
        image: KeyBenefit1,
        title: "High Strength",
      },
      {
        image: KeyBenefit2,
        title: "Shrinkage Resistant",
      },
      {
        image: KeyBenefit3,
        title: "Easy Application",
      },
      {
        image: KeyBenefit4,
        title: "Fast Setting",
      },
      {
        image: KeyBenefit5,
        title: "Durable",
      },
    ],
  };

  const benefits = benefitsData[product] || [];

  return (
    <section className="key-benefits">
      <div className="container">
        <h2>KEY BENEFITS</h2>

        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">
                <img src={benefit.image} alt={benefit.title} />
              </div>

              <p>{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
