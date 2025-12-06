import { motion } from "framer-motion";
import heroImg from "../assets/heroimg2.jpg";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[89vh] flex items-center justify-center"
    >
     
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight pt-24">
          Switch to{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Solar
          </span>{" "}
          & Save Big with{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Govt Subsidy
          </span>
        </h1>

        <p className="text-gray-200 mt-6 text-lg md:text-2xl">
         Reliable rooftop solar systems designed 
          <br />
         for maximum efficiency and long-term savings.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block bg-yellow-400 px-8 py-3 rounded-md text-lg font-semibold text-black hover:bg-yellow-500 shadow-lg transition"
        >
          Get A Quote
        </Link>
      </motion.div>
    </section>
  );
}
