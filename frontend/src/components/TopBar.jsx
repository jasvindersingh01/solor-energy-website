import { useState, useEffect } from "react";

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
        w-full bg-blue-900 text-white text-sm py-2 px-4 fixed left-0 z-[9999]
        transition-all duration-300
        ${hideTopbar ? "-translate-y-full" : "translate-y-0"}
      `}
      style={{ top: 0 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-6 text-center md:text-left">

        <p className="flex items-center gap-2">
          📍 <span>Plot No. 1, Adinath Nagar, Devli Arab Road, Kota, Rajasthan</span>
        </p>

        <p className="flex items-center gap-2">
          📞
           <a 
            href="tel:9351055571" 
            className="hover:underline"
          >
           +91 9351055571
          </a>
          
          ✉️
          <a 
            href="mailto:asters_energy@yahoo.com" 
            className="hover:underline"
          >
            asters_energy@yahoo.com
          </a>
        </p>
      </div>
    </div>
  );
}
