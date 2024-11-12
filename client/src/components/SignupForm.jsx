import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const SignupForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { iscust, currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  useEffect(()=>{
    if(currentUser){
      navigate('/');
    }
  }, [currentUser]);

  function changeHandler(event) {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    formData.isadmin = false;

    try {
      setLoading(true);
      const res = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!data.success) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      if (iscust) {
        navigate('/login');
      } else {
        navigate('/');
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (

    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={submitHandler} className="w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create an Account</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder="Enter your username"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Enter your email"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            placeholder="Enter your address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input
            type="text"
            name="city"
            id="city"
            required
            placeholder="Enter your city"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={changeHandler}
          />
        </div>

        <button
          type="submit"

          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>Already have an account?</p>
        <Link to="/login" className="text-blue-500 hover:underline">
          Sign in
        </Link> 
      </div>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default SignupForm;
