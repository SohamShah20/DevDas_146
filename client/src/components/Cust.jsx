import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { resetFirstLogin } from "../redux/user/userSlice";
import "react-toastify/dist/ReactToastify.css";

const Cust = () => {
  const { currentUser, isFirstLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  // Show welcome toast if it's the first login
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
   
    <div className="min-h-screen bg-gradient-to-bl from-green-50 via-green-100 to-white p-6 md:p-10 flex flex-col items-center">
      {/* Header */}
      <ToastContainer/>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 md:mb-10 w-full max-w-3xl text-center border-b-4 border-green-500">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-850">Welcome, {currentUser.username}!</h1>
        <p className="mt-2 text-gray-600">Manage your scrap requests and track their progress seamlessly.</p>
      </div>

      {/* Links Section */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 max-w-3xl w-full">
        {/* Card Template */}
        {[
          { to: "/history", title: "Request History", description: "View past requests and their status", icon: "📜" },
          { to: "/request", title: "New Request", description: "Submit a new request for scrap collection", icon: "➕" },
          { to: "/viewrequests", title: "Active Requests", description: "Manage your ongoing requests", icon: "📂" },
          { to: "/viewacceptedrequests", title: "Accepted Requests", description: "Track accepted requests", icon: "✅" }
        ].map((card, index) => (
          <Link
            key={index}
            to={card.to}
            className="flex items-center bg-white p-6 md:p-6 rounded-lg shadow-md transition transform hover:scale-105 duration-200 border border-gray-900 hover:border-2 hover:border-green-600 hover:shadow-lg"
          >
            <div className="text-3xl md:text-4xl mr-3 md:mr-4 text-green-600">{card.icon}</div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-black">{card.title}</h2>
              <p className="text-gray-600 mt-1 hover:text-gray-800">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Message Display */}
      {message && (
        <div className="mt-8 md:mt-10 p-4 bg-green-50 text-green-700 rounded-lg max-w-3xl w-full text-center border border-green-200">
          {message}
        </div>
      )}
    </div>
  );
};

export default Cust;
