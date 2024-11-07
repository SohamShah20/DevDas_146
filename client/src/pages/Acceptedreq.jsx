import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Scrapdetail from '../components/Scrapdetail';
const Acceptedreq = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [requests, setRequests] = useState([]);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [bill,setbill]=useState({});
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/dealer/getacceptedrequests/${currentUser._id}`);
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

   async function clickhandler(event,index){
   const req=requests[index];
  const id=req._id;

  try{
     const res=fetch(`http://localhost:3001/api/dealer/genreceipt/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        credentials: 'include', 
      });

      const data= await res.json();
      if(data.success!==true){
        seterror(data.message);
        return;
      }
      setmessage(data.message);
      return;
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
                      {request.cangenreceipt?<button onClick={(event)=>clickhandler(event,index)}>Generate Receipt</button>:<></>}
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

export default Acceptedreq;
