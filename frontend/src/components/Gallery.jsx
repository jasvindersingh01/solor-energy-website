import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.avif";

const images = [g1, g2, g3];

export default function Gallery() {
  return (
    <section id="projects" className="py-14 bg-gray-100 scroll-mt-18">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-blue-700 mb-12"
      >
        Our Solar Installations
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
      >
        A glimpse of our recent solar panel installations — delivering energy
        savings and clean power to homes & businesses across Kota.
      </motion.p>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 px-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={img}
              className="w-full h-48 md:h-65 object-cover hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition"
        >
          View All Projects
        </Link>
      </div>

    </section>
  );
}
