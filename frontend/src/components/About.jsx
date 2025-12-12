import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpg";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section id="about" className="py-16  scroll-mt-14">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-700 mb-8"
      >
        About Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center px-6 space-y-6"
      >
        <p className="text-gray-700 leading-relaxed text-lg">
          Aster's Energy delivers high-efficiency rooftop solar solutions for
          homes & businesses across Kota. With certified engineers and reliable
          installation processes, we help you save big on electricity bills with
          clean, renewable energy.
        </p>

        <Link
  to="/about"
  className="text-blue-700 font-semibold hover:underline hover:text-blue-900 transition"
>
  Learn More →
</Link>

      </motion.div>

    </section>
  );
}
