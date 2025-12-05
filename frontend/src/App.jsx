import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <>
    <div className="pt-[45px]">
      <TopBar />
      </div>
      <div className="mt-10">
  <Navbar />
</div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </>
  );
}
