import { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import About from "../components/About";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
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
          <a
      href="https://wa.me/919351055571"
      target="_blank"
      className="
        fixed 
        bottom-6 
        right-6
        bg-green-500 
        text-white 
        rounded-full 
        p-4 
        shadow-lg 
        z-[9999]
        hover:bg-green-600 
        transition 
        transform 
        hover:scale-110
      "
    >
      <FaWhatsapp size={28} />
    </a>
    </>
  );
}
