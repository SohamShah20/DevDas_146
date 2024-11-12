import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/spin.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-200 py-3">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        {/* Footer Columns */}
        <div className="flex flex-wrap w-full md:w-2/3">
          {/* Businesses */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h4 className="font-semibold text-green-500 mb-4">Businesses</h4>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="hover:text-green-600">
                  EPR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Circular Economy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Paper Shredding
                </a>
              </li>
            </ul>
          </div>

          {/* Individuals */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h4 className="font-semibold text-green-500 mb-4">Individuals</h4>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="hover:text-green-600">
                  Scrap Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Vehicle Scrapping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Zero Waste Society
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h4 className="font-semibold text-green-500 mb-4">Company</h4>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Franchise
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h4 className="font-semibold text-green-500 mb-4">Help</h4>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="hover:text-green-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Logo Section */}

        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-4 md:space-y-2">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Skrap Wallah"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <span className="text-xl font-semibold text-slate-900">
              S K R A P
            </span>
            <span className="text-xl font-semibold text-slate-900">
              W A L L A H
            </span>
          </div>

          <p className="text-center md:text-left font-semibold text-slate-850">
            +91-9330968077
          </p>
          <p className="text-center md:text-left font-semibold text-slate-850">
            scrapdealer31@gmail.com
          </p>
          <p className="text-center md:text-left font-semibold text-slate-850">
            76,Malviya Hostal,MNNIT Allahbad
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-white">
            <a
              href="#"
              aria-label="Instagram"
              className="text-green-500 hover:text-green-600"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-green-500 hover:text-green-600"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-green-500 hover:text-green-600"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-green-500 hover:text-green-600"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
