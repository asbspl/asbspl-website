import "./WhyChooseUs.css";
import yearsimg from "../../assets/25-years.png"
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="col-lg-6">
            <div className="why-content">

              <span className="why-subtitle">
                OUR COMPANY BENEFITS
              </span>

              <h2 className="why-title">
                REASONS TO
                CHOOSE US
              </h2>

              <div className="why-list">

                <div className="why-list-item">
                  <span className="why-bullet"></span>
                  <p>
                    We deliver the best quality and quantity in the industry.
                  </p>
                </div>

                <div className="why-list-item">
                  <span className="why-bullet"></span>
                  <p>
                    We have received zero complaints about our products.
                  </p>
                </div>

                <div className="why-list-item">
                  <span className="why-bullet"></span>
                  <p>
                    We make sure our clients are satisfied and retained with us.
                  </p>
                </div>

              </div>

              <Link to="/solutions" className="why-button">
                PRODUCTS BUSINESS
              </Link>

            </div>
          </div>


          {/* =========================
              RIGHT EXPERIENCE CARD
          ========================= */}
          <div className="col-lg-6">
            <div className="experience-card">

              <div className="experience-image">
                <img
                  src={yearsimg}
                  alt="25 Years of Working Experience"
                />
              </div>

              <h3 className="experience-title">
                25 Years of Working Experience
              </h3>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
