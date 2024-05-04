import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons library

const AboutTalha = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-lg text-gray-700">
          Hey there! I'm Talha Khalid, a passionate programmer with a diverse set of skills and a penchant for creative problem-solving. From crafting elegant code to designing immersive 3D environments, I thrive on pushing the boundaries of what's possible in the world of technology.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">My Expertise</h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li>Proficient in languages such as C, C++, Python, JavaScript, and Java.</li>
          <li>Extensive experience in web development with frameworks like React and Node.js.</li>
          <li>Skilled in embedded systems programming, particularly with Arduino and microcontrollers.</li>
          <li>Passionate about data science and its applications in real-world scenarios.</li>
          <li>Knowledgeable in network programming and cybersecurity principles.</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Interests</h2>
        <p className="text-lg text-gray-700">
          Apart from programming, I have a keen interest in 3D designing using tools like Blender. Creating visually stunning environments and models allows me to explore my artistic side and brings a unique perspective to my projects. Additionally, I'm a musician at heart, finding solace and inspiration in the world of music.
        </p>
        {/* Social media links */}
        <div className="mt-4 flex space-x-4">
          <a href="https://github.com/iot-Noob" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-gray-500 hover:text-gray-700 transition duration-300" />
          </a>
          {/* Example for LinkedIn */}
          <a href="https://www.linkedin.com/in/talha-khalid-983950204/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-blue-500 hover:text-blue-700 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutTalha;
