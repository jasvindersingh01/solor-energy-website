import { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
