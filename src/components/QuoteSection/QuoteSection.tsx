import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./QuoteSection.css";
import QuoteSectionimg from "../../assets/QuoteSection-img.png"
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
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your API/service here.
    console.log("Quote request:", formData);

    setSubmitted(true);
  };

  return (
    <><section className="quote-section" aria-labelledby="quote-title">
          <div className="container">
              <div className="row g-4 g-lg-5 align-items-start">
                  {/* Left Content */}
                  <div className="col-12 col-lg-6">
                      <div className="quote-image-wrapper">
                          <img
                              src={QuoteSectionimg}
                              alt="Professional construction worker applying plaster to an interior wall"
                              className="quote-image"
                              loading="lazy" />
                      </div>

                      <article className="quote-content">
                          <h2 className="quote-content-title">
                              BEST QUALITY PRODUCTS
                          </h2>

                          <p>
                              We have continuously delivered our products with the best
                              possible quality which has helped them to get high ROI on their
                              investment in our products and our hard work has helped to
                              retain our customers and to build a trustworthy reputation with
                              our clients.
                          </p>
                      </article>
                  </div>

                  {/* Right Form */}
                  <div className="col-12 col-lg-6">
                      <div className="quote-form-wrapper">
                          <h1 id="quote-title" className="quote-title">
                              Get a Free Quote
                          </h1>

                          {submitted && (
                              <div
                                  className="alert alert-success quote-success"
                                  role="alert"
                              >
                                  Thank you! Your quote request has been submitted.
                              </div>
                          )}

                          <form
                              onSubmit={handleSubmit}
                              className="quote-form"
                              noValidate
                          >
                              {/* Name */}
                              <div className="form-group">
                                  <label htmlFor="name" className="visually-hidden">
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
                                      required />
                              </div>

                              {/* Email */}
                              <div className="form-group">
                                  <label htmlFor="email" className="visually-hidden">
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
                                      required />
                              </div>

                              {/* Address */}
                              <div className="form-group">
                                  <label htmlFor="address" className="visually-hidden">
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
                                      autoComplete="street-address" />
                              </div>

                              {/* Phone */}
                              <div className="form-group">
                                  <label htmlFor="phone" className="visually-hidden">
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
                                      autoComplete="tel" />
                              </div>

                              {/* Message */}
                              <div className="form-group">
                                  <label htmlFor="message" className="visually-hidden">
                                      Write message
                                  </label>

                                  <textarea
                                      id="message"
                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      className="form-control quote-textarea"
                                      placeholder="Write message"
                                      rows={5} />
                              </div>

                              <button
                                  type="submit"
                                  className=" quote-submit-button"
                              >
                                  Send Message
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
<section className="cta-section">
  <div className="container">
    <div className="row align-items-center g-4">
      
      <div className="col-12 col-lg-10">
        <h2 className="cta-title">
          QUALITY, AFFORDABLE, MANUFACTURING OF CONSTRUCTION MATERIAL
        </h2>
      </div>

      <div className="col-12 col-lg-2">
        <div className="cta-button-wrapper">
<Link to="/about" className="cta-button">
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
