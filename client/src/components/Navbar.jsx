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
  const navbarBgClass = location.pathname === "/about" || location.pathname === "/login" || location.pathname === "/signup" 
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
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </div>

            {/* Authentication Links */}
            <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center`}>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </NavLink>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
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
          {/* Navbar for logged-in users (no changes here) */}
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
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </NavLink>

             {currentUser ?<NavLink
                className="border border-white border-2 rounded-2xl mx-4 px-7 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors"
                to="/ProfilePage"
              >
                Profile
              </NavLink>:<></>

             } 

              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>

            </div>

            {/* Authentication Links */}
            <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center`}>
              <NavLink
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
                to="/profilepage"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </NavLink>
              <Link
                className="border border-white rounded-2xl px-5 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors mt-2 md:mt-0"
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
