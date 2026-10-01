import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Solutions from "../pages/Solutions/Solutions";
import Downloads from "../pages/Downloads/Downloads";
import Rewards from "../pages/Rewards/Rewards";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";

// Product pages
import TileAdhesive from "../pages/TileAdhesive/TileAdhesive";
import BJM from "../pages/BJM/BJM";
import PREMIXPlaster from "../pages/PREMIXPlaster/PREMIXPlaster";
import BondingAgent from "../pages/BondingAgent/BondingAgent";
import HackingAgent from "../pages/HackingAgent/HackingAgent";


const AppRoutes = () => {
  const { pathname } = useLocation();

  // Instantly scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Solutions" element={<Solutions />} />
      <Route
        path="/Technical-Data-Downloads"
        element={<Downloads />}
      />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/Careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />

      {/* Product Pages */}
      <Route
        path="/products/TileAdhesive"
        element={<TileAdhesive />}
      />

      <Route
        path="/products/BJM"
        element={<BJM />}
      />

      <Route
        path="/products/PREMIXPlaster"
        element={<PREMIXPlaster />}
      />

      <Route
        path="/products/BondingAgent"
        element={<BondingAgent />}
      />
            <Route
        path="/products/HackingAgent"
        element={<HackingAgent />}
      />
    </Routes>
  );
};

export default AppRoutes;
