import React from 'react';
import logo from '../assets/spin.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-black py-4">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
        
        {/* Footer Columns */}
        <div className="flex flex-wrap w-full md:w-2/3">
          {/* Businesses */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-semibold text-lg md:text-xl text-green-700 mb-2 md:mb-4">Businesses</h4>
            <ul className="text-slate-850 space-y-2">
              <li><a href="#" className="font-semibold hover:text-green-500">EPR</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Circular Economy</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Paper Shredding</a></li>
            </ul>
          </div>
          
          {/* Individuals */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-semibold text-lg md:text-xl text-green-700 mb-2 md:mb-4">Individuals</h4>
            <ul className="text-slate-850 space-y-2">
              <li><a href="#" className="font-semibold hover:text-green-500">Scrap Collection</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Vehicle Scrapping</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Zero Waste Society</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-semibold text-lg md:text-xl text-green-700 mb-2 md:mb-4">Company</h4>
            <ul className="text-slate-850 space-y-2">
              <li><a href="#" className="font-semibold hover:text-green-500">About Us</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Careers</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Franchise</a></li>
            </ul>
          </div>
          
          {/* Help */}
          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-semibold text-lg md:text-xl text-green-700 mb-2 md:mb-4">Help</h4>
            <ul className="text-slate-850 space-y-2">
              <li><a href="#" className="font-semibold hover:text-green-500">Contact Us</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Privacy Policy</a></li>
              <li><a href="#" className="font-semibold hover:text-green-500">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Contact and Logo Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-4 md:space-y-2">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Skrap Wallah" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
            <span className="text-xl font-semibold text-slate-900">S K R A P</span>
            <span className="text-xl font-semibold text-slate-900">W A L L A H</span>
          </div>

          <p className="text-center md:text-left font-semibold text-slate-850">+91-76972 60260</p>
          <p className="text-center md:text-left font-semibold text-slate-850">contact@thekabadiwala.com</p>
          <p className="text-center md:text-left font-semibold text-slate-850">
            The Kabadiwala, 2, Narmadapuram Rd, near D-Mart, Vidya Nagar, Bhopal, Madhya Pradesh 462026
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-green-700">
            <a href="#" aria-label="Instagram" className="hover:text-green-600"><FaInstagram size={24} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-green-600"><FaFacebook size={24} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-green-600"><FaTwitter size={24} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-600"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
