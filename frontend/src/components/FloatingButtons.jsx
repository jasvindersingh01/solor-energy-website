import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* WHATSAPP BUTTON (LEFT) */}
      <a
        href="https://wa.me/919351055571"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Aster's Energy"
        className="fixed bottom-6 left-6 z-50"
      >
        {/* Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-70"></span>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </a>

      {/* CALL BUTTON (RIGHT) */}
      <a
        href="tel:+919351055571"
        aria-label="Call Aster's Energy"
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Animation */}
        <span className="absolute inset-0 rounded-full bg-blue-500 opacity-70"></span>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
          <FaPhoneAlt className="text-white text-xl" />
        </div>
      </a>
    </>
  );
}
