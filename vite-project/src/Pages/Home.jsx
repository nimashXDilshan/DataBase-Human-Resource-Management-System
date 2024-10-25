import React, { useState, useEffect, useRef } from 'react';
import Logofooter from '../Components/Logo-Footer/logofooter';
import HomeHeader1 from '../Components/Home header/homeheader';
import BannerHome2 from '../Components/Banner/banner2';
import Products from '../Components/Banner/Products';
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
      

      {/* Main Content Section */}
      <div className="banner-container">
        <BannerHome2 />
        <Products />
        <ClothCollection />
        <BannerHome1 />
      </div>
     
      <Logofooter />
    </>
  );
};

export default HomePage;