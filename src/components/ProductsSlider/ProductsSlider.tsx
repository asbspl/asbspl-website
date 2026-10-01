import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsSlider.css";

import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product-1.png";
import product5 from "../../assets/product-2.png";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Rockstar Bonding Agent",
    category: "Bonding Agent",
    image: product1,
    alt: "Rockstar Bonding Agent",
  },
  {
    id: 2,
    name: "Rockstar Bonding Agent",
    category: "Bonding Agent",
    image: product2,
    alt: "Rockstar Bonding Agent construction material",
  },
  {
    id: 3,
    name: "Rockstar Block Jointing Mortar",
    category: "Block Jointing Mortar",
    image: product3,
    alt: "Rockstar Block Jointing Mortar",
  },
  {
    id: 4,
    name: "Rockstar Construction Material",
    category: "Construction Material",
    image: product4,
    alt: "Rockstar construction material",
  },
  {
    id: 5,
    name: "Rockstar Construction Mix",
    category: "Construction Mix",
    image: product5,
    alt: "Rockstar construction mix",
  },
];

const ProductsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  /*
   * Automatically rotate products
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === products.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Get product index based on position
   */
  const getIndex = (offset: number): number => {
    return (
      (activeIndex + offset + products.length) %
      products.length
    );
  };

  /*
   * Previous
   */
  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? products.length - 1 : current - 1
    );
  };

  /*
   * Next
   */
  const handleNext = () => {
    setActiveIndex((current) =>
      current === products.length - 1 ? 0 : current + 1
    );
  };

  /*
   * Five positions around the center
   */
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
                    to={`/products/${product.id}`}
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
            to={`/products/${products[activeIndex].id}`}
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
