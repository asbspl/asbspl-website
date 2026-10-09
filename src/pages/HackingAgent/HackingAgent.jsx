import "./HackingAgent.css";
import KeyBenefits from "../../components/KeyBenefits/KeyBenefits";
import WhereToUse from "../../components/WhereToUse/WhereToUse";
import ApplicationProcess from "../../components/ApplicationProcess/ApplicationProcess";
import HackingAgentHeroImg from "../../assets/hackoplast-img.png";
import HackingAgentBg from "../../assets/hackoplast-bg.png";
import logo from "../../assets/header-logo.png"
import hackoplastlogo from "../../assets/hackoplast-logo1.png"

const HackingAgent = () => {
  return (
    <>
      <section className="hacking-agent">

        {/* ================= HERO SECTION ================= */}
        <div
          className="hacking-agent-hero"
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.25)
            ), url(${HackingAgentBg})`,
          }}
        >
          <div className="container-fluid">
            <div className="row align-items-center">

              {/* Product Image */}
              <div className="col-lg-4 col-md-5 col-12">
                <div className="hacking-agent-product">

                  <div className="hacking-agent-image-box">
                    <img
                      src={HackingAgentHeroImg}
                      alt="Hackoplast"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-8 col-md-7 col-12">
                <div className="hacking-agent-content">
                                   <div className="hackoplast-brand">
                  <img
                    className="product-logo"
                    src={logo}
                    alt="Rockstar Logo"
                  />

                  <span className="tile-brand-divider"></span>

                  <img  className="hackoplast-logo" src={hackoplastlogo} alt="" />
                </div>
                  <h1>Hackoplast</h1>

                  <h4>
                    Make Every Surface Plaster-Ready
                  </h4>

                  <p>
                    Enhances bonding between smooth surfaces and plaster for
                    long-lasting, crack-free results.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= PRODUCT TAGLINE ================= */}
        <div className="hacking-agent-info">
          <div className="container">
            <div className="hacking-agent-info-wrapper">
              <p className="hacking-agent-info-text">
                Superior Surface Grip, Stronger Plaster Bonding, And Lasting Durability
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <section>
        <div>
          <KeyBenefits product="hackingAgent" />
        </div>

        <div>
          <WhereToUse product="hackingAgent" />
        </div>

        <div>
          <ApplicationProcess product="hackingAgent" />
        </div>
      </section>
    </>
  );
};

export default HackingAgent;