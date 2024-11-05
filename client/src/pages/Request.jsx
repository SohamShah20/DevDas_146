import React from 'react';
import '../components/Form.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

function Request(props){
  const {currentUser}=useSelector((state)=>state.user);
  const [scrapData,setscrapData] =useState([{
    type:"",
    quantity:""
  },]);

  const[formData,setformData]=useState({});
  const[error,seterror]=useState(null);
  const[isLoading,setisLoading]=useState(false);

  const[message,setmessage]=useState(null);
  const[allert,setallert]=useState(null);
 const navigate=useNavigate();
  async function handlechange(event){
   setformData({
    ...formData,
     [event.target.name]:event.target.value
   })
   console.log(formData);
  }
   async function change(event,index){
    const data=[...scrapData];
    data[index][event.target.name]=event.target.value;
    setscrapData(data);
  
   
  }
 const add=async(event)=>{
  if(scrapData.length>=5){
    setscrapData(scrapData);
    setallert('No more than 5 items can be added');
  }
   else{
      const object={
    type:"",
    quantity:""
    }

    setscrapData([...scrapData,object]);}
  }
  const remove=async(event,index)=>{
     const data=scrapData.filter((_,i)=>i!==index);


    setscrapData(data);
   } 
  
  const  submitHandler= async(event)=>{
    event.preventDefault();
    setisLoading(true);
    formData.scrapData=scrapData;
   formData.city=currentUser.city;
   formData.custname=currentUser.username;
   formData.email=currentUser.email;
    try {
     
      const res = await fetch('http://localhost:3001/api/customer/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        seterror(data.message);
        setisLoading(false);
        return;
      }
      
      setisLoading(false);
      setmessage(data.message);
      navigate('/');
    } catch (error) {
        setisLoading(false);
      seterror(error.message);
      return;
    }
   
    
  }
    return(
        <div>

            <form onSubmit={submitHandler}>
              <div>
                <p>Scrap Details</p>
              {scrapData.map((scrap,index)=>(
              <div key={index}>

              
              <label>Type of Scrap</label>
              <input type = "text" name="type" onChange={(event)=>change(event,index)} value={scrap.type}/>
              <label>Quantity of Scrap</label>
              <input type = "text" name="quantity" onChange={(event)=>change(event,index)} value={scrap.quantity}/>
              <button type='button' onClick={(event)=>remove(event,index)}>Remove</button>
              </div>
            ))

            }
           {allert?<p>{allert}</p>:<></>} 
          <button type='button' onClick={add}>Add</button>
              </div>
            

            <label><p>Date to Sell</p></label>
            <input name= "date" type="date" onChange={handlechange}/>
            <label><p>Time</p></label>
            <input type="time" name="time" onChange={handlechange} />
          
          {isLoading?<>Loading..</>:<button >Submit</button>}
            </form>
            {error ? <>{error}</> : <></>}
            {message ? <>{message}</> : <></>}
        </div>
    )
}

export default Request;