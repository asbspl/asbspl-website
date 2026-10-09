import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsSlider.css";

import product1 from "../../assets/bjm.png";
import product2 from "../../assets/t100.png";
import product3 from "../../assets/t200.png";
import product6 from "../../assets/plaster.png";
import product4 from "../../assets/plaster-river-sand.png";
import product5 from "../../assets/bonding-agent.png";
import product7 from "../../assets/hackoplast-straight.png";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  alt: string;
  route: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Block Jointing Mortar",
    category: "Block Jointing Mortar",
    image: product1,
    alt: "High-performance Block Jointing Mortar",
    route: "/products/BJM",
  },

  {
    id: 2,
    name: "Rockfix T100",
    category: "Tile Adhesives",
    image: product2,
    alt: "High-strength adhesives for durable tile fixing",
    route: "/products/TileAdhesive",
  },
  {
    id: 3,
    name: "Rockfix T200",
    category: "Tile Adhesives",
    image: product3,
    alt: "High-strength adhesives for durable tile fixing",
    route: "/products/TileAdhesive",
  },
  {
    id: 4,
    name: "Rockfix T300",
    category: "Tile Adhesives",
    image: product4,
    alt: "High-strength adhesives for durable tile fixing",
    route: "/products/TileAdhesive",
  },
  {
    id: 5,
    name: "Bonding Agent",
    category: "Premix Plaster",
    image: product5,
    alt: "High-Performance Ready Mix Plaster",
    route: "/products/PREMIXPlaster",
  },
  {
    id: 6,
    name: "Premix Plaster",
    category: "Premix Plaster",
    image: product6,
    alt: "High-Performance Ready Mix Plaster",
    route: "/products/PREMIXPlaster",
  },
  {
    id: 7,
    name: "Hackoplast Straight",
    category: "Hacking Agent",
    image: product7,
    alt: "Hackoplast Straight Hacking Agent",
    route: "/products/HackingAgent",
  },
];

const ProductsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === products.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset: number): number => {
    return (activeIndex + offset + products.length) % products.length;
  };

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? products.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current === products.length - 1 ? 0 : current + 1
    );
  };

  const positions = [-2, -1, 0, 1, 2];

  return (
    <section
      className="products-slider"
      aria-labelledby="products-slider-title"
    >
      <div className="container">

        <div className="products-slider-heading text-center">
          <h2 id="products-slider-title">
            Rockstar Products
          </h2>
        </div>

        <div className="products-slider-wrapper">

          <button
            type="button"
            className="products-slider-arrow products-slider-prev"
            onClick={handlePrevious}
            aria-label="Previous product"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="products-slider-track">

            {positions.map((offset) => {
              const product = products[getIndex(offset)];

              return (
                <div
                  key={product.id}
                  className={`products-slide position-${offset}`}
                >
                  <Link
                    to={product.route}
                    className="products-slide-link"
                    aria-label={`View ${product.name}`}
                  >
                    <div className="products-slide-image">
                      <img
                        src={product.image}
                        alt={product.alt}
                        loading={offset === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}

          </div>

          <button
            type="button"
            className="products-slider-arrow products-slider-next"
            onClick={handleNext}
            aria-label="Next product"
          >
            <span aria-hidden="true">›</span>
          </button>

        </div>

        <div className="products-slider-info">
          <Link
            to={products[activeIndex].route}
            className="products-slider-info-link"
          >
            <h3>{products[activeIndex].name}</h3>
            <p>{products[activeIndex].category}</p>
          </Link>
        </div>

        <div
          className="products-slider-dots"
          role="tablist"
          aria-label="Product navigation"
        >
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              role="tab"
              className={`products-slider-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${product.name}`}
              aria-selected={index === activeIndex}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSlider;