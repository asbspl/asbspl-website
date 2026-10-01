import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ProductHighlights from "../../components/ProductHighlights/ProductHighlights";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import ApplicationSectors from "../../components/ApplicationSectors/ApplicationSectors";
import QuoteSection from "../../components/QuoteSection/QuoteSection";

const Home = () => {
  return (
    <section>
      <Hero/>
      <ProductHighlights/>
      <ProductsSlider />
      <ApplicationSectors />
      <QuoteSection/>
    </section>
  );
};

export default Home;
