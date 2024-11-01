import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = (props) => {
  return (
    <div>
      <SignupForm setLoggedIn = {props.setLoggedIn} />
    </div>
  )
}

export default Signup;