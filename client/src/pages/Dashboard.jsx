import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <p>Welcome, User!</p>
        
        <Link to="/history"><p>View Your Requests</p></Link>

        <Link to="/request"><p>Put Up a New Request</p></Link>
        
    </div>
  )
}

export default Dashboard;