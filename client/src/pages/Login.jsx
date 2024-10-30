import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = (props) => {

  return (
    <div>
      <LoginForm setLoggedIn = {props.setLoggedIn} />
    </div>
  )
}

export default Login;