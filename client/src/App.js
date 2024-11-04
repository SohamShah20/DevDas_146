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
import { useSelector } from 'react-redux';
import Getrequests from './pages/Getrequests';
import Createdealer from './components/createdealer';

function App() {

 
  const { currentUser, loading, error } = useSelector((state) => state.user);
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
      </Routes>
    </div>
  );
}

export default App;
