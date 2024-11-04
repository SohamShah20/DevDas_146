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
  const {currentUser}=useSelector((state)=>state.user)
  const[formData,setformData]=useState({});
  const[error,seterror]=useState(null);
  const[isLoading,setisLoading]=useState(false);
  const setmessage=props.setmessage;
 const navigate=useNavigate();
  async function handlechange(event){
   setformData({
    ...formData,
     [event.target.name]:event.target.value
   })
   console.log(formData);
  }
   
  const  submitHandler= async(event)=>{
    event.preventDefault();
    setisLoading(true);
   formData.address=currentUser.address;
   formData.custname=currentUser.username;
   formData.email=currentUser.email;
    try {
     
      const res = await fetch('http://localhost:3001/api/customer/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      setmessage(data);
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
          <input name= "date" type="date" onClick={handlechange}/>
          <input type="time" name="time" onClick={handlechange}/> 
          {isLoading?<>Loading..</>:<button>Submit</button>}
            </form>
            {error?<>{error}</>:<></>}
        </div>
    )
}

export default Request;