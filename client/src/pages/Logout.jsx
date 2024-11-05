import React from 'react';
import { useNavigate } from "react-router-dom";
import {

 
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  setiscust
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
const Logout = () => {
 
 
  const navigate = useNavigate();
  const dispatch=useDispatch();
  async function logoutHandler(){
    dispatch(signOutUserStart());
    dispatch(setiscust(true));
    try{
      const data = await fetch('http://localhost:3001/api/auth/signout', {
        method: 'POST', 
        credentials: 'include', 
      });
      const res=await data.json();
    if(res.success===false){
      dispatch(signOutUserFailure(res.message));
      
      return;
    }
    dispatch(signOutUserSuccess()); 
  }
    catch(error){
      dispatch(signOutUserFailure(error.message));
    return;}
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