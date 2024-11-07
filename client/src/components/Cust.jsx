import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Cust = () => {
  const { currentUser,iscust} = useSelector((state) => state.user);
  const [message,setmessage]=useState(null);
  return (
    
    <div>
     
        <h1>Welcome, {currentUser.username}!</h1>
        
       
        
        <Link to="/history"><p>View request History</p></Link>

<Link to="/request"><p>Put Up a New Request</p></Link>
<Link to="/viewrequests"><p>View Your Requests</p></Link>
<Link to="/viewacceptedrequests"><p>View Your Accepted Requests</p></Link>
    </div>
  )
}

export default Cust;