import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Viewdealer = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [dealer, setDealer] = useState({});
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDealer = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/customer/getdealer/${id}`);
        const data = await res.json();
        setDealer(data);
      } catch (error) {
        setError('Error fetching dealer details');
        console.error('Error fetching dealer:', error);
      }
    };

    if (currentUser) {
      fetchDealer();
    }
  }, [currentUser, id]);

  return (
    <div className="min-h-screen bg-[#e1f5d1] flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Dealer Details</h1>
        
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg hover:border-[#4CAF50]">
              <img
                src={dealer.avatar} // Replace with actual dealer image URL
                alt="Dealer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-lg font-medium text-gray-700">
              <p><strong className="text-gray-900">Dealer Name:</strong> {dealer.username}</p>
              <p><strong className="text-gray-900">Email:</strong> {dealer.email}</p>
              <p><strong className="text-gray-900">City:</strong> {dealer.city}</p>
              <p><strong className="text-gray-900">Address:</strong> {dealer.address}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}  // Adjust the navigation path as needed
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Viewdealer;
