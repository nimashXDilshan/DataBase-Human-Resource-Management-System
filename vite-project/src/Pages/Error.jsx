import React from 'react';

function Error() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen bg-cover bg-center text-center" style={{ 
      backgroundImage: 'url("https://miro.medium.com/v2/resize:fit:828/format:webp/1*1MoP0cSyEdHn3XEjBWKrdg.jpeg")',
      filter: 'brightness(1.2) contrast(0.8)' // Increases brightness and decreases contrast
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Slightly lighter overlay */}
      <div className="relative z-10 p-6 md:p-10 rounded-lg text-center space-y-6 mt-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-wide animate-pulse">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-gray-200">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Sorry, the page you are looking for does not exist or has been moved. You can return to the homepage by clicking the button below.
        </p>
        <a href="/" className="inline-block mt-5 px-8 py-3 text-lg font-medium text-teal-400 border border-teal-400 rounded-full hover:text-white hover:bg-teal-400 transition duration-300 ease-in-out transform hover:scale-105">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default Error;
