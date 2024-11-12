import React from 'react';
import './Form.css';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,setiscust
} from '../redux/user/userSlice';
const LoginForm = () => {
  

  const { loading, error,iscust, currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(currentUser){
      navigate('/');
    }
  }, [currentUser]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
   iscust:true,
  });
  
  
  

  function changeHandler(event){
    setFormData(
      (prev) => (
        {
          ...prev,
          [event.target.name]: event.target.value,
        }
    ));
  }
  
  const  submitHandler= async(event)=>{
    event.preventDefault();
   formData.iscust=iscust;
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:3001/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        credentials: 'include', 
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
     
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
   
    
  }

  return (
    <div className = "w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md ">
      <form onSubmit = {submitHandler} className="w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign in to your account</h2>
      <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email address
        </label>
        <input type = "email"  
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="email" 
         name = "email"
          required 
          value={formData.email} 
          onChange={changeHandler} />
        <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input type = "password"
         name = "password" 
         required 
         value = {formData.password}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange = {changeHandler} />
        </div>
        <div className="flex items-center mb-6 justify-between">
        <button
          disabled={loading}
          className='signin-button'
          onClick={()=>{
            dispatch(setiscust(true));
          }}
        >
          {loading ? 'Loading...' : 'Sign In as customer'}
        </button>
   <br/>
        <button
          disabled={loading}
          className='signin-button'
          onClick={()=>{
            dispatch(setiscust(false));
          }}
        >
          {loading ? 'Loading...' : 'Sign In as dealer'}
        </button>
        </div>
        </div>
      </form>
      <br />

      <div className="flex justify-end mt-4">
  <p className="text-gray-600 mr-5">Don’t have an account?</p>
  <Link
    to="/signup"
    className="text-blue-500 font-bold hover:underline"
  >
    Sign up
  </Link><br/>
     <Link to="/forgot-password">Forgot Password</Link>
</div>


      {error && <p className='error'>{error}</p>}
    
    </div>
  )
}

export default LoginForm;