import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import Scrapdetail from '../components/Scrapdetail';

const   Viewdealer = () => {

    const { currentUser } = useSelector((state) => state.user);
    const [dealer, setdealer] = useState({});
    const [adminButton, setAdminButton] = useState(false);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const {id} =useParams();

    const navigate=useNavigate();
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

    useEffect(() => {
        if(currentUser.isadmin && !dealer.isadmin){
            setAdminButton(true);
        }
        else{
            setAdminButton(false);
        }
    }, [currentUser, dealer]);

    const adminHandler = async(event)=>{
        try{
            const res=await fetch(`http://localhost:3001/api/admin/dealeradmin/${id}`);
            const data = await res.json();
            navigate(-1);
        }catch(error){
            console.log(error);
        }
    }
        
    return (
        <div>
            <h1>Dealer details</h1>
            

                        <p>Dealer Name: {dealer.username}</p>
                        <p>Dealer email: {dealer.email}</p>
                        <p>Dealer city: {dealer.city}</p>
                        <p>Dealer Address: {dealer.address}</p>
                        <p>Rating: {dealer.average} </p>
                        {adminButton ? (<button onClick={adminHandler}>Make Admin</button>) : <></>}
                        
                       
                        
             
            {error?<p>{error}</p>:<></>}
            <br />
            {message?<>{message}</>:<></>}
        </div>
    );
};

export default Viewdealer;
