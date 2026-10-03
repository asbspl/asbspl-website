import React from "react";
import "./WhereToUse.css";

import residentialflooring from "../../assets/WhereToUse1.png";
import bathroomwallfloor from "../../assets/WhereToUse2.png";
import balconyoutdoorarea from "../../assets/WhereToUse3.png";
import commercialinterior from "../../assets/WhereToUse4.png";

import WhereToUse9 from "../../assets/WhereToUse9.png";
import WhereToUse10 from "../../assets/WhereToUse10.png";
import WhereToUse11 from "../../assets/WhereToUse11.png";
import WhereToUse12 from "../../assets/WhereToUse12.png";

import exteriorwalls from "../../assets/exterior-walls.png";
import interiorwalls from "../../assets/interior-walls.png";
import aacblock from "../../assets/aac-block.png";
import largewall from "../../assets/large-wall.png";

import WhereToUse5 from "../../assets/WhereToUse5.png";
import WhereToUse6 from "../../assets/WhereToUse6.png";
import WhereToUse7 from "../../assets/WhereToUse7.png";
import WhereToUse8 from "../../assets/WhereToUse8.png";


/* =========================================================
   TYPES
========================================================= */

interface WhereToUseItem {
  title: string;
  image: string;
}

type WhereToUseProduct =
  | "bjm"
  | "premixPlaster"
  | "bondingAgent"
  | "hackingAgent";



interface WhereToUseProps {
  product: WhereToUseProduct;
}


/* =========================================================
   ALL WHERE TO USE DATA
========================================================= */

const whereToUseData: Record<
  WhereToUseProduct,
  WhereToUseItem[]
> = {

  /* =======================================================
     ROCKFIX 100
  ======================================================= */

  bjm: [
    {
      title: "Interior Floor Tiles",
      image: residentialflooring,
    },
    {
      title: "Dry Indoor Areas",
      image: bathroomwallfloor,
    },
    {
      title: "Small to Medium Size Tiles",
      image: balconyoutdoorarea,
    },
    {
      title: "Low Traffic Areas",
      image: commercialinterior,
    },
  ],


  /* =======================================================
     ROCKFIX 200
  ======================================================= */

  premixPlaster: [
    {
      title: "Exterior Walls",
      image: exteriorwalls,
    },
    {
      title: "Interior Walls ",
      image: interiorwalls,
    },
    {
      title: "AAC BLOCK WALL",
      image: aacblock,
    },
    {
      title: "LARGE SCALE WALL",
      image: largewall,
    },
  ],


  /* =======================================================
     ROCKFIX 300
  ======================================================= */

  bondingAgent: [
    {
      title: "RCC Walls & Ceilings",
      image: WhereToUse5,
    },
    {
      title: "Old Surface Renovation",
      image: WhereToUse6,
    },
    {
      title: "Gypsum Plaster Base",
      image: WhereToUse7,
    },
    {
      title: "Column & Beam Surfaces",
      image: WhereToUse8,
    },
  ],
  
    hackingAgent: [
    {
      title: "RCC Concrete Surfaces",
      image: WhereToUse9,
    },
    {
      title: "Block Masonry Wall",
      image: WhereToUse10,
    },
    {
      title: "Interior Wall",
      image: WhereToUse11,
    },
    {
      title: "Exterior Wall",
      image: WhereToUse12,
    },
  ],
  
};


/* =========================================================
   COMPONENT
========================================================= */

const WhereToUse: React.FC<WhereToUseProps> = ({
  product,
}) => {

  const items = whereToUseData[product];

  return (
    <section className="where-to-use">

      <div className="container-fluid">

        <h2 className="where-to-use-title">
          WHERE TO USE
        </h2>


        <div className="where-to-use-wrapper container">

          <div className="row g-5">

            {items.map((item, index) => (

              <div
                className="col-12 col-sm-6 col-lg-3"
                key={`${product}-${index}`}
              >

                <div className="use-card">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="use-card-image"
                  />


                  <div className="use-card-overlay">

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};


export default WhereToUse;
