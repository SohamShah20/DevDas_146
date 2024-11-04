import React from 'react';
import './Form.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const setLoggedIn = props.setLoggedIn;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  
  function submitHandler(event){
    event.preventDefault();
    setLoggedIn(true);
    navigate('/');
  }

  return (
    <div className = "form">
      <form onSubmit = {submitHandler}>
        <label><p>Email</p></label>
        <input type = "email" name = "email" required value={formData.email} onChange={changeHandler} />
        <label><p>Password</p></label>
        <input type = "password" name = "password" required value = {formData.password} onChange = {changeHandler} />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default LoginForm;