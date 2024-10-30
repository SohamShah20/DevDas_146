import React from 'react';
import './Form.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const navigate = useNavigate();

  const setLoggedIn = props.setLoggedIn;

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: ""
  })

  function changeHandler(event){
    setSignupData((prev)=>({...prev, [event.target.name]: event.target.value}));
  }

  function submitHandler(event){
    event.preventDefault();
    setLoggedIn(true);
    console.log(signupData);
    navigate('/');
  }

  return (
    <div>
        <form onSubmit = {submitHandler}>
            <label>First Name</label>
            <input type = "text" name = "firstName" required value = {signupData.firstName} onChange = {changeHandler} />
            <label>Last Name</label>
            <input type = "text" name = "lastName" required value = {signupData.lastName} onChange = {changeHandler} />
            <label>Email</label>
            <input type = "email" name = "email" required value = {signupData.email} onChange = {changeHandler} />
            <label>Password</label>
            <input type = "password" name = "password" required value = {signupData.password} onChange = {changeHandler} />
            <label>Confirm Password</label>
            <input type = "password" name = "confirmPass" required value = {signupData.confirmPass} onChange = {changeHandler} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SignupForm;