import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ isLoading, setIsLoading }) => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  return (
    <div>
      {isLoading ? (
        <></>
      ) : (
        <nav className="relative z-10">
          <div className="flex flex-row justify-between bg-black py-5 px-5 bg-opacity-5">
            <div className="">
              <NavLink
                className="border border-white rounded-2xl border-2  mx-2 px-7 py-2 text-white hover: bg-lime-400 hover:text-white transition-colors"
                to="/"
              >
                Home
              </NavLink>
            </div>

            <div>
              <NavLink
                className="border border-white border-2 rounded-2xl mx-4 px-7 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="border border-white border-2 rounded-2xl mx-4 px-7 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors"
                to="/contact"
              >
                Contact Us
              </NavLink>
              <NavLink
                className="border border-white border-2 rounded-2xl mx-4 px-7 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors"
                to="/ProfilePage"
              >
                Profile
              </NavLink>
            </div>

            <div>
              {currentUser ? (
                <></>
              ) : (
                <NavLink
                  className="border border-white border-2 rounded-2xl mx-4 px-7 py-2 text-white hover:bg-lime-400 hover:text-white transition-colors"
                  to="/login"
                >
                  Log in
                </NavLink>
              )}

              {currentUser ? (
                <></>
              ) : (
                <NavLink
                  className="border border-white border-2 rounded-2xl dir:ltr me-1 px-7  py-2 text-white hover:bg-lime-400 hover:text-white transition-colors"
                  to="/signup"
                >
                  Sign up
                </NavLink>
              )}

              {currentUser ? <Link to="/logout">Log Out</Link> : <></>}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
