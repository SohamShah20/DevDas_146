import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-green-600 text-white text-center py-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Committed to a Sustainable Future</p>
        </header>

        <section className="p-6 md:p-10 space-y-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mt-2">
              At [Your Company Name], we strive to build a sustainable ecosystem by redefining waste management practices. Founded in [Year of Establishment], our mission is to make recycling easy, efficient, and impactful for individuals and businesses.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              Our mission is to drive a sustainable waste management system that not only reduces landfill waste but also conserves resources for future generations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              We envision a world where waste is transformed into resources, contributing to a cleaner, greener planet. By promoting a circular economy, we aim to minimize waste and maximize environmental impact.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800">What We Do</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li><span className="font-bold">Paper Recycling</span>: Transforming paper waste into new products.</li>
              <li><span className="font-bold">Plastic Recycling</span>: Reducing plastic waste through sustainable recycling.</li>
              <li><span className="font-bold">Electronic Waste Management</span>: Safely recycling electronic waste.</li>
              <li><span className="font-bold">Metal Recycling</span>: Repurposing metal waste to reduce resource extraction.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Convenient and reliable waste collection services.</li>
              <li>Eco-friendly processes and sustainable practices.</li>
              <li>Transparent and accountable waste management solutions.</li>
              <li>Dedicated to promoting a cleaner environment.</li>
            </ul>
          </div>
        </section>

        <footer className="bg-gray-800 text-white text-center py-6">
          <p>Join us in creating a sustainable future. Together, we can make a difference!</p>
          <p className="mt-2">Contact us at <span className="text-green-400">contact@yourcompany.com</span></p>
        </footer>
      </div>
    </div>
  );
}

export default AboutUs;
