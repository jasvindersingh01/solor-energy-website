import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Aster's Energy
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            Aster's Energy is a trusted solar solutions provider delivering
            reliable, cost-effective, and sustainable energy systems for homes,
            businesses, and infrastructure projects.
          </p>

          <p className="flex items-start gap-3 text-gray-300">
            <FaMapMarkerAlt className="text-yellow-300 mt-1" />
            Plot No. 1, Adinath Nagar, <br />
            Devli Arab Road, Kota, Rajasthan
          </p>

          <p className="flex items-center gap-3 mt-3 text-gray-300">
            <FaPhoneAlt className="text-yellow-300" />
            <a href="tel:9351055571" className="hover:text-yellow-300">
              +91 9351055571
            </a>
          </p>

          <p className="flex items-center gap-3 mt-2 text-gray-300">
            <FaEnvelope className="text-yellow-300" />
            <a
              href="mailto:solarcompany@gmail.com"
              className="hover:text-yellow-300"
            >
              solarcompany@gmail.com
            </a>
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">
            Quick Links
          </h4>

          <ul className="space-y-3 text-gray-300">
            {[
              { label: "Home", link: "/" },
              { label: "About Us", link: "/about" },
              { label: "Projects", link: "/projects" },
              { label: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaChevronRight className="text-yellow-300 text-sm" />
                <a
                  href={item.link}
                  className="hover:text-yellow-300 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">
            Our Services
          </h4>

          <ul className="space-y-3 text-gray-300">
            {[
              { label: "On-Grid Solar System", link: "/services/on-grid" },
              { label: "Off-Grid Solar System", link: "/services/off-grid" },
              { label: "Hybrid Solar System", link: "/services/hybrid" },
              { label: "Solar Water Heater", link: "/services/water-heater" },
              { label: "Solar Pump", link: "/services/pump" },
              { label: "Solar Street Light", link: "/services/street-light" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaChevronRight className="text-yellow-300 text-sm" />
                <a
                  href={item.link}
                  className="hover:text-yellow-300 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">
            Follow Us
          </h4>

          <p className="text-gray-300 mb-4">
            Stay connected with us for updates, projects, and solar solutions.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10
                         hover:bg-yellow-400 hover:text-blue-900 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10
                         hover:bg-yellow-400 hover:text-blue-900 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://wa.me/9351055571"
              target="_blank"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10
                         hover:bg-green-400 transition"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10
                         hover:bg-red-500 hover:text-white transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-white/20 pt-4">
  © {new Date().getFullYear()} Aster's Energy. All Rights Reserved. |
  <span className="ml-1">
    Designed & Developed by{" "}
    <a
      href="https://rightads.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:underline"
    >
      RightAds
    </a>
  </span>
</div>


    </footer>
  );
}
