import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const GetRequests = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/dealer/getrequests/${currentUser._id}`);
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
                requests.map((request, index) => (
                    <div key={index}>
                        <p>{request.custname}</p>
                        <p>{request.email}</p>
                        <p>{request.date}</p>
                        <p>{request.time}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
};

export default GetRequests;
