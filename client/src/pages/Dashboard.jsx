
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';


import Adminboard from '../components/Adminboard';
import Cust from '../components/Cust';
import Scrapdealer from '../components/Scrapdealer';
const Dashboard = () => {
  const { currentUser,iscust} = useSelector((state) => state.user);

  
  return (
    
    <div>

      {currentUser.isadmin?<Adminboard/>:<div> {iscust?<Cust/>
       :<Scrapdealer/>}</div>}
       

        
        <Link to="/history"><p>View Your Requests</p></Link>

        <Link to="/request"><p>Put Up a New Request</p></Link>
        

    </div>
  )
}

export default Dashboard;