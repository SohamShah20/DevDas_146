import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Log in</NavLink>
                </li>
                <li>
                    <NavLink to="signup">Sign up</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;