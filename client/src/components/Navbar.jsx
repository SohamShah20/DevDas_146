import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/spin.png';

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set the navbar background color based on route
  const navbarBgClass = location.pathname === "/about" || location.pathname === "/contact" || location.pathname === "/login" || location.pathname === "/signup" 
    ? "bg-gray-900" 
    : "bg-black bg-opacity-5";

  return (
    <div>
      {!currentUser ? (
        <nav className={`relative z-20 ${navbarBgClass}`}>
          <div className="flex justify-between items-center py-4 px-5">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Skrap Wallah" className="w-10 h-10 rounded-full" />
              </Link>
              <Link className="flex items-center ml-3">
                <span className="text-white md:text-xl font-bold">S K R A P</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-3">W A L L A H</span>
              </Link>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center`}>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </div>

            {/* Authentication Links */}
            <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center`}>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </NavLink>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="relative z-20 bg-gray-900 bg-opacity-90">
          {/* Navbar For logged-in Users (no changes here) */}
          <div className="flex justify-between items-center py-4 px-5">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Skrap Wallah" className="w-10 h-10 rounded-full" />
              </Link>
              <Link className="flex items-center ml-3">
                <span className="text-white md:text-xl font-bold">S K R A P</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-3">W A L L A H</span>
              </Link>
            </div>

            {/* Hamburger Menu icon for mobile  use partially implemented */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center`}>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </NavLink>

             <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/contact"
              >
                Contact Us
              </NavLink>:<></>
           

              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>

            </div>

            {/* Authentication Links */}
            <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center`}>
            <NavLink
   className="flex items-center text-xl  rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
  to="/profilepage"
  onClick={() => setIsMenuOpen(false)}
>
  {/* Profile image */}
  <img
    src={currentUser.avatar} // Replace with the actual path or URL to the user's image
    alt="User profile"
    className="w-8 h-8 rounded-full mr-2 border border-white"
  />
  {/* Username */}
  <span>{currentUser.username}</span>
</NavLink>

              <Link
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-slate-600 hover:text-white transition-colors mt-2 md:mt-0"
                to="/logout"
                onClick={() => setIsMenuOpen(false)}
              >
                Log Out
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
