import "./PREMIXPlaster.css";
import KeyBenefits from "../../components/KeyBenefits/KeyBenefits"
import WhereToUse from "../../components/WhereToUse/WhereToUse"
import Premiximg from "../../assets/Premix-bread.png";
import ProductCompound from "../../components/ProductCompound/ProductCompound";
import msandBag from "../../assets/productImage1.png"
import riverSandBag from "../../assets/productImage2.png"
import brickWall from "../../assets/brickWall.png"
import Precautions from "../../components/Precautions/Precautions";
import ApplicationProcess from "../../components/ApplicationProcess/ApplicationProcess";

const PREMIXPlaster = () => {
  return (
    <section>
      <div>
              <div className="Premix-bg">
        <div className="tile-title">
                   <h2>Premix Plaster</h2>
        </div>

        <img
          className="tile-products"
          src={Premiximg}
          alt="Rockfix Tile Adhesives" />
      </div>

      <div className="tile-adhesive-caption">
        High-Performance Ready Mix Plaster for Smooth, Strong & Durable Finish
      </div>
      </div>
      <div>
        <KeyBenefits product="PREMIXPlaster" />
      </div>
      <div>
              <ProductCompound
        title="M SAND"
        productImage={msandBag}
        productName="M Sand Plaster"
        heading="Engineered for Consistent Performance"
        description="M-Sand Based Plaster"
        points={[
          "Better for controlled, uniform finish",
          "Ideal for modern construction & large projects",
          "Consistent output, factory processed",
          "Consistent Mix • Strong Bond • Fast Application",
        ]}
        coverage="18–22 sq.ft./mm"
        use="Wall Plaster"
        time="90–120 min"
        pack="40 kg"
        backgroundImage={brickWall}
      />
      </div>
      <div>
              {/* RIVER SAND */}
      <ProductCompound
        title="RIVER SAND"
        productImage={riverSandBag}
        productName="River Sand Plaster"
        heading="Natural Workability. Trusted Results."
        description="River Sand Based Plaster"
        points={[
          "Better for traditional applications",
          "Slightly smoother natural workability",
          "Preferred in smaller or conventional projects",
          "Easy Workability • Smooth Finish • Natural Feel",
        ]}
        coverage="16–20 sq.ft./mm"
        use="Wall Plaster"
        time="90–120 min"
        pack="40 kg"
        backgroundImage={brickWall}
      />
      </div>
      <div>
        <WhereToUse product="premixPlaster" />
      </div>
        <div>
        <Precautions page="page2" />
      </div>
          <div>
        <ApplicationProcess product="premixplasters" />
      </div>
    </section>
  );
};

export default PREMIXPlaster;
