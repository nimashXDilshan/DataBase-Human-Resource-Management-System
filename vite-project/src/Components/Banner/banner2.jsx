import React from "react";

const Banner2 = () => {
  return (
    <section
      className={
        "flex flex-col sm:py-16 py-7 bg-gradient-to-r from-gray-900 to-navy-900 "
      }
    >
      <div className="flex flex-col justify-between items-start w-full mt-20 text-left">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[80px] text-white leading-[100px] pl-20 ">
          Welcome to <br className="sm:block hidden" />
          <span className="text-gradient">JUPITER Apparels.</span>
        </h1>

        <p className="max-w-[470px] mt-5 text-white text-[18px] leading-[30.8px] pl-20 text-left">
          JUPITER Apparels delivers high-quality, stylish clothing designed for
          comfort and sustainability. Explore fashion that fits your lifestyle.
        </p>
      </div>
    </section>
  );
};

export default Banner2;