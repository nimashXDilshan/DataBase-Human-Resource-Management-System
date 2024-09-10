import React, { useState, useEffect, useRef } from 'react';
import Logofooter from '../Components/Logo-Footer/logofooter';
import HomeHeader1 from '../Components/Home header/homeheader';
import BannerHome2 from '../Components/Banner/banner2';
import BannerHome1 from '../Components/Banner/banner';
import ClothCollection from '../Components/ClothCollection/clothcollection';

const HomePage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (isNavbarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <>
      <div className="relative">
        
        {/* Button Section */}
        <button
          onClick={toggleNavbar}
          className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 fixed top-4 left-4 z-50"
        >
          ☰
        </button>

        {/* Sidenavbar Section */}
        <div
          ref={navbarRef}
          className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 transform ${
            isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg z-40`}
        >
          <h2 className="text-2xl font-bold mb-8">Navigation</h2>
          <ul className="space-y-4">
            <li className="group">
              <a href="./" className="flex items-center space-x-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 4v6m0 0h6m-6 0v-6"></path>
                </svg>
                <span className="group-hover:text-white transition duration-300">Home</span>
              </a>
            </li>
            <li className="group">
              <a href="./About" className="flex items-center space-x-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12v.01M19.062 8.938l-.708-.707M15 5h-.01M12 3v.01M8.938 4.938l-.707-.707M3 12v.01M4.938 19.062l-.707-.708M12 21v-.01M16.062 19.062l-.707-.708"></path>
                </svg>
                <span className="group-hover:text-white transition duration-300">About</span>
              </a>
            </li>
            <li className="group">
              <a href="./Services" className="flex items-center space-x-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 0h8m-8 0H4"></path>
                </svg>
                <span className="group-hover:text-white transition duration-300">Services</span>
              </a>
            </li>
            <li className="group">
              <a href="./Contact" className="flex items-center space-x-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10l-6-6M3 10l6-6m12 6v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m4-6h4"></path>
                </svg>
                <span className="group-hover:text-white transition duration-300">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <div class=""><BannerHome2/></div>
      <div><ClothCollection/></div>
      <div><BannerHome1/></div>
     
      <div><Logofooter/></div>
    </>
  );
};

export default HomePage;
