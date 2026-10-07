import React from "react";
import {
  FiDownload,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";
import "./ProductDocumentation.css";

interface ProductDocumentationProps {
  title?: string;
  description?: string;
  technicalDatasheet: string;
  technicalLabel?: string;
}

const ProductDocumentation: React.FC<ProductDocumentationProps> = ({
  title = "Technical Documentation",
  description = "Download product specifications and technical information.",
  technicalDatasheet,
  technicalLabel = "Technical Datasheet",
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

        {/* SINGLE DOWNLOAD BUTTON */}
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
        </div>

      </div>
    </section>
  );
};

export default ProductDocumentation;