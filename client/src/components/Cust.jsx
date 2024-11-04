import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Request from './Request';

const Cust = () => {
  const { currentUser,iscust} = useSelector((state) => state.user);
  const [message,setmessage]=useState(null);
  return (
    
    <div>
     
        <h1>Welcome, {currentUser.username}!</h1>
        
       
        <p>Make a request for scrap pickup</p>
        <Request setmessage={setmessage}/>
       
        {message?<>{message}</>:<></>}
    </div>
  )
}

export default Cust;