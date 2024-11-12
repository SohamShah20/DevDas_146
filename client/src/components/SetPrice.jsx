import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetPrice = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "",
    price: 0,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/admin/setprice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      } else {
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Set Scrap Price</h2>
        
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Scrap Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={changeHandler}
              placeholder="Enter scrap type"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Scrap Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={changeHandler}
              placeholder="Enter scrap price"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-4 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 ${
              loading ? 'cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default SetPrice;
