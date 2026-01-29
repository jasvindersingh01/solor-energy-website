import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ctaBg from "../assets/banners/banner1.jpg";

export default function ContactSection() {
  return (
    <section className="relative w-full h-[300px] md:h-[430px] mt-20">
      
      {/* Background Image */}
      <img
        src={ctaBg}
        alt="Contact Us"
        className="absolute inset-0 w-full h-full object-bottom"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Switch to Solar?
        </h2>

        <p className="text-gray-200 max-w-2xl mb-6">
          Get expert guidance, government subsidy support and cost-effective
          solar solutions tailored for your home or business.
        </p>

        <Link
          to="/contact"
          className="bg-yellow-400 text-black px-8 py-3 rounded-lg 
                     font-semibold hover:bg-yellow-500 transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
