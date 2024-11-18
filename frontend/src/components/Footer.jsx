import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer Top: Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We are committed to providing top-notch services to help your
              business grow and thrive in today’s competitive market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Street Name, City, Country</li>
              <li>Email: support@example.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-r-md text-white font-medium transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
