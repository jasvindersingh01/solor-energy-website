import banner from "../../assets/banners/banner2.jpg";
import ongrid from "../../assets/services/ongrid.webp";
import { motion } from "framer-motion";
import useSEO from "../../hooks/useSEO";

export default function OnGrid() {

  useSEO({
    title: "On-Grid Solar System in Kota | Aster's Energy",
    description:
      "Install on-grid solar systems in Kota with Aster's Energy. Reduce electricity bills, net-metering benefits & government subsidy support."
  });

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="On Grid Solar System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            On-Grid Solar System
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl">
            Smart grid-connected solar solution that helps you save on electricity while using clean energy.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={ongrid}
            alt="On Grid Solar System"
            className="rounded-xl shadow-lg"
          />

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              What is an On-Grid Solar System?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              An On-Grid Solar System is a solar power solution that is directly
              connected to the government electricity grid. It allows you to generate
              your own electricity during daylight hours using solar panels installed
              on your rooftop or open area.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Any excess electricity produced by the solar system is exported back to
              the grid through a net meter, earning you credits that reduce your
              monthly electricity bill. At night or during low sunlight, power is
              automatically drawn from the grid without any interruption.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Since on-grid systems do not require batteries, they are more affordable,
              highly efficient, and require very low maintenance. This makes them an
              ideal choice for residential homes, commercial buildings, factories,
              schools, hospitals, and offices located in areas with a stable grid
              supply.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              Key Benefits of On-Grid Solar Systems
            </h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Reduce electricity bills by up to <strong>90%</strong></li>
              <li>Earn credits through government-approved net metering</li>
              <li>No battery requirement, resulting in lower installation cost</li>
              <li>High system efficiency with minimal energy loss</li>
              <li>Low maintenance and long system lifespan (25+ years)</li>
              <li>Eco-friendly solution that reduces carbon footprint</li>
            </ul>
          </motion.div>
        </div>

        {/* ADDITIONAL INFO SECTION */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-blue-700">
              Net Metering
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Net metering allows surplus solar energy to be exported to the grid.
              The exported units are adjusted against the electricity you consume,
              significantly lowering your power bills.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-blue-700">
              Ideal Applications
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Suitable for homes, offices, hospitals, schools, industries, and
              commercial buildings with continuous grid availability.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-blue-700">
              System Lifespan
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Solar panels have a lifespan of 25+ years, providing reliable energy
              generation and long-term savings on electricity costs.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 px-10 py-4 text-lg font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Get Free On-Grid Solar Consultation
          </a>

          <p className="mt-4 text-gray-600">
            Our experts will guide you on system size, subsidies, and installation
            process.
          </p>
        </div>
      </div>
    </>
  );
}
