import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = (props) => {

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm setLoggedIn = {props.setLoggedIn} />
    </div>
  )
}

export default Login;