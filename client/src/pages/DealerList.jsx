import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const DealerList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [dealers, setDealers] = useState([]);
    const [error, seterror] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!currentUser){
            navigate('/');
        }
        if(!currentUser.isadmin){
            navigate(-1);
        }
    }, [currentUser])

    useEffect(() => {
        const fetchDealers = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/admin/getdealers/`);
                const data = await res.json();
                setDealers(data);
            } catch (error) {
                console.error('Error fetching requests:', error);
                seterror('Failed to fetch requests.');
            }
        };

        if (currentUser) {
            fetchDealers();
        }
    }, [currentUser]);

  return (
    <div>
        <h1>Dealers</h1>
        {dealers.length == 0 ? (<p>No Dealers Created!</p>) : (<div>
            {dealers.map((dealer, index)=>{
                const id = dealer._id;
                return(
                    <div key={index}>
                        <p>Dealer Email: {dealer.email}</p>
                        <Link to={`/viewdealer/${id}`}>View Dealer</Link>
                    </div>
                );
            })}
        </div>)}
    </div>
  )
}

export default DealerList;