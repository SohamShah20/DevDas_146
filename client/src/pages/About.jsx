import React from 'react';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <div>
      <div className="font-sans text-gray-700 bg-gray-50 min-h-screen py-10 px-6">
     

      {/* About Us Section */}
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-600">The Kabadiwala.com (Start-up India Recognized) is a product of Asar Green Kabadi Pvt. Ltd., a technology-driven company working on a SaaS (Software as a Service) model to organize the waste management sector.</p>
      </section>


     <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Vision</h3>
            <p className="text-gray-700">
              Our vision is to bring a circular economy into a reality where used products are manufactured into new products to minimize the over-exploitation of natural resources and maximize recycling.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Mission</h3>
            <p className="text-gray-700">
              Our mission is to make a world where nothing is wasted, the communities from around the globe building an eco-system of sustainable living through doing the right waste treatment that is to get it recycled.
            </p>
          </div>
          
          {/* Goal */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Goal</h3>
            <p className="text-gray-700">
              Through continuous innovation of technology, our goal is to make recycling achievable and accessible to all, from institutions to individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
    



      {/* Belief, Minimizing Landfills, and Maximizing Recycling */}
      <section className="max-w-5xl mx-auto bg-gray-50 shadow-md rounded-lg p-10 mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Beliefs</h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-8">We believe that India can achieve a greener, cleaner environment as every household commits to recycling their dry waste.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Minimizing Landfills</h3>
            <p className="text-lg text-gray-600">Landfills are rapidly expanding, but effective waste management starting at the household level through waste segregation can significantly mitigate this issue.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Maximizing Recycling</h3>
            <p className="text-lg text-gray-600">The Kabadiwala partners with businesses and institutions to foster a conscious ecosystem focused on recycling and sustainable practices.</p>
          </div>
        </div>
      </section>

      {/* Transparency, Traceability, Scalability */}
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Transparency, Traceability, and Scalability</h2>
        <p className="text-lg leading-relaxed text-gray-600">Our suite of apps organizes the waste management process from collection to recycling, ensuring transparency and scalability across all stages.</p>
      </section>

      {/* Contact Information */}
      <section className="max-w-5xl mx-auto bg-gray-50 shadow-md rounded-lg p-10">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-2">The Kabadiwala, 2, Narmadapuram Rd, near D-Mart, Vidya Nagar, Bhopal, Madhya Pradesh 462026</p>
        <p className="text-lg text-gray-600 mb-2">Email: <a href="mailto:contact@thekabadiwala.com" className="text-green-700 hover:underline">contact@thekabadiwala.com</a></p>
        <p className="text-lg text-gray-600">Phone: <a href="tel:+917697260260" className="text-green-700 hover:underline">+91-76972 60260</a></p>
      </section>

      {/* Footer */}
      
   </div>
    <Footer/>
    </div>
  );
};

export default About;