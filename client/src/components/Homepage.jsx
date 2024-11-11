import React, { forwardRef } from 'react';
import final from '../assets/final.mp4';
import Twriter from '../components/Twriter';
import Footer from '../components/Footer.jsx';
import lowResPoster from '../assets/load.png';
const Homepage = forwardRef(({isLoading, setIsLoading}, ref) => {
    return (
        <div className=''>
          {/* Video Background */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            <video  ref ={ref} id="background-video" src={final} preload='auto' autoPlay loop muted  className={`your-video-class ${isLoading ? 'hidden' : 'block'}`}
        poster={lowResPoster}  >

            </video>
          </div>
          
          {/* Overlay */}
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
          
          {/* Text Content */}
          <div className="relative z-10 text-center mt-40">
            <h1 className="text-3xl text-white md:text-6xl font-bold">
              Got any Scrap !!!
            </h1>
            <Twriter/>
          </div>
    
    
         
          <div className="flex flex-col relative z-10 mt-80">
    
          <div className="mt-20 w-full h-20 bg-gray-800 ">
          </div>
          <section className="bg-[#0F0F0F] py-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vision */}
              <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Vision</h3>
                <p className="text-white">
                  Our vision is to bring a circular economy into a reality where used products are manufactured into new products to minimize the over-exploitation of natural resources and maximize recycling.
                </p>
              </div>
              
              {/* Mission */}
              <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Mission</h3>
                <p className="text-white">
                  Our mission is to make a world where nothing is wasted, the communities from around the globe building an eco-system of sustainable living through doing the right waste treatment that is to get it recycled.
                </p>
              </div>
              
              {/* Goal */}
              <div className="bg-gray-800  p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Goal</h3>
                <p className="text-white">
                  Through continuous innovation of technology, our goal is to make recycling achievable and accessible to all, from institutions to individuals.
                </p>
              </div>
            </div>
          </div>
        </section>
            <Footer/>
          </div>
          
        </div>
      );
});
export default Homepage;