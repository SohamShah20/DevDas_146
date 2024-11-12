
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
              The Kabadiwala.com (Start-up India Recognized) is a product of
              Asar Green Kabadi Pvt. Ltd., a technology-driven company working
              on a SaaS model to organize the waste management sector.
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
                      ? "Our vision is to bring a circular economy into reality, where used products are manufactured into new products to minimize the over-exploitation of natural resources and maximize recycling."
                      : value === "Mission"
                      ? "Our mission is to make a world where nothing is wasted, and communities build an eco-system of sustainable living through the right waste treatment to get it recycled."
                      : "Our goal is to make recycling accessible to all, from institutions to individuals, through continuous innovation in technology."}
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
            We believe that India can achieve a greener, cleaner environment as
            every household commits to recycling their dry waste.
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
