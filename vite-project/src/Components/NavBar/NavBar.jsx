// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  

  return (
    <nav className="bg-slate-900	text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <a href="/" className="text-2xl font-bold">JUPITER</a>
        <button
          className="lg:hidden px-3 py-2 border border-gray-600 rounded text-gray-200 hover:text-emerald-500		 hover:border-gray-700	"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <ul className={`lg:flex lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 absolute lg:static top-16 left-0 right-0 bg-gray-800 lg:bg-transparent lg:shadow-none shadow-lg p-4 lg:p-0`}>
        <li>
            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-4 rounded hover:bg-gray-700">About</Link>
          </li>
          {/* <li>
            <Link to="/services" className="block py-2 px-4 rounded hover:bg-gray-700">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-4 rounded hover:bg-gray-700">Contact</Link>
          </li> */}
          <li>
            <Link to="/error" className="block py-2 px-4 rounded hover:bg-gray-700">Error</Link>
          </li>  
          <li>
            <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
          </li>  
          <li>
            <Link to="/sidebar" className="block py-2 px-4 rounded hover:bg-gray-700">SideBar Nav</Link>
          </li>  
          <li>
            <Link to="/I'm Employee" className="block py-2 px-4 rounded hover:bg-gray-700">I'm Employee</Link>
          </li>  
          <li>
            <Link to="/profile1" className="block py-2 px-4 rounded hover:bg-gray-700">Profile1</Link>
          </li> 
          <li>
            <Link to="/Leave" className="block py-2 px-4 rounded hover:bg-gray-700">Leave</Link>
          </li>  
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
