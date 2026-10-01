import React from "react";
import {
  FiDownload,
  FiFileText,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import "./ProductDocumentation.css";

interface ProductDocumentationProps {
  title?: string;
  description?: string;
  technicalDatasheet: string;
  safetySheet: string;
  technicalLabel?: string;
  safetyLabel?: string;
}

const ProductDocumentation: React.FC<ProductDocumentationProps> = ({
  title = "Technical Documentation",
  description = "Download product specifications, technical information and safety documentation.",
  technicalDatasheet,
  safetySheet,
  technicalLabel = "Technical Datasheet",
  safetyLabel = "Safety Sheet",
}) => {
  return (
    <section className="documentation-section">
      <div className="download-section container">
        {/* LEFT CONTENT */}
        <div className="download-left">
          <div className="download-icon">
            <FiDownload />
          </div>

          <div className="download-info">
            <span className="download-label">
              PRODUCT DOCUMENTATION
            </span>

            <h3>{title}</h3>

            <p>{description}</p>
          </div>
        </div>

        {/* DOWNLOAD BUTTONS */}
        <div className="download-actions">
          <a
            href={technicalDatasheet}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button primary"
          >
            <div className="button-icon">
              <FiFileText />
            </div>

            <div className="button-content">
              <strong>{technicalLabel}</strong>
              <small>PDF Document</small>
            </div>

            <FiArrowRight className="button-arrow" />
          </a>

          <a
            href={safetySheet}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button secondary"
          >
            <div className="button-icon">
              <FiShield />
            </div>

            <div className="button-content">
              <strong>{safetyLabel}</strong>
              <small>PDF Document</small>
            </div>

            <FiArrowRight className="button-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDocumentation;
