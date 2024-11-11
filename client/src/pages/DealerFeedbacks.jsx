import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const DealerFeedbacks = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/dealer/getfeedbacks/${currentUser._id}`);
                const data = await res.json();
                setFeedbacks(data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        if (currentUser) {
            fetchFeedbacks();
        }
    }, [currentUser]);

  return (
    <div>
        <h1>Feedbacks</h1>
        {feedbacks.length == 0 ? (
            <p>You have no feedbacks</p>
        ) : (
            feedbacks.map((feedback, index)=>(
                <div key={index}>
                    <p>Customer: {feedback.customer}</p>
                    {/*<p>Request Made: {feedback.request_id}</p>*/}
                    <p>Rating Provided: {feedback.rating}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default DealerFeedbacks;