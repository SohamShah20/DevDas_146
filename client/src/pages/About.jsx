
import React from 'react';
import Footer from '../components/Footer.jsx';
import { useState,useEffect } from "react";

const About = () => {
  //
  return (
    <div>
      <div className="font-sans text-gray-700 bg-gradient-to-b from-green-100 via-teal-50 to-blue-100 min-h-screen py-10 px-6">
        {/* About Us Section */}
        <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 mb-12 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:border-2 hover:border-green-300">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-3xl text-gray-800 mb-6 pb-1 border-b-4 border-blue-900 mx-auto">
              About Us
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 text-center">
            Scrap Wallah bridges the gap between dealers and customers to promote a circular economy in the scrap industry. Our platform lets users easily place scrap requests, manage profiles, track requests, and handle secure billing and payments. We’re dedicated to providing seamless, eco-friendly solutions that benefit both the environment and the community.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 mb-12 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:border-2 hover:border-green-300">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-3xl text-gray-800 mb-6 pb-1 border-b-4 border-blue-900 mx-auto">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Vision", "Mission", "Goal"].map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105 hover:bg-teal-100 hover:border-2 hover:border-teal-300"
                >
                  <h3 className="text-xl font-semibold text-green-600 mb-4">
                    {value}
                  </h3>
                  <p className="text-gray-700">
                    {value === "Vision"
                      ? "To lead the way in sustainable recycling by connecting dealers and customers through a seamless platform. We aim to foster a circular economy where resources are reused efficiently, benefiting both the environment and society."
                      : value === "Mission"
                      ? "To empower responsible recycling by offering a simple platform for scrap requests, secure payments, and efficient dealer interactions. We’re committed to making sustainable practices easy and accessible for all."
                      : "To make sustainable recycling accessible, efficient, and beneficial for all through innovative dealer-customer connections."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 mb-12 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:border-2 hover:border-green-300">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl text-gray-800 mb-6 pb-1 border-b-4 border-blue-900 mx-auto">
            Our Beliefs
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
          We believe in the power of responsible recycling to create a sustainable future, the importance of a circular economy for resource efficiency, and the value of transparent, user-friendly interactions that empower both dealers and customers. At Scrap Wallah, we are committed to environmental stewardship, community support, and driving positive change through technology.
          </p>
          
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Minimizing Landfills", "Maximizing Recycling"].map(
              (belief, index) => (
                <div
                  key={index}
                  className="hover:bg-teal-50 p-4 rounded-lg transition-all duration-300 hover:border-2 hover:border-teal-300"
                >
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                    {belief}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {belief === "Minimizing Landfills"
                      ? "Effective waste management starting at the household level through waste segregation can significantly mitigate the expansion of landfills."
                      : "We partner with businesses and institutions to foster an ecosystem focused on recycling and sustainable practices."}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Transparency Section */}
        <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 mb-12 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:border-2 hover:border-green-300">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl text-gray-800 mb-6 pb-1 border-b-4 border-blue-900 mx-auto">
            Transparency, Traceability, and Scalability
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Our suite of apps organizes the waste management process from
            collection to recycling, ensuring transparency and scalability
            across all stages.
          </p>
          /</div>
        </section>

        {/* Contact Information */}
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
