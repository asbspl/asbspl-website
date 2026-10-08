import React, { useState } from "react";
import {
  FiDownload,
  FiFileText,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import "./ProductDocumentation.css";

interface ProductDocumentationProps {
  title?: string;
  description?: string;
  technicalDatasheet: string;
  technicalLabel?: string;
  productName?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const ProductDocumentation: React.FC<ProductDocumentationProps> = ({
  title = "Technical Documentation",
  description = "Download product specifications and technical information.",
  technicalDatasheet,
  technicalLabel = "Technical Datasheet",
  productName = "Product",
}) => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // ==========================================
  // OPEN FORM
  // ==========================================
  const handleOpenForm = () => {
    setShowForm(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    setSubmitMessage("");
  };

  // ==========================================
  // CLOSE FORM
  // ==========================================
  const handleCloseForm = () => {
    if (isSubmitting) return;

    setShowForm(false);
    setSubmitMessage("");
  };

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // SUBMIT FORM
  // ==========================================
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formPayload = new FormData();

      // Web3Forms Access Key
      formPayload.append(
        "access_key",
        "1b35ef7d-ee4c-4579-9f20-40f800b7c8d4"
      );

      // User information
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("address", formData.address);

      // Product information
      formPayload.append("product", productName);

      // Document information
      formPayload.append("document", technicalLabel);

      // Email subject
      formPayload.append(
        "subject",
        `Technical Datasheet Request - ${productName}`
      );

      // Sender name
      formPayload.append(
        "from_name",
        "Rockstar Website"
      );

      // Spam protection
      formPayload.append("botcheck", "");

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formPayload,
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(
          "Thank you! Your information has been submitted."
        );

        /*
         * Wait briefly so the user can see
         * the success message, then open PDF.
         */
        setTimeout(() => {
          window.open(
            technicalDatasheet,
            "_blank",
            "noopener,noreferrer"
          );

          setShowForm(false);
          setSubmitMessage("");
        }, 800);
      } else {
        setSubmitMessage(
          result.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      setSubmitMessage(
        "Unable to submit the form. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ==========================================
          DOCUMENTATION SECTION
      ========================================== */}
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

          {/* DOWNLOAD BUTTON */}
          <div className="download-actions">
            <button
              type="button"
              className="download-button primary"
              onClick={handleOpenForm}
            >
              <div className="button-icon">
                <FiFileText />
              </div>

              <div className="button-content">
                <strong>{technicalLabel}</strong>
                <small>PDF Document</small>
              </div>

              <FiArrowRight className="button-arrow" />
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          USER INFORMATION MODAL
      ========================================== */}
      {showForm && (
        <div
          className="documentation-modal-backdrop"
          onClick={handleCloseForm}
        >
          <div
            className="documentation-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="documentation-modal-close"
              onClick={handleCloseForm}
              disabled={isSubmitting}
              aria-label="Close"
            >
              <FiX />
            </button>

            {/* HEADER */}
            <div className="documentation-modal-header">
              <h3>Get Technical Datasheet</h3>

              <p>
                Please provide your information to access the{" "}
                <strong>{productName}</strong> technical
                datasheet.
              </p>
            </div>

            {/* FORM */}
            <form
              className="documentation-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div className="documentation-form-group">
                <label htmlFor="documentation-name">
                  Full Name <span>*</span>
                </label>

                <input
                  id="documentation-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* EMAIL */}
              <div className="documentation-form-group">
                <label htmlFor="documentation-email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="documentation-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* PHONE */}
              <div className="documentation-form-group">
                <label htmlFor="documentation-phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="documentation-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  disabled={isSubmitting}
                />
              </div>

              {/* ADDRESS */}
              <div className="documentation-form-group">
                <label htmlFor="documentation-address">
                  Address <span>*</span>
                </label>

                <textarea
                  id="documentation-address"
                  name="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  required
                  disabled={isSubmitting}
                  rows={3}
                />
              </div>

              {/* SUCCESS / ERROR MESSAGE */}
              {submitMessage && (
                <div
                  className={`documentation-form-message ${
                    submitMessage.includes("Thank you")
                      ? "success"
                      : "error"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="documentation-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "View Brochure"}
              </button>

              {/* NOTE */}
              <p className="documentation-form-note">
                Your information will be used to process your
                document request.
              </p>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDocumentation;