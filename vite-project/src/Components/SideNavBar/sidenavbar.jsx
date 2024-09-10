import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

function Sidebar(){
  return (
    <div className="h-screen bg-gray-800 text-white w-64">
      <div className="p-4 text-2xl font-bold">MyApp</div>
      <ul className="mt-6">
        <li>
          <Link
            to="/home"
            className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
          >
            <i className="fas fa-home mr-3"></i> {/* FontAwesome icons */}
            Home
          </Link>
        </li>  
        <li>
          <Link
            to="/about"
            className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
          >
            <i className="fas fa-user mr-3"></i>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
          >
            <i className="fas fa-cogs mr-3"></i>
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
          >
            <i className="fas fa-envelope mr-3"></i>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
