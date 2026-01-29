import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import banner from "../assets/banners/banner2.jpg";
import useSEO from "../hooks/useSEO";

export default function Contact() {

  useSEO({
    title: "About Aster's Energy | Trusted Solar Company in Kota",
    description:
      "Aster's Energy is a trusted solar company in Kota providing quality rooftop solar installations, government subsidy support & long-term service."
  });

  return (
    <>
      <div className="w-full h-[30vh] md:h-[40vh] relative">
        <img
          src={banner}
          alt="Solar Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block border-l-4 border-blue-700 pl-3 text-blue-700 font-semibold">
              Let’s Talk
            </span>

            <h2 className="text-4xl font-bold text-yellow-500 leading-snug">
              Let’s Power Up Your Next Solar Project Together
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Get in touch with <strong>Aster's Energy</strong> to explore
              reliable, cost-effective solar solutions for your home or business.
              Our experts guide you from consultation to installation — every
              step of the way.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-lg space-y-2">
              <p>☀ Save up to <strong>₹78,000</strong> with Govt. Subsidy</p>
              <p>⚡ Generate your own electricity & reduce bills</p>
              <p>🔋 Sell excess power back to the grid</p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-blue-800">
              Get In Touch!
            </h3>

            <div className="space-y-5 text-gray-800">

              <div className="flex gap-4 items-start">
                <FaMapMarkerAlt className="text-blue-700 text-xl mt-1" />
                <div>
                  <p className="font-semibold">Registered Address</p>
                  <p>
                    Plot No. 1, Adinath Nagar, Devli Arab Road, Kota (Raj.)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-yellow-500 text-xl mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>asters_energy@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaPhoneAlt className="text-green-600 text-xl mt-1" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p>+91 93510 55571</p>
                </div>
              </div>

            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="tel:9351055571"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919351055571"
                target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[450px] mt-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Kota%20Rajasthan&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
