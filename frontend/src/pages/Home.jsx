import { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import About from "../components/About";
import ContactSection from "../components/ContactSection";
import useSEO from "../hooks/useSEO";


export default function Home() {

  useSEO({
  title: "Aster's Energy | Best Solar Company in Kota Rajasthan",
  description:
    "Aster's Energy offers rooftop solar solutions in Kota, Rajasthan. On-grid, off-grid & hybrid solar systems with government subsidy support. Save money with clean solar energy."
});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <ContactSection />
    </>
  );
}
