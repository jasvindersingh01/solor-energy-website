import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaYoutube, 
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-2xl font-semibold mb-4">Aster's Energy</h3>

          <p className="flex items-start gap-3 text-gray-300 leading-relaxed">
            <FaMapMarkerAlt className="text-yellow-300 mt-1" />
            Plot No. 1, Adinath Nagar, <br />
            Devli Arab Road, Kota, Rajasthan
          </p>

          <p className="flex items-center gap-3 mt-4 text-gray-300">
            <FaPhoneAlt className="text-yellow-300" />
            <a href="tel:9351055571" className="hover:text-yellow-300">
              9351055571
            </a>
          </p>

          <p className="flex items-center gap-3 mt-2 text-gray-300">
            <FaEnvelope className="text-yellow-300" />
            <a href="mailto:solarcompany@gmail.com" className="hover:text-yellow-300">
              solarcompany@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              { label: "Home", link: "/" },
              { label: "Services", link: "/services" },
              { label: "Projects", link: "/projects" },
              { label: "About Us", link: "/about" },
              { label: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
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

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>

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
                         hover:bg-green-400 hover:text-blue-900 transition"
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

      <div className="text-center text-gray-400 text-sm  mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Aster's Energy. All Rights Reserved.
      </div>

    </footer>
  );
}
