import React from "react";

const banner2 = () => {
  return (
    // <div>
    //   <section
    //     // className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
    //     className = 'flex flex-row item-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'
    //   >
    //     {/* Overlay */}
    //     <div
    //       className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    //     ></div>

    //     <div
    //       className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    //     >
    //       {/* Content */}
    //       <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    //         <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
    //           Welcome to
    //           <strong className="block font-extrabold text-rose-600">
    //             JUPITER Apparels.
    //           </strong>
    //         </h1>

    //         <p className="mt-4 max-w-lg text-black sm:text-xl/relaxed">
    //           JUPITER Apparels delivers high-quality, stylish clothing designed for comfort and sustainability. Explore fashion that fits your lifestyle.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <section
      className={
        "flex flex-col sm:py-16 py-6 bg-slate-900 "
      }
    >
      <div className="flex flex-col justify-between items-start w-full mt-10 mb-10">
        <h1 className="flex-1 font-poppins font-semibolt ss:text-[72px] text-[80px] text-white leading-[100px] pl-10">
          Welcome to <br className="sm:block hidden" />{" "}
          <span className="text-gradient">JUPITER Apparels.</span>{" "}
        </h1>

        <p className="max-w-[470px] mt-5 text-white text-[18px] leading-[30.8px] pl-10">
          JUPITER Apparels delivers high-quality, stylish clothing designed for
          comfort and sustainability. Explore fashion that fits your lifestyle.
        </p>
      </div>
    </section>
  );
};

export default banner2;
