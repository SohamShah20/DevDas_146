import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Scrapdealer = () => {
  const { currentUser} = useSelector((state) => state.user);

  return (
    
    <div>
        
        <h1>Welcome, {currentUser.username}!</h1>
        <Link to={'/getrequests'}>SEE REQUESTS
        </Link>
      
    </div>
  )
}

export default Scrapdealer;