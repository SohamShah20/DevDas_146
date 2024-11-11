import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Request = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [scrapData, setScrapData] = useState([{ type: "", quantity: "" }]);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleScrapChange = (event, index) => {
    const data = [...scrapData];
    data[index][event.target.name] = event.target.value;
    setScrapData(data);
  };

  const addScrapItem = () => {
    if (scrapData.length >= 5) {
      setAlert('No more than 5 items can be added');
    } else {
      setScrapData([...scrapData, { type: "", quantity: "" }]);
    }
  };

  const removeScrapItem = (index) => {
    const data = scrapData.filter((_, i) => i !== index);
    setScrapData(data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    formData.scrapData = scrapData;
    formData.city = currentUser.city;
    formData.custname = currentUser.username;
    formData.email = currentUser.email;

    try {
      const res = await fetch('http://localhost:3001/api/customer/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      /*if (!data.success) {
        setError(data.message);
        console.log(data.success);
        setIsLoading(false);
        return;
      }*/
      setMessage(data.message);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full text-center mb-10">
        <h1 className="text-3xl font-bold text-green-600 mb-2">New Scrap Request</h1>
        <p className="text-gray-600">Fill out the details below to request scrap collection.</p>
      </div>

      <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-600">Scrap Details</h2>
          {scrapData.map((scrap, index) => (
            <div key={index} className="flex items-center space-x-4 mt-4">
              <input
                type="text"
                name="type"
                value={scrap.type}
                onChange={(event) => handleScrapChange(event, index)}
                placeholder="Type of Scrap"
                className="border rounded p-2 flex-1"
              />
              <input
                type="text"
                name="quantity"
                value={scrap.quantity}
                onChange={(event) => handleScrapChange(event, index)}
                placeholder="Quantity"
                className="border rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={() => removeScrapItem(index)}
                className="text-red-600 font-bold"
              >
                Remove
              </button>
            </div>
          ))}
          {alert && <p className="text-red-600 mt-2">{alert}</p>}
          <button
            type="button"
            onClick={addScrapItem}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Scrap Item
          </button>
        </div>

        <div className="mt-6">
          <label className="block text-green-700">Date to Sell</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="border rounded p-2 w-full mt-2"
          />
        </div>

        <div className="mt-6">
          <label className="block text-green-700">Time</label>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="border rounded p-2 w-full mt-2"
          />
        </div>

        <div className="mt-8 text-center">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
            >
              Submit Request
            </button>
          )}
        </div>
      </form>

      {error && <p className="mt-4 text-red-600">{error}</p>}
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default Request;
