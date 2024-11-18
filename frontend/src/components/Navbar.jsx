import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styles
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl max-h-16 mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <a href="#" aria-label="Homepage">
            <img src={Logo} alt="Company Logo" className="w-24" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-300 transition duration-200 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `hover:text-gray-300 transition duration-200 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            FAQs
          </NavLink>
          <a href="#contact" className="hover:text-gray-300 transition duration-200">
            Contact us
          </a>
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <button
            onClick={() => alert("Booking is not available yet")}
            className="bg-gradient-to-r from-white to-slate-100 text-black py-1 px-4 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center space-x-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-primary md:hidden space-y-4 px-4 py-2 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block hover:text-gray-300 transition duration-200 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `block hover:text-gray-300 transition duration-200 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            FAQs
          </NavLink>
          <a href="#contact" className="block hover:text-gray-300 transition duration-200">
            Contact us
          </a>
          <div className="border-t border-white my-2"></div>
          <button
            onClick={() => alert("Booking is not available yet")}
            className="bg-gradient-to-r from-white to-slate-100 text-black py-1 px-4 w-full rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
