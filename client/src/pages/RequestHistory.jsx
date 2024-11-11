import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';
import { Link } from 'react-router-dom';

const RequestHistory = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const setDealer = props.setdealer;

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/customer/getclosedrequests/${currentUser._id}`);
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-8">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-8">Request History</h1>

      {requests.length === 0 ? (
        <p className="text-center text-gray-600">No requests found.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {requests.map((request, index) => {
            const id = request.dealer_id;
            const req_id = request._id;
            return (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <p className="text-lg font-semibold text-green-700">Customer Name: {request.custname}</p>
                <p className="text-sm text-gray-600">Customer Email: {request.email}</p>
                <p className="text-sm text-gray-600">Date of Scrap Pickup: {request.date}</p>
                <p className="text-sm text-gray-600">Time of Scrap Pickup: {request.time}</p>

                <div className="mt-4">
                  <p className="text-green-600 font-semibold">Scrap Details:</p>
                  <Scrapdetail scrapDetail={request.scrapData} />
                </div>

                <div className="flex space-x-4 mt-6">
                  <Link
                    to={`/viewdealer/${id}`}
                    className="text-blue-500 hover:text-blue-600 font-medium hover:underline"
                  >
                    View Dealer Details
                  </Link>
                  <Link
                    to={`/viewbill/${req_id}`}
                    className="text-blue-500 hover:text-blue-600 font-medium hover:underline"
                  >
                    View Bill
                  </Link>
                  {!request.givenFeedback ? <Link to={`/givefeedback/${req_id}`} 
                  className="text-blue-500 hover:text-blue-600 font-medium hover:underline">
                    Give Feedback
                    </Link> : <></>}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}
      {message && <p className="text-center text-green-600 mt-4">{message}</p>}
    </div>
  );
};

export default RequestHistory;
