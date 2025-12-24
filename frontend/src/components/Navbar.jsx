import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);

  const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const services = [
  { label: "On-Grid Solar", path: "/services/on-grid" },
  { label: "Off-Grid Solar", path: "/services/off-grid" },
  { label: "Hybrid Solar", path: "/services/hybrid" },
  { label: "Solar Water Heater", path: "/services/water-heater" },
  { label: "Solar Pump", path: "/services/pump" },
  { label: "Solar Street Light", path: "/services/street-light" },
];


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setHideTopbar(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300
        ${hideTopbar ? "top-0" : "md:top-[35px] top-0"}
        ${scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"}
      `}
    >
      <nav className="flex justify-between items-center px-6">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-22 h-22 object-contain" />
          <span className="text-xl font-bold text-blue-700">
            Aster's Energy
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
          <ul className="flex items-center gap-6">
            {navLinks.slice(0, 1).map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-blue-400">
                  {link.label}
                </Link>
              </li>
            ))}

            {/* SERVICES */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
                <span>Services</span>
                <FaChevronDown className="text-xs mt-[2px] transition-transform duration-300 group-hover:rotate-180" />
              </div>

              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-300 w-56 z-50">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-400"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.slice(1).map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-blue-400">
                  {link.label}
                </Link>
              </li>
            ))}

            {/* CTA */}
            <li>
              <Link
                to="/contact"
                className="bg-yellow-400 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                Get A Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center justify-between w-full hover:text-blue-400"
              >
                <span>Services</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2 text-sm">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        setServiceOpen(false);
                        setOpen(false);
                      }}
                      className="hover:text-blue-500"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:9351055571"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block w-max px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
