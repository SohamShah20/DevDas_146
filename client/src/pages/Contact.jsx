import React, { useState } from 'react';

const ContactForm = () => {
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
      // Handle form submission logic here
      console.log(formData);  // Replace with actual form submission logic
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={submitHandler} className="w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            onChange={changeHandler}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Loading...' : 'Connect'}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default ContactForm;
