import "./WorkflowSection.css";

import blockJointingImg from "../../assets/block-jointing.png";
import tileFixingImg from "../../assets/tile-fixing.png";
import plastering from "../../assets/plastering.png"
import PrePlaster from "../../assets/Pre-Plaster.png"
import SurfacePreparation from "../../assets/Surface-Preparation.png"

interface WorkflowItem {
  title: string;
  image: string;
  problems: string[];
  solution: string;
  benefits: string[];
}

const workflowData: WorkflowItem[] = [
  {
    title: "Block Work & Jointing",
    image: blockJointingImg,
    problems: [
      "Thick mortar gaps",
      "Misaligned blocks",
      "Weak bonding",
    ],
    solution: "Rockstar High-Strength Block Jointing Mortar",
    benefits: ["Thin joint", "Strong bond", "Faster build"],
  },
  {
    title: "Tile Fixing & Flooring",
    image: tileFixingImg,
    problems: [
      "Loose Tiles",
      "Hollow Sounds",
      "Poor Adhesion",
    ],
    solution: "Rockfix Advanced Tile adhesive range",
    benefits: ["Secure Fixing ", "Strong Bond", "Long Lasting"],
  },
  {
    title: "Wall plastering solutions ",
    image: plastering,
    problems: [
      "Surface cracks",
      "Uneven Finish",
      "Manual mixing issues",
    ],
    solution: "Rockstar Ready-Mix Premix Plaster ",
    benefits: ["Smooth Finish", "Crack Resistant", "Ready mix consistency"],
  },
  {
    title: "Pre-Plaster Solutions",
    image: PrePlaster,
    problems: [
      "Poor adhesion on RCC",
      "Plaster peeling",
      "Hacking required",
    ],
    solution: "Hackoplast plaster hacking agent ",
    benefits: ["Strong bonding", "No hacking needed", "Better plaster grip"],
  },
    {
    title: "Surface Preparation Solutions",
    image: SurfacePreparation,
    problems: [
      "Smooth surface",
      "Low plaster grip",
      "Bonding failure",
    ],
    solution: "Rockstar Rockbond bonding agent ",
    benefits: ["Rough texture", "Strong mechanical key", " Improved adhesion"],
  },
];

const WorkflowSection = () => {
  return (
    <section className="workflow-wrapper">
      {workflowData.map((item, index) => {
        const isReverse = index % 2 !== 0;

        return (
            <>
            <article
                key={`${item.title}-${index}`}
                className={`workflow-section ${isReverse ? "workflow-section--reverse" : ""}`}
            >
                    {/* Background image */}
                    <div
                        className="workflow-image"
                        style={{
                            backgroundImage: `url(${item.image})`,
                        }} />

                    {/* Image overlay */}
                    <div className="workflow-overlay" />

                    {/* Content */}
                    <div className="workflow-container container">
                        <div className="workflow-content">
                            {/* Number */}
                            <div className="workflow-number">
                                <span>0{index + 1}</span>
                            </div>

                            {/* Problems */}
                            <div className="workflow-problems">
                                <span className="workflow-eyebrow">
                                    Construction Challenge
                                </span>

                                <h2>{item.title}</h2>

                                <ul>
                                    {item.problems.map((problem, i) => (
                                        <li key={i}>
                                            <span className="problem-icon">
                                                <span />
                                            </span>

                                            <span>{problem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solution */}
                            <div className="workflow-solution">


                                <p>{item.solution}</p>

                                <ul className="workflow-benefits">
                                    {item.benefits.map((benefit, i) => (
                                        <li key={i}>
                                            <span className="check-icon">✓</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Decorative line */}
                    <div className="workflow-accent" />
                </article></>
        );
      })}
    </section>
  );
};

export default WorkflowSection;
