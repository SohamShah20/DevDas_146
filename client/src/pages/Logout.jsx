import React from 'react';
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const navigate = useNavigate();

  function logoutHandler(){
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <div>
        <p>Are you sure?</p>
        <button onClick = {logoutHandler}>Yes</button>
    </div>
  )
}

export default Logout;