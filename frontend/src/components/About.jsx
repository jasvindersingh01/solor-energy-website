import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 scroll-mt-14 bg-gray-50">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-700 mb-14"
      >
        About Aster's Energy
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Solar"
            className="rounded-2xl shadow-lg w-full h-[50vh] object-cover object-bottom"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 flex flex-col justify-center"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Aster's Energy is Kota’s trusted name for on-grid, off-grid and
            hybrid rooftop solar systems. With certified engineers, premium
            solar brands and reliable installation service, we help homes and
            businesses save money while switching to clean energy.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center">

            <div className="bg-white shadow-md p-4 rounded-xl border">
              <p className="text-2xl font-bold text-blue-700">500+</p>
              <p className="text-gray-600 text-sm">Installations</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl border">
              <p className="text-2xl font-bold text-blue-700">10+ yrs</p>
              <p className="text-gray-600 text-sm">Experience</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl border">
              <p className="text-2xl font-bold text-blue-700">80%+</p>
              <p className="text-gray-600 text-sm">Savings</p>
            </div>

          </div>

          <Link
            to="/about"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition w-max"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
