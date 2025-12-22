import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 bg-black/30 border-b border-white/30 md:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)]
     backdrop-blur-md md:backdrop-blur-md w-full z-50 py-6 px-3 md:py-5 md:px-5"
    >
      <div className="flex items-center justify-between">
        {/* Logo Left */}
        <main
          style={{
            fontFamily: "script MT",
          }}
          className={`flex text-3xl md:text-4xl cursor-pointer font-playfair font-bold bg-gradient-to-r from-pink-500 via-white to-pink-500 text-transparent bg-clip-text ${
            open ? "hidden" : "block"
          } md:block`}
        >
          <div className="mt-1"></div>
          Elless Hair & Beauty
        </main>

        {/* Navs right */}
        <ul className="hidden md:flex space-x-9 text-white text-md font-semibold gap-4">
          <a href="#home">
            <li className="cursor-pointer hover:text-pink-500">Home</li>
          </a>
          <a href="#services">
            <li className="cursor-pointer hover:text-pink-500">Services</li>
          </a>
          <a href="">
            <li className="cursor-pointer hover:text-pink-500">Packages</li>
          </a>
          <a href="#about">
            <li className="cursor-pointer hover:text-pink-500">Reviews</li>
          </a>
          <a href="#about">
            <li className="cursor-pointer hover:text-pink-500">Contact</li>
          </a>
          <a href="#about">
            <li
              className="cursor-pointer inline bg-pink-400 rounded-full py-3 px-6 hover:bg-gradient-to-r from-white to-pink-500 hover:text-black
            hover:border-white hover:shadow-2xl hover:shadow-black/90 hover:shadow-pink-400/50"
            >
              Book Now
            </li>
          </a>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer text-pink-400"
        >
          {!open ? <Menu /> : <X />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col text-bold text-xl text-white gap-8 items-center mt-3">
          <a href="#services" className="cursor-pointer hover:text-pink-500">
            Services
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-pink-500"
          >
            Testimonials
          </a>
          <a href="" className="cursor-pointer hover:text-pink-500">
            Pricing
          </a>
          <a href="#about" className="cursor-pointer hover:text-pink-500">
            About
          </a>
        </div>
      )}
    </nav>
  );
}
