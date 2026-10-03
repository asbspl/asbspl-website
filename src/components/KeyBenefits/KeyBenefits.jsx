import "./KeyBenefits.css";

import KeyBenefit1 from "../../assets/key-benefits1.png";
import KeyBenefit2 from "../../assets/key-benefits2.png";
import KeyBenefit3 from "../../assets/key-benefits3.png";
import KeyBenefit4 from "../../assets/key-benefits4.png";
import KeyBenefit5 from "../../assets/key-benefits5.png";
import KeyBenefit6 from "../../assets/faster-construction.png"
import KeyBenefit7 from "../../assets/thin-joint.png"
import KeyBenefit8 from "../../assets/smooth-finish.png"
import KeyBenefit9 from "../../assets/key-benefits9.png"
import KeyBenefit10 from "../../assets/key-benefits10.png"
import KeyBenefit11 from "../../assets/key-benefits11.png"
import KeyBenefit12 from "../../assets/key-benefits12.png"
import KeyBenefit13 from "../../assets/key-benefits13.png"
import KeyBenefit14 from "../../assets/key-benefits14.png"
import KeyBenefit15 from "../../assets/key-benefits15.png"
import KeyBenefit16 from "../../assets/key-benefits16.png"
import KeyBenefit17 from "../../assets/key-benefits17.png"
import KeyBenefit18 from "../../assets/key-benefits18.png"






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

    PREMIXPlaster: [
      {
        image: KeyBenefit1,
        title: "Strong Bond",
      },
      {
        image: KeyBenefit2,
        title: "Crack Resistant  ",
      },
      {
        image: KeyBenefit8,
        title: "Smooth Finish",
      },
      {
        image: KeyBenefit4,
        title: " Time Saving  ",
      },
      {
        image: KeyBenefit5,
        title: " Cost Effective  ",
      },
    ],

    bondingAgent: [
      {
        image: KeyBenefit9,
        title: "Superior RCC Surface Bonding",
      },
      {
        image: KeyBenefit10,
        title: "Single Coat Application",
      },
      {
        image: KeyBenefit11,
        title: "Faster Application",
      },
      {
        image: KeyBenefit12,
        title: "High Strength & Water Retention",
      },
      {
        image: KeyBenefit13,
        title: "Better Bond Strength ",
      },
    ],

    hackingAgent: [
      {
        image: KeyBenefit14,
        title: "Superior Grip ",
      },
      {
        image: KeyBenefit15,
        title: "Self Curing",
      },
      {
        image: KeyBenefit16,
        title: "Improves Plaster Quality",
      },
      {
        image: KeyBenefit17,
        title: "Prevents Cracks",
      },
      {
        image: KeyBenefit18,
        title: " Cost Effective",
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
