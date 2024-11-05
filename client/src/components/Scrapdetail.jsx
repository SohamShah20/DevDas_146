import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Scrapdetail = (props) => {
    const details=props.scrapDetail;
  const { currentUser,iscust} = useSelector((state) => state.user);
  const [message,setmessage]=useState(null);
  return (
    
    <div>
      {details.map((request, index) => (
                    <div key={index}>
                        
                        <p>{index+1}-Type:{request.type}</p>
                        <p>Quantity:{request.quantity}</p>
                      
                        
                        
                        
                    </div>
                ))}
        
     
    </div>
  )
}

export default Scrapdetail;