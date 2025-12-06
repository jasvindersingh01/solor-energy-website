import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaBolt,
  FaSun,
  FaWater,
  FaLightbulb,
} from "react-icons/fa";

import ongrid from "../assets/services/ongrid.webp";
import offgrid from "../assets/services/offgrid.avif";
import hybrid from "../assets/services/hybrid.webp";
import heater from "../assets/services/heater.jpg";
import pump from "../assets/services/pump.png";
import street from "../assets/services/street.jpg";

const services = [
  {
    title: "On-Grid Solar System",
    icon: <FaSolarPanel size={26} className="text-blue-600" />,
    image: ongrid,
    desc: "Reduce electricity bills with grid-connected solar systems.",
  },
  {
    title: "Off-Grid Solar System",
    icon: <FaBolt size={26} className="text-yellow-500" />,
    image: offgrid,
    desc: "Works without electricity supply using batteries.",
  },
  {
    title: "Hybrid Solar System",
    icon: <FaSun size={26} className="text-orange-600" />,
    image: hybrid,
    desc: "Combination of on-grid + off-grid for maximum performance.",
  },
  {
    title: "Solar Water Heater",
    icon: <FaWater size={26} className="text-blue-500" />,
    image: heater,
    desc: "Efficient solar water heating solutions for all seasons.",
  },
  {
    title: "Solar Submersible Pump",
    icon: <FaBolt size={26} className="text-green-600" />,
    image: pump,
    desc: "Best for agriculture, borewells — with zero electricity cost.",
  },
  {
    title: "Solar Street Light",
    icon: <FaLightbulb size={26} className="text-yellow-600" />,
    image: street,
    desc: "Automatic dusk-to-dawn LED street lights for all locations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 scroll-mt-14">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-blue-700 mb-12"
      >
        Our Services
      </motion.h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden
                       transition-all duration-300 hover:-translate-y-2 border"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
       <Link
  to="/services"
  className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
>
  View Full Services →
</Link>
      </div>
    </section>
  );
}
