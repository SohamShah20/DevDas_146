import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import Scrapdetail from '../components/Scrapdetail';
const   Viewdealer = (props) => {
    const { currentUser } = useSelector((state) => state.user);
    const [dealer, setdealer] = useState({});
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const {id} =useParams();
    useEffect(() => {
        const fetchdealer = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/customer/getdealer/${id}`);
                const data = await res.json();
                setdealer(data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        if (currentUser) {
            fetchdealer();
        }
    }, [currentUser]);

        
    return (
        <div>
            <h1>Dealer details</h1>
            

                        <p>Dealer Name: {dealer.username}</p>
                        <p>Dealer email: {dealer.email}</p>
                        <p>Dealer city: {dealer.city}</p>
                        <p>Dealer Address: {dealer.address}</p>
                         
                        
                        
                       
                        
             
            {error?<p>{error}</p>:<></>}
            <br />
            {message?<>{message}</>:<></>}
        </div>
    );
};

export default Viewdealer;
