import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Scrapdealer = () => {
  const { currentUser} = useSelector((state) => state.user);

  return (
    
    <div>
        
        <h1>Welcome, {currentUser.username}!</h1>
        <Link to={'/getrequests'} className=''>SEE REQUESTS
        </Link>
        <br />
        <Link to={'/getacceptedrequests'} className=''>SEE ACCEPTED REQUESTS
        </Link>
       <br />
        <Link to={'/gethistory'} className=''>SEE REQUEST HISTORY
        </Link>
    </div>
  )
}

export default Scrapdealer;