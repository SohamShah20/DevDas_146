import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    
  const loggedIn = props.loggedIn;
  const setLoggedIn = props.setLoggedIn;

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
                    {loggedIn ? <></> : <NavLink to="/login">Log in</NavLink>}
                </li>
                <li>
                    {loggedIn ? <></> : <NavLink to="/signup">Sign up</NavLink>}
                </li>
                <li>
                    {loggedIn ? <Link to="/logout">Log Out</Link> : <></>}
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;