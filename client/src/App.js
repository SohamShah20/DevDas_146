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
import { useSelector } from 'react-redux';
import Getrequests from './pages/Getrequests';
import Createdealer from './components/createdealer';
import RequestHistory from './pages/RequestHistory';
import Request from './pages/Request.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [scraps, setScraps] = useState(data);

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path = "/" element = {currentUser ? <Dashboard /> : <Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/logout" element = {<Logout />} />
        <Route path = "/createdealer" element = {<Createdealer />} />
        <Route path = "/getrequests" element = {<Getrequests />} />
        <Route path = "/history" element = {<RequestHistory scraps = {scraps} />} />
        <Route path = "/request" element = {<Request />} />
        <Route path = "*" element = {<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
