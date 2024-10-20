import React from "react";

const Products = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-navy-900 py-12">
      <section className="container mx-auto px-4">
        <h2 className="text-center text-6xl font-bold mb-10 text-white">Our Expertise</h2>

        {/* Main Banner with Subcategories */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Fashion */}
          <div className="relative md:col-span-6 h-[400px]">
            <img
              src="https://www.apparelgroup.com/en/wp-content/uploads/2024/05/fashion-banner.webp"
              alt="Fashion"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 text-black text-2xl font-bold bg-white bg-opacity-70 px-2 py-1 rounded-lg">
              Fashion
            </div>
          </div>

          {/* Footwear */}
          <div className="relative md:col-span-6 h-[400px]">
            <img
              src=""
              alt="Dresses"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 text-black text-2xl font-bold bg-white bg-opacity-70 px-2 py-1 rounded-lg">
              Dresses
            </div>
          </div>

          {/* Crop Tops */}
          <div className="relative md:col-span-4 h-[400px]">
            <img
              src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2For398povxhjk2dov3a3izw7k&w=1920&q=75"
              alt="Crop Tops"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 text-black text-2xl font-bold bg-white bg-opacity-70 px-2 py-1 rounded-lg">
            Crop Tops
            </div>
          </div>

          {/* Casual Shirts */}
          <div className="relative md:col-span-4 h-[400px]">
            <img
              src="https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fq1u219xzbfpdoct3lp5qgj2k&w=1920&q=75"
              alt="Casual Shirts"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 text-black text-2xl font-bold bg-white bg-opacity-70 px-2 py-1 rounded-lg">
            Casual Shirts
            </div>
          </div>

          {/* Kids */}
          <div className="relative md:col-span-4 h-[400px]">
            <img
              src="https://www.apparelgroup.com/en/wp-content/uploads/2024/07/kids-banner-1-scaled.webp"
              alt="Kids"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 text-black text-2xl font-bold bg-white bg-opacity-70 px-2 py-1 rounded-lg">
              Kids
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
