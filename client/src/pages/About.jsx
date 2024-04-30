// About.jsx

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Hao Chapchap</h1>
        <p className="text-gray-600 mb-6">
          At Hao Chapchap, we're committed to simplifying the house-hunting process for you. Our platform connects house owners with potential renters or buyers, making it easier for everyone to find their ideal home.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to revolutionize the way people search for houses. We believe that finding a home should be quick, convenient, and stress-free. With Hao Chapchap, you can discover available houses, compare prices, and connect directly with house owners.
        </p>
        <h2 className="text-xl font-semibold mb-2">How It Works</h2>
        <p className="text-gray-600 mb-6">
          - House Owners: List your property details (location, price, size) and contact information. Reach a wider audience effortlessly.
          <br />
          - House Seekers: Browse through our listings, filter by preferences, and find your dream home. Say goodbye to endless hours of searching!
        </p>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions or feedback? Reach out to our friendly customer care team:
          <br />
          Email: <a href="mailto:info@haochapchap.com" className="text-blue-500 hover:underline">info@haochapchap.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;
