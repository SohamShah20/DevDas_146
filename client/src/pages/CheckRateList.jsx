import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckRateList = () => {
    const { currentUser } = useSelector((state) => state.user);
  const [scraps, setScraps] = useState([]);
  const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchScraps = async () => {
          try{
            const res = await fetch(`http://localhost:3001/api/customer/getscraps`);
            const data = await res.json();
            setScraps(data);
          }catch(error){
            setError('Error fetching scraps: ', error);
            console.log(error);
          }
        };
    
        if(currentUser){
          fetchScraps();
        }
      }, [currentUser])

  return (
    <div>
        <h1>Rate List</h1>
        {scraps.map((scrap, index)=>(
                    <div key={index}>
                        <p>Scrap: {scrap.type}</p>
                        <p>Price (per kg): {scrap.price}</p>
                    </div>
        ))}
    </div>
  )
}

export default CheckRateList;