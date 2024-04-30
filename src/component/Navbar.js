import React, { Component, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../container/route'; // Import routes from your route file

const Navbar = () => {
  const location = useLocation();
  const [name,setName]=useState([])
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Brand/logo */}
          <Link to="/" className="text-xl font-bold">Home</Link>
          
          {/* Responsive menu button */}
          <button className="block lg:hidden focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          {/* Navbar links */}
          <ul className="hidden lg:flex lg:space-x-4">
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  to={route.path.split(':')[0]}
                  className={`hover:text-gray-300 ${location.pathname === route.component ? 'text-gray-300' : ''}`}
                >
                  {route.name}
      
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
