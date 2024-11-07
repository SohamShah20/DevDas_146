import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';
import { Link } from 'react-router-dom';
const   Viewacceptedrequests = (props) => {
    const { currentUser } = useSelector((state) => state.user);
    const [requests, setRequests] = useState([]);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const setdealer=props.setdealer;
    const id="njsnjndnwkmdkwf";
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/customer/getacceptedrequests/${currentUser._id}`);
                const data = await res.json();
             
                setRequests(data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        if (currentUser) {
            fetchRequests();
        }
    }, [currentUser]);

    const clickhandler=(event,index)=>{
        setdealer(requests[index].dealer_id);
      }  

       
    return (
        <div>
            <h1>Requests</h1>
            {requests.length === 0 ? (
                <p>No requests found.</p>
            ) : (
                requests.map((request, index) => {
                    const id = request.dealer_id;
                    return(<div key={index}>
                        <p>Customer Name: {request.custname}</p>
                        <p>Customer email: {request.email}</p>
                        <p>Date of Scrap pickup: {request.date}</p>
                        <p>Time of Scrap pickup: {request.time}</p>
                       
                         
                        Scrap Details:<Scrapdetail scrapDetail={request.scrapData} /><br />
                        <Link  to={`/viewdealer/${id}`}>View dealer details</Link>
                        <hr/>
                        
                    </div>)
})
            )}
            {error?<p>{error}</p>:<></>}
            <br />
            {message?<>{message}</>:<></>}
        </div>
    );
};

export default Viewacceptedrequests;