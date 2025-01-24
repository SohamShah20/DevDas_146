import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);  // Replace with actual form submission logic
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-green-100 to-white">
      <div className="w-full max-w-3xl p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-200 ease-in-out border border-gray-200">
        <form onSubmit={submitHandler} className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-150 shadow-md"
                onChange={changeHandler}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-150 shadow-md"
                onChange={changeHandler}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-150 shadow-md"
                onChange={changeHandler}
              />
            </div>

            <div className="space-y-2 col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                className="w-full px-4 py-1 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-150 shadow-md h-32"
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-1/3 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:shadow-lg transition duration-150 shadow-md"
            >
              {loading ? 'Loading...' : 'Connect'}
            </button>
          </div>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Contact;
