import { motion } from "framer-motion";
import { 
  FaCertificate, 
  FaTools, 
  FaRupeeSign, 
  FaBolt, 
  FaUsers, 
  FaShieldAlt 
} from "react-icons/fa";

const features = [
  {
    icon: <FaCertificate size={35} className="text-blue-600" />,
    title: "Govt. Subsidy Support",
    desc: "Get assistance in claiming up to ₹78,000 subsidy under government schemes.",
  },
  {
    icon: <FaTools size={35} className="text-yellow-600" />,
    title: "Certified Installation Team",
    desc: "Experienced engineers ensuring safe, high-quality and reliable installation.",
  },
  {
    icon: <FaBolt size={35} className="text-orange-600" />,
    title: "High-Efficiency Systems",
    desc: "Premium panels and inverters designed for maximum energy generation.",
  },
  {
    icon: <FaRupeeSign size={35} className="text-green-600" />,
    title: "Affordable Pricing",
    desc: "Best-quality solar solutions with transparent and cost-effective pricing.",
  },
  {
    icon: <FaShieldAlt size={35} className="text-red-600" />,
    title: "Warranty & After-Sales",
    desc: "Long-term warranty with reliable customer support and maintenance.",
  },
  {
    icon: <FaUsers size={35} className="text-purple-600" />,
    title: "Trusted by Many Families",
    desc: "Strong customer trust with growing installations across Kota & nearby areas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="py-20 bg-white scroll-mt-24">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-blue-700 mb-12"
      >
        Why Choose Us
      </motion.h2>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-xl 
                       border border-gray-200 text-center transition-all 
                       duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
