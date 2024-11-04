import React from 'react';
import { useNavigate } from 'react-router-dom';

const Request = () => {
const navigate = useNavigate();

  function submitHandler(event){
    event.preventDefault();
    navigate('/');
  }

  return (
    <div>
        <form onSubmit = {submitHandler}>
            <label><p>Scrap Type</p></label>
            <input type = "text" />
            <label><p>Scrap Quantity (kg)</p></label>
            <input type = "number" />
            <label><p>Date to Sell</p></label>
            <input type = "date" />
            <label><p>Time</p></label>
            <input type = "time" />
        </form>
    </div>
  )
}

export default Request;