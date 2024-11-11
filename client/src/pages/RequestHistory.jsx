import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';
import { Link } from 'react-router-dom';
const   RequestHistory = (props) => {
    const { currentUser } = useSelector((state) => state.user);
    const [requests, setRequests] = useState([]);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const setdealer=props.setdealer;
 
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/customer/getclosedrequests/${currentUser._id}`);
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

 
    return (
        <div>
            <h1>Requests</h1>
            {requests.length === 0 ? (
                <p>No requests found.</p>
            ) : (
                requests.map((request, index) => {
                    const id = request.dealer_id;
                    const req_id = request._id;
                    return(<div key={index}>
                        <p>Customer Name: {request.custname}</p>
                        <p>Customer email: {request.email}</p>
                        <p>Date of Scrap pickup: {request.date}</p>
                        <p>Time of Scrap pickup: {request.time}</p>
                         
                        Scrap Details:<Scrapdetail scrapDetail={request.scrapData} /><br />
                        <Link  to={`/viewdealer/${id}`}>View dealer details</Link><br />
                        <Link  to={`/viewbill/${req_id}`}>View Bill</Link><br />
                        {!request.givenFeedback ? <Link to={`/givefeedback/${req_id}`}>Give Feedback</Link> : <></>}
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

export default RequestHistory;
