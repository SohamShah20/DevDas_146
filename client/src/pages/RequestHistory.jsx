import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Scrapdetail from "../components/Scrapdetail";
import { Link } from "react-router-dom";

const RequestHistory = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const setDealer = props.setdealer;

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/customer/getclosedrequests/${currentUser._id}`
        );
        const data = await res.json();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
        setError("Failed to load requests.");
      }
    };

    if (currentUser) {
      fetchRequests();
    }
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-white-200 p-8">
      <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-10 tracking-wide shadow-lg p-4 rounded-lg">
        Request History
      </h1>

      {requests.length === 0 ? (
        <p className="text-center text-gray-700 text-xl">No requests found.</p>
      ) : (
        <div className="grid gap-8 max-w-4xl mx-auto">
          {requests.map((request, index) => {
            const id = request.dealer_id;
            const req_id = request._id;
            return (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition duration-300 border-t-4 ${
                  request.givenFeedback
                    ? "border-blue-400"
                    : "border-yellow-400"
                }`}
              >
                <p className="text-xl font-bold text-green-800 mb-2">
                  Customer: {request.custname}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Email: {request.email}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Date: {request.date}
                </p>
                <p className="text-sm text-gray-600">Time: {request.time}</p>

                <div className="mt-6">
                  <p className="text-green-600 font-semibold">Scrap Details:</p>
                  <Scrapdetail scrapDetail={request.scrapData} />
                </div>

                <div className="flex space-x-6 mt-8">
                  <Link
                    to={`/viewdealer/${id}`}
                    className="text-blue-500 hover:bg-blue-100 hover:text-blue-600 font-semibold underline px-2 py-1 rounded transition-all"
                  >
                    View Dealer
                  </Link>
                  <Link
                    to={`/viewbill/${req_id}`}
                    className="text-blue-500 hover:bg-blue-100 hover:text-blue-600 font-semibold underline px-2 py-1 rounded transition-all"
                  >
                    View Bill
                  </Link>
                  {!request.givenFeedback && (
                    <Link
                      to={`/givefeedback/${req_id}`}
                      className="text-blue-500 hover:bg-blue-100 hover:text-blue-600 font-semibold underline px-2 py-1 rounded transition-all"
                    >
                      Give Feedback
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {error && (
        <p className="text-center text-red-500 mt-6 font-semibold">{error}</p>
      )}
      {message && (
        <p className="text-center text-green-500 mt-6 font-semibold">
          {message}
        </p>
      )}
    </div>
  );
};

export default RequestHistory;
