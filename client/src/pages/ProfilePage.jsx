import React, { useState } from "react";

const ProfilePage = () => {
  const [view, setView] = useState("profile"); // To toggle between views

  const [formData, setFormData] = useState({
    name: "User Name",
    address: "1234 Main St, City",
    phone: "(123) 456-7890",
    email: "user@example.com", // Hardcoded email
    profileImage: "", // For image upload
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Profile updated:", formData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic
    console.log("Password changed");
  };

  return (
    <div className="flex flex-col  items-center w-full max-w-2xl mx-auto p-8 bg-blue-50 rounded-lg shadow-lg mt-12">
      {view === "profile" && (
        <>
          <div className="relative w-40 h-40">
            <img
              src="profile-image-url" // replace with actual image URL or source
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-blue-500"
            />
            <button
              onClick={() => setView("editProfile")}
              className="absolute bottom-2 right-0 bg-blue-500 text-white rounded-full px-4 py-2 text-xs font-semibold shadow-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{formData.name}</h2>
            <p className="text-gray-600 mb-2">{formData.address}</p>
            <p className="text-gray-600 mb-4">{formData.phone}</p>
            <button
              onClick={() => setView("changePassword")}
              className="bg-blue-500 text-white font-bold rounded px-6 py-2 mt-4 hover:bg-blue-600"
            >
              Change Password
            </button>
          </div>
        </>
      )}

      {view === "editProfile" && (
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-2 border rounded-md bg-gray-200 cursor-not-allowed focus:outline-none"
              />
              <p className="text-sm text-gray-500 mt-1">Email cannot be changed.</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Profile Image</label>
              <input
                type="file"
                name="profileImage"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setView("profile")}
              className="text-blue-500 hover:underline"
            >
              Back to Profile
            </button>
          </div>
        </div>
      )}

      {view === "changePassword" && (
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Change Password</h2>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Update Password
            </button>
          </form>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setView("profile")}
              className="text-blue-500 hover:underline"
            >
              Back to Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
