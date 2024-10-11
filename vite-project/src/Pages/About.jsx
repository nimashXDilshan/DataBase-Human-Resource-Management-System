import React from "react";
import HoverBlocks from "../Components/HoverBlockElements/hoverblockelements";
import OurTeam from "../Components/Team/team";
import Logofooter from '../Components/Logo-Footer/logofooter';

// const links = [
//   { name: 'Open roles', href: '#' },
//   { name: 'Internship program', href: '#' },
//   { name: 'Our values', href: '#' },
//   { name: 'Meet our leadership', href: '#' },
// ];

const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function WorkWithUs() {
  return (
    <>
      <br></br>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              "At Jupiter Apparels, we are committed to innovation and
              sustainability in the fashion industry, providing high-quality
              products to customers worldwide. Join us in shaping the future of
              apparel with a focus on ethical practices and cutting-edge
              designs."
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {/* Box 1: 12 Offices worldwide */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-300 hover:shadow-2xl">
                <dd className="text-4xl font-bold text-black hover:text-blue-900">
                  12
                </dd>
                <dt className="text-lg font-semibold text-gray-700 hover:text-blue-900">
                  Offices worldwide
                </dt>
              </div>

              {/* Box 2: 300+ Full-time colleagues */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-300 hover:shadow-2xl">
                <dd className="text-4xl font-bold text-black hover:text-blue-900">
                  300+
                </dd>
                <dt className="text-lg font-semibold text-gray-700 hover:text-blue-900">
                  Full-time colleagues
                </dt>
              </div>

              {/* Box 3: 40 Hours per week */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-300 hover:shadow-2xl">
                <dd className="text-4xl font-bold text-black hover:text-blue-900">
                  40
                </dd>
                <dt className="text-lg font-semibold text-gray-700 hover:text-blue-900">
                  Hours per week
                </dt>
              </div>

              {/* Box 4: Unlimited Paid time off */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-300 hover:shadow-2xl">
                <dd className="text-4xl font-bold text-black hover:text-blue-900">
                  Unlimited
                </dd>
                <dt className="text-lg font-semibold text-gray-700 hover:text-blue-900">
                  Paid time off
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <br></br>

      {/* <div class="avatar w-full h-full pt-5 flex items-center justify-center flex-col gap-5">
        <HoverBlocks />
      </div> */}

      <br></br>
      <div className="bg-gray-100 py-12 px-6 border border-gray-300">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center tracking-wide hover:text-blue-600 transition duration-300 border-b-4 border-gray-400 pb-4">
          OUR TEAM
        </h1>

        <div className="flex justify-center border bg-gray-100 border-gray-300 p-6 rounded-lg shadow-lg">
          <div className="w-full max-w-screen-lg border border-gray-300 p-4 rounded-md">
            <OurTeam />
          </div>
        </div>
      </div>
      <div><Logofooter/></div>

    </>
  );
}
