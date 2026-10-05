import "./Hero.css";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-title"
    >
      {/* Background overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Top-right contact number */}
      <header className="hero-header">
<a href="tel:+919876543210" className="hero-phone">
  <FaPhoneAlt className="phone-icon" aria-hidden="true" />
  +91 85 2687 2687
</a>

      </header>
      

      {/* Main hero content */}
      <div className="container h-100 position-relative">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="hero-content">

              <p className="hero-subtitle">
                Premium Construction Materials
              </p>

              <h1 id="hero-title" className="hero-title">
                High Performance
                <span>Construction Materials</span>
              </h1>

              <p className="hero-description">
               <b>We're the best Products provider in India</b> 
              </p>

              <a
                href="#products"
                
              ><button className="hero-button">
                <Link to="/products/TileAdhesive">
  View Products
</Link>
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}

    </section>
  );
};

export default Hero;
