import React, { useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
   setiscust
  } from '../redux/user/userSlice';
const Adminboard = () => {
  const { currentUser,iscust} = useSelector((state) => state.user);
 const dispatch=useDispatch();
if(iscust) dispatch(setiscust(false));
  return (
    
    <div>
       
        <h1>Welcome, {currentUser.username}!</h1>
        <p>Create a scrap pickup</p>
        <Link to="/createdealer">create</Link>
        
    </div>
  )
}

export default Adminboard;