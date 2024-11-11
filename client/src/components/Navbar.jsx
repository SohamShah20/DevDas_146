import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="relative z-10 bg-black bg-opacity-25 py-5 px-5">
      <div className="flex justify-between">
        {/* Left Side - Home Link */}
        <div>
          <NavLink
            className="border border-white rounded-2xl px-7 py-2 mx-2 text-white hover:bg-blue-500 transition-colors"
            to="/"
          >
            Home
          </NavLink>
        </div>

        {/* Center - About Link */}
        <div>
          <NavLink
            className="border border-white rounded-2xl px-7 py-2 mx-4 text-white hover:bg-blue-500 transition-colors"
            to="/about"
          >
            About
          </NavLink>
        </div>

        {/* Right Side - Auth Links */}
        <div className="flex space-x-4">
          {!currentUser ? (
            <>
              <NavLink
                className="border border-white rounded-2xl px-7 py-2 text-white hover:bg-blue-500 transition-colors"
                to="/login"
              >
                Log in
              </NavLink>
              <NavLink
                className="border border-white rounded-2xl px-7 py-2 text-white hover:bg-blue-500 transition-colors"
                to="/signup"
              >
                Sign up
              </NavLink>
            </>
          ) : (
            <Link
              className="border border-white rounded-2xl px-7 py-2 text-white hover:bg-blue-500 transition-colors"
              to="/logout"
            >
              Log Out
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
