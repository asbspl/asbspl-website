import React, { useState } from "react";
import "./ProductBrochures.css";

import BrochureBg from "../../assets/brochures-bg.png";

import BJMImage from "../../assets/brochure-bjm-img.png";
import PremixImage from "../../assets/Premix-bread.png";
import BondingAgentImage from "../../assets/brochure-bonding-agent-img.png";
import HackingAgentImage from "../../assets/hackoplast-img.png";
import TileAdhesiveImage from "../../assets/TileAdhesive-bread.png";
import StuccoPlasterImage from "../../assets/stucco-plaster.png";

import BJMBrochure from "../../assets/rockstar product brochure_BJM.pdf";
import PremixBrochure from "../../assets/rockstar product brochure_primix_plaster.pdf";
import BondingAgentBrochure from "../../assets/rockstar product brochure_BONDING_AGENT.pdf";
import HackingAgentBrochure from "../../assets/rockstar product brochure_HACKOPLAST.pdf";
import TileAdhesiveBrochure from "../../assets/rockstar product brochure_tile_adesive.pdf";
import StuccoPlaster from "../../assets/rockstar product brochure_STUCCO_PLASTER.pdf";

interface ProductBrochure {
  id: number;
  name: string;
  image: string;
  pdf: string;
}

const productBrochures: ProductBrochure[] = [
  {
    id: 1,
    name: "BJM",
    image: BJMImage,
    pdf: BJMBrochure,
  },
  {
    id: 2,
    name: "PREMIX PLASTER",
    image: PremixImage,
    pdf: PremixBrochure,
  },
  {
    id: 3,
    name: "TILE ADHESIVE",
    image: TileAdhesiveImage,
    pdf: TileAdhesiveBrochure,
  },
  {
    id: 4,
    name: "BONDING AGENT",
    image: BondingAgentImage,
    pdf: BondingAgentBrochure,
  },
  {
    id: 5,
    name: "HACKING AGENT",
    image: HackingAgentImage,
    pdf: HackingAgentBrochure,
  },
  {
    id: 6,
    name: "STUCCO PLASTER",
    image: StuccoPlasterImage,
    pdf: StuccoPlaster,
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const ProductBrochures: React.FC = () => {
  const [selectedBrochure, setSelectedBrochure] =
    useState<ProductBrochure | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitMessage, setSubmitMessage] = useState("");

  const handleBrochureClick = (product: ProductBrochure) => {
    setSelectedBrochure(product);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    setSubmitMessage("");
  };

  const closeModal = () => {
    if (isSubmitting) return;

    setSelectedBrochure(null);
    setSubmitMessage("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!selectedBrochure) return;

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

      // Brochure information
      formPayload.append(
        "brochure",
        selectedBrochure.name
      );

      formPayload.append(
        "subject",
        `Brochure Request - ${selectedBrochure.name}`
      );

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
         * Wait for a short moment so the user can see
         * the success message, then open the brochure.
         */
        setTimeout(() => {
          window.open(
            selectedBrochure.pdf,
            "_blank",
            "noopener,noreferrer"
          );

          setSelectedBrochure(null);
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
      <section
        className="product-brochures"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.48),
            rgba(0, 0, 0, 0.48)
          ), url(${BrochureBg})`,
        }}
      >
        <div className="container">
          <div className="product-brochures-container">

            {/* Heading */}
            <h2 className="product-brochures-title">
              Products Brochures
            </h2>

            {/* Products */}
            <div className="product-brochures-grid">
              {productBrochures.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  className="brochure-card"
                  onClick={() =>
                    handleBrochureClick(product)
                  }
                  aria-label={`Open ${product.name} brochure`}
                >
                  <div
                    className={`brochure-image-wrapper ${product.id === 6
                        ? "stucco-plaster-image"
                        : ""
                      }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="brochure-image"
                    />
                  </div>

                  <div className="brochure-overlay">
                    <span className="brochure-name">
                      {product.name}
                    </span>

                    <span className="brochure-view">
                      View Brochure
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          BROCHURE INFORMATION MODAL
      ================================= */}
      {selectedBrochure && (
        <div
          className="brochure-modal-backdrop"
          onClick={closeModal}
        >
          <div
            className="brochure-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="brochure-modal-close"
              onClick={closeModal}
              disabled={isSubmitting}
              aria-label="Close"
            >
              ×
            </button>

            {/* Modal Heading */}
            <div className="brochure-modal-header">
              <h3>Get Product Brochure</h3>

              <p>
                Please provide your information to access the{" "}
                <strong>
                  {selectedBrochure.name}
                </strong>{" "}
                brochure.
              </p>
            </div>

            {/* Form */}
            <form
              className="brochure-form"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="brochure-form-group">
                <label htmlFor="brochure-name">
                  Full Name <span>*</span>
                </label>

                <input
                  id="brochure-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div className="brochure-form-group">
                <label htmlFor="brochure-email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="brochure-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div className="brochure-form-group">
                <label htmlFor="brochure-phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="brochure-phone"
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

              {/* Company */}
              {/* Address */}
              <div className="brochure-form-group">
                <label htmlFor="brochure-address">
                  Address <span>*</span>
                </label>

                <textarea
                  id="brochure-address"
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

              {/* Message */}
              {submitMessage && (
                <div
                  className={`brochure-form-message ${submitMessage.includes("Thank you")
                      ? "success"
                      : "error"
                    }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="brochure-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "View Brochure"}
              </button>

              <p className="brochure-form-note">
                Your information will be used to process your
                brochure request.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductBrochures;