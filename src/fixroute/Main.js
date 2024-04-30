import React from 'react';

const Main = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-44">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dynamic BoilerPlate React!!</h1>
        <img src="https://thumbs.dreamstime.com/b/hot-chicken-fire-logo-icon-labels-design-elements-vector-illustration-hot-chicken-fire-label-vector-illustration-111779409.jpg" alt="Giant Chicken Roast" className="rounded-lg shadow-lg mb-4" />
        <p className="text-lg mb-4">Don't miss out on our delicious chicken roast, cooked to perfection!</p>
        <p className="text-sm text-gray-600 mb-8">Automated routing provided by Boilerplate in React by M Talha Khalid, IoT Noob.</p>
        <h2 className="text-2xl font-semibold mb-2">About React Dynamic Route Boilerplate</h2>
        <p className="text-lg mb-4">This boilerplate allows you to create dynamic routes in your React project effortlessly.</p>
        <p className="text-lg mb-4">To add dynamic routes, simply create a new JavaScript file in the pages directory and access it using the specified route path.</p>
        <p className="text-lg">Project by Talha Khalid</p>
      </div>
    </div>
  );
};

export default Main;
