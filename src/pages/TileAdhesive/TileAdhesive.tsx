import "./TileAdhesive.css";
import TileAdhesiveimg from "../../assets/TileAdhesive-bread.png";


import RockfixHero from "../../components/RockfixHero/RockfixHero";
import KeyBenefits from "../../components/KeyBenefits/KeyBenefits";

const TileAdhesive = () => {


  return (
    <><section className="tile-adhesive">
      {/* Product Banner */}
      <div className="TileAdhesive-bg">
        <div className="tile-title">
          <h3>ROCKFIX</h3>
          <h2>Tile Adhesives</h2>
        </div>

        <img
          className="tile-products"
          src={TileAdhesiveimg}
          alt="Rockfix Tile Adhesives" />
      </div>

      <div className="tile-adhesive-caption">
        High-strength adhesives for durable tile fixing
      </div>

      {/* Key Benefits */}
      <div>

      </div>
    </section>
      <KeyBenefits product="tileAdhesive" />
    <RockfixHero />
    </>
  );
};

export default TileAdhesive;
