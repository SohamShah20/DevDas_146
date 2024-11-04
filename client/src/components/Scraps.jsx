import React from 'react';
import Scrap from './Scrap';

const Scraps = (props) => {
  console.log(props);
  return (
    <div>
        {
          props.scraps.map((scrap) => {return <Scrap {...scrap} key = {scrap.id} />})
        }
    </div>
  )
}

export default Scraps;