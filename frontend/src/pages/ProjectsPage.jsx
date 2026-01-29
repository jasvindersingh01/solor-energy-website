import { motion } from "framer-motion";
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.avif";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.avif";
import banner from "../assets/banners/banner2.jpg"

import { useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa";
import useSEO from "../hooks/useSEO";

const images = [g1, g2, g3, g4, g5, g6];

export default function ProjectsPage() {

  useSEO({
  title: "Our Solar Projects in Kota | Aster's Energy",
  description:
    "Explore completed solar projects by Aster's Energy in Kota and nearby areas. Trusted rooftop solar installations for homes, businesses & industries."
});


  const [previewImg, setPreviewImg] = useState(null);

  return (
    <>
      <div className="w-full h-[25vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Solar Banner"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center pt-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Projects
          </h1>
        </div>
      </div>
      <section className="py-16 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-blue-700 mb-5"
        >
          All Solar Installations
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our complete collection of solar rooftop installations across
          Kota and nearby regions — residential, commercial & industrial.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative group cursor-pointer">
                {/* IMAGE */}
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-52 md:h-72 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div
                  onClick={() => setPreviewImg(img)}
                  className="absolute inset-0 bg-black/60 opacity-0 
                 group-hover:opacity-100 transition
                 flex items-center justify-center"
                >
                  <FaEye className="text-white text-4xl hover:scale-110 transition" />
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </section>
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 z-[999]
               flex items-center justify-center px-4"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE ICON */}
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:scale-110 transition"
            >
              <FaTimes />
            </button>

            {/* PREVIEW IMAGE */}
            <img
              src={previewImg}
              alt="Project Preview"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </>
  );
}
