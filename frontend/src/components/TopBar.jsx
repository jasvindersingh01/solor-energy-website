export default function TopBar() {
  return (
    <div className="w-full bg-blue-900 text-white text-sm py-2 px-4 fixed top-0 left-0 z-[9999]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-6 text-center md:text-left">

        <p className="flex items-center gap-2">
          📍 <span>24, Industrial Area, Kota, Rajasthan</span>
        </p>

        <p className="flex items-center gap-2">
          📞
          <a 
            href="tel:9876543210" 
            className="hover:underline"
          >
            98765 43210
          </a>
        </p>

        <p className="flex items-center gap-2">
          ✉️
          <a 
            href="mailto:solarcompany@gmail.com" 
            className="hover:underline"
          >
            solarcompany@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
