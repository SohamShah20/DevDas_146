import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />

      <Routes>
        <Route path = "/" element = {loggedIn ? <Dashboard /> : <Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element = {<Login setLoggedIn = {setLoggedIn} />} />
        <Route path = "/signup" element = {<Signup setLoggedIn = {setLoggedIn} />} />
        <Route path = "/logout" element = {<Logout setLoggedIn = {setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
