import { type FormEvent, useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    const form = event.currentTarget;

    const formData = new FormData(form);

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "Web3Forms access key is missing. Please check your .env file.",
      });

      setIsSending(false);

      return;
    }

    formData.append("access_key", accessKey);

    formData.append(
      "subject",
      "New Contact Enquiry - Rockstar"
    );

    formData.append(
      "from_name",
      "Rockstar Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully.",
        });

        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(
        "Web3Forms submission error:",
        error
      );

      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">

      {/* ==================================================
          CONTACT HERO
      ================================================== */}

      <section className="contact-hero">

        <div className="container-fluid contact-container">

          <div className="contact-card">

            {/* ==================================================
                LEFT SIDE - CONTACT INFORMATION
            ================================================== */}

            <div className="contact-information">

              {/* PHONE */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaPhoneAlt />
                </div>

                <div className="contact-info-content">

                  <h6>Phone</h6>

                  <a href="tel:+912065236359">
                    020 65236359
                  </a>

                </div>

              </div>


              {/* EMAIL */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>

                <div className="contact-info-content">

                  <h6>Email</h6>

                  <a href="mailto:contact@rockstar.com">
                    contact@rockstar.com
                  </a>

                </div>

              </div>


              {/* ADDRESS */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="contact-info-content">

                  <h6>Address</h6>

                  <p>
                    Vishwa Vimal Complex,Opp. Hyundai Kothari Showroom,Next to Titan I Plus Showroom, Magarpatta-Kharadi Road, Kharadi,Pune - 411 014, MH India.
                  </p>

                </div>

              </div>


              {/* ==================================================
                  SOCIAL ICONS
              ================================================== */}

              <div className="contact-socials">

                <a 
                  className="facebook"
                  href="#"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  className="twitter"
                  href="#"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>

                <a
                 className="linkedIn"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  className="instagram"
                  href="#"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>


            {/* ==================================================
                RIGHT SIDE - CONTACT FORM
            ================================================== */}

            <div className="contact-form-container">

              <h2>
                Get In Touch With Us
              </h2>


              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                <div className="row contact-form-row">


                  {/* NAME */}

                  <div className="col-md-6">

                    <div className="contact-form-group">

                      <label htmlFor="name">
                        Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />

                    </div>

                  </div>


                  {/* EMAIL */}

                  <div className="col-md-6">

                    <div className="contact-form-group">

                      <label htmlFor="email">
                        Email
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email address"
                        autoComplete="email"
                        required
                      />

                    </div>

                  </div>


                  {/* ADDRESS */}

                  <div className="col-md-6">

                    <div className="contact-form-group">

                      <label htmlFor="address">
                        Address
                      </label>

                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Subject address"
                        autoComplete="street-address"
                      />

                    </div>

                  </div>


                  {/* PHONE */}

                  <div className="col-md-6">

                    <div className="contact-form-group">

                      <label htmlFor="phone">
                        Phone no
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone number"
                        autoComplete="tel"
                      />

                    </div>

                  </div>


                  {/* MESSAGE */}

                  <div className="col-12">

                    <div className="contact-form-group">

                      <label htmlFor="message">
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Write message"
                        required
                      />

                    </div>

                  </div>


                  {/* WEB3FORMS HONEYPOT */}

                  <div className="contact-honeypot">

                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                  </div>


                  {/* SUBMIT BUTTON */}

                  <div className="col-12">

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSending}
                    >

                      {isSending
                        ? "Sending..."
                        : "Send Message"}

                    </button>

                  </div>

                </div>

              </form>


              {/* ==================================================
                  STATUS MESSAGE
              ================================================== */}

              {status.message && (
                <div
                  className={`contact-status ${status.type}`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          GOOGLE MAP
      ================================================== */}

      <section className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d71967.49671740862!2d73.96670146260276!3d18.55935274873523!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c3a5f602c5b7%3A0xac911644b7f6618a!2sA%20S%20Building%20Solutions%20Pvt%20Ltd%2C%20Flat%20No.04%2C%20Vishwa%20Vimal%20Complex%2C%20S.No.%2011%2C%20nr.%20Titan%20Eye%20Plus%20Showroom%2C%20Sambhaji%20Nagar%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!3m2!1d18.5473633!2d73.9359971!5e0!3m2!1sen!2sin!4v1790857732068!5m2!1sen!2sin" width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"></iframe>

      </section>

    </main>
  );
};

export default Contact;


