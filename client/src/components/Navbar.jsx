import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = (props) => {
    

    const { currentUser, loading, error } = useSelector((state) => state.user);
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
                    {currentUser  ? <></> : <NavLink to="/login">Log in</NavLink>}
                </li>
                <li>
                    {currentUser  ? <></> : <NavLink to="/signup">Sign up</NavLink>}
                </li>
                <li>
                    {currentUser ? <Link to="/logout">Log Out</Link> : <></>}
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;