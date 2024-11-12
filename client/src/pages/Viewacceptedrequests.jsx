import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';
import { Link } from 'react-router-dom';

const ViewAcceptedRequests = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const setDealer = props.setdealer;

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/customer/getacceptedrequests/${currentUser._id}`);
        const data = await res.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
        setError("Failed to load requests.");
      }
    };

    if (currentUser) {
      fetchRequests();
    }
  }, [currentUser]);

  const clickHandler = async (event, index) => {
    const req = requests[index];
    const res = await fetch(`http://localhost:3001/api/customer/payreceived/${req._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const data = await res.json();

    if (!data.success) {
      setError(data.message);
      return;
    }
    setMessage(data.message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">Accepted Requests</h1>

      {requests.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">No requests found.</p>
      ) : (
        <div className="grid gap-8 max-w-4xl mx-auto">
          {requests.reverse().map((request, index) => {
            const id = request.dealer_id;
            return (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-blue-700">Customer Name: {request.custname}</p>
                <p className="text-sm text-gray-600">Email: {request.email}</p>
                <p className="text-sm text-gray-600">Pickup Date: {request.date}</p>
                <p className="text-sm text-gray-600">Pickup Time: {request.time}</p>
                
                <div className="mt-4">
                  <p className="text-blue-600 font-semibold">Scrap Details:</p>
                  <Scrapdetail scrapDetail={request.scrapData} />
                </div>

                <div className="flex space-x-4 mt-6">
                  <Link
                    to={`/viewdealer/${id}`}
                    className="text-blue-500 hover:text-blue-600 font-medium underline transform hover:scale-105 transition duration-200"
                  >
                    View Dealer Details
                  </Link>
                  <button
                    onClick={(event) => clickHandler(event, index)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform hover:scale-105 transition duration-200"
                  >
                    Received
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {message && <p className="text-center text-green-500 mt-4">{message}</p>}
    </div>
  );
};

export default ViewAcceptedRequests;
