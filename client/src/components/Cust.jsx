import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cust = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [message, setMessage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8 flex flex-col items-center">
  {/* Header */}
  <div className="bg-blue-700 text-white p-8 rounded-lg shadow-xl mb-10 w-full max-w-4xl text-center">
    <h1 className="text-4xl font-bold">Welcome, {currentUser.username}!</h1>
    <p className="mt-3 text-gray-200">Easily manage your scrap requests and track their progress.</p>
  </div>


      {/* Links Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl w-full">
        {/* View Request History */}
        <Link
          to="/history"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 text-center border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-semibold text-blue-600">View Request History</h2>
          <p className="text-gray-600 mt-4">Check your past requests and keep track of their status.</p>
        </Link>

        {/* Put Up a New Request */}
        <Link
          to="/request"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 text-center border-t-4 border-green-500"
        >
          <h2 className="text-2xl font-semibold text-green-600">Put Up a New Request</h2>
          <p className="text-gray-600 mt-4">Submit a new request for scrap collection quickly.</p>
        </Link>

        {/* View Your Requests */}
        <Link
          to="/viewrequests"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 text-center border-t-4 border-yellow-500"
        >
          <h2 className="text-2xl font-semibold text-yellow-600">View Your Requests</h2>
          <p className="text-gray-600 mt-4">Manage all your active requests in one place.</p>
        </Link>

        {/* View Your Accepted Requests */}
        <Link
          to="/viewacceptedrequests"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 text-center border-t-4 border-purple-500"
        >
          <h2 className="text-2xl font-semibold text-purple-600">View Accepted Requests</h2>
          <p className="text-gray-600 mt-4">Find out which of your requests have been accepted.</p>
        </Link>
      </div>

      {/* Message Display */}
      {message && (
        <div className="mt-10 p-4 bg-green-100 text-green-700 rounded-lg max-w-4xl w-full text-center">
          {message}
        </div>
      )}
    </div>
  );
};

export default Cust;
