import React from 'react';

const ClothCollection = () => {
  return (
    <div className="bg-white py-12 ">
      <section className="container mx-auto px-4 flex flex-col md:flex-row justify-center gap-8 ">
        
        {/* Mission Section */}
        <div className="relative bg-gray-200 p-12 rounded-lg shadow-lg w-full md:w-1/2 min-h-[300px] hover:bg-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out shadow-[5px_5px_15px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-800 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out before:transform before:-translate-y-2 ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-5">Our Mission</h2>
          <p className="text-lg text-gray-600">
            To create stylish, high-quality apparel that combines comfort, sustainability, and innovative design, 
            empowering individuals to express their unique style while promoting eco-conscious living.
          </p>
        </div>

        {/* Vision Section */}
        <div className="relative bg-gray-200 p-12 rounded-lg shadow-lg w-full md:w-1/2 min-h-[300px] hover:bg-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out shadow-[5px_5px_15px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-800 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out before:transform before:-translate-y-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-5">Our Vision</h2>
          <p className="text-lg text-gray-600">
            To be a global leader in sustainable fashion, offering cutting-edge, eco-friendly clothing that inspires 
            a balance between modern living and environmental responsibility.
          </p>
        </div>

      </section>
    </div>
  );
}

export default ClothCollection;
