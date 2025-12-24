import { motion } from "framer-motion";
import pump from "../../assets/services/pump.png";
import banner from "../../assets/banners/banner2.jpg";

export default function Pump() {
  return (
    <>
      {/* HERO */}
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Solar Pump"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-6">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Solar Pump
            </h1>
            <p className="text-gray-200 mt-3 max-w-xl">
              Reliable solar-powered water pumping solution for agriculture and
              irrigation.
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
            What is a Solar Pump?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A Solar Pump uses solar energy to pump water from borewells, rivers,
            or ponds without the need for electricity or diesel. It is an ideal
            solution for farmers looking for a cost-effective and sustainable
            irrigation system.
          </p>
        </motion.div>

        {/* FEATURES — DIFFERENT LAYOUT (3 COLUMN) */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            {
              title: "No Electricity Required",
              desc: "Operates completely on solar power, eliminating dependency on grid electricity.",
            },
            {
              title: "Low Running Cost",
              desc: "No fuel or electricity bills, resulting in long-term savings.",
            },
            {
              title: "Durable & Reliable",
              desc: "Designed for harsh outdoor conditions with minimal maintenance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE + DETAILS (REVERSED LAYOUT) */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Solar Pump?
            </h3>

            <p className="text-gray-700 mb-4">
              Solar pumps provide a reliable water supply during daylight hours
              and are best suited for agricultural irrigation, livestock
              watering, and rural water supply.
            </p>

            <p className="text-gray-700 mb-6">
              Available in submersible and surface pump models, solar pumps can
              be customized based on water depth, discharge requirements, and
              land size.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Available from 0.5 HP to 10 HP capacity</li>
              <li>✔ Works without fuel or electricity</li>
              <li>✔ Reduces farming operational costs</li>
              <li>✔ Environment-friendly irrigation solution</li>
            </ul>
          </motion.div>

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={pump}
            alt="Solar Pump System"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* APPLICATIONS */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Ideal Applications
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              "Agricultural Irrigation",
              "Borewell Pumping",
              "Drip & Sprinkler Systems",
              "Livestock Water Supply",
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
            Get Solar Pump Price & Details
          </a>

          <p className="mt-4 text-gray-600">
            We help you select the right pump capacity based on water depth and
            land area.
          </p>
        </div>
      </div>
    </>
  );
}
