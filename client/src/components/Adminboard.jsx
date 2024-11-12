import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setiscust } from '../redux/user/userSlice';

const Adminboard = () => {
  const { currentUser, iscust } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Ensuring we set 'iscust' to false if it's true (admin context)
  if (iscust) dispatch(setiscust(false));

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-200 py-8">
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
          
          {/* Profile Image */}
          {currentUser.profileImage && (
            <img
              src={currentUser.profileImage} // Admin's profile image
              alt="Admin Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 transform hover:scale-110 transition-all duration-300"
            />
          )}

          {/* Welcome Message */}
          <h1 className="text-3xl font-semibold text-gray-700 text-center mb-6">
            Welcome, {currentUser.username}!
          </h1>
          
          {/* Admin Features Section */}
          <div className="space-y-6">
            
            {/* Create Dealer Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <p className="text-xl text-gray-600 font-medium mb-4">Create a Scrap Dealer</p>
              <Link
                to="/createdealer"
                className="inline-block px-8 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Create Dealer
              </Link>
            </div>
            
            {/* Set Scrap Prices Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <p className="text-xl text-gray-600 font-medium mb-4">Set Scrap Prices</p>
              <Link
                to="/setprice"
                className="inline-block px-8 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Set Price
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminboard;
