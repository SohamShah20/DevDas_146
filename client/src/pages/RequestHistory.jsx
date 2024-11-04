import React from 'react';
import Scraps from '../components/Scraps';

const RequestHistory = (props) => {
  return (
    <div>
        <p>Your Requests: </p>
        <Scraps scraps = {props.scraps} />
    </div>
  )
}

export default RequestHistory;