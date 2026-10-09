import React from "react";
import "./ProductCompound.css";


export interface ProductCompoundProps {
  title: string;

  productImage: string;

  productName: string;

  heading: string;

  description: string;

  points: string[];


  reverse?: boolean;

  backgroundImage?: string;

  className?: string;
}

const ProductCompound: React.FC<ProductCompoundProps> = ({
  title,
  productImage,
  productName,
  heading,
  description,
  points,
  reverse = false,
  backgroundImage,
  className = "",
}) => {
  return (
    <section
      className={`product-compound ${reverse ? "product-compound-reverse" : ""} ${className}`}
    >
      {/* Product Title */}
      <div className="product-compound-title">
        <h2>{title}</h2>
      </div>

      {/* Main Product Banner */}
      <div
        className="product-compound-banner"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
        }}
      >
        <div className="product-compound-overlay">
          <div className="container">
            <div className="row align-items-center">
              {/* Product Bag */}
              <div className="col-12 col-md-4 col-lg-3">
                <div className="product-image-wrapper">
                  <img
                    src={productImage}
                    alt={productName}
                    className="product-bag-image"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="col-12 col-md-8 col-lg-9">
                <div className="product-content">
                  <h2>{heading}</h2>

                  <p className="product-description">
                    {description}
                  </p>

                  <ul className="product-points">
                    {points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}

    </section>
  );
};

export default ProductCompound;