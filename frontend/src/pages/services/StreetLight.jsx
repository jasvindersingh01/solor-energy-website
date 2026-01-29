import { motion } from "framer-motion";
import street from "../../assets/services/street.jpg";
import banner from "../../assets/banners/banner2.jpg";
import useSEO from "../../hooks/useSEO";

export default function StreetLight() {

  useSEO({
    title: "Solar Street Light Installation in Kota",
    description:
      "Automatic solar street lights for roads, societies & villages. Reliable dusk-to-dawn solar lighting solutions by Aster's Energy."
  });

  return (
    <>
      {/* HERO */}
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Solar Street Light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6 pt-6">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Solar Street Light
            </h1>
            <p className="text-gray-200 mt-3 max-w-xl">
              Standalone solar lighting solution for roads, parks, and public
              spaces.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            What is a Solar Street Light?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A Solar Street Light is a standalone lighting system that operates
            independently using solar energy. It automatically charges during
            the day and provides bright LED illumination at night without
            requiring grid electricity.
          </p>
        </motion.div>

        {/* IMAGE + FEATURES (LEFT IMAGE LAYOUT) */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={street}
            alt="Solar Street Light System"
            className="rounded-xl shadow-lg"
          />

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Key Features
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Automatic dusk-to-dawn operation</li>
              <li>✔ High-efficiency LED lighting</li>
              <li>✔ Lithium battery with long backup</li>
              <li>✔ No trenching or wiring required</li>
              <li>✔ Weatherproof and durable design</li>
              <li>✔ Low maintenance and long lifespan</li>
            </ul>
          </motion.div>
        </div>

        {/* APPLICATIONS — GRID CARDS */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Ideal Applications
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              "Roads & Highways",
              "Parks & Gardens",
              "Villages & Rural Areas",
              "Campuses & Parking Areas",
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

        {/* WHY SOLAR STREET LIGHT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Solar Street Lighting?
            </h3>

            <p className="text-gray-700 mb-4">
              Solar street lights eliminate electricity costs and reduce
              dependency on conventional power sources. They are ideal for
              government projects and infrastructure development in both urban
              and rural areas.
            </p>

            <p className="text-gray-700 mb-6">
              These systems work reliably even in remote locations and continue
              to operate during power outages, ensuring safety and visibility
              at all times.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Zero electricity bill</li>
              <li>✔ Easy installation without cables</li>
              <li>✔ Suitable for government & private projects</li>
              <li>✔ Eco-friendly public lighting solution</li>
            </ul>
          </motion.div>

          {/* IMAGE SMALL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={street}
              alt="Solar LED Street Light"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 px-10 py-4 text-lg font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Get Solar Street Light Proposal
          </a>

          <p className="mt-4 text-gray-600">
            We provide customized solar street lighting solutions for all types
            of projects.
          </p>
        </div>
      </div>
    </>
  );
}
