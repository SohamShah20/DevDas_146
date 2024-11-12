import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { resetFirstLogin } from "../redux/user/userSlice";
import "react-toastify/dist/ReactToastify.css";




const Scrapdealer = () => {
  const { currentUser} = useSelector((state) => state.user);
  useEffect(() => {
    const showToastAfterLogin = localStorage.getItem("showToastAfterLogin");

    if (showToastAfterLogin && currentUser) {
      toast.success(`Welcome back, ${currentUser.username}!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        className: "toast-custom",
      });

      // Remove flag after showing the toast
      localStorage.removeItem("showToastAfterLogin");
    }
  }, [currentUser]);

  return (
    
    <div>
      <ToastContainer/>
        
        <h1>Welcome, {currentUser.username}!</h1>
        <Link to={'/getrequests'} className=''>SEE REQUESTS
        </Link>
        <br />
        <Link to={'/getacceptedrequests'} className=''>SEE ACCEPTED REQUESTS
        </Link>
       <br />
        <Link to={'/gethistory'} className=''>SEE REQUEST HISTORY
        </Link>
        <br />
        <Link to={'/viewdealerfeedback'} className=''>View All Feedback
        </Link>
    </div>
  )
}

export default Scrapdealer;