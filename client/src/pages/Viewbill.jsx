import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import Scrapdetail from '../components/Scrapdetail';

const   Viewbill = () => {

    const { currentUser } = useSelector((state) => state.user);
    const [details, setdetails] = useState([]);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [bill,setbill]=useState({});
    const {req_id} =useParams();

    useEffect(() => {
        const fetchdealer = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/customer/getbill/${req_id}`);
                const data = await res.json();
                setdetails(data.scrapdata);
                setbill(data);
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
            <h1>Bill details</h1>
            
          <p>Customer Name:{bill.custname}</p>
          <p>Dealer Name:{bill.dealername}</p>             
                     
                         
          <div >
            <div className='flex justify-between'>
            <p>Type</p>
            <p>Quantity</p>
            <p>Price per kg</p>
            <p>total</p>
            </div>
      {
      details.map((detail, index) => (
                    <div key={index} className='flex justify-between'>
                        
                        <p>{detail.type}</p>
                        <p>{detail.quantity}</p>
                        <p>{detail.rateperunit}</p>
                        <p>{detail.total}</p>
                        
                        
                    </div>
                ))
                }
        <p> Grand Total:{bill.gtotal}</p>
     
    </div> 
                        
                       
                        
             
            {error?<p>{error}</p>:<></>}
            <br />
            {message?<>{message}</>:<></>}
        </div>
    );
};

export default Viewbill;
