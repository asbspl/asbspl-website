import "./ProductHighlights.css";
import highlightimg from "../../assets/highlight-img-about.png";

interface HighlightItem {
  title: string;
  description: string;
  icon: string;
}

interface ProductHighlightsData {
  title: string;
  companyName: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: HighlightItem[];
  coreValue: string;
}

/*
 * Calculate completed years of service.
 * Company start date: 1 August 2001
 */
const getYearsOfService = (startDate: Date): number => {
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();

  const anniversaryThisYear = new Date(
    today.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  if (today < anniversaryThisYear) {
    years--;
  }

  return years;
};

const yearsOfService = getYearsOfService(
  new Date(2001, 7, 1)
);

const productHighlightsData: ProductHighlightsData = {
  title: "Rockstar®",

  companyName: "Rockstar® by A S Building Solutions Pvt Ltd",

  description:
    "An ISO 9001:2015 certified company delivering advanced dry-mix construction materials designed for strength, durability, and efficient building practices.",

  image: highlightimg,

  imageAlt:
    "Rockstar advanced dry-mix construction materials by A S Building Solutions Pvt Ltd",

  highlights: [
    {
      title: `Serving ${yearsOfService} Years`,
      icon: `${yearsOfService}`,
      description: `We have been delivering our products to our customers for ${yearsOfService} years, with a strong focus on quality, reliability, and customer satisfaction.`,
    },
    {
      title: "The Largest Goal",
      icon: "★",
      description:
        "Our main goal is to consistently explore pioneering ways to bring paramount value to our customers and set benchmarks in product quality, services, and customer satisfaction.",
    },
  ],

  coreValue: "DEDICATION TO EXCELLENCE",
};

const ProductHighlights = () => {
  return (
    <section
      className="product-highlights"
      aria-labelledby="product-highlights-title"
    >
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">

          {/* Image Column */}
          <div className="col-12 col-lg-6">
            <figure className="product-highlights-image">
              <img
                src={productHighlightsData.image}
                alt={productHighlightsData.imageAlt}
                width="800"
                height="700"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          {/* Content Column */}
          <div className="col-12 col-lg-6">
            <div className="product-highlights-content">

              {/* Rockstar Heading */}
              <h2 id="product-highlights-title">
                Rockstar
                <sup className="registered-symbol">®</sup>
              </h2>

              {/* Company Name */}
              <h3>
                Rockstar
                <sup className="registered-symbol">®</sup>{" "}
                by A S Building Solutions Pvt Ltd
              </h3>

              <p className="product-intro">
                {productHighlightsData.description}
              </p>

              {/* Highlights */}
              <div className="highlights-list">
                {productHighlightsData.highlights.map(
                  (highlight) => (
                    <article
                      className="highlight-item"
                      key={highlight.title}
                    >
                      <div className="highlight-content">
                        <h4>{highlight.title}</h4>
                        <p>{highlight.description}</p>
                      </div>
                    </article>
                  )
                )}
              </div>

              {/* Core Value */}
              <aside className="core-value">
                <span>Our Core Value</span>
                <strong>
                  "{productHighlightsData.coreValue}"
                </strong>
              </aside>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;