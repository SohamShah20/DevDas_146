import React from 'react';
import './Form.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
const Createdealer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {iscust}=useSelector((state) => state.user);

  const [formData, setformData] = useState({});

  function changeHandler(event){
    setformData((prev)=>({...prev, [event.target.name]: event.target.value,}));
  }

const submitHandler= async(event)=>{
    event.preventDefault();
    formData.isadmin=false;
    
    try {
      setLoading(true);
      const res = await fetch('http://localhost:3001/api/admin/createdealer', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      
 
        navigate('/');
  
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div>
        <form onSubmit = {submitHandler}>
            <label>username</label>
            <input type = "text" name = "username"  placeholder='username' onChange = {changeHandler} />

            <label>Email</label>
            <input type = "email" name = "email"  placeholder='email' onChange = {changeHandler} />
            <label>Address</label>
            <input type = "text" name = "address"  placeholder='address' onChange = {changeHandler} />
            <label>Password</label>
            <input type = "password" name = "password"  placeholder='password' onChange = {changeHandler} />

            <button
          disabled={loading}
          className='signup-button'
        >
          {loading ? 'Loading...' : 'create'}
        </button>
        </form>
       
      {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Createdealer;