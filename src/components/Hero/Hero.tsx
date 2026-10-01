import "./Hero.css";
import { FaPhoneAlt } from "react-icons/fa";


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
                View Products
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <button
        type="button"
        className="ai-chatbot"
        aria-label="Open AI assistant"
        title="Chat with our AI assistant"
      >
        <span className="ai-chatbot-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C6.477 3 2 6.58 2 11c0 2.44 1.32 4.62 3.39 6.07L4.5 21l4.15-2.27c1.04.31 2.17.47 3.35.47 5.523 0 10-3.58 10-8S17.523 3 12 3Z"
              fill="currentColor"
            />
            <circle cx="8" cy="11" r="1" fill="#fff" />
            <circle cx="12" cy="11" r="1" fill="#fff" />
            <circle cx="16" cy="11" r="1" fill="#fff" />
          </svg>
        </span>
      </button>
    </section>
  );
};

export default Hero;
