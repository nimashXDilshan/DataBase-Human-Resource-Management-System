import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-900 to-navy-900 text-white">
        <div className="mx-auto max-w-screen-xl px-9 py-20 lg:flex lg:items-start"> {/* Use items-start to align items at the top */}
          <div className="max-w-3xl text-left"> {/* Removed mx-auto to keep it left aligned */}
            <h1 className="text-gradient bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Fashion That Flows,
              <span className="sm:block"> Quality That Lasts. </span>
            </h1>

            <p className="mt-4 max-w-xl text-gray-300 leading-relaxed px-0 py-2 text-[18px] mb-20">
              At Jupiter Apparels, we believe that style should be effortless
              and enduring. Our commitment to sustainable practices ensures that
              each piece not only enhances your wardrobe but also contributes to
              a healthier planet. Discover a collection that reflects your
              unique identity while prioritizing comfort and longevity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
