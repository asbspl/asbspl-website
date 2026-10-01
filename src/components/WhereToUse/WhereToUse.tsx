import React from "react";
import "./WhereToUse.css";

import residentialflooring from "../../assets/WhereToUse1.png";
import bathroomwallfloor from "../../assets/WhereToUse2.png";
import balconyoutdoorarea from "../../assets/WhereToUse3.png";
import commercialinterior from "../../assets/WhereToUse4.png";

import largetiles from "../../assets/large-tiles.png";
import outdoorspace from "../../assets/outdoor-space.png";
import hightrafficarea from "../../assets/high-traffic-area.png";
import naturalstone from "../../assets/natural-stone.png";


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
  | "bondingAgent";



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
      title: "Residential Flooring",
      image: residentialflooring,
    },
    {
      title: "Bathroom Wall & Floor",
      image: bathroomwallfloor,
    },
    {
      title: "Balcony / Outdoor Area",
      image: balconyoutdoorarea,
    },
    {
      title: "Commercial Interior",
      image: commercialinterior,
    },
  ],


  /* =======================================================
     ROCKFIX 300
  ======================================================= */

  bondingAgent: [
    {
      title: "Large Format Tiles",
      image: largetiles,
    },
    {
      title: "Natural Stone Application",
      image: naturalstone,
    },
    {
      title: "High Traffic Commercial Area",
      image: hightrafficarea,
    },
    {
      title: "Indoor + Outdoor Space",
      image: outdoorspace,
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
