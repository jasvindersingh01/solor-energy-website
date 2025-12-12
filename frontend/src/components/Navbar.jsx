import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHideTopbar(true);
      else setHideTopbar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

        <div className="flex items-center gap-2">
          <img src={Logo} className="w-22 h-22 object-contain" />
          <span className="text-xl font-bold text-blue-700">Aster's Energy</span>
        </div>

        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/services" className="hover:text-blue-400">
            Services
          </Link>
          <Link to="/projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link
            to="/contact"
            className="bg-yellow-400 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Get A Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">

            <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Home
            </Link>

            <Link to="/services" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Services
            </Link>

            <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Projects
            </Link>

            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-blue-400">
              About Us
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Contact
            </Link>

            <a
              href="tel:9351055571"
              className="mt-2 inline-block w-max px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-red-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Call Now
            </a>

          </div>
        </div>
      )}

    </motion.header>
  );
}
