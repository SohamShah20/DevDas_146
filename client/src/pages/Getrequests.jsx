import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';
import { useNavigate } from 'react-router-dom';

const GetRequests = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/dealer/getrequests/${currentUser._id}`);
        const data = await res.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
        setError("Failed to load requests. Please try again.");
      }
    };

    if (currentUser) {
      fetchRequests();
    }
  }, [currentUser]);

  const accept = async (event, index) => {
    const req = requests[index];
    try {
      const res = await fetch(`http://localhost:3001/api/dealer/acceptrequests/${req._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const data = await res.json();
      setMessage(data.message);
      navigate('/getrequests');
    } catch (error) {
      setError("Failed to accept request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-green-50 via-green-100 to-white p-6 md:p-10 flex flex-col items-center">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 w-full max-w-3xl text-center border-b-4 border-green-500">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-850">Customer Scrap Requests</h1>
        <p className="mt-2 text-gray-600">Manage incoming requests for scrap collection</p>
      </div>

      {/* Alert for messages or errors */}
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg w-full max-w-3xl text-center border border-red-200 mb-6">
          {error}
        </div>
      )}
      {message && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg w-full max-w-3xl text-center border border-green-200 mb-6">
          {message}
        </div>
      )}

      {/* Request Cards */}
      <div className="grid gap-4 max-w-3xl w-full">
        {requests.length === 0 ? (
          <p className="text-gray-600">No requests found.</p>
        ) : (
          requests.map((request, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105 duration-200 border border-gray-300 hover:border-green-600 hover:shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Request from {request.custname}</h2>
                <span className="text-sm text-gray-500">{request.date} at {request.time}</span>
              </div>
              <p className="text-gray-600"><strong>Email:</strong> {request.email}</p>
              <p className="text-gray-600 mt-2 mb-2"><strong>Scrap Details:</strong></p>
              <Scrapdetail scrapDetail={request.scrapData} />

              {/* Accept Button */}
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={(event) => accept(event, index)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition transform hover:scale-105"
                >
                  Accept
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GetRequests;
