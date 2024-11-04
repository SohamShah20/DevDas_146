import React from 'react';
import './Scrap.css';

const Scrap = ({id, type, quantity, price, date, time, status}) => {
  return (
    <div>
        <div className = "box">
        <div>
            <h4>Scrap: {type}</h4>
        </div>
        <div>
            <h4>Quantity: {quantity} kg</h4>
        </div>
        <div>
            <h4>Price: {price} Rs</h4>
        </div>
        <div>
            <h4>Date Sold: {date}, {time}</h4>
        </div>
        <div>
            <h4>Status: {status}</h4>
        </div>
    </div>
    </div>
  )
}

export default Scrap;