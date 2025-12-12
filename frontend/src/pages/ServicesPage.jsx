import { motion } from "framer-motion";
import ongrid from "../assets/services/ongrid.webp";
import offgrid from "../assets/services/offgrid.avif";
import hybrid from "../assets/services/hybrid.webp";
import heater from "../assets/services/heater.jpg";
import pump from "../assets/services/pump.png";
import street from "../assets/services/street.jpg";
import banner from "../assets/banners/banner2.jpg"

export default function ServicesPage() {
  const services = [
    {
      title: "On-Grid Solar System",
      image: ongrid,
      desc: "On-grid systems work directly with electricity grid and reduce monthly power bills.",
      details:
        "On-grid solar systems are best for homes & businesses with stable grid availability. They use net metering to send excess power back to the grid."
    },
    {
      title: "Off-Grid Solar System",
      image: offgrid,
      desc: "Off-grid systems operate independently using batteries.",
      details:
        "Perfect for remote areas with no electricity. Includes inverter, charge controller, and battery bank."
    },
    {
      title: "Hybrid Solar System",
      image: hybrid,
      desc: "Combines On-grid + Off-grid for maximum efficiency.",
      details:
        "Hybrid systems offer both battery backup and net metering benefits. Ideal for homes wanting zero power cuts."
    },
    {
      title: "Solar Water Heater",
      image: heater,
      desc: "Heats water using solar energy, works in all seasons.",
      details:
        "Reduces geyser electricity usage by 70–90%. Available in ETC and FPC technology."
    },
    {
      title: "Solar Submersible Pump",
      image: pump,
      desc: "Used for agriculture and borewell pumping.",
      details:
        "Available from 0.5 HP to 10 HP. No electricity needed, completely solar-powered."
    },
    {
      title: "Solar Street Light",
      image: street,
      desc: "Automatic dusk-to-dawn LED lights.",
      details:
        "Lithium battery, motion sensor, waterproof IP65 design. Perfect for parks, roads, farms."
    },
  ];

  return (
    <>
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Solar Banner"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute inset-0 flex items-center justify-start pl-20 pt-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Solar Services
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-28">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Solar Services
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border overflow-hidden"
            >
              <img src={s.image} className="w-full h-80 object-cover" />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>

                <p className="text-gray-600 mb-4">{s.desc}</p>

                <p className="text-gray-800 leading-relaxed">{s.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
