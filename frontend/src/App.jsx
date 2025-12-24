import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";  
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

//services page
import OnGrid from "./pages/services/OnGrid";
import OffGrid from "./pages/services/OffGrid";
import Hybrid from "./pages/services/Hybrid";
import WaterHeater from "./pages/services/WaterHeater";
import Pump from "./pages/services/Pump";
import StreetLight from "./pages/services/StreetLight";

export default function App() {
  return (
    <>
      <ScrollToTop />
    <div className="pt-[45px]">
      <TopBar />
      </div>
      <div className="mt-10">
  <Navbar />
</div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/services/on-grid" element={<OnGrid />} />
        <Route path="/services/off-grid" element={<OffGrid />} />
        <Route path="/services/hybrid" element={<Hybrid />} />
        <Route path="/services/water-heater" element={<WaterHeater />} />
        <Route path="/services/pump" element={<Pump />} />
        <Route path="/services/street-light" element={<StreetLight />} />

      </Routes>

      <Footer />
    </>
  );
}
