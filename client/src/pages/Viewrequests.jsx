import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';
import { useNavigate } from 'react-router-dom';
import { signOutUserSuccess } from '../redux/user/userSlice';
const   Viewrequests = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [requests, setRequests] = useState([]);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/customer/getrequests/${currentUser._id}`);
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
        <div>
            <h1>Requests</h1>
            {requests.length === 0 ? (
                <p>No requests found.</p>
            ) : (
                requests.map((request, index) => (
                    <div key={index}>
                        <p>Customer Name: {request.custname}</p>
                        <p>Customer email: {request.email}</p>
                        <p>Date of Scrap pickup: {request.date}</p>
                        <p>Time of Scrap pickup: {request.time}</p>
                        
                         
                        Scrap Details:<Scrapdetail scrapDetail={request.scrapData} />
                        <button onClick={(event)=>handledelete(event,index)}>Delete request</button>
                        <button>Update request</button>
                        <hr/>
                        
                    </div>
                ))
            )}
            {error?<p>{error}</p>:<></>}
            <br />
            {message?<>{message}</>:<></>}
        </div>
    );
};

export default Viewrequests;
