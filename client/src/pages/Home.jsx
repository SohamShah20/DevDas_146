import React from 'react';
import Homevid from '../assets/new.mp4';

const Home = () => {
  return (
    <div>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
                <video className="w-full h-full object-cover" src={Homevid} autoPlay loop muted></video>

            </div>
      <div className="relative z-10 text-center text-white item-center mt-40">
        <h1 className="text-4xl md:text-6xl font-bold ">
          Scrap Dealer
        </h1>
        <p className="text-lg md:text-xl pt-2 mb-8">
          Sell us your recyclable wastes and help contribute to the circular economy.
        </p>
      </div>
    </div>
  )
}

export default Home;