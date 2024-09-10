import React, { useState } from 'react';

function Header({ onSidebarToggle }){
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <button 
        onClick={onSidebarToggle} 
        className="text-xl focus:outline-none"
      >
        ☰
      </button>
      <div className="flex-1 text-center">
        <h2>JUPITER</h2>
        <img 
          src="/path/to/your/logo.png" 
          alt="Logo" 
          className="h-8 mx-auto"
        />
      </div>
    </header>
  );
};

export default Header;
