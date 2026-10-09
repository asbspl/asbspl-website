import "./TileAdhesive.css";

import RockfixHeroimg from "../../assets/product-3.png";
import RockfixHeroimg2 from "../../assets/product-2.png";
import RockfixHeroimg3 from "../../assets/t300.png";

import logo from "../../assets/header-logo.png";

import RockfixHero from "../../components/RockfixHero/RockfixHero";
import KeyBenefits from "../../components/KeyBenefits/KeyBenefits";

const TileAdhesive = () => {
  return (
    <>
      <section className="tile-adhesive">

        {/* Product Banner */}
        <div className="TileAdhesive-bg">

          <div className="tile-title">
<div className="tile-brand">
  <img
    className="product-logo"
    src={logo}
    alt="Rockstar Logo"
  />

  <span className="tile-brand-divider"></span>

  <h3 className="tile-title-h3">ROCKFIX</h3>
</div>
            <h2>Tile Adhesives</h2>
          </div>

          {/* Tile Adhesive Products */}
          <div className="tile-products">

            {/* Product 1 */}
            <div className="tile-product-item">
              <div className="tile-product-image">
                <img
                  src={RockfixHeroimg}
                  alt="Rockfix T100 Tile Adhesive"
                />
              </div>

              <h4>ROCKFIX T100</h4>
              <p>Tile Adhesive</p>
            </div>

            {/* Product 2 */}
            <div className="tile-product-item">
              <div className="tile-product-image">
                <img
                  src={RockfixHeroimg2}
                  alt="Rockfix T200 Tile Adhesive"
                />
              </div>

              <h4>ROCKFIX T200</h4>
              <p>Tile Adhesive</p>
            </div>

            {/* Product 3 */}
            <div className="tile-product-item">
              <div className="tile-product-image">
                <img
                  src={RockfixHeroimg3}
                  alt="Rockfix T300 Tile Adhesive"
                />
              </div>

              <h4>ROCKFIX T300</h4>
              <p>Tile Adhesive</p>
            </div>

          </div>
        </div>

        {/* Caption */}
        <div className="tile-adhesive-caption">
          Advanced Tile Adhesives For Strong Bonding, Lasting Durability, And Perfect Finishes
        </div>

      </section>

      {/* Key Benefits */}
      <KeyBenefits product="tileAdhesive" />

      {/* Hero */}
      <RockfixHero />
    </>
  );
};

export default TileAdhesive;

