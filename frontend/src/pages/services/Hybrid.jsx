import { motion } from "framer-motion";
import hybrid from "../../assets/services/hybrid.webp";
import banner from "../../assets/banners/banner2.jpg";

export default function Hybrid() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Hybrid Solar System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-6">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Hybrid Solar System
            </h1>
            <p className="text-gray-200 mt-3 max-w-xl">
              Smart solar solution that combines grid power and battery backup
              for uninterrupted electricity.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            What is a Hybrid Solar System?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A Hybrid Solar System combines the benefits of both On-Grid and
            Off-Grid solar systems. It is connected to the electricity grid
            while also storing energy in batteries, ensuring continuous power
            even during outages.
          </p>
        </motion.div>

        {/* HOW IT WORKS (DIFFERENT LAYOUT) */}
        <div className="grid md:grid-cols-2 gap-16 mt-20 items-center">
          
          {/* STEPS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              How Hybrid Solar Works
            </h3>

            <ol className="space-y-6 text-gray-700">
              <li>
                <strong>1. Daytime Power:</strong> Solar panels supply electricity
                to your home and charge the batteries simultaneously.
              </li>
              <li>
                <strong>2. Battery Backup:</strong> Excess solar energy is stored
                for use during night-time or power cuts.
              </li>
              <li>
                <strong>3. Grid Support:</strong> When solar and battery are
                insufficient, electricity is automatically taken from the grid.
              </li>
              <li>
                <strong>4. Net Metering:</strong> Extra power can be exported to
                the grid to reduce electricity bills (where applicable).
              </li>
            </ol>
          </motion.div>

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={hybrid}
            alt="Hybrid Solar System"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* COMPARISON SECTION */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-14">
            Hybrid vs On-Grid vs Off-Grid
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-4">On-Grid</h4>
              <p className="text-gray-600">
                Best for bill savings but does not provide backup during power
                cuts.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                Hybrid
              </h4>
              <p className="text-gray-700 font-medium">
                Offers both bill reduction and battery backup — the smartest
                solar solution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-4">Off-Grid</h4>
              <p className="text-gray-600">
                Completely independent from the grid but higher battery cost.
              </p>
            </div>
          </div>
        </div>

        {/* IDEAL FOR */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Ideal For
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Homes with Frequent Power Cuts",
              "Shops & Offices",
              "Hospitals & Clinics",
              "Smart Homes & Villas",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 px-10 py-4 text-lg font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Get Hybrid Solar System Consultation
          </a>

          <p className="mt-4 text-gray-600">
            We design hybrid systems based on your power usage and backup needs.
          </p>
        </div>
      </div>
    </>
  );
}
