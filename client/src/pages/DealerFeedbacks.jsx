import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const DealerFeedbacks = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/dealer/getfeedbacks/${currentUser._id}`
        );
        const data = await res.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    if (currentUser) {
      fetchFeedbacks();
    }
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-10 flex flex-col items-center">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl mb-8 w-full max-w-3xl text-center border-b-4 border-green-500">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Dealer Feedbacks
        </h1>
        <p className="mt-2 text-gray-600">
          View feedback from customers about your services
        </p>
      </div>

      {/* Feedback Alerts */}
      {feedbacks.length === 0 && (
        <div className="p-4 bg-yellow-100 text-yellow-700 rounded-lg w-full max-w-3xl text-center border border-yellow-200 mb-6">
          You have no feedbacks yet.
        </div>
      )}

      {/* Feedback Cards */}
      <div className="grid gap-6 max-w-3xl w-full">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Feedback from {feedback.customer}
                </h2>
                <span className="text-sm text-gray-500">
                  Rating: {feedback.rating}
                </span>
              </div>
              {/* Request ID is commented out in original code */}
              {/* <p className="text-gray-600"><strong>Request ID:</strong> {feedback.request_id}</p> */}
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Rating Provided:</strong> {feedback.rating}
              </p>

              {/* Detailed feedback (if any) */}
              {feedback.description && (
                <div className="p-4 bg-gray-100 rounded-lg mt-4">
                  <p className="text-gray-700">
                    <strong>Customer Comment:</strong> {feedback.description}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No feedbacks available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default DealerFeedbacks;
