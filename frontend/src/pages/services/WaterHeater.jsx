import { motion } from "framer-motion";
import heater from "../../assets/services/heater.jpg";
import banner from "../../assets/banners/banner2.jpg";
import useSEO from "../../hooks/useSEO";

export default function WaterHeater() {

  useSEO({
    title: "Solar Water Heater in Kota | Aster's Energy",
    description:
      "Energy-efficient solar water heaters for homes & businesses in Kota. Reduce electricity bills with eco-friendly water heating solutions."
  });

  return (
    <>
      {/* HERO */}
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Solar Water Heater"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6 pt-6">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Solar Water Heater
            </h1>
            <p className="text-gray-200 mt-3 max-w-xl">
              Hot water solution powered by sunlight — no electricity required.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            What is a Solar Water Heater?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A Solar Water Heater uses sunlight to heat water for everyday use.
            It replaces electric or gas geysers, helping homes and businesses
            save energy while enjoying a reliable supply of hot water.
          </p>
        </motion.div>

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={heater}
            alt="Solar Water Heater System"
            className="rounded-xl shadow-lg"
          />

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              How It Works
            </h3>

            <p className="text-gray-700 mb-4">
              Solar collectors absorb sunlight and convert it into heat energy.
              This heat is transferred to water, which is stored in an insulated
              tank for later use.
            </p>

            <p className="text-gray-700 mb-6">
              The system works efficiently throughout the year and provides hot
              water even during cloudy weather.
            </p>

            <h4 className="text-xl font-semibold mb-3">
              Key Benefits
            </h4>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Saves up to 70–90% on electricity bills</li>
              <li>✔ No electricity or gas required</li>
              <li>✔ Low maintenance and long lifespan</li>
              <li>✔ Eco-friendly and pollution-free</li>
              <li>✔ Available in ETC and FPC models</li>
            </ul>
          </motion.div>
        </div>

        {/* APPLICATIONS */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Ideal Applications
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              "Homes & Apartments",
              "Hotels & Resorts",
              "Hospitals",
              "Hostels & PGs",
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
        <div className="mt-24 text-center">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 px-10 py-4 text-lg font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Get Solar Water Heater Quote
          </a>

          <p className="mt-4 text-gray-600">
            Our team will help you select the right capacity for your needs.
          </p>
        </div>
      </div>
    </>
  );
}
