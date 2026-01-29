import { motion } from "framer-motion";
import offgrid from "../../assets/services/offgrid.avif";
import banner from "../../assets/banners/banner2.jpg";
import useSEO from "../../hooks/useSEO";

export default function OffGrid() {

  useSEO({
    title: "Off-Grid Solar System in Kota | Battery Based Solar",
    description:
      "Off-grid solar systems for areas without electricity. Aster's Energy provides reliable battery-based solar solutions in Kota, Rajasthan."
  });

  return (
    <>
      {/* HERO */}
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Off Grid Solar System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Off-Grid Solar System
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl">
            Complete solar power solution for locations without electricity
            grid access.
          </p>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            What is an Off-Grid Solar System?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            An Off-Grid Solar System operates independently without any
            connection to the government electricity grid. It stores solar
            energy in batteries, allowing you to use electricity day and night
            even in remote areas.
          </p>
        </motion.div>

        {/* IMAGE + FEATURES */}
        <div className="grid md:grid-cols-3 gap-10 mt-20 items-start">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <img
              src={offgrid}
              alt="Off Grid Solar"
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-4">
              How Off-Grid Solar Works
            </h3>

            <p className="text-gray-700 mb-4">
              During the daytime, solar panels generate electricity which is
              used to power appliances and simultaneously charge the batteries.
              At night or during cloudy conditions, the stored battery energy
              supplies power to your home or facility.
            </p>

            <p className="text-gray-700 mb-6">
              This system is ideal for villages, farms, hills, construction
              sites, and remote locations where grid electricity is unavailable
              or unreliable.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Complete power independence</li>
              <li>✔ Battery backup for night usage</li>
              <li>✔ Works without government grid</li>
              <li>✔ Reliable in power-cut areas</li>
              <li>✔ Custom capacity as per usage</li>
              <li>✔ Eco-friendly energy source</li>
            </ul>
          </motion.div>
        </div>

        {/* APPLICATIONS */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Where Off-Grid Solar is Best Used
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Remote Villages",
              "Agricultural Farms",
              "Construction Sites",
              "Hilly & Forest Areas",
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
            Get Off-Grid Solar Price & Explaination
          </a>

          <p className="mt-4 text-gray-600">
            Our team will calculate battery capacity and system size as per your
            requirement.
          </p>
        </div>
      </div>
    </>
  );
}
