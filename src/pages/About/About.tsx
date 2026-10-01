import "./About.css";
import AboutRockstar from "../../components/AboutRockstar/AboutRockstar";
import Services from "../../components/Services/Services";
import Offering from "../../components/Offering/Offering"
import CounterSection from "../../components/CounterSection/CounterSection";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const About = () => {
  return (
<section>
     <AboutRockstar/>
     <Services/>
     <Offering/>
     <CounterSection/>
     <WhyChooseUs/>
</section>
  );
};

export default About;
