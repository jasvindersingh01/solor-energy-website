import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import whychoose from "../assets/whychoose.avif"

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="py-20 bg-white scroll-mt-24">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-blue-700 mb-16"
      >
        Why Choose Us
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>
          <motion.ul
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-lg text-gray-700"
          >
            {[
              "Govt. Subsidy Support – up to ₹78,000 under govt schemes",
              "Certified Installation Team – safe & high-quality setup",
              "High-Efficiency Systems – maximum energy generation",
              "Affordable Pricing – transparent & cost-effective",
              "Warranty & After-Sales Support – long-term service",
              "Trusted by Many Families – strong customer trust in Kota",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-yellow-500 text-2xl" />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src={whychoose}
              alt="Solar Building"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
