import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <a href="#" aria-label="Homepage">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-28"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-gray-300 transition duration-200">
            Home
          </Link>
          <Link to="/faq" className="hover:text-gray-300 transition duration-200">
            FAQs
          </Link>
          <a href="#contact" className="hover:text-gray-300 transition duration-200">
            Contact us
          </a>

          {/* Dropdown Menu Example */}
          <div className="relative group">
            <button className="hover:text-gray-300 transition duration-200">
              Services
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black rounded-lg mt-2 shadow-lg py-2">
              <a
                href="#web-design"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Web Design
              </a>
              <a
                href="#seo"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                SEO
              </a>
              <a
                href="#marketing"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Marketing
              </a>
            </div>
          </div>
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <button
            onClick={() => alert("Booking is not available yet")}
            className="bg-gradient-to-r from-white to-slate-100 text-black py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg"
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
          <Link to="/" className="block hover:text-gray-300 transition duration-200">
            Home
          </Link>
          <Link to="/faq" className="block hover:text-gray-300 transition duration-200">
            FAQs
          </Link>
          <a href="#contact" className="block hover:text-gray-300 transition duration-200">
            Contact us
          </a>
          <div className="border-t border-white my-2"></div>
          <button
            onClick={() => alert("Booking is not available yet")}
            className="bg-gradient-to-r from-white to-slate-100 text-black py-2 px-4 w-full rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
