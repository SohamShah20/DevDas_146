import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';



const   Viewrequests = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [requests, setRequests] = useState([]);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);


    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/customer/getrequests/${currentUser._id}`);
                const data = await res.json();
                setRequests(data);
            } catch (error) {
                console.error('Error fetching requests:', error);
                seterror('Failed to fetch requests.');
            }
        };

        if (currentUser) {
            fetchRequests();
        }
    }, [currentUser]);


   
async function handledelete(event,index){
    const id=requests[index]._id;
    try{const res = await fetch(`http://localhost:3001/api/customer/deletereq/${id}`, {
        method: 'DELETE',
      
        credentials: 'include',
        
      });

      const data=res.json();
      if(data.success!==true){
        seterror(data.message);
        return;
      }

      setmessage(data.message);
    }
      catch(error){
        seterror(error.message);
        return;
      }
}
       

    return (
        <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen p-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">Scrap Pickup Requests</h1>
            {requests.length === 0 ? (
                <div
                className="text-center p-6 bg-white rounded-lg shadow-lg border-l-4 border-yellow-400 max-w-md mt-10 transform transition-all duration-300 hover:scale-105"
            >
                <p className="text-2xl font-medium text-gray-700 mb-2">No Requests Yet!</p>
                <p className="text-gray-600">
                    It looks like there are no scrap pickup requests at the moment. Once customers make requests, you’ll see them here.
                </p>
            </div>
            
            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {requests.map((request, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-lg p-6 border-l-4 border-green-500 hover:border-green-700 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <p className="text-lg font-semibold text-gray-700">
                                Customer Name: <span className="font-bold text-green-700">{request.custname}</span>
                            </p>
                            <p className="text-gray-600 mt-1">
                                Customer Email: <span className="text-gray-800">{request.email}</span>
                            </p>
                            <p className="text-gray-600 mt-1">
                                Pickup Date: <span className="text-gray-800">{request.date}</span>
                            </p>
                            <p className="text-gray-600 mt-1">
                                Pickup Time: <span className="text-gray-800">{request.time}</span>
                            </p>
                            <div className="mt-4">
                                <h3 className="text-md font-semibold text-gray-700 mb-2">Scrap Details:</h3>
                                <Scrapdetail scrapDetail={request.scrapData} />
                                  
                            </div>
                        <button onClick={(event)=>handledelete(event,index)}>Delete request</button><br/>
                        <button>Update request</button>
                        </div>
                    ))}
                </div>

            )}
            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
            {message && <p className="text-green-600 text-center mt-4">{message}</p>}
        </div>
    );
};

export default Viewrequests;
