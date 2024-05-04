// src/pages/About.js

import React from 'react';

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Dynamic routing simplifies route management in React applications by automating the process of importing route components. By following the configuration described above, developers can easily implement dynamic routing in their projects.
      </p>
      <p className="mt-4">
        This application is built with Create React App, React Router, and utilizes dynamic routing for efficient route management.
      </p>
      <p className="mt-4">
        Our team is dedicated to providing high-quality software solutions and contributing to the development community. We strive to make web development accessible and enjoyable for everyone.
      </p>
      <p className="mt-4">
        Feel free to explore our website and reach out to us with any questions or feedback. We appreciate your support!
      </p>
      <p className="mt-4">
        Created by <span className="text-blue-500">M Talha Khalid</span>, IOT Noob.
      </p>
    </div>
  );
};

export default About;
