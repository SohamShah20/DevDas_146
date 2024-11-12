import logo from "./logo.svg";
import "./App.css";
import data from "./data.js";
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
import Viewrequests from './pages/Viewrequests.jsx';
import Viewacceptedrequests from './pages/Viewacceptedrequests.jsx';
import Acceptedreq from './pages/Acceptedreq.jsx';
import Viewdealer from './pages/Viewdealer.jsx';
import SetPrice from './components/SetPrice.jsx';
import Viewbill from './pages/Viewbill.jsx';
import History from './pages/History.jsx';

import ForgotPassword from './pages/ForgetPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';

import GiveFeedback from './pages/GiveFeedback.jsx';
import DealerFeedbacks from './pages/DealerFeedbacks.jsx';
import Contact from "./pages/Contact.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";


function App() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [scraps, setScraps] = useState(data);
  const [dealer, setdealer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Navbar isLoading={isLoading} setIsLoading={setIsLoading} />
      <Routes>

        <Route path = "/" element = {currentUser? <Dashboard /> : <Home isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element = {currentUser? <Dashboard /> : <Login/>} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/logout" element = {<Logout />} />
        <Route path = "/createdealer" element = {<Createdealer />} />
        <Route path = "/getrequests" element = {<Getrequests />} />
        <Route path = "/getacceptedrequests" element = {<Acceptedreq />} />
        <Route path = "/gethistory" element = {<History />} />
        <Route path = "/history" element = {<RequestHistory />} />
        <Route path = "/request" element = {<Request />} />
        <Route path = "/viewrequests" element = {<Viewrequests />} />
        <Route path = "/viewacceptedrequests" element = {<Viewacceptedrequests/>} />
        <Route path = "/viewdealer/:id" element = {<Viewdealer />} />
        <Route path = "/viewbill/:req_id" element = {<Viewbill />} />
        <Route path = "/setprice" element = {<SetPrice />} />

        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>

        <Route path = "/givefeedback/:req_id" element = {<GiveFeedback />} />
        <Route path = "/viewdealerfeedback" element = {<DealerFeedbacks />} />
                  <Route path="/contact" element={<Contact />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path = "*" element = {<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
