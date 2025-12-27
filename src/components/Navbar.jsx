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
          // set the classname to hide when open is true and show when open is false
          className={`flex text-3xl md:text-4xl cursor-pointer font-playfair font-bold bg-gradient-to-r from-fuchsia-700 
            via-white to-fuchsia-700 text-transparent bg-clip-text`}
        >
          <div className="mt-1"></div>
          Elless Hair & Beauty
        </main>

        {/* Navs right */}
        <ul className="hidden md:flex space-x-9 text-white text-md font-semibold gap-4">
          <a href="#home">
            <li className="cursor-pointer hover:text-fuchsia-500">Home</li>
          </a>
          <a href="#services">
            <li className="cursor-pointer hover:text-fuchsia-500">Services</li>
          </a>
          <a href="#packages">
            <li className="cursor-pointer hover:text-fuchsia-500">Packages</li>
          </a>
          <a href="#reviews">
            <li className="cursor-pointer hover:text-fuchsia-500">Reviews</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer hover:text-fuchsia-500">Contact</li>
          </a>
          <a href="#book">
            <li
              className="cursor-pointer inline bg-fuchsia-700 rounded-full py-3 px-6 hover:bg-gradient-to-r from-white to-fuchsia-700 hover:text-black
            hover:border-white hover:shadow-2xl hover:shadow-black/90 hover:shadow-fuchsia-400/50"
            >
              Book Now
            </li>
          </a>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer text-fuchsia-400"
        >
          {!open ? <Menu /> : <X />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col text-bold text-xl text-white gap-8 items-center mt-8 md:mt-3">
          <a href="#services" className="cursor-pointer hover:text-fuchsia-500">
            Services
          </a>
          <a
            href="#packages"
            className="cursor-pointer hover:text-fuchsia-500"
          >
            Packages
          </a>
          <a href="#packages" className="cursor-pointer hover:text-fuchsia-500">
            Reviews
          </a>
          <a href="#about" className="cursor-pointer hover:text-fuchsia-500">
            Contact
          </a>
          <a href="#book" className="cursor-pointer inline bg-fuchsia-700 rounded-full py-3 px-5 hover:bg-gradient-to-r from-white to-fuchsia-700 hover:text-black
            hover:border-white hover:shadow-2xl hover:shadow-black/90 hover:shadow-fuchsia-400/50">
              Book Now
            </a>
        </div>
      )}
    </nav>
  );
}
