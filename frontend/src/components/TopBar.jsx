import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function TopBar() {
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHideTopbar(true);
      else setHideTopbar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        w-full bg-blue-900 hidden md:flex text-white text-sm py-2 px-4 fixed left-0 z-[9999]
        transition-all duration-300
        ${hideTopbar ? "-translate-y-full" : "translate-y-0"}
      `}
      style={{ top: 0 }}
    >
      <div className="flex items-center justify-between w-full">

        {/* LEFT SIDE INFO */}
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-2">
            📍 <span>Plot No. 1, Adinath Nagar, Devli Arab Road, Kota, Rajasthan</span>
          </p>

          <p className="flex items-center gap-2">
            📞
            <a href="tel:9351055571" className="hover:underline">
              +91 9351055571
            </a>

          </p>
        </div>

        {/* RIGHT SIDE SOCIAL ICONS */}
        <div className="flex items-center gap-4 mr-5">
            <a href="mailto:asters_energy@gmail.com" className="hover:underline">
             ✉️ asters_energy@gmail.com
            </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-yellow-300 transition text-lg"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-yellow-300 transition text-lg"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-red-400 transition text-lg"
          >
            <FaYoutube size={20} />
          </a>
        </div>

      </div>
    </div>
  );
}
