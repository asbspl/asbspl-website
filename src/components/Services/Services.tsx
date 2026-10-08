import React from "react";
import "./Services.css";
import Servicesimg from "../../assets/Services-img.png"

const Services: React.FC = () => {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="row services-row">
          {/* Left Image */}
          <div className="col-lg-5 col-md-6">
            <div className="services-image-wrapper">
              <img
                src={Servicesimg}
                alt="Construction professionals shaking hands at a construction site"
                className="services-image"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-7 col-md-6">
            <div className="services-content">
              {/* Small Heading */}
              <span className="services-eyebrow">
                GET TO KNOW US
              </span>

              {/* Main Heading */}
              <h2 id="services-title" className="services-title">
                WE PROVIDE EXCELLENT
                <br />
                PRODUCTS SERVICES
              </h2>

              {/* Description */}
              <p className="services-description">
                The entire range of products is manufactured at our
                state-of-the-art facilities at Pune.
              </p>

              {/* Mission */}
              <div className="services-info-row">
                <div className="services-tab services-tab-active">
                  OUR MISSION
                </div>

                <div className="services-info-text">
                  To enhance construction productivity by delivering reliable and dynamic products
      
                </div>
              </div>

              {/* Vision */}
              <div className="services-info-row">
                <div className="services-tab our-vision-btn">
                  OUR VISION
                </div>

                <div className="services-info-text">
                  To consistently explore pioneering ways to bring paramount value to our customers
                </div>
              </div>

              {/* Features */}
              <ul className="services-features">
                <li>We Use Quality Materials.</li>
                <li>We're Professional Contractors.</li>
                <li>The Most Trusted Company.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
