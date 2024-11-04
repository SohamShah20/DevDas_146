import React from 'react';
import './Form.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,setiscust
} from '../redux/user/userSlice';
const LoginForm = () => {
  

  const { loading, error,iscust } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className = "form">
      <form onSubmit = {submitHandler}>
        <label><p>Email</p></label>
        <input type = "email" name = "email" required value={formData.email} onChange={changeHandler} />
        <label><p>Password</p></label>
        <input type = "password" name = "password" required value = {formData.password} onChange = {changeHandler} />
        <button
          disabled={loading}
          className='signin-button'
          onClick={()=>{
            dispatch(setiscust(true));
          }}
        >
          {loading ? 'Loading...' : 'Sign In as customer'}
        </button>

        <button
          disabled={loading}
          className='signin-button'
          onClick={()=>{
            dispatch(setiscust(false));
          }}
        >
          {loading ? 'Loading...' : 'Sign In as dealer'}
        </button>
      </form>
      <div className='have-account'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className=''>Sign up</span>
        </Link>
      </div>
      {error && <p className='error'>{error}</p>}
    
    </div>
  )
}

export default LoginForm;