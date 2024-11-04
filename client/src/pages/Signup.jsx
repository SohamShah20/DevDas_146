import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = (props) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm setLoggedIn = {props.setLoggedIn} />
    </div>
  )
}

export default Signup;