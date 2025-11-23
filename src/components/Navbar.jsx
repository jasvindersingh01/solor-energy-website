import { useState } from "react";
import logo from "../assets/Logo.png";


export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 sticky top-0 z-50 ">

      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center justify-center gap-2">
          <img
            src={logo}
            alt="Our Solar Energies Logo"
            className="w-20 object-contain"
          />
          <h1 className="text-xl font-bold">Our Solar Energies</h1>
        </div>



        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>


        <div className="hidden md:flex gap-6 text-lg">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Contact Us</a>

        </div>
      </div>
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-blue-900 px-4 py-4 rounded-lg">
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#about">About Us</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
