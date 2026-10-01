import React from "react";
import "./ApplicationProcess.css";

import ProductDocumentation from "../ProductDocumentation/ProductDocumentation";

import processImg1 from "../../assets/processimg1.png";
import processImg2 from "../../assets/processImg2.png";
import processImg3 from "../../assets/processImg3.png";
import processImg4 from "../../assets/processImg4.png";
import processImg5 from "../../assets/processImg5.png";
import processImg6 from "../../assets/processImg6.png";
import processImg7 from "../../assets/processImg7.png";
import processImg8 from "../../assets/processImg8.png";
import processImg9 from "../../assets/processImg9.png";
import processImg10 from "../../assets/processImg10.png";
import processImg11 from "../../assets/processImg11.png";
import processImg12 from "../../assets/processImg12.png";
import processImg13 from "../../assets/processImg13.png";
import processImg14 from "../../assets/processImg14.png";
import processImg15 from "../../assets/processImg15.png";
import processImg16 from "../../assets/processImg16.png";
import processImg17 from "../../assets/processImg17.png";
import processImg18 from "../../assets/processImg18.png";
import processImg20 from "../../assets/processImg20.png";
import processImg21 from "../../assets/processImg21.png";
import processImg22 from "../../assets/processImg22.png";
import processImg23 from "../../assets/processImg23.png";
import processImg24 from "../../assets/processImg24.png";
import processImg25 from "../../assets/processImg25.png";
import processImg26 from "../../assets/processImg26.png";
import processImg27 from "../../assets/processImg27.png";
import processImg28 from "../../assets/processImg28.png";
import processImg29 from "../../assets/processImg29.png";
import processImg30 from "../../assets/processImg30.png";
import processImg31 from "../../assets/processImg31.png";
import processImg32 from "../../assets/processImg32.png";
import processImg33 from "../../assets/processImg33.png";
import processImg34 from "../../assets/processImg34.png";




interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ApplicationProcessProps {
  product: "tileAdhesive" | "bjm" | "premixplasters" | "bondingAgent" | "hackingAgent";
}

const applicationProcessData = {
  tileAdhesive: {
    title: "APPLICATION PROCESS",
    subtitle: "(HOW TO USE)",

    steps: [
      {
        title: "Surface Cleaning",
        description:
          "Remove all dust, debris, and oil from the substrate.",
        image: processImg1,
      },
      {
        title: "Add Adhesive",
        description:
          "Slowly pour the adhesive powder into clean water.",
        image: processImg2,
      },
      {
        title: "Water Ratio",
        description:
          "Mix according to the specified water-to-powder proportions.",
        image: processImg3,
      },
      {
        title: "Mechanical Mixing",
        description:
          "Stir with an electric mixer until lump-free.",
        image: processImg4,
      },
      {
        title: "Slake Time",
        description:
          "Let sit for 5 minutes, then remix briefly.",
        image: processImg5,
      },
      {
        title: "Adhesive Bedding",
        description:
          "Spread the mixture evenly over the work area.",
        image: processImg6,
      },
      {
        title: "Notched Troweling",
        description:
          "Comb the adhesive to create uniform ridges.",
        image: processImg7,
      },
      {
        title: "Back Buttering",
        description:
          "Apply a thin adhesive layer to the back.",
        image: processImg8,
      },
      {
        title: "Tile Placement",
        description:
          "Press tiles firmly into the wet adhesive bed.",
        image: processImg9,
      },
      {
        title: "Tamping Tiles",
        description:
          "Tap with a rubber mallet to level.",
        image: processImg10,
      },
      {
        title: "Curing Period",
        description:
          "Leave undisturbed for 24 hours to set.",
        image: processImg11,
      },
      {
        title: "Grout Filling",
        description:
          "Fill tile joints with grout to finish.",
        image: processImg12,
      },
    ],

    documentation: {
      technicalDatasheet:
        "/documents/technical-datasheet.pdf",
      safetySheet:
        "/documents/safety-sheet.pdf",
    },
  },

  bjm: {
    title: " APPLICATION PROCESS",
    subtitle: "(HOW TO USE)",

    steps: [
      {
        title: "Surface Cleaning",
        description:
          "Remove dust and loose particles. Ensure blocks are even and properly aligned.",
        image: processImg13,
      },
      {
        title: "Mixing with Water",
        description:
          "Slowly pour the adhesive powder into clean water.",
        image: processImg14,
      },
      {
        title: " Mechanical Mixing ",
        description:
          "Stir with an electric mixer until lump-free.",
        image: processImg15,
      },
      {
        title: "Apply Mortar",
        description:
          "Use a trowel to apply 2–3 mm thick mortar evenly on the block surface.",
        image: processImg16,
      },
      {
        title: "Gentle Tapping",
        description:
          "Tap lightly using a rubber mallet to set the block firmly.",
        image: processImg17,
      },
      {
        title: "Curing Period",
        description:
          "Leave undisturbed for 24 hours to set.",
        image: processImg18,
      },
    ],

    documentation: {
      technicalDatasheet:
        "/documents/waterproofing-technical-datasheet.pdf",
      safetySheet:
        "/documents/waterproofing-safety-sheet.pdf",
    },
  },

  premixplasters: {
    title: "GROUT APPLICATION",
    subtitle: "(HOW TO USE)",

    steps: [
      {
        title: "Surface Cleaning",
        description:
          "Remove dust and loose particles. Ensure blocks are even and properly aligned.",
        image: processImg23,
      },
      {
        title: "Mixing with Water",
        description:
          "Mix premix plaster with clean water to achieve a smooth, lump-free consistency.",
        image: processImg22,
      },
      {
        title: " Mechanical Mixing  ",
        description:
          "Stir with an electric mixer until lump-free.",
        image: processImg15,
      },
      {
        title: "  Application",
        description:
          "Apply plaster evenly on the wall using a trowel. Maintain uniform thickness.",
        image: processImg16,
      },
      {
        title: " Leveling",
        description:
          "Level the surface using a straight edge for a smooth and even finish.",
        image: processImg20,
      },
      {
        title: " Water Curing ",
        description:
          "Cure the plaster by sprinkling water for 2–3 days.",
        image: processImg21,
      },
    ],

    documentation: {
      technicalDatasheet:
        "/documents/grout-technical-datasheet.pdf",
      safetySheet:
        "/documents/grout-safety-sheet.pdf",
    },
  },
  bondingAgent: {
    title: " APPLICATION PROCESS",
    subtitle: "(HOW TO USE)",

    steps: [
      {
        title: "Surface Cleaning",
        description:
          "Remove dust and loose particles. Ensure blocks are even and properly aligned.",
        image: processImg24,
      },
      {
        title: "Stir Thoroughly",
        description:
          "Mix bonding agent well before use",
        image: processImg25,
      },
      {
        title: "Use Proper Tools",
        description:
          "Apply using a good quality brush or roller for uniform coating",
        image: processImg26,
      },
      {
        title: " Dampen Surface",
        description:
          "Lightly moisten the surface before applying bonding agent",
        image: processImg27,
      },
      {
        title: "Apply Even Coat",
        description:
          "Use brush or roller on surface",
        image: processImg28,
      },
      {
        title: "Curing Period",
        description:
          "Leave undisturbed for 24 hours to set.",
        image: processImg11,
      },
    ],

    documentation: {
      technicalDatasheet:
        "/documents/grout-technical-datasheet.pdf",
      safetySheet:
        "/documents/grout-safety-sheet.pdf",
    },
  },
  hackingAgent: {
    title: " APPLICATION PROCESS",
    subtitle: "(HOW TO USE)",

    steps: [
      {
        title: "Clean the Surface",
        description:
          "Remove all dust, dirt, and loose material to create a proper base for application.",
        image: processImg29,
      },
      {
        title: "Moisten The Surface",
        description:
          "Ensure the surface is damp before applying the layer to improve adhesion",
        image: processImg30,
      },
      {
        title: "Apply a Coat ",
        description:
          "Spread an even layer of hackoplast  on the prepared surface .",
        image: processImg31,
      },
      {
        title: " Apply Dash-Coat",
        description:
          "Once the surface feels tacky, apply a thin coat of cement mortar within 10 minutes for optimal adhesion.",
        image: processImg32,
      },
      {
        title: "Ensure Tacky Surface",
        description:
          "Verify that the surface is sticky before applying plaster layer to achieve proper bonding.",
        image: processImg33,
      },
      {
        title: "Plaster the Surface",
        description:
          "Once the dash/coat has set, apply plaster evenly for a smooth and durable finish.",
        image: processImg34,
      },
    ],

    documentation: {
      technicalDatasheet:
        "/documents/grout-technical-datasheet.pdf",
      safetySheet:
        "/documents/grout-safety-sheet.pdf",
    },
  },
};

const ApplicationProcess: React.FC<ApplicationProcessProps> = ({
  product,
}) => {
  const data = applicationProcessData[product];

  return (
    <>
      <section className="application-section">
        <div className="application-header">
          <h2>{data.title}</h2>
          <span>{data.subtitle}</span>
        </div>

        <div className="container px-3 px-md-4 px-lg-5">
          <div className="row g-3 application-grid">
            {data.steps.map((step, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-xl-2"
                key={step.title}
              >
                <div className="process-card">
                  <div className="process-image-wrapper">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="process-image"
                    />

                    <span className="step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="process-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <ProductDocumentation
          technicalDatasheet={data.documentation.technicalDatasheet}
          safetySheet={data.documentation.safetySheet}
        />

      </section>
    </>
  );
};

export default ApplicationProcess;
