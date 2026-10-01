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

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ApplicationProcessProps {
  product: "tileAdhesive" | "bjm" | "grout";
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

  grout: {
    title: "GROUT APPLICATION",
    subtitle: "(HOW TO USE)",

    steps: [
      {
        title: "Clean Joints",
        description:
          "Remove dust and debris from the tile joints.",
        image: processImg1,
      },
      {
        title: "Prepare Grout",
        description:
          "Mix the grout according to the recommended ratio.",
        image: processImg2,
      },
      {
        title: "Apply Grout",
        description:
          "Press grout firmly into all tile joints.",
        image: processImg3,
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
