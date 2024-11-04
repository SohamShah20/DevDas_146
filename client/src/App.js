import logo from './logo.svg';
import './App.css';
import data from './data.js';
import { useState } from "react";
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import RequestHistory from './pages/RequestHistory';
import Request from './pages/Request.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [scraps, setScraps] = useState(data);

  return (
    <div>
      <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />

      <Routes>
        <Route path = "/" element = {loggedIn ? <Dashboard /> : <Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element = {<Login setLoggedIn = {setLoggedIn} />} />
        <Route path = "/signup" element = {<Signup setLoggedIn = {setLoggedIn} />} />
        <Route path = "/logout" element = {<Logout setLoggedIn = {setLoggedIn} />} />
        <Route path = "/history" element = {<RequestHistory scraps = {scraps} />} />
        <Route path = "/request" element = {<Request />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
