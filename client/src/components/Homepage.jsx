import React, { forwardRef } from 'react';
import final from '../assets/final.mp4';
import Twriter from '../components/Twriter';
import Footer from '../components/Footer.jsx';
import lowResPoster from '../assets/load4.png';

const Homepage = forwardRef(({ isLoading, setIsLoading }, ref) => {
  return (
    <div>
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video
          ref={ref}
          id="background-video"
          src={final}
          preload="auto"
          autoPlay
          loop
          muted
          className={`w-full h-full object-cover ${isLoading ? 'hidden':'block' }`}
          poster={lowResPoster}
        ></video>
      </div>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center mt-32 md:mt-40 px-4 md:px-0">
        <h1 className="text-2xl md:text-6xl text-white font-bold">Got any Scrap !!!</h1>
        <Twriter />
      </div>

      <div className="flex flex-col relative z-10 mt-48 md:mt-80">
        <div className="mt-20 w-full h-16 md:h-20 bg-gray-700"></div>
        <section className="bg-white py-8 md:py-10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-black text-center mb-6 md:mb-8">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Vision */}
              <div className="bg-slate-700 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-100 hover:scale-105 hover:bg-gray-200 hover:border-2 hover:border-black hover:text-black group">
                <h3 className="text-2xl md:text-3xl font-semibold text-green-600 mb-3 md:mb-4">
                  Vision
                </h3>
                <p className="text-white text-sm md:text-base group-hover:text-black">
                  Our vision is to bring a circular economy into a reality where used products are manufactured into new products to minimize the over-exploitation of natural resources and maximize recycling.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-slate-700 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-100 hover:scale-105 hover:bg-gray-200 hover:border-2 hover:border-black hover:text-black group">
                <h3 className="text-2xl md:text-3xl font-semibold text-green-600 mb-3 md:mb-4">
                  Mission
                </h3>
                <p className="text-white text-sm md:text-base group-hover:text-black">
                  Our mission is to make a world where nothing is wasted, the communities from around the globe building an eco-system of sustainable living through doing the right waste treatment that is to get it recycled.
                </p>
              </div>

              {/* Goal */}
              <div className="bg-slate-700 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-100 hover:scale-105 hover:bg-gray-200 hover:border-2 hover:border-black hover:text-black group">
                <h3 className="text-2xl md:text-3xl font-semibold text-green-600 mb-3 md:mb-4">
                  Goal
                </h3>
                <p className="text-white text-sm md:text-base group-hover:text-black">
                  Through continuous innovation of technology, our goal is to make recycling achievable and accessible to all, from institutions to individuals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
});

export default Homepage;
