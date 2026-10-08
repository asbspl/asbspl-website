import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./QuoteSection.css";
import QuoteSectionimg from "../../assets/QuoteSection-img.png";
import { Link } from "react-router-dom";

interface QuoteFormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  message: string;
}

const initialFormData: QuoteFormData = {
  name: "",
  email: "",
  address: "",
  phone: "",
  message: "",
};

const QuoteSection = () => {
  const [formData, setFormData] =
    useState<QuoteFormData>(initialFormData);

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove previous status message when user starts editing again
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // ================= VALIDATION =================

    // Check if any field is empty
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message:
          "Please fill in all fields before submitting the form.",
      });

      return;
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });

      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.phone.trim())) {
      setStatus({
        type: "error",
        message:
          "Please enter a valid 10-digit phone number.",
      });

      return;
    }

    // ================= END VALIDATION =================

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const formDataToSend = new FormData();

      // Web3Forms Access Key
      formDataToSend.append(
        "access_key",
        "c9950aa7-8ac1-432a-ad6e-bc969e92b40a"
      );

      // Form fields
      formDataToSend.append(
        "name",
        formData.name.trim()
      );

      formDataToSend.append(
        "email",
        formData.email.trim()
      );

      formDataToSend.append(
        "address",
        formData.address.trim()
      );

      formDataToSend.append(
        "phone",
        formData.phone.trim()
      );

      formDataToSend.append(
        "message",
        formData.message.trim()
      );

      // Email subject
      formDataToSend.append(
        "subject",
        "New Enquiry - A S Building Solutions"
      );

      // Sender name
      formDataToSend.append(
        "from_name",
        "A S Building Solutions Website"
      );

      // Send form
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted successfully. Our team will contact you soon.",
        });

        // Clear form after successful submission
        setFormData(initialFormData);
      } else {
        setStatus({
          type: "error",
          message:
            "Something went wrong while sending your enquiry. Please try again.",
        });
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your enquiry. Please check your internet connection and try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* ================= QUOTE SECTION ================= */}
      <section
        className="quote-section"
        aria-labelledby="quote-title"
      >
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">

            {/* ================= LEFT CONTENT ================= */}
            <div className="col-12 col-lg-6">
              <div className="quote-image-wrapper">
                <img
                  src={QuoteSectionimg}
                  alt="Professional construction worker applying plaster to an interior wall"
                  className="quote-image"
                  loading="lazy"
                />
              </div>

              <article className="quote-content">
                <h2 className="quote-content-title">
                  BEST QUALITY PRODUCTS
                </h2>

                <p>
                  We have continuously delivered our products
                  with the best possible quality which has helped
                  them to get high ROI on their investment in our
                  products and our hard work has helped to retain
                  our customers and to build a trustworthy
                  reputation with our clients.
                </p>
              </article>
            </div>

            {/* ================= RIGHT FORM ================= */}
            <div className="col-12 col-lg-6">
              <div className="quote-form-wrapper">

                <h1
                  id="quote-title"
                  className="quote-title"
                >
                  Send an Enquiry
                </h1>

                {/* ================= SUCCESS / ERROR MESSAGE ================= */}
                {status.message && (
                  <div
                    className={`alert ${
                      status.type === "success"
                        ? "alert-success"
                        : "alert-danger"
                    } quote-success`}
                    role="alert"
                  >
                    {status.message}
                  </div>
                )}

                {/* ================= FORM ================= */}
                <form
                  onSubmit={handleSubmit}
                  className="quote-form"
                  noValidate
                >

                  {/* ================= NAME ================= */}
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="visually-hidden"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control quote-input"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  {/* ================= EMAIL ================= */}
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="visually-hidden"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control quote-input"
                      placeholder="Email address"
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* ================= ADDRESS ================= */}
                  <div className="form-group">
                    <label
                      htmlFor="address"
                      className="visually-hidden"
                    >
                      Subject address
                    </label>

                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control quote-input"
                      placeholder="Subject address"
                      autoComplete="street-address"
                      required
                    />
                  </div>

                  {/* ================= PHONE ================= */}
                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="visually-hidden"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control quote-input"
                      placeholder="Phone number"
                      autoComplete="tel"
                      maxLength={10}
                      inputMode="numeric"
                      required
                    />
                  </div>

                  {/* ================= MESSAGE ================= */}
                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="visually-hidden"
                    >
                      Write message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control quote-textarea"
                      placeholder="Write message"
                      rows={5}
                      required
                    />
                  </div>

                  {/* ================= SUBMIT BUTTON ================= */}
                  <button
                    type="submit"
                    className="quote-submit-button"
                    disabled={isSending}
                  >
                    {isSending
                      ? "Sending..."
                      : "Send Message"}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-12 col-lg-10">
              <h2 className="cta-title">
                QUALITY, AFFORDABLE, MANUFACTURING OF
                CONSTRUCTION MATERIAL
              </h2>
            </div>

            <div className="col-12 col-lg-2">
              <div className="cta-button-wrapper">
                <Link
                  to="/about"
                  className="cta-button"
                >
                  DISCOVER MORE
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;